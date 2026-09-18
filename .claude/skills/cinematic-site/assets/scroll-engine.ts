/**
 * scroll-engine — frame-sequence scrubber for cinematic scroll-story sites.
 *
 * Renders a WebP image sequence to a canvas, driven purely by scroll position.
 * Copy once into packages/scroll-engine/ and import from every site; fix bugs here.
 *
 * Design constraints this satisfies:
 *  - Frame index is a PURE function of scroll position, so reverse scrolling retraces
 *    exactly and a jump-scroll lands on the right frame.
 *  - Piecewise beat mapping, so holds and slow beats get their own scroll budgets.
 *  - Bounded concurrent fetches and a bounded bitmap cache, so a 300-frame sequence
 *    does not blow out memory or saturate the connection.
 *  - Only the active orientation's sequence is ever requested.
 *  - Reduced motion and load failure both fall back to a poster with content intact.
 */

export interface Beat {
  /** Normalised scroll range within the pinned section, 0..1. */
  scroll: [number, number];
  /** Frame index range mapped onto that scroll range. Equal values = a hold. */
  frames: [number, number];
}

export interface SequenceSpec {
  /** printf-style path, e.g. "/frames/desktop/frame-%04d.webp" */
  pattern: string;
  count: number;
  width: number;
  height: number;
  poster: string;
}

export interface ScrollEngineOptions {
  /** The pinned <canvas>. */
  canvas: HTMLCanvasElement;
  /** The tall scroll container whose travel drives the sequence. */
  scroller: HTMLElement;
  landscape: SequenceSpec;
  portrait: SequenceSpec;
  /** Viewport width below which the portrait sequence is used. */
  breakpoint?: number;
  /** Piecewise mapping. Omit for a single linear beat across the whole range. */
  beats?: Beat[];
  /** Frames fetched ahead of and behind the current index. */
  lookahead?: number;
  /** Max simultaneous network requests. */
  concurrency?: number;
  /** Max decoded bitmaps held. ~200 at 1600px ≈ 340MB, so keep this modest. */
  cacheSize?: number;
  /** Called with 0..1 progress on every frame commit — drive HTML chapters with this. */
  onProgress?: (progress: number, frameIndex: number) => void;
}

const framePath = (pattern: string, i: number) =>
  pattern.replace(/%0(\d)d/, (_, w) => String(i).padStart(Number(w), "0"));

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

export class ScrollEngine {
  private o: Required<Omit<ScrollEngineOptions, "beats" | "onProgress">> &
    Pick<ScrollEngineOptions, "beats" | "onProgress">;
  private ctx: CanvasRenderingContext2D;
  private spec: SequenceSpec;
  private cache = new Map<number, ImageBitmap>();
  private inflight = new Map<number, AbortController>();
  private queue: number[] = [];
  private active = 0;
  private current = -1;
  private wanted = 0;
  private rafPending = false;
  private destroyed = false;
  private usingPortrait: boolean;
  private failed = false;

  constructor(options: ScrollEngineOptions) {
    this.o = {
      breakpoint: 768,
      lookahead: 12,
      concurrency: 6,
      cacheSize: 120,
      ...options,
    } as typeof this.o;

    const ctx = options.canvas.getContext("2d", { alpha: false });
    if (!ctx) throw new Error("scroll-engine: 2d context unavailable");
    this.ctx = ctx;

    this.usingPortrait = window.innerWidth < this.o.breakpoint;
    this.spec = this.usingPortrait ? this.o.portrait : this.o.landscape;

    if (this.prefersReducedMotion()) {
      this.showPoster();
      return;
    }

    this.resize();
    this.showPoster();

    this.onScroll = this.onScroll.bind(this);
    this.onResize = this.onResize.bind(this);
    window.addEventListener("scroll", this.onScroll, { passive: true });
    window.addEventListener("resize", this.onResize, { passive: true });
    this.onScroll();
  }

  private prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  /** 0..1 through the pinned section. Counts ACTIVE travel, not total container height. */
  private progress(): number {
    const rect = this.o.scroller.getBoundingClientRect();
    const travel = this.o.scroller.offsetHeight - window.innerHeight;
    if (travel <= 0) return 0;
    return clamp(-rect.top / travel, 0, 1);
  }

  /** Piecewise scroll → frame. Pure: same input always yields the same frame. */
  private frameFor(progress: number): number {
    const last = this.spec.count - 1;
    const beats = this.o.beats;
    if (!beats?.length) return Math.round(progress * last);

    for (const b of beats) {
      const [s0, s1] = b.scroll;
      if (progress >= s0 && progress <= s1) {
        const span = s1 - s0;
        const t = span === 0 ? 0 : (progress - s0) / span;
        const [f0, f1] = b.frames;
        return clamp(Math.round(f0 + t * (f1 - f0)), 0, last);
      }
    }
    // Past the last beat.
    return clamp(beats[beats.length - 1].frames[1], 0, last);
  }

  private onScroll() {
    this.wanted = this.frameFor(this.progress());
    if (!this.rafPending) {
      this.rafPending = true;
      requestAnimationFrame(() => {
        this.rafPending = false;
        this.commit();
      });
    }
  }

  private commit() {
    if (this.destroyed) return;
    const target = this.wanted;

    // Render the requested frame, or the nearest cached one so fast scrolling still moves.
    const bmp = this.cache.get(target) ?? this.nearestCached(target);
    if (bmp) {
      this.draw(bmp);
      this.current = target;
    }
    this.o.onProgress?.(this.progress(), target);
    this.schedule(target);
  }

  private nearestCached(target: number): ImageBitmap | undefined {
    let best: ImageBitmap | undefined;
    let bestDist = Infinity;
    for (const [i, b] of this.cache) {
      const d = Math.abs(i - target);
      if (d < bestDist) { bestDist = d; best = b; }
    }
    return best;
  }

  private draw(bmp: ImageBitmap) {
    const { canvas } = this.o;
    const cw = canvas.width;
    const ch = canvas.height;
    // Cover-fit: fill the canvas, crop the overflow, keep the centre.
    const scale = Math.max(cw / bmp.width, ch / bmp.height);
    const w = bmp.width * scale;
    const h = bmp.height * scale;
    this.ctx.drawImage(bmp, (cw - w) / 2, (ch - h) / 2, w, h);
  }

  /** Queue the target first, then alternate forward/back within lookahead. */
  private schedule(target: number) {
    const order: number[] = [target];
    for (let d = 1; d <= this.o.lookahead; d++) {
      if (target + d < this.spec.count) order.push(target + d);
      if (target - d >= 0) order.push(target - d);
    }

    // Drop queued work that is no longer near the playhead.
    this.queue = order.filter((i) => !this.cache.has(i) && !this.inflight.has(i));

    // Abort in-flight requests that have gone stale.
    for (const [i, ac] of this.inflight) {
      if (Math.abs(i - target) > this.o.lookahead * 2) {
        ac.abort();
        this.inflight.delete(i);
      }
    }

    this.pump();
  }

  private pump() {
    while (this.active < this.o.concurrency && this.queue.length) {
      const i = this.queue.shift()!;
      if (this.cache.has(i) || this.inflight.has(i)) continue;
      this.fetchFrame(i);
    }
  }

  private async fetchFrame(i: number, attempt = 0) {
    const ac = new AbortController();
    this.inflight.set(i, ac);
    this.active++;
    try {
      const res = await fetch(framePath(this.spec.pattern, i), { signal: ac.signal });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const bmp = await createImageBitmap(await res.blob());
      if (this.destroyed) { bmp.close(); return; }
      this.put(i, bmp);
      if (i === this.wanted) this.commit();
    } catch (err) {
      if ((err as Error).name === "AbortError") return;
      if (attempt < 2) {
        this.active--;
        this.inflight.delete(i);
        setTimeout(() => this.fetchFrame(i, attempt + 1), 200 * (attempt + 1));
        return;
      }
      // Give up on this frame; if we have nothing at all, fall back to the poster.
      if (!this.failed && this.cache.size === 0) {
        this.failed = true;
        this.showPoster();
      }
    } finally {
      this.active--;
      this.inflight.delete(i);
      this.pump();
    }
  }

  /** Insert with eviction of whichever cached frame is furthest from the playhead. */
  private put(i: number, bmp: ImageBitmap) {
    this.cache.set(i, bmp);
    while (this.cache.size > this.o.cacheSize) {
      let victim = -1;
      let dist = -1;
      for (const k of this.cache.keys()) {
        const d = Math.abs(k - this.wanted);
        if (d > dist) { dist = d; victim = k; }
      }
      if (victim === this.wanted || victim < 0) break;
      this.cache.get(victim)!.close();
      this.cache.delete(victim);
    }
  }

  private showPoster() {
    const img = new Image();
    img.decoding = "async";
    img.src = this.spec.poster;
    img.onload = () => {
      if (this.current >= 0) return; // real frames already showing
      createImageBitmap(img).then((b) => { if (this.current < 0) this.draw(b); });
    };
  }

  private resize() {
    const { canvas } = this.o;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
  }

  private onResize() {
    const shouldPortrait = window.innerWidth < this.o.breakpoint;
    if (shouldPortrait !== this.usingPortrait) {
      // Orientation class changed: abandon the old sequence entirely.
      for (const ac of this.inflight.values()) ac.abort();
      this.inflight.clear();
      this.queue = [];
      for (const b of this.cache.values()) b.close();
      this.cache.clear();
      this.usingPortrait = shouldPortrait;
      this.spec = shouldPortrait ? this.o.portrait : this.o.landscape;
      this.current = -1;
      this.showPoster();
    }
    this.resize();
    this.onScroll();
  }

  destroy() {
    this.destroyed = true;
    window.removeEventListener("scroll", this.onScroll);
    window.removeEventListener("resize", this.onResize);
    for (const ac of this.inflight.values()) ac.abort();
    this.inflight.clear();
    for (const b of this.cache.values()) b.close();
    this.cache.clear();
  }
}

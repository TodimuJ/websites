/**
 * The gold filament layer — an HTML canvas above the frame sequence, never video.
 *
 * Long threads of warm light drift across the stage; near the cursor they part and
 * brighten slightly, like fibres disturbed by a hand. Motes of soft bokeh drift upward.
 * It is decoration, so it is cheap by construction: capped DPR, ~30fps, paused whenever
 * the stage is off screen or the tab is hidden, and never started under reduced motion.
 */

type Thread = { y: number; amp: number; freq: number; phase: number; speed: number; width: number; alpha: number };
type Mote = { x: number; y: number; r: number; vy: number; vx: number; alpha: number; tw: number };

export function startFilaments(canvas: HTMLCanvasElement, host: HTMLElement) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {};
  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  const rand = (a: number, b: number) => a + Math.random() * (b - a);
  let w = 0, h = 0, dpr = 1;
  let threads: Thread[] = [];
  let motes: Mote[] = [];
  // Pointer in CSS px; `px/py` is the eased position the field actually reacts to.
  let mx = -9999, my = -9999, px = -9999, py = -9999;
  let running = false, visible = true, raf = 0, last = 0;
  let intensity = 1;

  function build() {
    const small = w < 768;
    const n = small ? 16 : 26;
    threads = Array.from({ length: n }, () => ({
      y: rand(0.22, 0.8),
      amp: rand(0.03, 0.11),
      freq: rand(0.6, 1.6),
      phase: rand(0, Math.PI * 2),
      speed: rand(0.04, 0.12) * (Math.random() < 0.5 ? -1 : 1),
      width: rand(0.4, 1.2),
      alpha: rand(0.05, 0.2),
    }));
    motes = Array.from({ length: small ? 18 : 34 }, () => ({
      x: rand(0, 1), y: rand(0, 1), r: rand(0.6, small ? 2.4 : 3.2),
      vy: rand(-0.006, -0.018), vx: rand(-0.004, 0.004),
      alpha: rand(0.12, 0.5), tw: rand(0, Math.PI * 2),
    }));
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const r = canvas.getBoundingClientRect();
    w = r.width; h = r.height;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    build();
  }

  function frame(t: number) {
    raf = requestAnimationFrame(frame);
    if (t - last < 33) return; // ~30fps is plenty for drifting light
    const dt = Math.min((t - last) / 1000, 0.1);
    last = t;

    px += (mx - px) * 0.08;
    py += (my - py) * 0.08;

    ctx!.clearRect(0, 0, w, h);
    ctx!.globalCompositeOperation = "lighter";
    const time = t / 1000;
    const reach = Math.max(w, h) * 0.16;

    for (const th of threads) {
      ctx!.beginPath();
      const steps = 42;
      for (let i = 0; i <= steps; i++) {
        const u = i / steps;
        const x = u * w;
        let y = (th.y + Math.sin(u * Math.PI * 2 * th.freq + th.phase + time * th.speed * 6) * th.amp
          + Math.sin(u * 3.1 + time * 0.21 + th.phase) * 0.012) * h;
        // Part the threads around the pointer.
        const dx = x - px, dy = y - py;
        const d = Math.hypot(dx, dy);
        if (d < reach) {
          const f = (1 - d / reach) ** 2;
          y += (dy >= 0 ? 1 : -1) * f * reach * 0.35;
        }
        i === 0 ? ctx!.moveTo(x, y) : ctx!.lineTo(x, y);
      }
      const g = ctx!.createLinearGradient(0, 0, w, 0);
      const a = th.alpha * intensity;
      g.addColorStop(0, "rgba(138,106,53,0)");
      g.addColorStop(0.3, `rgba(200,165,92,${a})`);
      g.addColorStop(0.7, `rgba(217,183,106,${a})`);
      g.addColorStop(1, "rgba(138,106,53,0)");
      ctx!.strokeStyle = g;
      ctx!.lineWidth = th.width;
      ctx!.stroke();
    }

    for (const m of motes) {
      m.y += m.vy * dt * 6; m.x += m.vx * dt * 6; m.tw += dt;
      if (m.y < -0.05) { m.y = 1.05; m.x = rand(0, 1); }
      if (m.x < -0.05) m.x = 1.05; else if (m.x > 1.05) m.x = -0.05;
      const x = m.x * w, y = m.y * h;
      const a = m.alpha * (0.6 + 0.4 * Math.sin(m.tw * 1.3)) * intensity;
      const r = m.r * 3;
      const g = ctx!.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(230,200,140,${a})`);
      g.addColorStop(1, "rgba(230,200,140,0)");
      ctx!.fillStyle = g;
      ctx!.fillRect(x - r, y - r, r * 2, r * 2);
    }
    ctx!.globalCompositeOperation = "source-over";
  }

  function update() {
    const should = visible && !document.hidden;
    if (should && !running) { running = true; last = performance.now(); raf = requestAnimationFrame(frame); }
    else if (!should && running) { running = false; cancelAnimationFrame(raf); }
  }

  const onMove = (e: PointerEvent) => {
    const r = canvas.getBoundingClientRect();
    mx = e.clientX - r.left; my = e.clientY - r.top;
    if (px < -999) { px = mx; py = my; }
  };
  const onLeave = () => { mx = -9999; my = -9999; };

  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; update(); });
  io.observe(host);
  window.addEventListener("resize", resize, { passive: true });
  window.addEventListener("pointermove", onMove, { passive: true });
  document.addEventListener("pointerleave", onLeave);
  document.addEventListener("visibilitychange", update);
  resize();
  update();

  /** Let the stage dim the field — e.g. while the footage's own light fills the frame. */
  return (k: number) => { intensity = k; };
}

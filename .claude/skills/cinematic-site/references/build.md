# Phase 4 — Build the site

Astro, static output, vanilla TS for the scrubber. No framework on the hot path.

## Scaffold

First site only — create the workspace:

```sh
mkdir -p packages/scroll-engine/src sites
cp .claude/skills/cinematic-site/assets/scroll-engine.ts packages/scroll-engine/src/index.ts
```

`packages/scroll-engine/package.json`:

```json
{ "name": "@sites/scroll-engine", "version": "1.0.0", "type": "module",
  "main": "./src/index.ts", "types": "./src/index.ts" }
```

Root `package.json` declares the workspace:

```json
{ "name": "websites", "private": true, "workspaces": ["packages/*", "sites/*"] }
```

Every site:

```sh
npm create astro@latest sites/<slug> -- --template minimal --typescript strict --no-install --no-git
```

Add `"@sites/scroll-engine": "*"` to the site's dependencies, then `npm install` from the
root. Set `output: "static"` in `astro.config.mjs`.

## File layout

```
sites/<slug>/
├── src/
│   ├── content/site.ts          # ALL copy, products, prices, CTAs, beats
│   ├── styles/tokens.css        # palette, type scale, spacing — from Phase 1
│   ├── components/
│   │   ├── ScrollStage.astro    # pinned canvas + chapter overlays
│   │   ├── Chapter.astro        # one copy beat, revealed by progress
│   │   ├── Nav.astro            # desktop + mobile, mounted OUTSIDE the stage
│   │   └── ProductGrid.astro
│   └── pages/index.astro
├── public/frames/{desktop,mobile}/
├── public/posters/
├── style-tile.html
└── production-notes.md
```

## `src/content/site.ts` — single source of truth

Nothing user-visible may be hardcoded in a component. This file is what makes the site
editable without touching markup.

```ts
export const site = {
  brand: { name: "NINE BAR", symbol: "/logo-symbol.svg", wordmark: "/logo.svg" },
  meta: { title: "…", description: "…", demo: true },

  chapters: [
    { id: "hero",    at: [0.00, 0.18], align: "left",   eyebrow: "…",
      heading: "…", body: "…", cta: { label: "…", href: "#collection" } },
    { id: "craft",   at: [0.38, 0.58], align: "right",  heading: "…", body: "…" },
    { id: "reveal",  at: [0.78, 1.00], align: "centre", heading: "…", body: "…",
      cta: { label: "…", href: "#collection" } },
  ],

  // From the approved Phase 2 pacing plan. Frame indices must match the manifest count.
  beats: [
    { scroll: [0.00, 0.12], frames: [0, 0] },
    { scroll: [0.12, 0.40], frames: [0, 96] },
    { scroll: [0.40, 0.66], frames: [96, 168] },
    { scroll: [0.66, 0.74], frames: [168, 168] },
    { scroll: [0.74, 0.94], frames: [168, 239] },
    { scroll: [0.94, 1.00], frames: [239, 239] },
  ],

  products: [
    { id: "…", name: "…", price: "£…", category: "…", image: "/products/….webp",
      blurb: "…", detail: ["…", "…"] },
  ],

  nav:  [{ label: "Collection", href: "#collection" }],
  cta:  { label: "Shop the collection", href: "#collection" },
  footer: { note: "Demo site. Products and imagery are AI-generated.", links: [] },
};
```

If `meta.demo` is true, render a small persistent demo marker. Do not dress a demo as a
real trading business.

## `ScrollStage.astro`

```astro
---
import { site } from "../content/site";
import manifest from "../../public/frames/manifest.json";
const scrollVh = 520; // total container height in vh; active travel = this - 100
---
<section id="stage" class="scroller" style={`height:${scrollVh}vh`}>
  <div class="pin">
    <canvas id="seq" aria-hidden="true"></canvas>
    <noscript><img src={manifest.desktop.poster} alt="" /></noscript>
    {site.chapters.map((c) => <Chapter {...c} />)}
  </div>
</section>

<style>
  .scroller { position: relative; }
  .pin {
    position: sticky; top: 0; height: 100vh;
    overflow: hidden; background: var(--ink);
  }
  #seq { width: 100%; height: 100%; display: block; }
  @media (prefers-reduced-motion: reduce) {
    .scroller { height: 100vh !important; }
  }
</style>

<script>
  import { ScrollEngine } from "@sites/scroll-engine";
  import { site } from "../content/site";
  import manifest from "../../public/frames/manifest.json";

  const canvas = document.getElementById("seq") as HTMLCanvasElement;
  const scroller = document.getElementById("stage") as HTMLElement;
  const chapters = [...document.querySelectorAll<HTMLElement>("[data-chapter]")];

  new ScrollEngine({
    canvas, scroller,
    landscape: manifest.desktop,
    portrait: manifest.mobile,
    beats: site.beats,
    onProgress(p) {
      for (const el of chapters) {
        const [a, b] = JSON.parse(el.dataset.at!);
        const on = p >= a && p <= b;
        el.classList.toggle("is-on", on);
        // Keep hidden chapters out of the a11y tree and the tab order.
        el.inert = !on;
      }
    },
  });
</script>
```

## Requirements the build must satisfy

**Reduced motion.** Under `prefers-reduced-motion: reduce`, the engine shows the poster
and never fetches the sequence. Collapse the scroller to `100vh` and render every
chapter's copy in normal flow below it. All content and the primary action must remain
reachable.

**Pointer and focus hygiene.** Chapter overlays that are invisible must not intercept
clicks or hold focus. Use `inert` plus `pointer-events: none` when off. A hidden CTA in
the tab order is a real accessibility bug and the most common one in this pattern.

**Nav mounted outside the stage.** If the nav lives inside `.pin` it vanishes when the
sticky section ends. Mount it as a sibling, `position: fixed`, `z-index` above the
canvas.

**Skip control.** A visible "Skip the story" link that jumps past the stage to the
content. Required, not optional — it is the escape hatch for anyone who does not want a
five-viewport animation.

**Anchor offsets.** `scroll-margin-top` on every anchor target equal to the fixed header
height, or headings land underneath it.

**Canvas sizing.** DPR capped at 2. Above that you quadruple the fill cost for no visible
gain on a cover-fit photographic frame.

**No horizontal overflow, ever.** Check at 320px.

## Content beyond the animation

The animation is the hook, not the site. Build the actual business structure: navigation,
a clear offering, the product collection with working filters and detail views, a primary
action, and a footer. Decide sections from the brief — do not mechanically append every
standard landing-page block.

Forms need a real destination or an explicitly labelled demo behaviour. **Never show a
"sent" confirmation if nothing was sent.**

## Dev and verification

```sh
npm run dev --workspace sites/<slug>     # then open it and actually scroll
npm run build --workspace sites/<slug>   # must pass before handoff
```

Use the browser tools to scroll it yourself at several widths. Compilation proves
nothing about pacing — verify the transition gets its space, the reveal lands where
planned, and text is readable before it leaves. Adjust `beats` and `scrollVh` from what
you observe, and record the final values in `production-notes.md`.

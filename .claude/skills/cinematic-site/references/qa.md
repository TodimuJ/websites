# Phase 6 — Validate and hand off

Separate **checks you actually ran** from checks you did not. Compilation does not prove
smooth playback, and file size does not prove load speed. Say which is which.

## Automated

```sh
npm run build --workspace sites/<slug>
npx tsc --noEmit -p sites/<slug>
ls public/frames/desktop | wc -l    # must equal manifest.desktop.count
ls public/frames/mobile  | wc -l    # must equal manifest.mobile.count
du -sh public/frames/desktop public/frames/mobile
```

Frame-count mismatch against the manifest is the highest-frequency bug in this pattern
and shows up as a frozen final frame or a black flash. Check it every time.

## In a browser, by scrolling it

Desktop at 1440 and 1920, mobile at 320/375/393/430, plus one short viewport.

**Motion**
- [ ] Forward scroll is smooth with no visible stepping
- [ ] Reverse scroll retraces exactly — no drift, no jump
- [ ] Jump-scroll to the middle lands on the right frame
- [ ] The transition beat gets the space the plan allocated
- [ ] Holds sit where copy needs reading; motion beats never freeze mid-move
- [ ] Final frame holds; the sequence does not snap back to frame 0

**Content**
- [ ] Every chapter is readable before it leaves
- [ ] Copy never covers the subject or the hero action
- [ ] Type is crisp and selectable — it is HTML, not baked pixels
- [ ] No generated text, watermark or logo visible in any frame

**Interaction**
- [ ] Native scroll, no hijacking, no scroll-jacked snap
- [ ] Hidden overlays intercept no clicks
- [ ] Tab order contains no hidden links (`inert` applied when off)
- [ ] Skip control works and lands past the stage
- [ ] Anchors clear the fixed header
- [ ] Mobile menu: open, close, Escape, focus trap, closes on selection

**Fallbacks**
- [ ] `prefers-reduced-motion: reduce` → poster + full content in normal flow, **zero**
      frame requests (verify in the network panel)
- [ ] Simulated frame-404 → poster retained, page still usable
- [ ] JS disabled → `<noscript>` poster, content readable

**Network**
- [ ] Mobile requests only the portrait sequence; desktop only landscape
- [ ] Crossing the breakpoint aborts obsolete requests and releases the old bitmaps
- [ ] Frames load around the playhead, not sequentially from zero
- [ ] Page is interactive before the sequence finishes

## Publishing

Publish only within the scope the user authorised. Use a private preview where the
environment supports one. **Never silently expose a draft publicly.** If publishing is
unavailable, deliver a runnable local project and name the missing dependency.

GitHub Pages from a monorepo needs `base: "/<repo>/<slug>/"` in `astro.config.mjs`, or
per-site Vercel/Netlify projects rooted at `sites/<slug>`. Ask before configuring a
deploy target — it touches their accounts.

## Handoff

Deliver:

1. The running site (local URL or authorised preview)
2. `style-tile.html`
3. Logo masters — prefer an editable vector; a raster export is **not** an SVG master
4. The original MP4(s), kept, not just the extracted frames
5. `src/content/site.ts` as the editing surface, with a short note on how to change copy,
   products and prices
6. `production-notes.md`

`production-notes.md` must contain:

- Chosen direction and why
- Every assumption made without asking
- The approved Visual Story table and Scroll pacing plan, verbatim
- The resolved budget — every axis, and which were explicit overrides
- Every generation prompt, with model ID and params
- Higgsfield job IDs and asset provenance
- **The cost ledger: preflight estimate vs actual credits spent**, including retakes and
  what each retake was for
- Any capability disclosure made (e.g. a model chosen without end-frame control, and what
  that cost in seam quality)
- Final measurements: frame counts, dimensions, fps, total bytes per sequence
- Final `beats` values and `scrollVh`
- **Observed limitations and anything you could not verify**

The estimate-vs-actual line is the most useful thing in the file across five builds — it
is how you learn what a site of this kind actually costs.

Exclude credentials and temporary signed URLs from anything reusable.

## Then

State plainly what works, what is approximate, and what is unverified. If a beat is
still stepping or a seam is still visible, say so and say why — a known limitation
recorded honestly is worth more than a claim that does not survive the user scrolling
the page themselves.

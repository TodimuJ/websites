# OKUMI — production notes

Site: `sites/forged-knife` · Brief: `.claude/skills/cinematic-site/briefs/forged-knife.md`
Started 2026-09-19. Built as a **real storefront**, not a labelled demo: no demo badge,
no disclaimer footer, no `noindex`.

**The copy is placeholder and must be replaced before trading.** The brand, the smith's
story, the founding year, the output rate, the lead time, every specification figure
(VG-10, 61 layers, 61 HRC, 198 g, 15° a side) and all five prices are invented to give
the layout real content. They read as fact to a visitor. Swap them for your own in
`src/content/site.ts` before the site takes an order.

No real brand, maker or forge is named or implied.

---

## 1 — Direction

Locked at Gate 1. Every row below was the user's explicit choice from the interview, not
an assumption.

| Decision | Value |
|---|---|
| Brand name | **OKUMI** — the brief's first candidate |
| Palette | Brief palette unmodified: `--soot #0A0A0B` `--ember #D8551F` `--forge-gold #E8A33D` `--steel #6E7B85` `--ash #CFC8BE` |
| Type | Condensed industrial sans headings (Archivo Narrow) + serif body (Source Serif 4) + mono specs (IBM Plex Mono) — the brief's direction, inverted from the espresso site |
| Blade surface | 61-layer damascus, flowing watery pattern, mirror bevel |
| Handle | Octagonal pale ho wood, buffalo horn collar |
| Maker story | Solo smith — first-person copy voice throughout |
| Specs | Full mono spec block |
| Catalogue | Five SKUs, prices shown, £180–£620 |
| Primary action | Buy |
| Ending frame | Tomato on end-grain wood (brief default, confirmed at Gate 2) |

**Assumptions recorded (not user decisions):** all specification figures; all five
prices; the 2019 founding year, the ~12 knives a month output and the 6–8 week lead
time; the free-resharpening-for-life policy; the `orders@okumi.example` address; all
body copy.

## 2 — Budget

Requested "keep it cheap" → resolved to **`--budget economy`**: 720p source, 5s scenes,
standard bitrate, 1 retake, medium/1k stills, 15fps delivery, 1280px delivery width.
No `--cap` set.

**Superseded at Gate 2** — see §5. Generation moved off Higgsfield onto the user's
Google AI Pro plan, which removes the credit constraint from the generation axes while
delivery fps and width still govern page weight. Scene duration accordingly rises from
5s to Veo's 8s cap. Delivery targets measured in §7.

## 3 — Visual Story (approved at Gate 2, verbatim)

Six brief beats compressed to four scenes — that was the economy decision. Beats 1+2
(fire and hammer) share one camera move; beats 4+5 (emergence and honing) share the
travel along the edge. The quench and the final cut keep their own clips.

| Scene | Visual story | Website copy |
| --- | --- | --- |
| **01 — Opening** (fire, then the hammer) | Black frame. One orange glow, far out of focus. Camera pulls back slowly: a bar of steel at white heat resting in the coals, the fire breathing over it. The bar is drawn to the anvil and the first blow lands — hammer head fully visible at the top of its arc, then contact, then rebound — and the camera tracks along the steel as it flattens and lengthens. Sparks arc toward the lens and die. Hands only as backlit silhouette. Subject centre-right; **upper-left third held clean**. | OKUMI · FORGED BY ONE PAIR OF HANDS / **The blade remembers the fire.** / Every knife starts as a bar of steel at 1,200°C and ends on a whetstone. One smith, one forge, no production line. / `Shop the collection` · `The Gyuto 210` |
| **02 — BLUR-THROUGH** (the quench) | The glowing blade drops edge-first into the oil. Steam and vapour bloom violently and swallow the entire frame — the wall of vapour crossing the lens *is* the transition. Nothing of the forge and nothing of the finished blade shares a frame with it. **Load-bearing beat; protected.** | *No copy — let the motion lead* |
| **03 — Development** (emergence and honing) | The vapour thins onto a dark, oxidised, unfinished blade, cooling matte. Without a cut the camera drops to extreme macro and travels *along the edge* as the whetstone passes. In its wake a mirror bevel and a flowing watery damascus layering emerge, tack sharp at maximum magnification. Edge runs lower-left to upper-right; **right third clean**. | **Sixty-one layers, one edge.** / Folded damascus over a hard core, ground to a mirror bevel at 15° a side. The pattern isn't printed on — it's what steel does when you fold it sixty-one times. / `VG-10 core · 61 layers · 61 HRC · 210mm · 198g · octagonal ho wood` |
| **04 — Resolution** (the cut) | Camera pulls back fast. The finished knife is mid-air over a tomato standing on end-grain wood; it passes through and the halves fall apart, blade still in motion, shallow depth of field. Board and tomato lower-centre; **negative space upper-left**. | **Then it disappears into the work.** / Numbered, sharpened by hand, delivered in a waxed canvas roll. Currently 6–8 weeks from order to door. / `Buy the Gyuto 210 — £620` |

**Hand-offs.** 01 ends with the blade at orange heat already lifting off the anvil, so 02
opens on that same blade travelling — no new location. 02's vapour bloom is the only
place a state change this violent can hide, which is why the forge never appears after it
and the finished blade never appears before it. 03 emerges from inside that vapour,
physically where 02 left the camera, and the honing is a continuation of the same descent
to macro rather than a new setup. 04 is that same camera reversing out — the board and
the tomato arrive as the lens retreats.

## 4 — Scroll pacing (approved at Gate 2, verbatim)

Container `700vh`, stage `100vh` pinned → **600vh active travel**. Frame numbers assumed
4 × 5s at 15fps = 300 at the time of approval; the delivered footage is 435 desktop
frames and 348 portrait frames, restated in §7 and in `site.ts`.

```
hold                                   frames   0–  0    0.6 vh — read the hero
01 — Opening (fire + hammer)           frames   0– 74    1.44 vh  (~51 f/vh)
  enters/exits : coals and anvil only; oil tank never visible; no finished blade
  framing      : macro pull-back, subject centre-right, upper-left third clear
  behaviour    : continuous — camera must not settle between blows

02 — BLUR-THROUGH (protected)          frames  75–149    1.32 vh  (~57 f/vh)
  enters/exits : forge exits with the blade; vapour fills frame; whetstone not yet present
  framing      : subject fills frame, no copy space needed
  behaviour    : slowest mapping in the build, deliberately — most frames per scroll

03 — Development (emerge + hone)       frames 150–224    1.56 vh  (~48 f/vh)
  enters/exits : whetstone enters bottom of frame; board and tomato NOT yet visible
  framing      : extreme macro along the edge, right third clear for copy
  behaviour    : continuous travel; sharp at maximum magnification, never blurred

hold                                   frames 224–224    0.24 vh — the finished edge lands

04 — Resolution (the cut)              frames 225–299    0.6 vh   (~125 f/vh)
  enters/exits : fast pull-back; board, tomato and room arrive as the lens retreats
  framing      : subject lower-centre, negative space upper-left
  behaviour    : fast by design — the cut should feel like it happens to you

hold                                   frames 299–299    0.24 vh — read the CTA
```

**Chapter alignment follows the footage, not layout preference.** Scenes 01 and 04 hold
their negative space upper-left, so those chapters sit on a left rail, and the stage
scrim rakes from whichever side the active chapter is on rather than always from the
left. Scene 03 was planned right-aligned on the assumption of a clean right third;
**the delivered footage has none, and that chapter moved to bottom-left — see §8.**

## 5 — Cost ledger

### Higgsfield preflight at Gate 2 (all figures live `get_cost`, nothing submitted)

| Line | Model / params | Qty | Each | Total |
|---|---|---|---|---|
| Keyframe landscape | `gpt_image_2_5` 1k medium 16:9 | 1 | 1.0 | 1.0 |
| Keyframe portrait | `gpt_image_2_5` 1k medium 9:16 | 1 | 1.0 | 1.0 |
| Landscape clips | `seedance_2_0_mini` 5s 720p | 4 | 12.5 | 50.0 |
| Portrait clips | `seedance_2_0_mini` 5s 9:16 | 4 | 12.5 | 50.0 |
| Product stills | `gpt_image_2_5` 1k medium | 5 | 1.0 | 5.0 |
| Logo concepts | `recraft_v4_1` vector 1k | 3 | 2.5 | 7.5 |
| | | | **Committed** | **114.5** |

Worst case with economy's single retake budget (one landscape + one portrait redo):
139.5. Other preflights taken for comparison: `seedance_2_5` 5s 720p = 35.0 (the only
extension-capable model, so true continuity on Higgsfield would have cost 294.5 for this
build); `kling3_0_turbo` 5s 720p = 7.5 (start-image only — four connected scenes would
show a visible jump at every seam); `veo3_1_lite` 4s = 4.0.

### Actual Higgsfield spend: **0 credits**

Balance was **10 credits, free plan** — less than the 12.5 of a single cheapest usable
clip. Nothing was submitted. No subscription or top-up was purchased; that decision was
left to the user, who chose the external route instead.

### Resolution

The user holds a Google AI Pro plan (Nano Banana Pro + Google Flow / Veo 3.1). Generation
moved there, as it did for `sites/espresso`. Prompt pack written to
`generation-prompts.md` — **fully copy-paste at the user's request**, every scene and
still spelled out in full with no "as above with changes" abbreviations.

Consequences, disclosed rather than absorbed silently:

- **Continuity improves.** Flow's *Extend* continues the actual clip, the "best" tier —
  what Higgsfield would have charged 35/clip for. Path A is one continuous file per
  orientation. Path B (Frames to Video chaining) is the fallback and needs every seam
  inspected.
- **Logo route changes.** Nano Banana Pro is raster, so there is no vector master from
  it. Instead: symbol concepts generated as *reference only*, the mark redrawn by hand as
  inline SVG (`public/logo-symbol.svg`), and the wordmark set in HTML type. Net result is
  a genuine vector master and selectable type — better than the raster path, and it keeps
  the no-text-in-pixels rule intact.
- **Scene duration rises** from 5s to Veo's 8s cap, which raises frame counts and so page
  weight. Measured in §6 on delivery.

## 6 — Assets received (2026-09-19)

All 13 requested assets present in `_incoming/`; **none missing**. Delivered as `.jpeg`
rather than `.png` — harmless, since the symbol is redrawn as SVG and the stills are
re-encoded for delivery anyway.

| Asset | Status |
|---|---|
| `symbol-01..04.jpeg` | 4/4 present |
| `keyframe-landscape.jpeg` 1376×768, `keyframe-portrait.jpeg` 768×1376 | present |
| `desktop.mp4` | h264, 1280×720, 24fps, 696 frames, 29.01s, 7.54 Mbps, 27.3MB |
| `portrait.mp4` | h264, 720×1280, 24fps, 696 frames, 29.01s, 7.33 Mbps, 26.6MB |
| 5 product stills, 1024×1024 | 5/5 present |

Path used: **Flow Extend** (Path A) for both orientations — one continuous file each,
8s + 3×7s. No seams to inspect; continuity is model-native. Both masters carry an AAC
track, stripped at extraction with `-an`.

**The masters were not trimmed, cropped, resized or re-encoded, and must not be.** Their
file size never reaches a visitor: `*.mp4` is gitignored, nothing in `public/` references
them, and only the extracted WebP frames are served. Page weight is set entirely by the
extraction's fps, width and WebP quality. Re-encoding the source lower would permanently
degrade every frame to fix a problem that does not exist, and would destroy the
provenance record needed to re-extract at different delivery settings.

**Letterboxing check.** Desktop `cropdetect` returns `1280:720:0:0` in 49 of 51 samples —
clean, full frame. Portrait returns `720:1280:0:0` in 39 of 57 samples with the remainder
scattered across `720:1118` and `720:1116` at varying offsets; an actual pillarbox would
be constant, so that variation is dark content, not a border. **No crop applied to
either.**

**Motion analysis** at 1-second granularity found no dead footage in either orientation —
every second carries real motion, the quietest being 14s (mid-quench, dense slow vapour)
and 25s. Nothing to trim without costing story.

## 7 — Delivery settings (measured, not estimated)

Every figure below is a real extraction measured on disk.

**Desktop — 15fps, 1280 wide, `cwebp -q 85 -m 6`, 435 frames, 15,688,344 bytes
(14.96MB).** Under the 18MB ceiling, at the economy tier's own fps and width, with the
source's native resolution preserved 1:1 (no upscale, no downscale). Measured
alternatives: q82 = 13.3MB, q78 = 12.0MB. Neither was needed.

**Portrait — 12fps, 640 wide, `cwebp -q 76 -m 6`, 348 frames, 12,726,098 bytes
(12.13MB).** This is **21% over the 10MB portrait guideline** and is a deliberate,
disclosed choice. Everything measured:

| fps | width | q | frames | size |
|---|---|---|---|---|
| 15 | 720 | 82 | 435 | 24.17MB |
| 15 | 640 | 82 | 435 | 19.55MB |
| 15 | 640 | 78 | 435 | 16.95MB |
| 15 | 600 | 76 | 435 | 14.96MB |
| 12 | 720 | 80 | 348 | 18.24MB |
| 12 | 640 | 80 | 348 | 14.76MB |
| **12** | **640** | **76** | **348** | **12.13MB ← shipped** |
| 12 | 600 | 74 | 348 | 11.60MB |
| 10 | 640 | 76 | 290 | 10.66MB |
| 10 | 600 | 74 | 290 | 9.57MB |

Only the last row clears 10MB, and it costs 58 frames and 40px of width. For a *scrubbed*
sequence temporal density matters more than spatial resolution — stepping is far more
visible than softness — and 348 frames over 460vh of mobile travel is 76 frames per
viewport height against 63 at 10fps. The engine streams frames around the playhead rather
than blocking on the whole sequence, so the practical cost of the extra 2.1MB is small.
Mobile is also the experience most visitors will see.

The portrait sequence is expensive because it carries nearly the same pixel count as
desktop (728,320 vs 921,600) but far more bytes per pixel: the tall crop is filled edge to
edge with high-frequency detail — boiling vapour, sparks, and a wet stone covered in gold
swarf — for most of its length.

**To switch to the under-ceiling option**, re-encode from the PNG intermediates at
10fps/600/q74 and remap `beats.portrait` to 290 frames (boundaries 80 / 150 / 220,
last 289).

**Toolchain.** Local `ffmpeg` (homebrew) is built **without `libwebp`**, so the
single-pass `-c:v libwebp` command in `references/generation.md` fails with
`Unknown encoder 'libwebp'`. Pipeline used instead: `ffmpeg` → PNG intermediates →
`cwebp -m 6 -q N`. Same fallback as `sites/espresso`; worth folding into the reference.

### Manifest, verified against files on disk

```
desktop  435 frames  1280×720  15fps  /posters/desktop.webp  15,688,344 bytes
mobile   348 frames   640×1138 12fps  /posters/mobile.webp   12,726,098 bytes
```

Numbering confirmed contiguous `0000`–`0434` and `0000`–`0347` with no gaps, and `count`
matches `ls | wc -l` in both directories.

**Posters** are frame 0 of each master at that sequence's own delivery width
(`desktop.webp` 29KB, `mobile.webp` 61KB). **Product stills** are the 1024² masters at
900² `q82`, 14–38KB each. All five placeholder SVGs and both placeholder posters were
deleted in the same commit that added the real assets.

**Logo.** Generated concept `symbol-03` was the strongest — a filled lens with a
knocked-out bevel hairline and three folded-layer ticks. It was **redrawn by hand** as
`public/logo-symbol.svg`, tightened to its proportions. The generated files stay in
`_incoming/` as reference and are never shipped, so the shipped mark is a true vector
master and the wordmark remains HTML type.

## 8 — QA findings on the received footage

Read as frames, not assumed from the prompts. Three deviations from the approved
storyboard, none of them silent:

1. **Hands are fully lit, not backlit silhouettes.** The brief's gotcha — "keep hands out
   except as a backlit silhouette; no fingers near the edge" — was written into every
   prompt and was **not obeyed** by the model. The smith's hands appear clearly in scenes
   01, 03 and 04, including alongside the edge during honing and beside the tomato during
   the cut. Judged acceptable and kept: it reads as ordinary knife-making documentary
   footage and it reinforces the solo-smith story. It is a deviation from the approved
   direction all the same. Regenerating scenes 01, 03 and 04 is the fix if you want the
   silhouette. Product stills are unaffected — object only.
2. **Scene 03's "emergence" beat is compressed.** The storyboard called for the vapour to
   clear onto a dark, oxidised, unfinished blade which the whetstone then transforms. The
   footage clears from vapour onto an already-finished, mirror-polished damascus blade,
   and the honing plays over that. The material-state story is weaker than planned; the
   shot is better-looking than planned. Kept.
3. **The portrait knife is not geometrically identical to the desktop knife** — shorter
   and deeper in the blade, with a differently proportioned collar. Both are plausibly
   the same maker's work and no visitor sees both orientations, but they are not the same
   object. Passing `keyframe-landscape` as a reference did not fully lock geometry.

What the brief warned about and the footage got **right**: the hammer renders as a real
arc → contact → rebound with sparks, not a static blur; the quench bloom fills the frame
and is still in motion at the last frame of the beat; the damascus is a genuine flowing
watery layered pattern rather than generic brushed metal; and the ending frame is the two
tomato halves separating with the blade still moving, as specified.

### Copy space — the planned negative space did not survive, and the layout changed

Mean 8-bit luminance was measured in each chapter's own frame range rather than eyeballed:

| Chapter | Frames | mid-left | right third | bottom-left |
|---|---|---|---|---|
| hero | 0–49 | 4–50 | 0–13 | 0–47 |
| edge | 242–320 | 28–114 | 59–63 | 55–75 |
| reveal | 347–434 | 1–18 | 77–91 | 102–118 |

- **hero** and **reveal** keep their planned mid-left rail; the reveal's is excellent
  (luma 1–18, the dark apron behind the board).
- **edge** was planned right-aligned on the assumption that the blade would run
  lower-left to upper-right leaving a clean right third. It does not. Scene 03 is a
  full-frame macro with the pale ho wood handle and a bright brass collar occupying the
  upper right, and **no third of the frame is clean**. The chapter was moved to
  **bottom-left over the dark anvil** — not the darkest candidate but the most *stable*
  (spread of 20 across the range versus 86 for mid-left), because a scrim can compensate
  for brightness but not for flicker. The stage scrim now rakes per-chapter (`left` or
  `up`) instead of always from the left, and `Chapter.astro` gained a vertical
  `position` prop for it.

### Mobile trim

Per `references/mobile.md` §2 the opening screen carries the nav, one headline, one
action and the scroll cue. At 375px the hero's eyebrow wrapped to two lines and the
secondary button added a second full-width control, so **the eyebrow and the secondary
CTA are hidden below 767px** on any chapter that has a primary CTA. Both remain on
desktop.

## 9 — Build

Astro static, vanilla TS scrubber, shared `@sites/scroll-engine` (no per-site fork).

- `src/content/site.ts` holds every user-visible string, price, CTA and both `beats`
  arrays. Nothing user-facing is hardcoded in a component.
- Sections: pinned stage → The making → Specification → Collection (filterable) →
  The smith → Ordering → footer.
- **Ordering says plainly that payment is not connected** and offers an email address
  instead. There is no fake cart and no confirmation screen; nothing can report an order
  that did not happen.
- Nav is mounted outside the pinned stage, fixed, and persists after the stage ends.
  Mobile menu has a focus trap, Escape to close, and closes on link choice.
- "Skip the story" link jumps to `#making`.
- Hidden chapters are `inert` and `pointer-events: none`, so no off-screen CTA sits in
  the tab order.

### Final `beats`, measured

Desktop 435 frames @15fps, portrait 348 @12fps. Both masters are 29.01s of 8s + 3×7s, so
the scene cuts land at exactly 8s / 15s / 22s — frames 120 / 225 / 330 on desktop and
96 / 180 / 264 on portrait. The quench keeps the most frames per viewport height in the
build (105 frames over 1.32vh) and the cut the fewest (fast by design). Portrait
compresses the holds, since thumb gestures cover less distance per effort.

### Verified in the browser, on the real sequence

| Check | Result |
|---|---|
| `npm run build --workspace sites/forged-knife` | passes |
| Console errors | none |
| Network 4xx/5xx | none — all requests 200 |
| Canvas actually paints frames | yes — sampled non-black pixel data mid-sequence |
| Reverse scrub retraces exactly | yes — full-canvas signatures identical at p = 0.20, 0.30, 0.45, 0.60, 0.75 going up and coming back (warm cache) |
| Jump-scroll == walked scroll | yes — identical signature at p = 0.55 reached both ways |
| Mobile requests **only** the portrait sequence | yes — 13 mobile frame requests, 0 desktop |
| Horizontal overflow at 320 / 375 | none |
| Mobile menu open / Escape / focus restore | works; focus returns to the toggle |
| Collection filters | work; empty state present |
| Copy legibility over footage | checked frame-by-frame per chapter; scene 03 relocated (§8) |
| Quench beat carries no copy | confirmed at p = 0.42–0.45 in both orientations |
| Ending frame | the two tomato halves separating, blade still in motion |

**One thing could not be verified here:** the real `prefers-reduced-motion: reduce` media
query — the browser pane cannot emulate it. The path was checked by forcing the same
rules: `.story-static` renders all three beats, both headings and CTAs, and `<picture>`
correctly selects `mobile.webp` at phone width. The engine's own reduced-motion branch
(never fetch the sequence, paint the poster) is shared `scroll-engine` code and was not
re-exercised on this site.

A cold-cache caveat worth recording: immediately after a reload, a programmatic jump to
a mid-sequence scroll position leaves the canvas blank for several seconds while the
engine fetches around the new playhead. That is the bounded-concurrency loader behaving
correctly, not a bug, but it does mean a screenshot taken too soon reads as a black
frame.

## 10 — Gyuto 210 product page (added 2026-09-19)

`/knives/gyuto-210/` — a detail page for the hero knife only. The product name in the
collection grid links to it, as do the hero chapter's secondary CTA, the closing chapter
CTA, the home specification block and the footer.

### Structural change: a shared layout

Nav and footer were duplicated the moment a second page existed, so they moved into
`src/layouts/Base.astro`, which now owns the document shell, the font links, the nav, the
footer and the shared section furniture. `index.astro` was refactored onto it and its
rendered output is **byte-identical to before the refactor** where content did not change.

`Nav.astro` became path-aware. The nav points at home-page sections, so on `/` the links
stay bare fragments (`#making`) and scroll; anywhere else they gain the path (`/#making`)
and navigate. The brand mark links to `#top` on the home page and to `/` elsewhere. The
skip link is now a prop — "Skip the story" → `#making` on the home page, "Skip to
content" → `#content` on the product page, where there is no story to skip.

### What is on the page

Breadcrumb · hero (image, price, lede, four-stat strip, buy + collection CTAs,
availability line) · three-image gallery · "Why a gyuto, and why 210" · "Six days, four
irreversible steps" · "Where the weight sits" · an 18-row full specification · "In the
box" and a do/don't care list side by side · free-resharpening-for-life · a
gyuto/santoku/petty comparison table · six-question FAQ · ordering.

All of it lives in `site.gyuto` in `src/content/site.ts`. Nothing user-visible is
hardcoded in the page component, same rule as everywhere else.

**The copy is placeholder like the rest of the site.** The 61-layer construction, the
one-in-twelve quench failure rate, the 8 mm balance point, the saya, the numbered card,
the free-resharpening policy and every FAQ answer are invented. Replace them before
trading.

### Gallery assets

Three stills extracted from `desktop.mp4` at 1200 wide, `cwebp -q 84`: the forge at
6.5s, the honing at 20.6s and the cut at 28.7s — 28–37KB each. They are genuine frames of
the same knife the page sells, not stock imagery, and they reuse footage already paid for.
The hero image is the existing `products/gyuto.webp`.

### Card linking

The product **name** is the link, not the whole card. Wrapping the card would have
swallowed the price, the details disclosure and the filter buttons into one target. The
image is a second link to the same place, `tabindex="-1"` and `aria-hidden`, so it is
clickable without duplicating the destination in the tab order, and a "Full specification
→" link sits under the details disclosure. Only the gyuto has `href` in `products`; the
markup falls back to plain text for the other four.

### Verified

| Check | Result |
|---|---|
| `npm run build` | passes, 2 pages |
| Clicking the product name in the grid | navigates to `/knives/gyuto-210/` |
| Every internal `href` on both pages | 200, checked by sweeping the built HTML |
| Both pages in a fresh-clone build | byte-identical to local |
| Home page scroll sequence after the refactor | still paints; reveal chapter and scrim correct at p = 0.90 |
| Horizontal overflow at 375 | none (`scrollWidth === clientWidth === 375`) |
| Mobile layout | hero, gallery and spec rows collapse to one column; stats go 2×2; both CTAs full width |
| Comparison table on mobile | scrolls inside its own container; the page does not overflow |
| FAQ disclosure | opens, answer renders |
| Failed requests | zero on both pages |

**Screenshot caveat, recorded because it wasted time:** the desktop app's Browser pane
stops compositing this page below roughly 2,000 px of scroll and returns solid-black
screenshots, and a programmatic `scrollIntoView` triggers it immediately. The page is
fine — element rects, computed styles, colours and text were all read back correctly at
those positions, and a freshly created tab loaded at an anchor renders normally. Sections
verified structurally rather than visually: "In the box" / care, and the comparison table
on desktop. Both were confirmed by reading layout and content from the DOM.

## 11 — Deploy

`netlify.toml` lives in `sites/forged-knife/`, never at the repo root. Netlify UI:
**Package directory** `sites/forged-knife`, **Base directory** empty (repo root, required
for the npm workspace to resolve `@sites/scroll-engine`). `publish` stays
`sites/forged-knife/dist` because it is relative to base.

`public/_headers` caches `/frames/*`, `/posters/*` and `/products/*` immutably for a
year.

### Parity check — run 2026-09-19, passed

Reconstructed exactly what a fresh clone contains (`git ls-files` + untracked-not-ignored
into a clean directory), installed from zero, built, and served `dist` on port 4500.

- Build from zero: passes.
- `dist/index.html` **byte-identical** to the local build.
- Every asset 200; **zero 4xx**: `/`, `/_headers`, `/frames/manifest.json`,
  `/logo-symbol.svg`, both posters, all five product tiles, the CSS bundle and the
  ScrollStage JS bundle.
- `_headers` and `frames/manifest.json` present in `dist`.
- All three component scripts ship: ScrollStage as an external bundle, Nav and
  ProductGrid inlined into `index.html` by Astro.
- No console errors on the served build.

One note on `mktemp -d` on macOS: it returns a path under `/var/folders/...`, and `/var`
is a symlink, which makes `cpio -pdm` refuse every file with "Cannot extract through
symlink". Resolve it first — `T=$(cd "$(mktemp -d)" && pwd -P)` — or the check cannot
run at all. Worth folding back into `CLAUDE.md`'s recipe.

Frame counts in `dist` versus the manifest are **not** asserted yet: both are zero by
design until the footage lands. Re-run this whole check after the frames are in, since
proving a fresh clone serves every frame is its main purpose.

# GLOSSARIUM — production notes

`sites/lip-gloss` · built from `briefs/lip-gloss.md` · economy tier with an 8-second
scene override, later refined to a mixed 6/8-second plan (§4).

**Status: complete and running on delivered footage.** All 24 assets received, both
sequences extracted and measured, pacing re-derived from the real frames, chapter
placement re-derived from measured luminance, and three shade detail pages added.
Parity check passes. One disclosed defect: a single hard cut in the desktop master at
frame 144 — see §7.

---

## 1 — Direction

A lip gloss brand built on one idea: a scale deception. The opening reads as a rose-gold
desert at golden hour and is revealed, in one unbroken pull-back, to be a single bead of
gloss on a glass slide. Everything after that is the same material behaving like
material — collapsing, folding, pouring, loading into a tube, landing on a mouth.

The register is clinical rather than romantic: tight modern sans, wide tracking on the
wordmark, no serif anywhere, a wet-black page so the canvas is the brightest thing on
screen. Contemporary, not heritage.

## 2 — Decisions taken at Gate 1

Answered by the user:

| Question | Answer |
|---|---|
| Brand name | GLOSSARIUM (brief candidate, unmodified) |
| Finish | High-shine wet-look |
| Hero shade / dune colour | Dune 04 — warm rose-gold nude |
| Primary action | Buy — add to bag |
| Tube | Clear glass, brushed metal cap |
| Applicator | Doe-foot |
| Budget | Economy, with 8-second scenes |
| Scene count | All six brief beats kept |

Decided without asking, and recorded here as assumptions:

- **Palette** taken from the brief unchanged: `--wet-black #0B0708`, `--nude #D7A98C`,
  `--rose-gold #C98B6E`, `--flesh #EFCDBB`, `--shine #FFF6EF`. The brief specifies it, so
  it was not put to the user.
- **Shade range and prices** invented to fit the brief's "6 shades, £18–£26" across
  nude / berry / clear / bronze: Slip 01 £18, Shell 02 £20, Dune 04 £22, Ember 07 £24,
  Fig 11 £24, Salt 12 £26. **Superseded — the site was later moved to the US market;
  see §11.**
- **Formula claims** (castor seed and squalane, non-sticky, ~8h, fragrance-free, vegan,
  6 ml, batches of 900, made in the UK) are invented product copy for an invented brand.
- **Wordmark and symbol drawn by hand** as SVG rather than generated. A generated
  wordmark is raster and would put text into pixels, which this repo forbids. The symbol
  is a bead of liquid on a baseline — `public/logo-symbol.svg`.

## 3 — Visual Story (approved at Gate 2, verbatim)

| Scene | Visual story | Website copy |
| --- | --- | --- |
| **01 — Opening** (the deception) | Rose-gold desert at golden hour. Slow lateral drift across soft curved ridges, sun raking low from the left so each ridge carries one long highlight. No product language anywhere in the prompt — this must read as landscape and nothing else. Ridges lower two-thirds; **upper-left third held clean**. | GLOSSARIUM · SHADE NO. 04 / **You are looking at one drop.** / Dune 04 — a warm rose-gold nude in high-shine wet-look. Scroll and it will prove it. / `Shop the shade range` · `Dune 04 — £22` |
| **02 — The reveal** | Camera pulls back steadily and continuously. The "dune" resolves: it is a single bead of gloss on a glass slide under a studio softbox, scale collapsing from kilometres to millimetres in one unbroken move. Brief hold on the recognition. Bead centred; frame otherwise dark. **The idea of the whole site lives here.** | *No copy — let the motion lead* |
| **03 — Collapse** | Surface tension breaks. The bead slumps into a thick viscous ribbon that curls and folds in slow motion, fine metallic flake catching the directional light as it turns. Macro stays tack sharp. Ribbon lower-right; **left third clean**. | **Thick enough to fold.** / Real body, no stick. Castor seed and squalane in a wet-look base — no plumping tingle, no grit, no tack. / `Vegan · Non-sticky · 8h shine · Fragrance-free` |
| **04 — BLUR-THROUGH** (the pour) | The ribbon swells until it fills the frame entirely — translucent, backlit, everything gloss — and the camera travels *through* it. Nothing of the slide and nothing of the tube shares a frame with it. **Load-bearing beat; protected.** | *No copy — let the motion lead* |
| **05 — Loading** | The gloss thins onto a flocked doe-foot applicator, which retracts into a clear glass tube. The brushed metal cap seats, the tube rotates once and settles upright on dark stone. Tube centre-right; **left half clean for the grid.** | **Six shades. One formula.** / Clear through to deep berry in the same wet-look base. Clear glass, so the shade is the packaging. / *product grid* |
| **06 — Resolution** | Tight crop on one mouth. The wand presses once, transfers, lips part and settle. End on the specular catch-light. One mouth only — no full face, no teeth. Mouth left of centre; **right third clean, dark.** | **And then it is just your mouth, shining.** / Free UK delivery over £30 · 30-day returns · Made in the UK / `Add Dune 04 to bag — £22` |

**Hand-offs.** 01 never cuts to 02 — the pull-back *is* the transition, and the reveal
only works because the camera never blinks. 02 ends on the bead already losing its dome,
so 03 opens mid-collapse on the same bead. 03's ribbon grows toward the lens until 04 is
simply more of it, which is why the tube can never appear before 04 and the glass slide
can never appear after it. 05 emerges from inside the gloss as it thins onto the wand.
06 is the only place a human enters, and it enters on a match-move from the wand.

## 4 — Scroll pacing (measured against delivered footage)

Container `1000vh`, stage `100vh` pinned -> **900vh active travel** on desktop.
Portrait: `760vh` container -> **660vh active travel**, because thumbs cover less
distance per effort.

Gate 2 assumed six uniform 8-second scenes. The plan then moved to 6s on scenes
01/03/05/06 and 8s on the two protected beats — and the delivered footage came in at
exactly 40.005s desktop and 39.507s portrait, so the mixed plan held.

**Beat boundaries below were read off the footage, not assumed from the shot list.**

```
              scroll        desktop f     portrait f    desktop f/vh
hold          0.000-0.045   0             0             — read the hero
the dune      0.045-0.180     0- 71         0- 53       59
the reveal    0.180-0.300    71-119        53- 72       44   <- slowest beat
hold          0.300-0.345   119            72           — recognition lands
bead settles  0.345-0.400   119-143        72- 95       48
hold          0.400-0.430   144            95           <- THE CUT LIVES HERE
bead on slide 0.430-0.520   144-191        95-140       58
the collapse  0.520-0.620   191-247       140-180       62
the pour      0.620-0.770   247-343       180-225       71   <- protected
the tube      0.770-0.860   343-403       225-272       74
tube mouth    0.860-0.890   403-415       272-278       44
the mouth     0.890-0.960   415-479       278-315       102
hold          0.960-1.000   479           315           — read the CTA
```

Desktop runs 44-102 frames per viewport height, with the reveal deliberately slowest.
Portrait runs 21-67; the 21 is the reveal, which carries only 19 frames at 8fps against
the desktop's 48 — see §7 for why and how to trade it back.

The two orientations share scroll boundaries, so the same scroll fraction shows the same
narrative beat on both. Live values are in `src/content/site.ts` under
`beats.landscape` and `beats.portrait`.

### Chapter placement, re-derived from measured luminance

The storyboard planned copy on the **left** for scenes 01, 03 and 05. The delivered
footage puts the bright sky, the softbox array and the lit slide there. Mean / stddev of
8-bit luma per candidate zone, over each chapter's own frame range:

| chapter | frames | upper-left | mid-left | mid-right | bottom | chosen |
|---|---|---|---|---|---|---|
| hero | 0-71 | 195 / 1.4 | 169 / 2.8 | **78 / 1.6** | 120 / 7.8 | mid-right |
| formula | 191-247 | 186 / 1.4 | 166 / 6.4 | **60 / 13.6** | 106 / 5.5 | mid-right |
| range | 343-403 | 34 / 33.1 | 36 / 24.2 | **26 / 10.9** | 80 / 20.7 | mid-right |
| close | 415-479 | 133 / 6.7 | 112 / 6.8 | 109 / 24.7 | **105 / 10.2** | bottom |

All three upper chapters moved **right**. Light type over luma 166-195 would have been
unreadable regardless of scrim.

Scene 06 is a full-frame face with no clean third anywhere — everything sits at 104-133 —
so `close` drops to a bottom rail with an upward scrim. Bottom is not the darkest zone
but it is the most **stable** (stddev 10.2 against mid-right's 24.7), and a scrim can fix
brightness but it cannot fix flicker.

## 5 — Cost ledger

### Higgsfield preflight at Gate 2 (all figures live `get_cost`, nothing submitted)

| Line | Model / params | Qty | Each | Total |
|---|---|---|---|---|
| Keyframe landscape | `gpt_image_2_5` 1k medium 16:9 | 1 | 1.0 | 1.0 |
| Keyframe portrait | `gpt_image_2_5` 1k medium 9:16 | 1 | 1.0 | 1.0 |
| Landscape clips | `seedance_2_0_mini` 8s 720p | 6 | 8.0 | 48.0 |
| Portrait clips | `seedance_2_0_mini` 8s 9:16 | 6 | 8.0 | 48.0 |
| Product stills | `gpt_image_2_5` 1k medium | 6 | 1.0 | 6.0 |
| Logo concepts | `recraft_v4_1` vector 1k | 3 | 2.5 | 7.5 |
| | | | **Committed** | **111.5** |

Worst case with economy's single retake budget (one landscape + one portrait redo):
127.5. Other preflights taken for comparison: `veo3_1_lite` 8s = 8.0,
`seedance_2_0_mini` 8s at 480p = 4.0, 5s at 720p = 5.0, `recraft_v4_1` vector 2k = 10.0.
Video cost on `seedance_2_0_mini` at 720p is linear at 1.0 credit per second.

### Actual Higgsfield spend: **0 credits**

Balance was **10 credits, free plan** — less than one 8-second clip. Nothing was
submitted. No subscription or top-up was purchased; that decision was left to the user,
who chose the external route, as for `sites/espresso` and `sites/forged-knife`.

### Resolution

Generation moved to the user's **Google AI Pro** plan (Nano Banana Pro + Google Flow /
Veo 3.1). Prompt pack written to `generation-prompts.md` — **fully copy-paste at the
user's request**, all 31 prompts spelled out in full with no "as above with changes"
abbreviations: 1 symbol, 6 desktop anchor stills, 6 mobile anchor stills, 6 product
stills, 6 desktop clips, 6 portrait clips.

Consequences, disclosed rather than absorbed silently:

- **Continuity is chained, not extended.** The user established that Veo 3.1 offers
  4s/6s/8s and that only 8s clips can be Extended. Choosing shorter scenes therefore
  rules Extend out, so the build uses *Frames to Video* chaining: each scene starts from
  the previous scene's last frame. This is the "good" continuity tier, not the "best" one
  — there are five seams per orientation and every one needs inspecting for jumps in
  position, scale, lighting and camera direction.
- **Anchor stills carry the recovery burden.** Because chaining can fail at a seam, the
  pack ships an explicit anchor still per scene per orientation. They double as end
  frames where Flow supports an end-frame field, which tightens the seams considerably.
- **Duration is not fixed by the pack.** The prompts are identical at 4s, 6s or 8s —
  duration is a Flow dropdown. If the delivered footage does not match the 6/8 plan, the
  pacing map in `site.ts` is remapped from the measured counts. That remap is a build
  task, not a regeneration.

## 6 — Assets in the build

All placeholder gradients have been replaced by delivered imagery. Nothing provisional
ships any more.

| Path | Source |
|---|---|
| `public/frames/desktop/*.webp` | 480 frames from `_incoming/desktop.mp4` |
| `public/frames/mobile/*.webp` | 316 frames from `_incoming/mobile.mp4` |
| `public/posters/desktop.webp` | desktop frame 0 |
| `public/posters/desktop-final.webp` | desktop frame 479 |
| `public/posters/mobile.webp` | portrait frame 0 |
| `public/posters/mobile-final.webp` | portrait frame 315 |
| `public/products/*.webp` | the six delivered 1024x1024 stills, `cwebp -q 84 -resize 900 900` |
| `public/logo-symbol.svg` | hand-drawn, not generated |

The four `symbol-0*.jpeg` concepts were reference only; the shipped symbol is still the
hand-drawn SVG, which is what keeps it a real vector master with no text in pixels.

Still masters (`_incoming/*.jpeg`) are committed as the provenance record. The two MP4
masters are gitignored per the repo rule — 76MB of source that the site never serves.

## 7 — Delivery settings (measured, not estimated)

Every figure below is a real extraction measured on disk.

### What was delivered

24 assets, all 31 prompts accounted for. `anchor-desktop-02.jpeg` arrived as
`anchor-desktop.jpeg` and was renamed after confirming from the image that it is the
scene 02 bead-on-slide reveal. Masters:

- `desktop.mp4` — 1280x720, 24fps, 40.005s, 959 frames, 38.6MB, 7.57 Mbps h264
- `mobile.mp4` — 720x1280, 24fps, 39.507s, 948 frames, 37.7MB, 7.50 Mbps h264

**Neither master needed recompressing.** They are gitignored source; what ships is the
extracted WebP sequence, and master bitrate has no effect on page weight. The desktop
master is *already* at the delivery width of 1280, so frames are extracted 1:1 with no
rescale in either direction.

### Letterbox check

`cropdetect` proposed `crop=1280:714:0:4` (desktop) and `crop=712:1280:4:0` (mobile).
Both were **rejected after measurement**: the edge rows/columns carry YAVG 37-72 at
several timestamps, where a real letterbox bar reads 0-16. Those are dark edges of a
dark scene, not bars. Extracted full-frame, no crop.

### Desktop — 12fps, 1280 wide, `cwebp -q 82 -m 6`, 480 frames, 16,271,364 bytes (15.52MB)

Under the 18MB ceiling at the economy tier's own width, source resolution preserved 1:1.
Measured alternatives: q85 = 19MB (**over ceiling**), q78 = 14MB. q82 was the highest
quality that fit.

### Portrait — 8fps, 540 wide, `cwebp -q 76 -m 6`, 316 frames, 10,178,640 bytes (9.71MB)

Under the 10MB guideline. Getting there took the full matrix, because **this content
barely responds to quality** — the gold flake is high-frequency and does not compress:

| fps | width | q | frames | size |
|---|---|---|---|---|
| 10 | 640 | 80 | 395 | 20.00MB |
| 10 | 640 | 76 | 395 | 17.00MB |
| 10 | 640 | 72 | 395 | 15.87MB |
| 10 | 640 | 68 | 395 | 15.08MB |
| 10 | 576 | 76 | 395 | 13.82MB |
| 10 | 540 | 76 | 395 | 12.90MB |
| 10 | 512 | 76 | 395 | 12.09MB |
| 8 | 640 | 76 | 316 | 13.62MB |
| 8 | 640 | 72 | 316 | 12.66MB |
| 8 | 600 | 76 | 316 | 11.57MB |
| 8 | 576 | 76 | 316 | 11.07MB |
| **8** | **540** | **76** | **316** | **9.71MB <- shipped** |

Note the shape of it: at 10fps, dropping quality from 80 to 68 saves 4.9MB, while
dropping the frame rate from 10 to 8 saves more than either lever. **Frame count is the
only real lever on this content.** Unlike `sites/forged-knife`, which shipped 21% over
the portrait guideline and justified it, this one clears the guideline outright — the
cost is 8fps rather than 12.

**The trade this forces.** At 8fps the portrait reveal (the scale deception, the most
important beat in the build) carries only 19 frames against the desktop's 48. Its scroll
budget was cut accordingly so it runs at 21 frames per viewport height rather than
stretching 19 frames over a long travel, which would have been visible stepping. 21 f/vh
is the lowest figure anywhere in this build and it is on the beat that can least afford
it. **To trade back**, re-encode from the PNG intermediates at 10fps/540/q76 (12.90MB,
29% over guideline, 395 frames) and remap `beats.portrait` — boundaries scale by 395/316.

### THE ONE DEFECT — a hard cut at desktop frame 144

Inter-frame difference analysis across both sequences:

| sequence | median inter-frame delta | largest | verdict |
|---|---|---|---|
| desktop | 2.85 | **79.23 at frame 144 (27.8x)** | one hard cut |
| desktop | — | next largest 15.07 at f72 (5.3x) | fast motion, continuous |
| mobile | 6.63 | 16.12 at f260 (2.4x) | fully continuous, no cut |

At desktop frame 144 the camera jumps position and scale — the bead is suddenly smaller,
the slide is tilted, and the softbox array enters the upper left. This is an Extend seam
that the model did not continue cleanly.

**How it is handled:** a deliberate hold at scroll 0.400-0.430 sits exactly on it, so the
change lands inside a composed pause at a beat boundary rather than mid-motion. That does
not remove the cut; it stops it reading as a stutter. **It is still a discontinuity and
it violates non-negotiable #1.** Options if it should be removed properly: regenerate the
desktop clip from the scene 02 end frame through the collapse, or accept the portrait
sequence's framing for both. Neither was done, because it is one seam in forty seconds
and the hold treatment is the standard mitigation.

I originally read two further cuts at around f350 and f404 off a contact sheet. The
difference metric says both are 4.6x median — fast camera moves, not discontinuities.
The metric is the right instrument here and the stills were misleading.

### Deviations from the prompt pack, disclosed

- **Hands appear in desktop scene 05.** The prompt said "no hands, no fingers, no arms";
  fingers hold the tube around f380. It reads naturally for cosmetics and was kept.
- **The scene 06 crop is wider than specified.** The pack said no nose and no nostrils;
  the delivered crop includes nostrils and part of the chin and cheeks. No eyes, so it is
  not the uncanny full face the brief warned about. Kept.
- **A brief flash of teeth** in the mobile mouth beat around f278. The lips are closed
  before and after. Not worth a regeneration.
- **No printing on any tube or cap**, in either sequence or in any of the six product
  stills. This was the highest-risk item in the pack and it came back clean.
- **Scene 01 reads as a landscape** in both orientations. The deception works.

**Toolchain.** Local `ffmpeg` (homebrew) is built **without `libwebp`**, so the
single-pass `-c:v libwebp` command in `references/generation.md` fails with
`Unknown encoder 'libwebp'`. Pipeline used: `ffmpeg` -> PNG intermediates ->
`cwebp -m 6 -q N`. Same fallback as `sites/espresso` and `sites/forged-knife` — three
sites in a row, and it belongs in the reference.

### Manifest, verified against files on disk

```json
{
  "desktop": { "pattern": "/frames/desktop/frame-%04d.webp", "count": 480,
               "width": 1280, "height": 720, "fps": 12,
               "poster": "/posters/desktop.webp", "bytes": 16271364 },
  "mobile":  { "pattern": "/frames/mobile/frame-%04d.webp", "count": 316,
               "width": 540, "height": 961, "fps": 8,
               "poster": "/posters/mobile.webp", "bytes": 10178640 }
}
```

Numbering is contiguous 0..479 and 0..315 with no gaps, checked programmatically.

## 8 — Build notes

- `packages/scroll-engine` v1.1.0 imported unchanged. No bugs found; nothing forked.
- Components were copied from `sites/forged-knife` and adapted. They are per-site by
  design (only the engine is shared), but they carried OKUMI's brand-named token
  vocabulary (`--soot`, `--ember`, `--forge-gold`, `--ash`). Rather than put
  `--forge-gold` on a lip gloss site, the components were remapped to a neutral
  vocabulary — `--bg`, `--ink`, `--accent`, `--line`, `--sp-*`, `--r-*` — defined in
  `src/styles/tokens.css`. Worth considering as the shared convention for site four.
- `Chapter.astro` gained an optional `meta` prop for the formula beat's claims line.
- One real bug caught at build: `site.ts` defined `brand` twice — once as the identity
  block and once as the story section — so the later key silently won and
  `site.brand.name` became `undefined` in `Nav`. The story section is now `about`.
- Ships `public/_headers` with immutable one-year caching for `/frames/*`, `/posters/*`
  and `/products/*`. `netlify.toml` is per-site, in `sites/lip-gloss/`, with
  `publish = "sites/lip-gloss/dist"` relative to the repo-root base directory. There is
  deliberately no root `netlify.toml`.
- The pinned stage was inherited at OKUMI's `700vh` (600vh travel), which is right for
  four scenes and too short for six — it packed 40 seconds of footage into 600vh at up
  to 107 f/vh. Raised to `1000vh` / 900vh travel, which is what Gate 2 approved.
- Dev server on port 4323, registered in `.claude/launch.json`.

## 9 — Shade detail pages

**All six shades have their own page**, generated from a `page` block in `site.ts` by
`src/pages/shades/[shade].astro`:

| Page | Shade | Angle the page is built on |
|---|---|---|
| `/shades/slip-01/` | Clear · £18 | A clear gloss has nothing to hide behind |
| `/shades/shell-02/` | Pale nude · £20 | A quiet shade is not an easy one |
| `/shades/dune-04/` | Rose-gold nude · £22 | Named after the thing it looked like |
| `/shades/ember-07/` | Bronze · £24 | The one that was supposed to be a nude |
| `/shades/fig-11/` | Deep berry · £24 | A dark shade you can still see through |
| `/shades/salt-12/` | Cool berry-nude · £26 | The shade we could not name |

Each carries a lede, a five-row shade-notes table, a three-paragraph origin story, a
how-to-wear sequence, a full INCI list, a spec table, four FAQs and two cross-sells.
Every shade cross-links to two others, and every shade is reachable as a cross-sell from
at least one page.

The copy answers the awkward questions rather than avoiding them: Shell 02's page says
plainly that it can read ashy on deep skin and points at Dune 04 instead; Salt 12's says
it is the least universal shade in the range; Slip 01's explains why the hardest shade
to make is also the cheapest. Salt 12's £26 is explained as a materials difference
(manganese violet and cool silver flake cost more per kilo than warm iron oxides) rather
than left as an unexplained premium, and its FAQ states it is permanent rather than a
limited edition, which the product blurb could otherwise imply.

**Adding a seventh shade needs no code.** Give it a `href` and a `page` block in
`site.ts` and `getStaticPaths` picks it up. The template still carries the branch for a
product with no page, so removing a `page` block degrades to a home-grid anchor rather
than breaking the build.

Supporting changes:

- `src/layouts/Base.astro` added; `index.astro` refactored onto it so the nav, footer
  and head are written once across all seven pages.
- The `.band` / `.facts` section furniture moved from `index.astro`'s scoped styles into
  `tokens.css`, because the home page and the shade pages both use it.
- Footer links go through the same path-rewriting helper the nav uses. A bare
  `#formula` in `site.ts` resolves to `#formula` on the home page and `/#formula`
  everywhere else; without this every footer link was dead on a shade page.
- `.facts__row` and `.notes__row` stack below 560px — two narrow columns stranded the
  value against the right edge on a phone.
- All six product card names link through. The hero's secondary CTA, the closing CTA and
  all three footer shade links now point at `/shades/…/` rather than at anchors on the
  home grid, and no `#<shade-id>` anchor links remain anywhere in the build.

## 10 — Verification

**Verified by observation:**

- Desktop sequence scrubs. Checked at scroll 0.25 (the reveal lands), 0.57 (formula),
  0.70 (the pour), 0.82 (the tube) and 0.95 (the mouth). Canvas pixel data confirms the
  frame changes with scroll rather than the screenshot being stale.
- Portrait sequence scrubs and the engine selects it: at a 375px viewport the network
  log shows `/frames/mobile/` requests only, streaming around the playhead, and the
  canvas is 750x1624 at DPR 2.
- Copy is legible over every chapter, which is the point of the luminance re-derivation
  in §3 — the storyboard's planned left-hand placements would have put light type over
  luma 166-195.
- All six shade pages render at 1440px and at 375px, including the stacked
  definition rows below 560px.
- Zero console errors.

**Verified by the parity check** (fresh tree from `git ls-files`, `npm install` from
zero, built, served over plain HTTP):

- `index.html` and all six shade pages byte-identical to the local build.
- Zero non-200 across all seven pages, the six product stills, every key asset and 80
  randomly sampled frames.
- Every internal link on every page checked programmatically: each resolves to a real
  file, and each fragment resolves to an `id` that exists on the target page.
- `dist` frame counts match the manifest exactly, numbering contiguous.
- `_headers` and `frames/manifest.json` present. `dist` is 28MB.

**Not verified:**

- Playback smoothness on a real phone over a real network. The engine streams frames
  around the playhead and both sequences are inside their weight budgets, but that is an
  argument, not a measurement.
- Whether the desktop cut at frame 144 reads as acceptable to a visitor. The hold
  treatment is the standard mitigation; it has not been tested on anyone.

## 11 — Market change: GBP/UK → USD/US

Applied after the build was complete, at the user's request: every price, currency
symbol and location on the site moved from British to American.

| Was | Now |
|---|---|
| `price: "£18"` … `"£26"` | `"$18"` … `"$26"` |
| "Free UK delivery over £30 · 30-day returns · Made in the UK" | "Free US shipping over $30 · 30-day returns · Made in the USA" |
| `["Made in", "United Kingdom"]` × 7 spec tables | `["Made in", "United States"]` |
| "Everything is made in the UK in batches of 900" | "…made in the United States in batches of 900" |
| Footer: "Made in the UK in batches of 900" | "Made in the USA in batches of 900" |
| `<html lang="en-GB">` (layout and style tile) | `<html lang="en-US">` |
| Salt 12 price rationale and FAQ ("£26") | "$26" |

**Prices kept their numerals rather than being converted at an exchange rate.** A
storefront sets round prices per market; £18→$23.xx would have produced an ugly ladder
and changed the brief's "six shades, 18–26" shape. The $18–$26 ladder preserves both.
If actual conversion is wanted instead, the six `price` fields in `site.ts` are the only
edit — every CTA label, the shade pages, the mailto subject and the style tile all read
from them, except the two hero/closing CTA labels which spell "$22" out and would need
changing with it.

Verified: zero `£`, zero "United Kingdom", zero `en-GB` anywhere in `src/`,
`style-tile.html` or the built output. All seven pages are `lang="en-US"`. Parity check
re-run — all seven byte-identical from a fresh tree.

**Left as British, deliberately, because it was not asked for and is a separate
decision:** the copy voice is still British throughout — "colour" and "colourless"
(≈30 instances), "grey"/"greyed", "aluminium" in the INCI lists, "realise", and idioms
like "a windy platform" (a train platform) in Dune 04's FAQ and "on a narrow vote" in
Salt 12's story. A US storefront that says "Made in the USA" next to "colour" and
"aluminium" reads as inconsistent to an American customer. Converting it is a copy
rewrite across `site.ts`, not a find-and-replace — "aluminium"→"aluminum" is safe, but
"colour"→"color" touches shade descriptions where the word carries weight, and the
idioms need rewriting rather than respelling.

# CLACK — production notes

`sites/keyboard` · built from `briefs/keyboard.md`

**Status: complete and running on generated footage.** All assets generated on
Higgsfield, both sequences extracted and measured, pacing and chapter placement
re-derived from the real frames, and the parity check passes from a clean clone.
**Total spend 170 credits — exactly the preflight estimate, with zero retakes.**

---

## 0 — Generation route

Higgsfield MCP, per the standing rule in this repo: ask the user which route they want,
never default to Google Flow. Balance checked live at Gate 2: **Plus plan, 883.4 credits.**
No copy-paste prompt pack is written, because the route is internal.

Never buy a top-up or a subscription on your own initiative.

## 1 — Direction

CLACK is an American keyboard house whose whole argument is that a switch is a mechanism
you can *see*. The site is a bright, bead-blasted studio that opens one up, scrubbed to
scroll — and the only dark frame on the entire page is the inside of the housing itself,
because that is the one part of this product that is genuinely dark.

The register is enthusiast-native and unsentimental: mono headings (this audience reads
mono as native), grotesk body, spec sheets rather than adjectives. The single accent is
the blue of the actuation arc, and it earns its place three times over — it is the
brightest pixel in the hero shot, the button colour, and two actual keycaps on the board.

### The light-theme decision

The brief's palette is dark (`--deck #18191C`). The user asked for a light theme instead,
so the palette is a light-ground rebuild: cool studio white page, anodised-ink type,
spark blue accent. This is not just a CSS inversion — **it changed the generation.** The
footage is lit in a bright white studio void so the canvas dissolves into the page rather
than sitting in it as a black plate. The brief's dark value survives in exactly one token,
`--housing`, used by exactly one chapter.

## 2 — Decisions taken at Gate 1

Answered by the user:

| Question | Answer |
|---|---|
| Brand name | CLACK (brief candidate, unmodified) |
| Palette | Cool studio white + spark blue — a light rebuild of the brief's dark palette |
| Catalogue | Hero + 6, premium tier, prices shown |
| Primary action | Buy now, in stock |
| Footage ground | Bright studio for scenes 01/03/04; dark interior for scene 02, because a switch housing is sealed |
| Case | Silver anodised aluminium, bead-blasted, chamfered mirror edge |
| Layout | 65% flagship |
| Keycaps | Cool grey alphas on white modifiers, two spark-blue accents — all blank |

Decided without asking, and recorded here as assumptions:

- **Budget: `economy`**, resolved from the user's words "in a cheap way". Delivery
  `fps 15`, `width 1280`, WebP. Video model was then raised above the economy default at
  the user's request — see §3.
- **Switch feel: tactile** as the hero configuration. Linear and clicky ship as options.
  The brief lists "switch options" as products but does not nominate a hero.
- **Market: United States, USD.** Repo default; not an interview topic. Copy names
  Portland, Oregon, and US shipping.
- **Logo: hand-drawn SVG**, not generated. `recraft_v4_1` vector is 10 credits per
  concept, and CLACK is a five-letter mono wordmark that is literally just type — the
  wordmark is HTML, and only the symbol needed drawing. The user was offered two
  generated concepts (+20) at Gate 2 and approved the proposal that included the
  hand-drawn mark. `public/logo-symbol.svg`: a keycap in plan view with the MX cross stem
  knocked out, one path, even-odd fill, `currentColor`.

## 3 — Model routing, and a correction made at Gate 2

The user asked to move off `seedance_2_0_mini` and for a full cost comparison. Prices
below were preflighted live with `get_cost` on 2026-09-21 (`get_cost` submits nothing).
**9:16 costs exactly the same as 16:9.**

| Model | credits/sec | 32s of video | Max res | Frame control |
|---|---|---|---|---|
| `seedance_2_0_mini` 720p | 1.0 | 32 | 720p | start + end |
| `seedance_2_0` `fast` 720p | 2.5 | 80 | 720p | start + end + refs |
| **`seedance_2_0` `std` 720p** | **4.5** | **144** | 4K | start + end + refs |
| `seedance_2_5` 720p | 7.0 | 224 | 1080p | start + end + **extension** |
| `seedance_2_0` `std` 1080p | 9.0 | 288 | 4K | start + end + refs |
| `seedance_2_5` 1080p | 12.0 | 384 | 1080p | start + end + **extension** |

Image ladder, same date: `seedream_v4_5` high **1**, `nano_banana_pro` 2k **2**,
`nano_banana_2` 2k **2**, `cinematic_studio_2_5` 1k **2** / 4k-21:9 **4**,
`gpt_image_2_5` 2k high **3**, `recraft_v4_1` vector 2k **10**.

**Chosen: `seedance_2_0` `mode: "std"` at 720p, and `nano_banana_pro` at 2k.**

Two reasons, the first of which corrects an over-claim made in the first Gate 2 pass:

1. **Extension is not the deciding factor for this storyboard, and the first pass said it
   was.** `seedance_2_5` is the only model with true `video_extension`, but this
   storyboard needs `end_image` control on *both* clips — clip A must land on the cutaway
   interior, and clip B must land on the ending frame, which the brief calls the most
   important shot in any build. An extension continues a clip but gives no target to land
   on. So the sequence would be chained on 2.5 anyway, paying 7/sec for a capability that
   goes unused. That makes the choice quality-per-credit, not continuity.
2. **720p *is* the delivery width.** Economy delivers at 1280px, which is exactly 720p's
   width. A 1080p source buys only cleaner downscaling — real, but not worth 144 extra
   credits when the same money funds retakes on the hero shot instead.

`nano_banana_pro` over the 1-credit `seedream_v4_5` because the switch-interior cutaway is
the one still that has to land, and prompt adherence is what buys that. 2k costs the same
as 1k on this model, so 2k is always correct.

## 4 — The approved Visual Story

Recorded verbatim as approved at Gate 2. This is the spec the generation is judged
against.

| Scene | Visual story | Website copy |
| --- | --- | --- |
| **01 — Opening** | A single blank keycap, cool grey spherical-profile top, hangs and rotates slowly in a soft white studio void. One raking key light travels across its shoulder. It begins to descend. Subject centred; upper-left third held clean. | **The sound of a switch, seen** / Every CLACK board is milled from one block of aluminium and assembled by hand in Portland, Oregon. Start with the part nobody shows you. / `Shop the 65 — $289` |
| **02 — BLUR-THROUGH — inside the switch** *(hero)* | The cap seats onto the stem and the camera does not stop — it follows it **through** the top housing, the white void defocusing to nothing as the housing wall crosses the lens. Interior, extreme macro, now dark: the stem legs bow the gold leaf aside, the contact closes, the spring compresses, and a single blue arc fires at the moment of actuation. | No copy until the spark — then one line, on dark: **2.0 mm down. 45 grams. One contact.** / `Compare switches` |
| **03 — Multiplication** | The camera withdraws back out through the same blur into bright light. The switch drops into the steel plate, and switches cascade across the PCB row by row like dominoes. Blank keycaps rain down from above and land in rows. Copy space held right. | **Sixty-eight keys, one aluminium billet** / Gasket-mounted plate, hand-lubed stems, hot-swap sockets. Blank PBT, because a legend is someone else telling you what you already know. / `Configure your board` |
| **04 — Resolution** | The milled silver case closes around the assembly, chamfered edge catching the light. Final pull-back: the finished 65% board at a low three-quarter on a pale desk, long soft shadow, one hand leaving frame, a ripple of light crossing the board and settling to steady backlight. Copy right-hand side. | **Ships in three days. From Portland, Oregon.** / Free shipping across the United States. 30-day returns, assembled or not. / `Add to cart — $289` · `See the collection` |

**Handoff.** 01 hands to 02 at the instant of contact — the cap meeting the stem is the
last thing visible in the light. 02 is a one-way plunge and 03 is its exact reverse, so
the two read as a single in-and-out move through one object. 03 hands to 04 as the last
keycap lands and the case enters from the frame edges.

### Architecture — two clips, one seam, placed deliberately

A single 15s take would have zero seams and cost the same (Seedance prices linearly). Two
8s clips were chosen anyway, because one take gives control only over the first and last
frame — and the brief's own gotcha is that the switch interior comes back as an *exterior*
view unless it is pinned. Splitting lets the cutaway interior be generated as an explicit
keyframe and handed to the model as clip A's `end_image` and clip B's `start_image`: the
same raster on both sides, so **the seam is frame-identical by construction**. It sits
inside the blur-through, at the spark — the most forgiving frame in the sequence — and the
camera reversing direction there is the story, not a glitch.

### The approved scroll pacing plan

Desktop sequence: 240 frames (16s @ 15fps, 1280px wide). Stage `100vh`, container `620vh`
→ **520vh of active pinned travel.** (Active travel is container minus stage; conflating
the two silently shortens the sequence.)

```
01 — Opening
  enters/exits : keycap alone; no switch, no board, no desk in frame
  framing      : centred, 38% headroom, upper-left third clean for the hero copy
  distance     : 1.35 vh of pinned scroll  (incl. a 0.6 vh hold on frame 0)
  behaviour    : slow rotation, then descent
  frames       : 0 – 72 of 240

02 — Blur-through / inside the switch   <- the money shot, scrubbed slowest
  enters/exits : the white void leaves; housing interior arrives; nothing else exists
  framing      : extreme macro, leaf and spring centred, spark at frame 118
  distance     : 2.1 vh of pinned scroll
  behaviour    : continuous, then a 0.45 vh hold ON the spark frame
  frames       : 72 – 128 of 240

03 — Multiplication
  enters/exits : housing leaves through the same blur; plate and PCB arrive; case absent
  framing      : pull-back to three-quarter, right third clean for copy
  distance     : 1.1 vh of pinned scroll
  behaviour    : continuous cascade
  frames       : 128 – 190 of 240

04 — Resolution
  enters/exits : case closes in from frame edges; hand enters and leaves last
  framing      : low three-quarter, board left-of-centre, right third clean
  distance     : 0.65 vh + a 0.4 vh hold on the final frame to read the CTA
  frames       : 190 – 239 of 240
```

Scene 02 gets the most scroll distance and the fewest frames per unit of travel on
purpose. Mapping is piecewise and a pure function of scroll position, so scrolling up
retraces exactly.

**Frame counts above are the plan. Measured counts are recorded in §7 and the `beats`
array is re-derived from those, not from these.**

## 5 — Approved cost ledger

```
Planned spend — keyboard · economy delivery · seedance_2_0 std 720p · nano_banana_pro 2k

  keyframes       nano_banana_pro 2k          6 ×  2  =  12   (3 anchors × desktop+portrait)
  desktop clip A  seedance_2_0 std 8s 16:9    1 × 36  =  36
  desktop clip B  seedance_2_0 std 8s 16:9    1 × 36  =  36
  portrait clip A seedance_2_0 std 8s 9:16    1 × 36  =  36
  portrait clip B seedance_2_0 std 8s 9:16    1 × 36  =  36
  product stills  nano_banana_pro 2k          7 ×  2  =  14
  logo            hand-drawn SVG              —       =   0
                                             ──────────────
  Committed                                           170
  Worst case (+1 retake per clip, +2 stills)          318
  Balance at Gate 2                                   883.4
```

Economy's retake budget is 1 per scene. Reaching it means stopping and asking, not
silently continuing to spend.

**Flagged at Gate 2, unresolved until measured:** economy's ~6MB page-weight target
against 240 frames at 1280px is roughly 25KB/frame. Bright-studio footage should compress
to about that — flat white grounds are cheap in WebP — but scene 02 is dark, macro and
detailed, which is the expensive kind. If it lands over budget, delivery drops to 12fps
(192 frames) rather than crushing quality. Measured numbers go in §7 either way.

## 6 — Generation log

Every prompt, model, params and job ID. Appended as jobs complete.

### Keyframes — `nano_banana_pro`, `resolution: "2k"`, 12 credits

All six carry the verbatim negative clause: *"Absolutely no text, no letters, no numbers,
no legends, no symbols, no logos, no watermarks, no UI"* — the brief's hardest gotcha is
that models garble keycap legends every time, and blank caps also read as premium in this
niche, so it is a free win.

| # | Anchor | AR | Job ID |
|---|---|---|---|
| 1 | 01 Opening — keycap in white void | 16:9 | `40b79e3a-e859-4767-9d33-00fdc841691c` |
| 2 | 02 Interior — cutaway, spark | 16:9 | `55bfc167-697b-4ea9-88fa-ffd5cb56b708` |
| 3 | 03 Resolution — finished board | 16:9 | `ee2eac0b-f53d-4e2a-a4d5-f42c02564b01` |
| 4 | 01 Opening | 9:16 | `90f3dee7-7e22-4119-8cec-ec4339fa6f73` |
| 5 | 02 Interior | 9:16 | `290ba6aa-aadc-4808-96c9-2111cf9786e7` |
| 6 | 03 Resolution | 9:16 | `97662238-c0d2-4083-8f0f-01649d5b6b9c` |

Full prompt text is in the session record; the load-bearing phrases are
*"cutaway cross-section of the interior of a mechanical keyboard switch housing,
dramatic extreme macro lighting"* (without "cutaway" the model returns an exterior view —
the brief warns about exactly this), *"completely blank with no markings of any kind"*,
and the per-scene copy-space reservation.

### Video — `seedance_2_0`, `mode: "std"`, 720p, 8s, `generate_audio: false`, `genre: "drama"`, 144 credits

All four chained through the keyframes above: clip A runs `start_image` = anchor 01 →
`end_image` = anchor 02; clip B runs `start_image` = anchor 02 → `end_image` = anchor 03.
The **same raster on both sides of the seam** is what makes the join frame-identical.

| # | Clip | AR | start → end anchor | Job ID |
|---|---|---|---|---|
| A | desktop | 16:9 | 01 → 02 | `9947fe73-1b87-4db7-acc1-8e255b739001` |
| B | desktop | 16:9 | 02 → 03 | `49391ea5-0f8d-43a9-b688-83d32705e2b2` |
| A | portrait | 9:16 | 01 → 02 | `292bdef9-cbf0-4610-b186-65f60495bc1a` |
| B | portrait | 9:16 | 02 → 03 | `9e9e136f-1956-42fd-b6e9-94e07e26a981` |

**A submission note worth keeping:** the first `generate_video_batch` call returned
`submission_failed` on all four items with a preset recommendation ("IN THE DARK",
`24bae836-2c4a-48e0-89b6-49fcc0b21612`) rather than creating jobs. **No credits were
spent** on that call. The preset was declined via `declined_preset_id` and resubmitted —
a preset would have imposed its own look over a storyboard already pinned by keyframes.

### Product stills — `nano_banana_pro` 2k, 4:3, 14 credits

Each passed anchor 03 (`ee2eac0b-…`) as `image_references` so lighting, ground and
material match across the catalogue.

| Product | Job ID |
|---|---|
| clack-65 | `4036c786-bf47-434b-b9f9-67eb9c17ca17` |
| clack-75 | `38794774-3141-4ec0-ae10-4449d2267757` |
| clack-65-barebones | `db1255fd-217d-4504-93fd-450b6802a66f` |
| tactile-45 | `61d38900-490d-4521-a3f1-8e215921e383` |
| linear-50 | `0e335113-34da-4ca2-b4f6-12b74baf4132` |
| frost-keycaps | `a7924d6c-d094-4fc9-8897-e19f20da6ff2` |
| graphite-keycaps | `93c2da09-adf9-47fd-837d-f979a91ad1ca` |

**Model substitution, noted rather than hidden:** every image job was submitted as
`nano_banana_pro` and came back reporting `model: "nano_banana_2"`. Both price at 2
credits and the returned images meet the brief, so nothing was re-run — but the
catalogue name and the executing model did not match, and that is worth knowing before
quoting `nano_banana_pro` as the thing that produced these.

## 7 — Measured results

Everything in this section is read from the files on disk or from a live measurement.
Nothing here is an estimate.

### Sources

All four clips returned **1280×720 / 720×1280, 24 fps, 8.04 s, 193 frames**.
`cropdetect` on all four returned `crop=1280:720:0:0` / `crop=720:1280:0:0` — **no
letterboxing or pillarboxing anywhere**, so nothing was cropped before scaling.

### Extraction

`ffmpeg` here has **no `libwebp`** (`ffmpeg -encoders | grep webp` is empty), so the
documented two-step path was used: PNG at 15 fps, then `cwebp -q 82 -m 6` in parallel.
`-sharp_yuv` was measured and **rejected** — it produced a *larger* sequence (7292 KB vs
7216 KB) for no visible gain.

Clip A contributes frames 0–120; clip B contributes its frames 1–120 renumbered to
121–240. **Clip B's frame 0 is dropped because it duplicates clip A's last frame** — that
is the seam, and shipping both would stall the scrub for one frame.

| | desktop | portrait |
|---|---|---|
| Frames | **241** (0–240, contiguous) | **241** (0–240, contiguous) |
| Dimensions | 1280×720 | 720×1280 |
| fps | 15 | 15 |
| Total bytes | **6,886,526 (6.57 MB)** | **4,671,594 (4.46 MB)** |
| Mean per frame | 28.6 KB | 19.4 KB |
| Poster | 24,462 B | 23,360 B |

Portrait delivers at **720 px wide, not the 1080 planned** — the source came back 720 px
wide and upscaling a generated source is never worth it.

**The Gate 2 weight flag resolved in favour of quality.** The prediction was that the
dark macro frames would be the expensive ones, and they are, by an order of magnitude:
at q82 the white-void frames cost ~7.5 KB each (frame 0027 = 7,452 B) while the switch
interior costs ~90 KB (frame 0116 = 90,970 B). Because the bright frames are so cheap,
the sequence landed at 6.57 MB — **on the economy target of ~6 MB without dropping to
12 fps**, which was the fallback offered at the gate and did not need to be taken.

### Luminance profile — measured, and what it changed

Mean 8-bit luma per frame over the desktop sequence:

```
frame   0- 55   ~205   bright white studio void
frame  56- 73   205→60 the plunge; the housing wall crosses the lens
frame  74-133    <60   INSIDE THE HOUSING  (60 frames, the dark zone)
frame 134-140   60→156 withdrawing back out through the blur
frame 141-240  150-192 plate, cascade, capping, the finished board
```

The measured dark zone (74–133) is what `tone: "dark"` keys off, and it is why the stage
background follows the **footage** rather than the active chapter: between 0.63 and 0.72
of scroll no chapter is showing but the frames are still dark, and keying the stage to
the chapter would flash the page white mid-plunge.

Per-rail luma mean/stddev, measured over each chapter's own frame range, to place copy on
the genuinely quiet part of the real footage:

| Chapter | left | right | bottom | chosen |
|---|---|---|---|---|
| hero (f0–40) | **228.3 / 1.1** | 201.2 / 6.6 | 214.0 / 2.7 | **left** — brightest and flattest |
| switch (f80–130) | 39.8 / 5.5 | 39.9 / 5.6 | 38.8 / 3.5 | **left** — rails statistically tied, storyboard stands |
| build (f145–195) | 160.4 / 16.3 | **177.1 / 9.2** | 133.4 / 18.5 | **right** — brighter *and* far flatter |
| close (f215–240) | 182.5 / 7.4 | **203.8 / 0.8** | 186.6 / 6.3 | **right** — near-perfectly empty |

Three of four confirmed the storyboard. The fourth (`switch`) had no quieter rail, so the
plan was kept rather than moved on noise.

### Final `beats` and stage height

Container `620vh` desktop / `520vh` portrait → **5.2 and 4.2 viewport heights of active
pinned travel** (container minus the 100vh stage). Final values live in
`src/content/site.ts`; the landscape mapping is:

```ts
[0.00,0.05] -> [  0,  0]   hold — read the hero
[0.05,0.24] -> [  0, 55]   the cap turns, then begins to fall
[0.24,0.34] -> [ 55, 73]   the plunge through the housing wall
[0.34,0.52] -> [ 73,114]   interior — the leaf bends aside
[0.52,0.60] -> [114,125]   THE SPARK — slowest beat on the site
[0.60,0.64] -> [125,125]   hold — let the arc land
[0.64,0.70] -> [125,140]   withdraw back out through the blur
[0.70,0.84] -> [140,195]   cascade across the plate, caps rain
[0.84,0.94] -> [195,240]   the case closes, the board settles
[0.94,1.00] -> [240,240]   hold — read the CTA
```

Densest beat ≈ 16 px of scroll per frame; most-stretched (the spark) ≈ 34 px per frame at
a 785 px viewport. Neither is in visible-stepping territory.

## 8 — Verification: what was actually checked

### Measured, in a browser

- **Build** clean, 8 pages. `tsc --noEmit` clean.
- **Frame counts** match the manifest exactly: 241/241 on disk, in `dist`, and in
  `manifest.json`. Numbering verified contiguous from 0 programmatically.
- **The seam.** Clip A's last frame and clip B's first frame were extracted side by side
  and compared: same housing geometry, same leaf position, same spring, same scale, same
  lighting. The only difference is the shape of the arc itself, which flickers anyway.
- **Scrub** verified by sampling canvas pixel data at 8 scroll positions — 8 distinct
  frames, so the canvas genuinely advances.
- **Reverse retrace** verified as a pure function: the same scroll position sampled
  forward and backward yields a byte-identical canvas signature, at every position tested,
  once frames have loaded.
- **Chapter/tone toggling** verified at 10 scroll positions; tone flips dark across
  0.45–0.68 including the no-chapter gap, and the depth gauge reads exactly 2.00 mm at
  the spark and 3.60 mm at the end.
- **Network:** zero 404s; frames load around the playhead in both directions, not
  sequentially from zero. Desktop requests only `frames/desktop`, mobile only
  `frames/mobile`.
- **Accessibility:** exactly one *visible* `h1` (a second exists inside the
  `display:none` static fallback, so only one is ever in the a11y tree); all off-chapter
  links are `inert`; canvas is `aria-hidden`; skip link present and targets `#main`.
- **Market check** returns nothing for `£|€|GBP|UK|United Kingdom|London|England|Royal
  Mail|VAT` across `src`, `dist` and `style-tile.html`; `lang="en-US"` everywhere.
- **Parity from a clean clone:** reconstructed, `npm install`, built from zero. `dist`
  frame counts 241/241 match the manifest, `_headers` and `manifest.json` present,
  `index.html` **byte-identical** to the local build (sha256 match), and **505 assets
  requested over HTTP with zero 4xx** — all 8 pages, all 482 frames, all 7 product
  images, posters, logo and every `_astro` bundle. No `.mp4` leaked into the clone.

### Fixed during verification

- The ghost button on the dark chapter rendered light-on-light: the CSS targeted
  `.on-dark`, but the Chapter component emits `.chapter--dark`. Both selectors now apply.
- The home page had **no `h1` at all** — every heading was an `h2`. The opening chapter
  now carries the `h1` in both the scrubbed and the fallback path.

### Not verified, and known limitations

- **Smoothness is not proven.** Frame counts, byte sizes and distinct-frame sampling were
  all measured, but "no visible stepping while a human scrolls" was not — that needs a
  person on real hardware. The arithmetic (16–34 px of scroll per frame) says it should be
  clean; that is a prediction, not an observation.
- **`prefers-reduced-motion` was not exercised in a real browser.** The code path is
  correct by inspection — `ScrollEngine` returns immediately after `showPoster()` and
  requests no frames — and the static fallback is confirmed present in the DOM with all
  four beats and the poster. But the "zero frame requests under reduced motion" checkbox
  was not observed in a network panel.
- **JS-disabled and simulated-404 fallbacks** were not exercised either. The `<noscript>`
  blocks and the engine's poster-retention path exist and are readable, but untested.
- **Only two viewports were driven**: 1366×800 and 375×812. 1920, 320, 393, 430 and a
  short viewport were not checked.
- **The hero board is not unambiguously a 65%.** At the delivered angle and scale, with
  blank caps, layout is close to unreadable — but a keyboard enthusiast looking hard at
  the product stills may not count exactly 68 keys. Accepted rather than retaken.
- **The case reads mirror-polished rather than bead-blasted** in anchor 03 and the board
  stills. It is attractive and consistent across every asset, so it was accepted; the
  spec copy still says bead-blasted, which is a mismatch between picture and text.
- **The brief's ending frame calls for "one hand leaving frame". There are no hands in
  this sequence.** This was a deliberate departure: generated hands fail often, the
  economy tier allows one retake per scene, and a mangled hand in the single most
  important frame of the site was not worth the risk. The ending is the board alone.
- **Faint PCB silkscreen is visible** on a few cascade frames (around f145–160). It is
  texture on a circuit board rather than a legend or a logo, and at 1280 px it is a few
  pixels, but it is generated glyph-like marking and the non-negotiable is strict.
- **Repo weight:** this site adds ~12 MB of WebP plus ~85 MB of PNG still masters in
  `_incoming/`. Video masters are correctly gitignored. This matches the vinyl precedent
  (70 MB) and the repo rule that still masters are the provenance record, but the PNGs
  are 5–8 MB each and the repo is now the place to consider Git LFS.
- **A bug in the skill's own parity command:** `/var` is a symlink to `private/var` on
  macOS, so the `/var/folders/…` path `mktemp -d` returns always traverses one, and
  `cpio -pdm` refuses to "extract through symlink" and copies **nothing**. The failure is
  loud — `--quiet` does not suppress it and cpio prints one error line per file — but the
  lines are identical, and the visible consequence lands later as `npm install` failing
  with `Could not read package.json`, which reads like a workspace bug rather than a copy
  that never happened. `T=$(cd "$(mktemp -d)" && pwd -P)` fixes it, and is a no-op on
  Linux. The check as written in `references/qa.md` and `CLAUDE.md` cannot pass on macOS.

## 9 — Handing it over

- **Edit the site from `src/content/site.ts`.** Every string, price, spec row, product,
  CTA, chapter and pacing value is there; no component hardcodes user-visible text.
  Changing a price means editing one string. Adding a product means adding one object —
  the grid, the detail page and its route are all generated from that array.
- **`style-tile.html`** holds the palette, type specimens, buttons, a product card and the
  imagery direction, built from the real tokens.
- **Logo master** is `public/logo-symbol.svg` — hand-drawn, one path, even-odd fill,
  `currentColor`. It is a genuine editable vector, not a raster export. The wordmark is
  HTML type, so it restyles with the tokens.
- **Video masters** are in `sites/keyboard/_incoming/*.mp4`, gitignored and kept locally.
  Losing them means regenerating at 144 credits, so back them up off this machine.
- **Netlify:** Package directory `sites/keyboard`, Base directory empty (repo root).
  `sites/keyboard/netlify.toml` carries the command, publish path and NODE_VERSION.
  Nothing was pushed or deployed — that needs your say-so.
- **Bandwidth arithmetic:** one complete desktop scroll-through transfers ~6.6 MB, so
  Netlify's free 100 GB/month is roughly **15,000 full desktop views** (~22,000 mobile).
  `_headers` marks the sequence immutable for a year, so returning visitors pay nothing.

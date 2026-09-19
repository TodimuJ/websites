# NINE BAR — production notes

Site: `sites/espresso` · Brief: `.claude/skills/cinematic-site/briefs/espresso.md`
Started 2026-09-18. Built as a **real storefront**, not a labelled demo: no demo badge,
no disclaimer footer, no `noindex`.

**The copy is placeholder and must be replaced before trading.** The brand, the estate
(Finca Aurelia), its altitude, varietal, process and harvest window, all five prices and
the four-day roast-to-door claim are invented to give the layout real content. They read
as fact to a visitor. Swap them for your own in `src/content/site.ts` before the site
takes an order.

No real brand or real farm is named or implied.

---

## 1 — Direction

Locked at Gate 1. Every answer below was the user's explicit choice from the interview,
not an assumption.

| Decision | Value |
|---|---|
| Brand name | **NINE BAR** — nine bars is the pressure spec, so the name states the physics |
| Palette | Dark-roast ink: `--ink #100C09` `--crema #C98F52` `--espresso #3A2318` `--steel #8C8E90` `--paper #F2EDE6` |
| Type | High-contrast serif headings (Canela/Playfair register) + clean grotesk body |
| Business shape | Subscription-first roaster; primary CTA **Start a subscription** |
| Catalogue | Five SKUs, prices shown, £14–£48 accessible-premium |
| Machine aesthetic | Polished chrome commercial — hard speculars, strongest at low resolution |
| Vessel | Thick matte ceramic tulip cup — also a SKU, so the cup in the film is buyable |
| Ending frame | Straight crema, pulled back to marble. Negative space above-left |
| Bean story | Single-origin, invented farm — Finca Aurelia, 1,850 m, Caturra, washed |

**Assumptions recorded (not user decisions):** the invented farm's name, altitude,
varietal, process and harvest window; all five prices; all body copy.

## 2 — Budget

Requested `--budget economy`: 720p source, 5s scenes, standard bitrate, 1 retake,
medium/1k stills, 15fps delivery, 1280px delivery width. No `--cap` set.

**Superseded at Gate 2** — see §5. Generation moved off Higgsfield onto the user's Google
AI Pro plan, which removes the credit constraint from the generation axes while delivery
fps and width still govern page weight. Source resolution accordingly raised to 1080p and
scene duration to Veo's 8s maximum; delivery targets re-measured in §6.

## 3 — Visual Story (approved at Gate 2, verbatim)

| Scene | Visual story | Website copy |
| --- | --- | --- |
| **01 — Opening** (the grind) | Inside the grinder. A single coffee cherry in macro, rotating in low warm light; camera pushes in *through* it and the cherry resolves into the raw bean. The bean fractures and grounds begin to avalanche toward the lens. Subject centre-right; upper-left third held in clean negative space. | NINE BAR · SINGLE ORIGIN / **It begins as fruit.** / One cherry from Finca Aurelia, 1,850 m. Everything after this is pressure, heat and time. / `Start a subscription` · `Shop beans` |
| **02 — BLUR-THROUGH** (into the bed) | Grounds settle into a puck. A polished chrome tamp descends like a piston, hard specular raking across it. Camera keeps travelling down into the coffee bed as pressurised water floods in — dark rivulets, saturated grounds, everything liquid and backlit. Frame fills entirely with moving wet matter. **Load-bearing beat.** | *No copy — let the motion lead* |
| **03 — Development** (extraction) | Emerge below the basket at the chrome spouts. Two honey-thick streams braid and fall in slow viscous ropes under a single hard light. Chrome group head fills the upper frame. Streams centred; right third clean. | **The pressure is the point.** / Nine bars, twenty-six seconds. Roasted to order and shipped inside four days of the roast date — you drink it in the window it was built for. / *Finca Aurelia · 1,850 m · Caturra · washed · harvest Jan–Mar* |
| **04 — Resolution** | Camera pulls back as the streams stop. Crema swirls into tiger-mottle and holds sharp. Steam rises through a warm rim light. Ceramic tulip cup on marble under one lamp; room falls out of focus. Negative space above-left. | **This is what arrives.** / Three bags, rotating, every month. Cancel whenever. / `Start a subscription — £36 / delivery` |

**Hand-offs.** 01 ends with the frame already filling with falling grounds, so 02 opens
inside that cloud settling — no new location. 02's blur-through is the only place a state
change this violent can hide: the wet-bed wall crossing the lens *is* the transition,
which is why the puck interior and the spouts below never share a frame. 03 emerges from
underneath that bed, physically where 02 left the camera. 04 is the same shot continuing
to retreat; the lamp and marble arrive as the lens pulls back.

## 4 — Scroll pacing (approved at Gate 2, verbatim)

Stage `100vh` pinned, container `700vh` → **600vh active pinned travel (6 viewport
heights)**. Frame counts below assume the original economy plan of 4×5s at 15fps = 300
frames and **will be restated in §6 against the measured footage.**

```
01 — Opening                          frames   0– 74 of 300
  enters/exits : cherry alone; grinder burrs implied, never shown; no machine yet
  framing      : macro, subject centre-right, upper-left third clear for hero copy
  distance     : 1.2 vh   (~62 frames per viewport height)
  behaviour    : continuous push-in, must not settle

02 — BLUR-THROUGH (protected)         frames  75–149
  enters/exits : tamp enters top of frame and leaves through it; spouts NOT yet visible
  framing      : extreme macro at puck level, subject fills frame, no copy space needed
  distance     : 1.32 vh  (~57 f/vh — slowest mapping in the build, deliberately)
  behaviour    : continuous; wet grounds keep moving to the last frame

03 — Development                      frames 150–224
  enters/exits : chrome group head above, streams centre; cup not yet in frame
  framing      : streams centred, right third clean for the provenance block
  distance     : 1.32 vh  (~57 f/vh)
  behaviour    : continuous fall, crema surface stays sharp — no motion blur

04 — Resolution                       frames 225–299
  enters/exits : marble and lamp arrive as the lens retreats; room defocuses
  framing      : cup centre-low, negative space above-left for the closing CTA
  distance     : 0.84 vh  (~89 f/vh — smoothest; it's the frame people stop on)
  behaviour    : decelerating pull-back settling onto the final frame
```

Holds: `0.00–0.10` on frame 0, `0.52–0.58` on frame 149, `0.94–1.00` on the final frame.
Mapping is a pure function of scroll position, so reverse scrolling retraces exactly.
Mobile gets its own `beats` array with the two mid-holds compressed.

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

Worst case with economy's single retake budget (one landscape + one portrait redo): 139.5.
Other preflights taken for comparison: `seedance_2_5` 5s 720p = 35.0 (the only extension-
capable model, so true continuity would have cost 294.5 for the build); `kling3_0_turbo`
5s 720p = 7.5; `veo3_1_lite` 4s = 4.0; `seedance_2_0_mini` 4s 480p = 4.0 (the floor);
`recraft_v4_1` vector 2k = 10.0 vs 2.5 at 1k.

### Actual Higgsfield spend: **0 credits**

Balance was **10 credits, free plan, `unlim` unavailable** — less than the 12.5 of a
single cheapest usable clip. Nothing was submitted. No subscription or top-up was
purchased; that decision was left to the user.

### Resolution

The user holds a Google AI Pro plan (Nano Banana Pro + Google Flow / Veo 3.1). Generation
moved there. Prompt pack written to `generation-prompts.md`.

Consequences, disclosed rather than absorbed silently:

- **Continuity improves.** Flow's *Extend* continues the actual clip, the "best" tier —
  what Higgsfield would have charged 35/clip for. Path A is one continuous file per
  orientation. Path B (Frames to Video chaining) is the fallback and needs every seam
  inspected.
- **Logo route changes.** Nano Banana Pro is raster, so there is no vector master from it.
  Instead: symbol concepts generated as *reference only*, redrawn by hand as inline SVG,
  and the wordmark set in HTML type. Net result is a genuine vector master and selectable
  type — better than the raster path, and it keeps the no-text-in-pixels rule intact.
- **Scene duration rises** from 5s to Veo's 8s cap, which raises frame counts and so page
  weight. See §6.

## 6 — Assets received (2026-09-19)

All 13 requested assets present in `_incoming/`; none missing. Delivered as `.jpeg`
rather than `.png` — harmless, since the symbols are redrawn as SVG and the stills are
re-encoded for delivery anyway.

| Asset | Status |
|---|---|
| `symbol-01..04.jpeg` | 4/4 present |
| `keyframe-landscape.jpeg`, `keyframe-portrait.jpeg` | present |
| `desktop.mp4` | h264, 1280x720, 24fps, 696 frames, 29.19s, 7.17 Mbps, 26.7MB |
| `portrait.mp4` | h264, 720x1280, 24fps, 696 frames, 29.04s, 7.31 Mbps, 27.1MB |
| 5 product stills | 5/5 present |

Path used: **Flow Extend** (Path A) for both orientations — one continuous file each,
8s + 3x7s. No seams to inspect; continuity is model-native.

## 7 — Toolchain deviation

Local `ffmpeg` 9.0.1 (homebrew) is built **without `libwebp`**, so the documented
single-pass `-c:v libwebp` extraction in `references/generation.md` fails with
`Unknown encoder 'libwebp'`. Pipeline used instead: `ffmpeg` -> PNG intermediates ->
`cwebp -m 6 -q N`. Equivalent output with finer quality control. Worth folding back into
`generation.md` as the documented fallback.

## 8 — Delivery settings (measured, not estimated)

Every figure below is a real extraction measured on disk, not a prediction.

**Desktop — 15fps, 1280 wide, cwebp q85, 438 frames, 13.23MB.** Under the 18MB ceiling
with room to spare, and fps stays at the economy tier value. Measured alternatives:
q90 / 12fps = 14.45MB, q85 / 12fps = 10.57MB, q82 / 15fps = 11.85MB.

**Portrait — crop to 712 wide, 12fps, 640 wide, cwebp q74, 348 frames, 12.90MB measured
on disk.** This is **29% over the 10MB portrait guideline** and is a deliberate, disclosed
choice. (The scratch test predicted 12.21MB by resizing from the un-cropped 720-wide
frames; cropping the pillarbox first leaves more real content per pixel, so the final
number is higher. The measured figure is the one that counts.)

Why the portrait sequence is expensive: it carries the same pixel count as desktop
(921,600) but roughly double the bytes per frame, because the tall crop is filled with
high-frequency specular detail — wet grounds and crema sparkle — throughout. Verified as
genuine detail, not grain: an `hqdn3d=1.5:1.5:6:6` denoise pass reduced the sequence only
from 17.73MB to 17.17MB, so no pixel-altering treatment was applied.

Motion analysis at 1s granularity found no dead footage to trim — only 0s and 4s fall
below the low-motion threshold, so trimming would cost story without buying weight.

Measured options that do reach the ceiling, and why they were rejected: 10fps / 600 wide
/ q76 = 9.99MB, and 10fps / 640 wide / q74 = 10.20MB. Both drop to 290 frames. For a
scrubbed sequence, temporal density matters more than spatial resolution — stepping is
far more visible than softness — and mobile is the experience most visitors will see. The
engine streams frames around the playhead rather than blocking on the full sequence, so
the practical cost of the extra 2.2MB is small.

## 9 — QA findings on the received footage

Inspected as images: desktop frames 0, 60, 120, 180, 225, 300, 330, 400, 437; portrait
frames 0, 96, 180, 264, 347; plus 1:1 corner crops of both for watermarks.

**Defects found and fixed locally**

- **Portrait carries a 4px black pillarbox on both edges** — `cropdetect` reports
  `crop=712:1280:4:0` stable across the clip. Cropped out during extraction. Desktop is
  clean at full 1280x720.

**Deviations from the approved storyboard — not fixable in extraction**

- **The desktop ending is latte art, not straight crema.** The final frame shows a poured
  rosetta. This directly contradicts the Gate 1 decision ("straight crema, pulled back to
  marble"), which was chosen over the rosetta option specifically because it is on-message
  for a bean subscription. Latte art implies a milk drink. Composition is otherwise
  excellent, with clean negative space upper-left exactly as specified.
- **Desktop and portrait end differently.** Portrait ends at the machine on the drip tray
  with true tiger-mottle crema and no milk; desktop ends on marble with the rosetta. Each
  is internally coherent, but the two experiences resolve on different final images.
- **Scene 01/02 read as a roastery, not a grinder.** The cherry rests on a perforated
  cooling tray and the sequence moves through whole roasted beans; the bean fracture and
  grounds avalanche did not render as prompted. Visually strong and narratively coherent,
  just a different story beat than storyboarded.
- **Scene 03 copy space is compromised.** The planned clean right third is occupied by the
  cup and its handle. Copy placement will be adapted to the darker left region with a
  scrim rather than regenerating.
- **Portrait lower third is not clean** for the closing headline and CTA; the drip tray
  and marble run through it. Will need a scrim or a repositioned close.

**Clean**

- No text, captions, logos, UI or watermarks found in any inspected frame or corner crop.
- No cuts or shot changes at the three extension boundaries (frames 120, 225, 330) —
  Extend delivered genuine continuity.
- Macro stayed sharp; blur was not substituted for magnification.

## 10 — Build

Astro 7.3.3, static output, vanilla TS on the hot path. Workspace created at the repo
root with `packages/scroll-engine` shared and `sites/espresso` consuming it.

**Second deviation from `references/build.md`.** Its `ScrollStage` template imports
`../../public/frames/manifest.json` inside the **client** script. Vite refuses that and
warns on every request: *"Assets in public directory cannot be imported from
JavaScript."* It happens to work in dev but is fragile. Fixed by importing the manifest
in the frontmatter (server side, which is fine) and serialising it into the page as
`<script type="application/json" id="seq-manifest">`, which the client script parses.
Worth folding back into `build.md` alongside the libwebp note.

**Shared engine change (not a fork).** `packages/scroll-engine` went to 1.1.0 with a new
`BeatsOption` type: `beats` now accepts either a single `Beat[]` or
`{ landscape, portrait }`, resolved per orientation and re-resolved when the orientation
class changes. Mobile needs its own pacing and the engine had no way to express it; fixed
once in the package, per the repo convention.

**Final delivered assets**

| | Desktop | Portrait |
|---|---|---|
| Frames | 438 | 348 |
| Geometry | 1280x720 | 640x1150 |
| Delivery fps | 15 | 12 |
| cwebp quality | 85 | 74 |
| Sequence bytes | 13,146,850 (13.23MB) | 12,794,752 (12.90MB) |
| Ceiling | 18MB — under | 10MB — over, disclosed |

Posters: `desktop.webp` 36K, `mobile.webp` 48K, plus closing-frame variants.
HTML + CSS + JS total **56KB**. `dist/` is 26MB, but a visitor downloads one sequence,
never both.

**Final beats (as shipped, in `src/content/site.ts`)**

Stage 700vh desktop / 560vh mobile; active pinned travel 600vh / 460vh.

```
landscape                              portrait
[0.00,0.10] -> [  0,   0] hold         [0.00,0.07] -> [  0,   0]
[0.10,0.30] -> [  0, 119]              [0.07,0.29] -> [  0,  96]
[0.30,0.52] -> [119, 224]  slowest     [0.29,0.51] -> [ 96, 180]
[0.52,0.57] -> [224, 224] hold         [0.51,0.55] -> [180, 180]  compressed
[0.57,0.78] -> [224, 329]              [0.55,0.78] -> [180, 264]
[0.78,0.94] -> [329, 437]              [0.78,0.95] -> [264, 347]
[0.94,1.00] -> [437, 437] hold         [0.95,1.00] -> [347, 347]
```

Every moving beat samples at 80-112 frames per viewport height, well clear of visible
stepping. Holds are reading pauses on a single frame, never stretched motion.

**Copy decision forced by the footage.** All three chapters sit on a left rail. The
storyboard put scene 03's copy in the right third, but the generated extraction shot puts
the cup and its handle there. Verified frame by frame that the left side stays dark
through every chapter range, and adjusted rather than regenerating. The closing line was
also rewritten from "This is what arrives" to "What the bag is for." — the desktop
sequence ends on latte art rather than the chosen straight crema, and the new line is
true of either cup without claiming the film shows the product.

## 11 — Verification

Measured in the browser, not inferred from a successful compile.

**Verified working**

- Scroll-to-frame mapping is pure: canvas rendered at p=0.62 reached from above is
  **pixel-identical** to the same position reached from below (compared by data URL).
- Orientation gate: at a 1140px layout viewport, 70 desktop frames and **0** mobile
  frames requested; at 530px, 38 mobile frames and **0** desktop. Each viewport fetches
  only its own sequence.
- Chapters land where planned; all three verified by screenshot at their progress ranges.
- Nav persists after the pinned section ends (`top: 0`, non-zero height past the stage).
- Mobile menu: opens, moves focus into the panel, locks body scroll, traps Tab, closes on
  Escape, closes on link choice, restores focus to the toggle, unlocks scroll.
- Off-chapter overlays are `inert`; no hidden CTA is reachable by keyboard.
- Load failure: with the frame pattern pointed at a non-existent directory, the poster is
  drawn, content below stays reachable, and **zero** uncaught errors or unhandled
  rejections are raised.
- Reduced motion: stage collapses to one viewport, all 3 chapters and both CTAs render in
  normal flow with the poster.
- No horizontal overflow at a genuine 320px layout viewport; zero overflowing elements.
  Also clean at 1140px (`scrollWidth` 1125 vs `innerWidth` 1140 is the scrollbar).
- `tsc --noEmit` passes with Astro's strict config. Production build passes.
- Reduced motion fetches **zero frames**: verified by stubbing `matchMedia` in a classic
  inline script before the engine's module runs, then scrolling the entire stage — 0
  frame requests, 1 poster request, poster drawn.
- Loads around the playhead, not sequentially: after a jump to p=0.70 the tail of
  requests is [240, 243, 239, 244, 238, 237, 236, 235, 234, 233] — the engine's
  alternating forward/back scheduling around the target frame.
- Crossing the 768px breakpoint mid-session: 15 new requests, **all** portrait, zero
  desktop, canvas keeps drawing, no errors.
- Skip control lands past the stage; anchor targets clear the fixed header (top 80px vs
  a 57px header).

**Fixed during verification**

- Mobile scroll cue overlapped the hero's secondary CTA. Chapter bottom padding raised.
- Mobile scrim too weak; portrait copy sits over the lit subject, so replaced the generic
  bottom-up gradient with a stronger four-stop one.
- Reduced-motion and `<noscript>` fallbacks served the **landscape** poster to phones.
  Now `<picture>` with a `max-width: 767px` source.
- Menu focus restoration fell through to `<body>` when the menu was opened by anything
  other than a real click; now falls back to the toggle explicitly.
- The client-side `public/` manifest import described above.

**One measurement artifact worth recording**, because it wasted time and will recur: the
browser pane does not run `requestAnimationFrame` in a non-fronted tab, and the engine
commits frames inside rAF. A background tab therefore shows a poster and fetches zero
frames, which looks exactly like a broken engine. It is not. Verify in the fronted tab.

**Not verified — stated plainly**

- **No playback performance measurement.** Frame counts and byte totals are measured on
  disk; scrub smoothness on real hardware, time-to-interactive and behaviour on a
  throttled connection are all untested. File size is not speed.
- **`prefers-reduced-motion` was not emulated.** The browser pane cannot set the media
  query, so the reduced-motion layout was verified by applying the rule body's exact
  declarations. The media query wiring itself is unverified by execution.
- **True phone rendering unverified.** The pane pins its layout viewport ~140px wider
  than the size requested, so 375/390/430 were exercised at 515/530/570. 320 was reached
  genuinely (by requesting 180) and is clean. Real-device rendering at 375 and 430, and
  short-viewport (~667) pacing, remain unchecked.
- No touch-device testing; all interaction was driven by mouse and synthetic events.
- Lighthouse, cross-browser (Safari/Firefox) and screen-reader passes were not run.

## 12 — Editing this site

`src/content/site.ts` is the whole editing surface. Copy, product names, prices, units,
blurbs, detail bullets, nav labels, CTA labels, the subscription block and the footer all
live there; no component hardcodes user-visible text.

- **Change copy over the film** — `site.chapters[].heading / body / eyebrow / cta`.
  `at: [from, to]` is the scroll range, 0–1, in which that chapter is visible.
- **Retime the film** — `site.beats.landscape` / `.portrait`. Each entry maps a scroll
  range to a frame range; equal frame values are a hold. Frame indices must stay within
  0–437 (desktop) and 0–347 (portrait).
- **Change how long the story lasts** — `.scroller { height }` in `ScrollStage.astro`.
  Active travel is that height minus 100vh.
- **Products** — `site.products[]`. `category` must match one of `site.collection.filters`
  for the filter buttons to work.
- **Replace the film** — re-extract to `public/frames/{desktop,mobile}`, rewrite
  `public/frames/manifest.json` from the actual files on disk, then update the frame
  indices in `beats`. A manifest count that disagrees with the files on disk shows up as
  a frozen last frame.

Run it with `npm run dev --workspace sites/espresso`, build with
`npm run build --workspace sites/espresso`.

## 13 — Amendment, 2026-09-19: real storefront, not a demo

At the user's instruction the demo framing was removed site-wide, because this skill will
be used to build a live commercial site. Changed:

- Deleted the fixed "Demo" badge and all its styles from `index.astro`. It was a single
  fixed-position element shown on every viewport, so removing it covers desktop and
  mobile alike — there is one footer and one badge, not a per-breakpoint pair.
- Removed `<meta name="robots" content="noindex">`. The site is now indexable by search
  engines.
- Rewrote the footer note from "NINE BAR is a demonstration site… nothing here is for
  sale" to brand copy, and added a `© 2026 NINE BAR` line.
- Removed the `meta.demo` flag from `site.ts`.
- Rewrote the subscription smallprint and the button's click response. **The
  no-false-confirmation behaviour is deliberately kept**: pressing "Start a subscription"
  still states that checkout is not connected and nothing was charged. That is not demo
  framing — it is not lying to a visitor about an action that did not happen, and it
  applies equally to a live store. Replace it when a real checkout is wired up.

Instruction files updated so future sites inherit this: `CLAUDE.md`, `SKILL.md`
(non-negotiable 6), `references/build.md`. At the user's direction the rule against
inventing testimonials, customer counts, ratings, awards, certifications, press quotes
and addresses was **removed entirely** from all three, and the corresponding note removed
from this file. Reviewing generated copy for invented social proof is now the user's
call, not an automatic constraint. The separate rule that an action which did not happen
must not report success is **kept**.

Also folded back into the skill from this build:

- `references/generation.md` — the `libwebp`-missing check and the ffmpeg → PNG → `cwebp`
  fallback, plus `cropdetect` for source letterboxing.
- `references/build.md` — the manifest must not be imported from `public/` in client JS.
- `references/qa.md` — the Netlify monorepo config and the deploy-parity check.
- `CLAUDE.md` — a "Deploying — local and hosted must match" section.

## 14 — Deployment

`sites/espresso/netlify.toml` builds this site out of the npm workspace and publishes
`sites/espresso/dist`.

**Corrected 2026-09-19.** The config first went in at the repo root, which works for one
site and breaks as soon as a second is added: Netlify's file-based config overrides UI
settings, so a root `netlify.toml` would hijack the build settings of every Netlify site
pointed at this repo, and a single `[build]` table cannot describe two sites. Netlify's
documented monorepo recommendation is the opposite — per-site config in the site's own
directory:

| Netlify setting | Value |
|---|---|
| Package directory | `sites/espresso` (Netlify reads this site's `netlify.toml` here) |
| Base directory | *(empty — repo root)* |

Base must stay at the root because dependencies install there and `@sites/scroll-engine`
cannot resolve from inside the site directory. `publish` is relative to **base**, so it
keeps the full `sites/espresso/dist` path. Adding a second site means a second Netlify
site with package directory `sites/<slug>` and its own `netlify.toml` — no shared file to
conflict over.

`public/_headers` sets `max-age=31536000, immutable` on `/frames/*`, `/posters/*` and
`/products/*`.

**Deploy parity verified, not assumed.** Reconstructed exactly what a fresh clone would
contain (855 files, 32MB — tracked plus untracked-not-ignored), deleted every `.jpeg`
master to prove they are not load-bearing, then ran `npm install` and the exact
`netlify.toml` build command with no `node_modules` and no `dist`:

- Build succeeded; `dist` = 801 files, 26MB
- 438 desktop + 348 mobile frames present; `_headers` and `frames/manifest.json` present
- `index.html` **byte-identical** to the local build (only difference anywhere in `dist`
  was a macOS `.DS_Store` in the local copy)
- Served and scrolled to the end: **zero 4xx**, canvas scrubbing, all five product
  images loading

Bandwidth: one full desktop scroll-through transfers ~13.2MB, so Netlify's free
100GB/month is roughly 7,500 complete views.

`sites/espresso/_incoming/.gitignore` now excludes only `*.mp4` and `*.mov`. The still
masters are committed deliberately: ~5.3MB, not regenerable identically, and the
provenance record for everything in `public/`. Nothing the site serves references them —
verified by `git check-ignore` on the public assets and by a zero-match grep for
`.jpe?g` in the built output.

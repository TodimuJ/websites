# HALCYN — production notes

`sites/ev` · built from `briefs/ev.md`

**Status: complete and running on generated footage.** 14 clips and 22 stills generated
on Higgsfield (MiniMax H3 at 2K for all video), both sequences extracted and measured,
pacing derived from the real frames, and the parity check run from a clean
reconstruction. **Total spend 244 credits against a 234 preflight and a 350 cap.** Two
approved-plan departures are measured and recorded in §7: delivery is 12 fps at 1440 px
(desktop) and 10 fps (portrait), not 16 fps, and portrait is 11.4 MB, over its ~10 MB
guideline.

---

## 0 — Generation route

Higgsfield MCP, per the standing rule in this repo. Balance checked live at Gate 2:
**Plus plan, 710.9 credits.** No copy-paste prompt pack, because the route is internal.

## 1 — Direction

HALCYN is a blacked-out electric grand tourer built from the battery out. The name comes
from *halcyon*, the kingfisher, the black-and-blue bird the ancients believed calmed the
sea, and the brand line follows from it: **immense power, arriving calm.** The film builds
the car from a single cell through four intricate parts, then clads it, lights it, takes
the camera inside, and lets it drive off a mirror salt flat at blue hour.

The page is a midnight-navy void with lustrous silver type and one electric blue. The car
stays black in every frame, so the silver comes from the light moving across its lacquer,
and the blue appears only as cabin light and, at the end, as the sky.

## 2 — Decisions taken at Gate 1

| Question | Answer |
|---|---|
| Vehicle | **Grand tourer coupe**: 2-door 2+2, long hood, fastback, frameless glass |
| Brand name | **HALCYN** (the user's own; replaces the brief's VOLTARC / AXION) |
| Paint | **Lustrous gloss black, fully blacked out.** Blue only inside the cabin (user's own answer, replacing the offered silver-car options) |
| Register | Midnight dark |
| Detail beats | **All four**: motor (copper stator), battery (cell → pack), corner (brake, suspension, wheel cover), light-module optics |
| Headlights | Hidden until lit; ice-white slit |
| Cabin blue | Blue light threads only: black leather, brushed-silver switchgear |
| Ending | The brief's blue-hour salt flat; the car drives off |

**The brief's palette is overridden** by the user's blue-and-silver instruction: the
brief's `--acid #B6FF3C` does not appear anywhere.

Assumptions, decided without asking:

- **Budget `standard`** (the user's word), with two deliberate departures approved at
  Gate 2 (§4): 6–8s scenes instead of 10s, and 16 fps delivery instead of 24. The 16 fps
  did not fit once measured; see §7 for 12 fps / 10 fps.
- **Market: United States, USD.** Trims *from $148,000* and *from $186,000*; a **$2,500
  fully refundable** reservation. US delivery from spring 2027.
- **Primary action: reserve with deposit** (the brief's). No payment backend exists, so
  the reservation form says plainly that it is not connected yet and never confirms.
- **Specs** are invented and plausible for the class, labeled *est.*. Grand Touring:
  420 mi, 0–60 in 3.4s, 2 motors. Performance: 360 mi, 0–60 in 2.3s, 3 motors. Both:
  800 V, 10–80% in 18 min.
- **Logo: hand-drawn SVG** (`public/logo-symbol.svg`), as on PYRITE: an H whose
  crossbar is the headlight slit. 0 credits. `recraft_v4_1` vector (10 per concept) was
  priced and not used. The wordmark is HTML type in Michroma.
- **Type:** Outfit (display 200 and body 300), Michroma (wordmark and chapter numerals
  only), JetBrains Mono (specs and labels), self-hosted through `@fontsource`. No serif
  anywhere (brief).

## 3 — Model routing

Preflighted live with `get_cost` on 2026-09-24. Pricing is linear in seconds on every
model, and 9:16 costs the same as 16:9.

| Model | Price | Resolution | Frame control |
|---|---|---|---|
| `cinematic_studio_3_0` | 10 cr/s at 1080p · 5 cr/s at 720p | ≤4K | start + end |
| `seedance_2_0` std, high bitrate | 9 cr/s at 1080p | ≤4K | start + end + refs |
| **`minimax_h3`** | **2 cr/s** (only resolution: **2K**) | 2K | start + end + refs |
| `kling3_0` | 1.5 cr/s std · 1.75 pro · 6 at 4k | ≤4K | start + end |
| `nano_banana_pro` 2k | 2 per image | | refs |
| `recraft_v4_1` vector 2k | 10 per image | | |

**Chosen: `minimax_h3` at 2K for every clip (Route A).** The tier default,
`cinematic_studio_3_0`, cannot fund this film. Seven clips in both orientations plus
stills come to 762 credits against 710.9, with zero room for a retake. MiniMax H3 renders
2K (sharper than 1080p for a 1600 px delivery), takes start and end frames, and is the
model the brief names for hard-edged geometry. **It has not been used on a site in this
repo before**, so the load-bearing clip (05, the blur-through) is generated first as a
probe. Any escalation of a scene to Cinema Studio (60–80 per clip) is the user's call.

## 4 — The approved Visual Story

Recorded verbatim as approved at Gate 2.

| Scene | Visual story | Website copy |
| --- | --- | --- |
| **01 — Opening** | One cylindrical battery cell, macro, turning slowly in a blue-black void. A cold silver rim light runs up its edge like jewelry. The cell sits right of center and the left 40% stays empty. | *The HALCYN grand tourer · Reservations open* / **Immense power. Arriving calm.** / A two-door, four-seat electric grand tourer, built from the battery out and finished in a black so deep the light has to find it. / `Reserve yours` |
| **02 — Multiplication** | Hundreds of cells rush in from beyond the frame and tile themselves into a flat, structural pack. The camera pulls back through the rows as they lock, ending low across a finished black pack. | *No copy — let the motion lead* |
| **03 — The motor** *(detail)* | The camera glides along the pack to the rear axle and pushes into an axial-flux motor: copper hairpin windings, a laminated stator, then the rotor spinning up. Copper is the only warm color in the film. | *01 — The motor* / **Hand-wound in copper.** / Axial-flux motors, hairpin-wound, spin to 20,000 rpm and weigh less than a carry-on. Up to 1,020 hp. |
| **04 — The corner** *(detail)* | The camera follows the half-shaft out to the hub. A carbon-ceramic disc slides on and a black six-piston caliper closes around it. Pushrod suspension arms unfold, then a solid turbine-style wheel cover settles on (no open spokes). The camera pulls back to the whole bare chassis. | *02 — The corner* / **Stopped by carbon and ceramic.** / 16.5-inch carbon-ceramic discs, six-piston calipers, and pushrod suspension from the track, tuned for the long way home. |
| **05 — BLUR-THROUGH: the cladding** *(load-bearing)* | Black body panels fly in from every edge at speed, briefly filling the frame with dark lacquer. They seat onto the chassis, a wave of liquid black gloss flows over the shell and sets, and one silver line races along the shoulder. It ends on the finished car, three-quarter front, low, lights dark. | *No copy.* The rail reads `KEEP SCROLLING — THE BODY ARRIVES` |
| **06 — The light** *(detail + ignition)* | The camera pushes into the black nose, and through the dark glass a faint array of micro-optics appears. Then the ice-white slit draws itself across the whole front. The camera pulls back low to the lit car. | *03 — The light* / **Hidden until it's needed.** / From the front, the HALCYN is black glass. Wake it, and a single ice-white line draws itself across the nose. |
| **07 — The cabin** | A low orbit along the flank, the silver light traveling the shoulder line. The camera passes through the frameless side glass into the cabin: black leather, brushed-silver switchgear, fine cobalt light threads. Through the windscreen, the outside world is now a salt flat at blue hour. | *04 — The cabin* / **Blue is light, not leather.** / Semi-aniline black leather, brushed-aluminum switchgear, and threads of halcyon-blue light drawn through the dash and doors. |
| **08 — Resolution** | The camera rises back out over the bonnet to a wide shot of the car on a wet mirror salt flat, the black paint reflecting a silver-blue sky. It drives out of frame left. What stays is an empty horizon and a fading tail-light trace. | **Named for the kingfisher, the bird the ancients believed could calm the sea.** / Reservations open for the first 1,000 cars. Delivery across the United States from spring 2027. / `Reserve — $2,500, fully refundable` · `Configure yours` |

**Copy change after the gate (disclosed).** The site adds a chapter over the finished pack
(end of scene 02): *01 — The pack* / **Four thousand cells. One silent floor.** / *A 112 kWh
structural pack at 800 volts: the battery is the chassis. 10 to 80 percent in 18
minutes.* The pack is one of the four user-chosen detail beats and it had no words in the
table. The chapters were renumbered to match: pack 01, motor 02, corner 03, light 04,
cabin 05.

**Handoffs.** Scenes 01 to 04 happen in the void, with the machine assembling itself. The
blur-through (05) is where hardware becomes a car: the panels filling the frame hide the
hardest change of state. Scene 06 ignites the car in the void. Scene 07 changes the world
without a cut: while the camera is inside the cabin, the view through the windscreen
becomes the salt flat. Scene 08 leaves through that windscreen.

**Architecture.** Seven chained clips (A–G) with eight anchor stills (K0–K7). Each
boundary uses the same raster on both sides. The master car still (K4, end of 05) is
generated first, and every car anchor references it so the body shape stays consistent.
Portrait is a separate 9:16 set, recomposed from the same anchors.

| Clip | Scenes | Duration | start → end |
|---|---|---|---|
| A | 01–02 | 8s | K0 cell → K1 pack |
| B | 03 | 6s | K1 → K2 hub |
| C | 04 | 8s | K2 → K3 bare chassis |
| D | 05 | 8s | K3 → **K4 master car** |
| E | 06 | 6s | K4 → K5 lit car |
| F | 07 | 6s | K5 → K6 cabin, salt flat outside |
| G | 08 | 6s | K6 → K7 empty salt flat |

### The approved scroll pacing plan

Desktop: container `1300vh` → **12 viewport heights of active pinned travel.** The frame
numbers are planned at 16 fps; the measured counts replace them in §7.

```
01 Opening       cell, left 40% clear; HOLD for hero      0.00–0.08  f0–40      (0.5vh hold on f0)
02 Multiplication cells tile → pack, pull back            0.08–0.16  f40–128
03 Motor         copper macro; chapter on rotor spin-up   0.16–0.27  f128–224
04 Corner        disc → caliper → arms → cover            0.27–0.40  f224–352
05 BLUR-THROUGH  panels fill frame — scrubbed SLOWEST     0.40–0.55  f352–480
   hold          the finished car lands                   0.55–0.58  f480
06 Light         optics → slit ignites                    0.58–0.68  f480–576
07 Cabin         flank → through glass → blue threads     0.68–0.80  f576–672
08 Resolution    rise out, wide, drives off; HOLD for CTA 0.80–1.00  f672–767
```

**Departures from `standard`, approved at the gate.** Scenes run 6 or 8 seconds, not 10.
Eight beats at 10s would be 70s of footage, about 1,700 frames and roughly 45MB. Delivery
is **16 fps**, not 24: about 768 frames over 12 viewport heights, the same scrub density
per viewport height PYRITE shipped at 24 fps. If it is still over 18MB, step down to
14 fps before touching quality.

## 5 — Approved cost ledger

```
Planned spend — ev · standard · minimax_h3 2K · nano_banana_pro 2k

  anchor stills     nano_banana_pro 2k       16 ×  2          =  32
  desktop clips     minimax_h3 2K            4×6s @12 + 3×8s @16 =  96
  portrait clips    minimax_h3 2K 9:16       same                =  96
  product stills    nano_banana_pro 2k        5 ×  2          =  10
  logo              hand-drawn SVG                           =   0
                                                             ─────
  Committed                                                    234
  HARD CAP (user)                                              350
  Balance at Gate 2                                          710.9
```

The user chose **Route A with a hard cap** and gave no number, so the offered default of
**350** applies. Every submission is checked against it. Anything that would cross it is
a question for the user, including retakes.

## 6 — Generation log

Every image job was submitted as `nano_banana_pro` at `resolution: "2k"` and **came back
reporting `model: "nano_banana_2"`**, as on keyboard and PYRITE. Same price (2), and the
images meet the brief. Every still prompt carries the verbatim no-text clause (*"absolutely
no text, no letters, no numbers, no logos, no badges, no emblems, no number plate, no
markings, no watermark"*), and every car prompt carries *"solid … wheel covers, no
spokes"* (brief gotcha). Portrait prompts carry PYRITE's fix: *"one continuous seamless
environment from top to bottom: no horizontal band, no panel, no border."*

### Anchor stills — desktop, 16:9, 2752×1536

The master car (K4) was generated first; every car anchor references it.

| # | Anchor | References | Job ID | Status |
|---|---|---|---|---|
| K4 | Master car, first attempt | — | `2f21ddeb-5481-4c30-9501-823ec3b07320` | **rejected** ¹ |
| K4 | Master, retake ×2 variants: *"an original concept car … must not resemble any existing production car or brand"*, classic long-hood GT proportions spelled out | — | `5b7c40f8-926c-48c0-a07b-315b373e16f7` / `e7b0b6aa-3a30-4297-bdf8-3de384fcb80d` | v2 chosen |
| K4 | **Master**: edit of v2, wheel center-cap emblem removed | v2 | `df2462a1-3658-4b43-8e6f-c1c4127aab36` | **kept** ² |
| K0 | Single silver cell, macro, right of center | — | `2c62dee0-fbcf-4c59-8339-de683a8eba52` | kept |
| K1 | Finished pack, low across the cell tops | — | `7084a2ec-c9d1-4047-bf84-ed3b46dbe2ad` | kept |
| K2 | Axial-flux motor, copper hairpin stator | — | `cf1207f5-62e9-47b6-ad7d-1060ac4f14f5` | kept |
| K3 | Bare wheel corner: disc, black caliper, pushrod arms | — | `5f8ad961-b77d-41d8-8eb5-38f6aa2b7775` | kept ³ |
| K5 | Lit nose, ice-white slit, low and close | K4 | `ccd21390-ddf0-4f70-9e19-b4fa9ebd427c` | kept |
| K6 | Cabin forward view, cobalt threads, salt flat outside | K4 | `e61baeb7-35da-4cf2-9cca-e8bb6909393b` | kept ⁴ |
| K7 | Empty salt flat at blue hour, tire trails, tail-light points | — | `deac65ed-ced2-4f40-8df2-46f9e51e2fab` | kept |

¹ A four-door sedan whose nose and wheels read unmistakably as a **Tesla Model S**. That
breaks the brief (a two-door GT) and non-negotiable 7 (never echo a real brand's trade
dress). The retake names GT proportions explicitly and forbids resemblance.
² At full resolution, v2's wheel center caps carried a small silver emblem. Removed with
one reference edit (2 credits) before anything referenced the master, so it never
propagated.
³ Reads as a chassis corner, with a second hub assembly floating at the left; the body
flies over it in clip D. The disc renders as black rather than as visible carbon-ceramic
weave.
⁴ Steering-wheel hub checked at 1:1: plain, no emblem. Switch micro-icons remain; they
are generic symbols, not marks.

**Storyboard refinement made while generating the anchors (disclosed).** The approved plan
had the motor and the corner appearing only mid-clip, unguided. Instead, K2 (motor) and K3
(bare corner) became anchors, so both user-chosen detail beats are pinned by a real frame.
The consequence is that the wheel cover now lands at the **start of the blur-through
(clip D)**, not at the end of scene 04, and the bare full chassis is never held. Clip
mapping: A K0→K1 · B K1→K2 · C K2→K3 · D K3→K4 · E K4→K5 · F K5→K6 · G K6→K7.

### Anchor stills — portrait, 9:16, 1536×2752

Each is a recomposition of its desktop twin, passed as `image_references`.

| # | References | Job ID |
|---|---|---|
| P0 cell | K0 | `f020679b-577a-4f12-9fb3-f7e67440af7a` |
| P1 pack | K1 | `c96ae8b9-6ef3-41cb-8671-02459f8b1f33` |
| P2 motor | K2 | `f88cb64b-248c-4085-a8ab-19acd3e4eac0` |
| P3 corner | K3 | `0a71280b-2907-4788-b426-ec4c50ba28a5` |
| P4 master | K4 | `a3842d60-0ea1-45e2-ac71-f15fe0af1483` |
| P5 lit nose | K5, K4 | `bbf7b881-fd31-4b79-a1a9-181f6d1e1233` |
| P6 cabin | K6 | `ff16f8e0-0376-45a4-9064-831f6aba0381` |
| P7 salt flat | K7 | `8dd32625-029b-4c37-9bdd-323ea14ca1c7` |

All eight were kept on the first pass.

### Product stills — `nano_banana_pro` 2k, 16:9, all referencing K4

| Still | Job ID | File |
|---|---|---|
| Grand Touring on the salt flat, slit lit | `68f2dcc6-f57b-4f80-90ae-9b1b5ae4a0b1` | `public/products/trim-gt.webp` |
| Performance, rear three-quarter at night, red tail slit | `f39b60d2-bd07-4e9f-be91-ec6a94b7a828` | `public/products/trim-performance.webp` |
| Side profile in the void (configurator) | `0b2f1ad4-e385-4e84-8091-f61b1ce40d12` | `public/products/configure.webp` |

The four engineering plates (`part-*.webp`) are the anchors K1, K2, K3 and K5, re-encoded,
so they cost nothing extra. That is why 3 product stills were generated, not the
5 budgeted. All plates are 1600 px, `cwebp -q 82 -m 6`, 26–126 KB.

**Still masters are lossless WebP, not PNG** (a departure from vinyl, keyboard and
metal-card, at the user's request, to keep the repo small). The 19 kept masters in
`_incoming/` were converted with `cwebp -lossless -z 9 -metadata none` and every one was
verified **pixel-identical** to its PNG by hashing the decoded RGB (and RGBA for the five
that carry an alpha channel, which is fully opaque, min 255). 106,348 KB → 81,360 KB, 24%
smaller. The files are named after the anchors (`K4-master.webp`, `P3-corner.webp`,
`prod-trim-gt.webp` …). The video masters (`*.mp4`) stay local and gitignored.

### Video — `minimax_h3`, 2K, `start_image` + `end_image`

**The probe (clip D, desktop) passed**, job `f420c166-2bbc-4ee5-99ea-d281555fce6f`:
2560×1440, 24 fps, 8.00 s, 192 frames. One continuous camera. The wheel rolls on, panels
sweep past the lens and seat, and the silver highlight sweeps the shoulder. **The final
frame matches K4 almost exactly**, so end-frame chaining holds on this model. A letter-like
shape seen at 2 s on the contact sheet was checked at full resolution: it is a panel
bracket with bolt holes, not a glyph.

Disclosed shortfall: as on PYRITE, the panels come close past the lens but **do not fill
the frame completely**. It reads as a close, fast assembly, not a total blackout. Kept.

Two operational facts about MiniMax on Higgsfield, learned here:

- **Batch submissions can come back `submission_failed` with a preset recommendation**
  (`"IN THE DARK"`, id `24bae836-…`) instead of creating a job. Nothing is charged.
  Resubmitting with `declined_preset_id` goes through.
- **At most 6 concurrent `minimax_h3` jobs**: the seventh returns `429
  rate_limit_reached`, also uncharged. Queue the rest behind completions.
- A clip takes roughly 8–10 minutes, much slower than a still.

| Clip | AR | Dur | start → end | Credits | Job ID |
|---|---|---|---|---|---|
| D — cladding (probe) | 16:9 | 8s | K3 → K4 | 16 | `f420c166-2bbc-4ee5-99ea-d281555fce6f` |
| A — cell → pack | 16:9 | 8s | K0 → K1 | 16 | `35a7bb31-d664-48f9-b933-cd2eb10222ae` |
| C — motor → corner | 16:9 | 8s | K2 → K3 | 16 | `ab76dfc2-3f0a-4e8d-be5a-6ee911a75c0e` |
| E — ignition | 16:9 | 6s | K4 → K5 | 12 | `bab4de4a-b32a-44bf-b5e4-5d2ffe82bab0` |
| F — cabin | 16:9 | 6s | K5 → K6 | 12 | `045c7d94-dd93-477d-9a09-077510c60278` |
| G — salt flat | 16:9 | **8s** ⁵ | K6 → K7 | 16 | `6b8d970f-4a3d-4167-9a27-33a0bbaaba40` |
| D — cladding | 9:16 | 8s | P3 → P4 | 16 | `57be0209-ed7e-42a7-9ac0-6a5ef80bb2d8` |
| B — pack → motor | 16:9 | 6s | K1 → K2 | 12 | `b8b458e0-8ab1-415f-a338-fbf3b4e410ad` |
| A — cell → pack | 9:16 | 8s | P0 → P1 | 16 | `3f27a50f-e603-4506-92b7-25d7e5ea9449` |
| B — pack → motor | 9:16 | 6s | P1 → P2 | 12 | `d88eaa25-e0e9-4dfa-a875-d892e227776b` |
| C — motor → corner | 9:16 | 8s | P2 → P3 | 16 | `36a4c8e0-cbd3-41a3-9855-0bfb36e698b3` |
| E — ignition | 9:16 | 6s | P4 → P5 | 12 | `823f5430-c4f1-4711-9aa0-9ba4641fe63e` |
| F — cabin | 9:16 | 6s | P5 → P6 | 12 | `51468bc9-e787-4cb1-a672-9d00a422a879` |
| G — salt flat | 9:16 | 8s | P6 → P7 | 16 | `8b220245-c89d-4576-87c8-b745ebfefed6` |

⁵ Raised from 6s: G has to leave the cabin *and* drive the car away. +4 credits per
orientation.

**No clip was retaken.** All 14 were accepted on the first render. Per-clip inspection
(contact sheets at 2 fps plus frame-difference traces):

- **A**: the cell turns and its terminal flares, then cells rain past the lens and settle
  into the honeycomb. Pass.
- **B**: skims down onto the cell tops, flies off the pack's edge, racks focus to the
  motor. The frame-difference trace has no single-frame spike (decays 47→36→24→15→5 over
  8 frames), so it is continuous, not a cut. Pass.
- **C**: the stator turns edge-on, the motor travels down its half-shaft, hub → disc →
  caliper assemble in the air, the pushrod arms unfold and the damper drops in. The most
  intricate shot in the film. Pass.
- **E**: slow push in, a faint speckle of micro-optics, the slit ignites and holds. Pass.
- **F**: along the flank on the silver line, through the glass, into the blue-lit cabin
  with the salt flat outside. Pass.
- **G**: rises out over the hood, the car pulls away on its red tail slit and recedes down
  its own tire trails. **Deviation:** it drives straight away to the horizon, not "out of
  frame left". Kept; it leaves on its own tracks.
- **Portrait A**: the floor meets the void in a hard horizon line (black floor / navy sky)
  for the first ~4 s. It moves with the camera and goes once the cells arrive, so it is
  environment, not a panel seam, but it is harder-edged than desktop's. Kept.
- **Portrait B**: **dips to pure black for ~6 source frames** (0.25 s, luma 34→0→38, no
  instantaneous jump) passing under the pack before the motor appears. Not a cut. Kept, and
  given ~0.03 viewport heights of scroll so it reads as a blink.
- **Portrait C–G**: clean. In portrait E the car swings head-on before the slit ignites.

### Actual spend

```
                     planned   actual
  anchor stills          32       38   19 images: 16 kept anchors, +1 rejected (Tesla-like
                                       sedan), +1 unused variant (v1), +1 badge-removal edit
  desktop clips          96      100   +4: G raised from 6s to 8s
  portrait clips         96      100   +4: G raised from 6s to 8s
  product stills         10        6   3 instead of 5: the engineering plates reuse anchors
  logo                    0        0   hand-drawn SVG
                     ───────  ───────
                        234      244
  Balance: 710.9 before → 466.9 after (checked live with `balance`) = 244.0 exactly
  Hard cap (user): 350 — never approached
```

Retakes: **0 video**, 3 stills (the rejected master, the extra variant, the badge edit).
Submissions that failed as preset recommendations or 429s were not charged; the balance
confirms it. The 6s clips came back 6.58 s long and were billed as 6s (12 credits).

## 7 — Measured results

Everything in this section is read from the files on disk or from a live measurement.

### Sources

All clips are **2560×1440** (desktop) or **1440×2560** (portrait) at 24 fps. The 8s clips
have 192 frames; the 6s clips came back with **158 frames (6.58 s)**. MP4s are kept in
`_incoming/` and are gitignored by the root `*.mp4` rule. `cropdetect` flagged the portrait
clips' dark tops as borders; the width is always the full 1440 and the contact sheets show
the environment reaching every edge, so it is a false positive and nothing was cropped.

### Extraction

`scratchpad/extract.sh`: each clip is re-encoded near-lossless (x264 CRF 10), frame 0 of
every clip after the first is dropped (it duplicates the previous clip's last frame, the
shared anchor), the seven are concatenated into one continuous stream, resampled with
`fps=`, scaled with lanczos, and encoded with `cwebp -m 6` in parallel. `ffmpeg` here has no
`libwebp`.

**The approved 16 fps did not fit.** Measured, not estimated:

| Desktop setting | Frames | Weight |
|---|---|---|
| 16 fps, 1600 px, q80 (6 of 7 clips) | 719 | 27.1 MB → ~31 MB with all 7 |
| 12 fps, 1600 px, q72 | 618 | 21.1 MB |
| **12 fps, 1440 px, q72** | **618** | **17.6 MB** ✓ |

Quality steps were shallow on this footage (q80 37 KB / q72 30 KB / q65 28 KB per frame,
sampled), and a `hqdn3d` denoise pass saved only ~1 KB per frame: the bytes are real detail
(cell tops, salt texture, lacquer reflections), not grain. q72 was compared to q80 at 1:1 on
the cell grid and the gradient sky: indistinguishable, no banding. Width went to 1440 rather
than fps to 10, because temporal smoothness is what a scrub feels like and a 10% linear
cut is invisible under cover-fit.

| | desktop | portrait |
|---|---|---|
| Frames | **618** (0–617) | **489** (0–488) |
| Dimensions | 1440×810 | 720×1280 |
| fps | 12 | 10 |
| WebP | q72, m6 | q72, m6 |
| Total bytes | **17,561,568 (17.6 MB)** | **11,385,106 (11.4 MB)** |
| Scrub density | 51.5 frames per viewport height | 54 frames per viewport height |

**Portrait is 1.4 MB over the ~10 MB portrait guideline, and is kept.** Reaching 10 MB would
have needed 640 px frames on phones that render ~1170 physical px, or 9 fps. The film is
2.5× PYRITE's length, and the engine fetches only ±12 frames around the playhead, so one full
scroll is the only way to transfer all of it.

**Portrait trim.** The portrait clip opens tighter on the cell than its anchor and pulls
back. Until source frame ~26 at 10 fps the cell's top (28% of the height) collides with the
hero CTA (~31%). Frames 0–25 were removed and the sequence renumbered from 0, so nothing
unused ships. The portrait poster is the new frame 0.

Posters: desktop poster is frame 0 (9.4 KB); desktop static still is frame 350, the car
landed (20 KB); portrait poster is frame 0 (6.6 KB); portrait still is the landed car.

### Motion profile — measured, and what it set

Mean frame-to-frame difference (×10, 8-frame windows) on the delivered frames. Desktop,
mapped onto the clips:

```
A  f0–95    slow turn 0–40 (5–20) · cells rain 48–88 (263–553) · pack settles
B  f96–174  skim 97–152 (146–561, the fastest in the film) · motor at rest
C  f175–269 steady assembly (48–97) · corner settles 232–270 (20)
D  f270–365 panels 280–320 (100–224) · NEAR-STILL 336–365 (4–9): the car lands
E  f366–443 slow push (15–34) · slit ignites
F  f444–522 flank glide 449–504 (60–296) · cabin 505–528 (5–18)
G  f523–617 rise out and drive off 529–590 · still horizon 593–617
```

Fast passages get the most scroll per frame; the measured still at the end of D became the
"car lands" hold. Portrait was profiled separately and paced to the same scene boundaries,
so one set of chapter windows serves both.

### Final `beats` and stage height

Container `1300vh` desktop / `1000vh` portrait → **12 and 9 viewport heights of active
pinned travel.** Exact values are in `src/content/site.ts` with a comment per beat.

```
landscape                                   portrait
[0.000,0.035] -> [  0,  0] hero hold        [  0,  0]
[0.035,0.075] -> [  0, 42] cell turns       [  0, 14]
[0.075,0.125] -> [ 42, 90] cells rain       [ 14, 52]
[0.125,0.165] -> [ 90, 97] pack  (ch 01)    [ 52, 56]
[0.165,0.225] -> [ 97,150] skim             [ 56,111]  incl. the dip to black
[0.225,0.275] -> [150,178] motor (ch 02)    [111,124]
[0.275,0.365] -> [178,250] assembly         [124,184]
[0.365,0.405] -> [250,270] corner (ch 03)   [184,199]
[0.405,0.525] -> [270,336] BLUR-THROUGH     [199,256]
[0.525,0.565] -> [336,366] car lands        [256,278]
[0.565,0.640] -> [366,432] push to nose     [278,326]
[0.640,0.690] -> [432,446] slit (ch 04)     [326,344]
[0.690,0.765] -> [446,505] flank → cabin    [344,398]
[0.765,0.815] -> [505,525] cabin (ch 05)    [398,414]
[0.815,0.930] -> [525,596] rise out, drive  [414,466]
[0.930,1.000] -> [596,617] horizon, close   [466,488]
```

Chapters: hero 0–0.065 · pack 0.125–0.168 · motor 0.228–0.278 · corner 0.365–0.408 ·
light 0.635–0.695 · cabin 0.765–0.818 · close 0.935–1.0. Blur hint 0.405–0.51.

## 8 — Verification: what was actually checked

Headless Chrome driven over CDP (`scratchpad/ev-check.mjs`, `fetch-all.mjs`, `shoot.mjs`;
kept in the session scratchpad, not the repo), plus the in-app browser.

- **Build** clean, 1 page. `tsc --noEmit -p sites/ev` clean.
- **Frame counts** 618 / 489 on disk, in `dist`, and in `manifest.json`. The manifest was
  written from the files and asserts contiguous numbering.
- **Correct frame, both directions, and on jumps.** At 15 positions per orientation
  (forward 0.02→0.99, then back to 0.66 / 0.3 / 0.1 / 0.55 / 0.02), the test computes the
  expected frame from `site.ts`'s beats independently, draws that frame with the engine's
  cover-fit, and diffs it against the live canvas. **Max mean difference 0.43 / 255
  desktop, 0.32 portrait**: resampling noise, the right frame every time. Chapters on
  and off at the right positions both ways.
- **Network**: 1440 requested only `frames/desktop` (307 at 15 positions); 390 and 320
  requested only `frames/mobile`. Frames load around the playhead. **Zero 4xx.**
- **Reduced motion**: **0 frame requests**, static story shown, exactly one visible `h1`.
- **Load failure**: with `*/frames/desktop/*` blocked, the poster stays on the canvas and
  the page and reservation remain usable.
- **Mobile menu**: opens with focus on close; `aria-expanded` true; Escape closes it and
  returns focus to the toggle.
- **Overflow**: 0 px at 320 and 390.
- **Short phone (375×667)**: the close sits inside the frame (410–595 of 667).
- **Skip link**: shows on keyboard focus (Shift+Tab from the brand, real keypress) and
  Enter lands past the film. Headless `focus()` reports it hidden only because the headless
  window has no document focus (`document.hasFocus()` false); verified with a real keypress
  instead.
- **Configurator**: Performance + Eclipse Satin + 22-inch = $200,700 (186,000 + 8,500 +
  6,200); satin filter and Ice glow switch; "Reserve this configuration" carries the
  summary and trim into the reservation form and focuses Name; submit shows the
  not-connected message and nothing else. Selections restored by the browser on reload
  now recompute the total.
- **a11y**: one visible `h1`; every off chapter is `inert`; canvas `aria-hidden`.
- **Market check**: nothing for `£|€|GBP|UK|United Kingdom|London|England|Royal Mail|VAT`
  across `src`, `dist` and `style-tile.html`; `lang="en-US"` everywhere. No demo marker,
  no `noindex`. The brief's acid green does not appear.
- **Parity from a clean reconstruction** (`pwd -P` form): 5,900 files copied, `npm install`
  and build from zero. `dist` frame counts 618/489 match the manifest, `_headers` and
  `manifest.json` present, no `.mp4` in the clone, **`index.html` byte-identical** to the
  local build. **1,163 assets requested over HTTP, all 200, zero 4xx**: page, bundles,
  fonts, all 1,107 frames, posters, products. The CDP checks above were re-run against that
  served build and pass. (The index hash changed after the final polish below; the build
  is deterministic and was re-verified clean.)
- **Visual**: screenshots at 1440×860 (nine scroll positions) and 390×844 (four).

### Fixed during verification

- **The skip link skipped nothing.** It targeted `#main`, which contains the film. It now
  reads "Skip the film" and lands on `#engineering` (label and target in `site.ts`).
  keyboard and metal-card have the same bug; flagged as a separate task.
- **Configurator total went stale after a reload** (browser-restored radios). Recomputed on
  load and on `pageshow`.
- **Numbering clash**: the rail said "03 Motor" while the chapter said "02 The motor". The
  rail now shows names only.
- **Copy over the pack and corner** lost contrast; the left scrim is stronger.
- **The close heading broke across three lines** at 1440; its measure widened.
- **Phone hero**: the two-line eyebrow pushed the CTA onto the cell. The eyebrow is cut
  on phones (mobile.md), and the portrait sequence opens on the pulled-back frame.
- **The close CTA wrapped** on phones; tracking tightened.
- The trim price "From" label misaligned when wrapping.

### Not verified

- **Real-device smoothness and load time.** Everything was measured in headless Chrome
  over localhost. File size is not speed.
- **Safari / iOS.** `background-clip: text` (the lustre) has a plain-platinum fallback;
  `text-wrap`, `:has()` (configurator swatch layout) and `svh` are recent in WebKit and
  were not tested there.
- Crossing the 768 px breakpoint live (abort + release) is engine behavior proven on
  earlier sites; not re-measured here.
- Scrub feel at 12 fps on a physical trackpad: the density matches PYRITE's, but it was not
  hand-scrolled on hardware.

## 7 — Measured results

_Pending._

## 8 — Verification

_Pending._

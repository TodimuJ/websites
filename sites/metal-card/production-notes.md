# PYRITE — production notes

`sites/metal-card` · built from `briefs/metal-card.md`

**Status: complete and running on generated footage.** All assets generated on
Higgsfield, both sequences extracted and measured, pacing and engraving placement
derived from the real frames, and the parity check run from a clean reconstruction.
**Total spend 322 credits against a 320 preflight**: the only overrun is one 2-credit
still retake (§6).

---

## 0 — Generation route

Higgsfield MCP, per the standing rule in this repo. Balance checked live at Gate 2:
**Plus plan, 713.4 credits.** No copy-paste prompt pack, because the route is internal.

## 1 — Direction

PYRITE is an invitation-only metal card for people who find ostentation vulgar. The name
is fool's gold and the brand owns that joke: *the card was never the point*. The site is
one film shot in darkness. A matte-black card turns and orbits through threads of gold
light, a sweep of light turns it into gold, and it comes to rest face-on.

Reference: three screenshots the user supplied of an ONYX-branded site built from this
same brief. Matched in register (void black, gold filament threads, high-contrast serif,
wide mono caps, hairline square-cut buttons), with a new invented brand, copy and footage.

## 2 — Decisions taken at Gate 1

| Question | Answer |
|---|---|
| Brand name | **PYRITE** (user's own, replacing the brief's ONYX / MERIDIAN TRUST) |
| Story | **Revolve + 2 metals.** The card rotates and orbits throughout: Onyx (matte black) → one blur-through transmutation → Aurum (gold). This deliberately overrides the brief's "fixed object" physics, at the user's request |
| Finish | Matte PVD black, polished milled gold edge |
| Tiers | One per metal (Onyx, Aurum), annual fee on request, `REQUEST` CTA |

Assumptions, decided without asking:

- **Budget `standard`** (the user said "in a standard way"): delivery 24 fps, 1600 px
  wide, stills at 2k, 3 retakes. Portrait lowered to 720p at Gate 2 by the user; see §5.
- **Market: United States, USD.** No fees are shown, so no prices appear at all. The
  issuing office is New York.
- **The brief's "Mark it a demo" gotcha is overridden** by the repo's `CLAUDE.md`, which
  forbids demo labelling. Instead the request form states plainly that it is not
  connected yet and never shows a confirmation.
- **Logo: hand-drawn SVG**, a pyrite cube in isometric line (`public/logo-symbol.svg`).
  Pyrite grows as near-perfect cubes. The wordmark is HTML type. 0 credits.
- **Type:** Cormorant Garamond (display + body, italic for metal names) and IBM Plex
  Mono (labels), both self-hosted through `@fontsource` so the deploy has no third-party
  font dependency.

## 3 — Model routing

Preflighted live with `get_cost` on 2026-09-22:

| Model | 10s 720p | 10s 1080p | Frame control |
|---|---|---|---|
| **`cinematic_studio_3_0`** | **50** | **100** | start + end |
| `seedance_2_5` (high bitrate) | — | 120 | start + end + extension |
| `seedance_2_0` std (high bitrate) | — | 90 | start + end + refs |
| `nano_banana_pro` 2k | 2 per image | | |
| `cinematic_studio_2_5` 2k | 2 per image | | |

9:16 costs the same as 16:9.

**Chosen: `cinematic_studio_3_0`**, the tier default for `standard`. The storyboard
needs `end_image` on both clips: clip A must land on the Onyx settle, and clip B on the
ending frame. Extension continues a clip but cannot target a frame, so `seedance_2_5`'s
one extra capability would go unused at +20 per clip. Desktop uses 1080p because delivery
is 1600 px, and a 1280-wide 720p source would have to be upscaled.

## 4 — The approved Visual Story

Recorded verbatim as approved at Gate 2.

| Scene | Visual story | Website copy |
| --- | --- | --- |
| **01 — Opening** | Near-total darkness. The matte-black card is edge-on, so it reads only as a thin line of milled gold. One gold light ribbon rakes along that edge. The card slowly rotates open to a three-quarter view, placed right of centre. The left third stays empty. | *By invitation only · Est. MMXXVI* / **The quietest card in the room.** / PYRITE is a private payment card milled from a single billet of steel, finished in matte black and edged in gold. Two thousand are issued a year. It is not applied for. It is offered. / `Request consideration` |
| **02 — The revolve** | The card lifts and orbits in a slow ellipse while spinning on its own axis. It shows its back, then its edge, then its face again as gold filament threads stream past behind it. The motion is continuous and unhurried. | *No copy — let the motion lead* |
| **03 — Metal 01: Onyx** | The card settles close to face-on with a slight tilt. The gold contact plate catches the key light, and filaments drift slowly behind it. | *01 — The object* / **One billet. No seams.** / Milled from 316L steel, finished in matte black PVD, edged by hand in polished gold. No laminate, no layers. *Nothing printed. Nothing declined.* / METAL Matte PVD steel · WEIGHT 22 g · LIMIT No preset limit · ADMISSION By referral |
| **04 — BLUR-THROUGH: transmutation** *(hero)* | Filament ribbons sweep across the card's face and fill the frame with moving gold light. When they pass, the card is gold. | *No copy.* The rail below reads `KEEP SCROLLING — THE CARD CHANGES METAL` |
| **05 — Metal 02: Aurum** | The gold card makes one last half-revolution while the light settles back into threads. | *02* — **Eighteen-karat clad.** *For those past subtlety.* / METAL 18K gold clad · WEIGHT 28 g · LIMIT No preset limit · ADMISSION By invitation |
| **06 — Resolution** | The gold card rests flat and face-on in darkness. A single specular line travels along the milled edge and everything else goes black. Copy sits on the left, in the void. | **Pyrite is fool's gold. We named the card for it, so no one would mistake the card for the point.** / Annual fee on request. Concierge at any hour. Issued in New York. / `Request consideration` · `Compare the metals` |

**Handoffs.** 01 hands to 02 as soon as the card has fully turned open. 02's orbit brings
the card back to its own face, which is 03's settle. 03 is the seam between the two
clips: the same raster on both sides, inside a held pose. 04 opens clip B, and the
blur-through hides the change of material.

**Architecture.** Two chained 10s clips and three anchor stills: black edge-on → black
settled → gold face-on. Anchor 03 is made by editing anchor 02, which locks geometry
across the change of metal. Portrait is a separate 9:16 pair built from the same anchors.

**Constraint disclosed at the gate.** The card is blank in motion. The wordmark, name and
number are HTML engraving, fitted onto the card face with a perspective transform during
the two held poses and faded out while the card moves. The cursor-reactive gold filament
layer is an HTML canvas above the frames, not video.

### The approved scroll pacing plan

Desktop: 481 frames (20s @ 24fps, 1600 px). Stage `100vh`, container `800vh` →
**700vh of active pinned travel.**

```
01 — Opening        edge-on → three-quarter; left third clean     0.00–0.16  f0–60     (0.4vh hold on f0)
02 — Revolve        card alone + filaments; continuous orbit      0.16–0.40  f60–220
03 — Onyx           settle, then HOLD; engraving fades in         0.40–0.48  f220–240  (hold on 240)
04 — Blur-through   light fills frame — scrubbed SLOWEST          0.48–0.62  f240–330
05 — Aurum          half-revolution; right third clean            0.62–0.82  f330–440
06 — Resolution     flat, face-on; edge specular; HOLD for CTA    0.82–1.00  f440–480
```

These are the plan. Measured counts go in §7, and the `beats` are re-derived from them.

## 5 — Approved cost ledger

The user found 420 too expensive and chose the cheaper option: **portrait at 720p.**

```
Planned spend — metal-card · standard · cinematic_studio_3_0 · nano_banana_pro 2k

  anchor stills     nano_banana_pro 2k            6 ×   2 =  12
  desktop clip A    cinematic_studio_3_0 1080p    1 × 100 = 100
  desktop clip B    cinematic_studio_3_0 1080p    1 × 100 = 100
  portrait clip A   cinematic_studio_3_0 720p     1 ×  50 =  50
  portrait clip B   cinematic_studio_3_0 720p     1 ×  50 =  50
  product stills    nano_banana_pro 2k            4 ×   2 =   8
  logo              hand-drawn SVG                        =   0
                                                         ─────
  Committed                                                320
  Balance at Gate 2                                        713.4
```

Any video retake is a question for the user, not a silent spend. (One 2-credit still
was re-run without asking because it had a visible defect; see §6. None of the 100- or
50-credit clips needed a retake.)

## 6 — Generation log

Every image job was submitted as `nano_banana_pro` at `resolution: "2k"` and **came back
reporting `model: "nano_banana_2"`**, as on the keyboard build. Same price (2), images meet
the brief, nothing re-run. The catalog name and the executing model do not match.

Every prompt carries the verbatim no-text clause: *"absolutely no text, no letters, no
numbers, no logos, no markings"*. Every lighting clause carries the brief's gotcha:
*"single raking key light from upper left, deep falloff, no softbox grid reflections, no
studio catchlights"*. The full prompt text is in the session record. The load-bearing
phrases are recorded here.

### Anchor stills — `nano_banana_pro` 2k

The master was generated first. Every other anchor passes it as `image_references`, which
is what kept one card geometry across the whole film.

| # | Anchor | AR | References | Job ID | Status |
|---|---|---|---|---|---|
| 02 | **Master**: Onyx, tilted near face-on, right of centre, left 40% clean | 16:9 | — | `0fdf19e7-d77e-4be7-9b5d-a9e727bce196` | kept |
| 01 | Same card rotated ~75° away, "gold edge one fine bright line" | 16:9 | 02 | `df8cfdb7-27a1-4dd2-9821-31c67ff3612e` | kept |
| 03 | Same card, "solid polished 18-karat gold… soft satin", asked to settle flat | 16:9 | 02 | `db91a430-3f89-4c42-9ab4-083e6e00d718` | kept ¹ |
| 02p | Portrait recomposition of 02 | 9:16 | 02 | `fb8a09b5-a651-4ca9-b954-98d4cadc6138` | **rejected** ² |
| 02p | Retake: "one single continuous seamless darkness from top to bottom: no horizontal band, no panel" | 9:16 | 02 | `401d1ee9-ba96-4ad9-bd6c-92c95d10e418` | kept |
| 01p | Portrait edge-on | 9:16 | 02p, 01 | `d9799dc8-eba7-4811-8c20-637bc7d10305` | kept |
| 03p | Portrait gold | 9:16 | 02p, 03 | `277926d6-0964-46c6-a44d-0589fcd4fca7` | kept |

¹ Asked for "almost perfectly flat and face-on"; it kept the master's ~15° tilt. Accepted
deliberately: it matches the Onyx pose (so the change of metal happens in place) and it
still takes the projected engraving. The storyboard's "flat face-on" ending is therefore
"tilted face-on". This is a deviation from the approved table.
² A hard horizontal panel line at ~31% of the frame height, a flat grey band above
black. Shipped, it would read as a seam against the page. One targeted correction,
2 credits.

### Product stills — `nano_banana_pro` 2k, 4:5

| Product | References | Job ID | File |
|---|---|---|---|
| Onyx on honed Nero Marquina | 02 | `30b8cc56-4f54-4e08-a821-d099f9b6ed95` | `public/products/onyx.webp` |
| Aurum on honed Nero Marquina | 03 | `d02c8fde-da8f-41ce-a7a2-26ad4ba98f03` | `public/products/aurum.webp` |
| Milled-edge corner macro | 02 | `0d87c2fe-0ab2-47df-9371-aae0d49fb0fe` | `public/products/edge-macro.webp` |
| Leather presentation case | 02 | `e8526e88-11ca-454c-aaaf-5cc0f144e455` | `public/products/presentation-case.webp` |

1200 px wide, `cwebp -q 84 -m 6`, 31–60 KB each. PNG masters in `_incoming/`.

### Video — `cinematic_studio_3_0`, 10s, `generate_audio: false`, `genre: "drama"`

Chained through the anchors: clip A runs `start_image` 01 → `end_image` 02, and clip B
runs 02 → 03. The **same raster on both sides of the seam** is what makes the join hold.

| Clip | AR | Res | start → end | Credits | Job ID |
|---|---|---|---|---|---|
| A — the revolve | 16:9 | 1080p | 01 → 02 | 100 | `44f40f7b-6973-4970-b9d2-0533170a2158` |
| B — transmutation | 16:9 | 1080p | 02 → 03 | 100 | `26f87af4-226e-44aa-b80d-2095c196b6fa` |
| A — the revolve | 9:16 | 720p | 01p → 02p | 50 | `2227fb98-4d4e-4d4f-9831-a92d1ce7b51f` |
| B — transmutation | 9:16 | 720p | 02p → 03p | 50 | `244d4e66-f238-4c77-be88-b48405576fa9` |

Load-bearing prompt phrases. Clip A: *"slowly and elegantly rotates open toward camera,
then lifts and revolves along a slow graceful elliptical orbit while spinning a full turn
about its own vertical axis… it never stops until the final settle"*. Clip B: *"the
flowing gold light filaments… sweep across the card's face from left to right,
brightening and thickening until ribbons of moving warm gold light fill almost the entire
frame… as the ribbons pass… the card's surface has become polished eighteen-karat
gold"*.

**How the blur-through actually came back, disclosed:** on desktop the change of metal is
a band of light wiping across the card face, black to gold, with the filaments igniting
behind it. It does **not** fill the frame as the storyboard said. It reads as more
restrained, and it was kept rather than retaken for 100 credits. On portrait it came back
much closer to the storyboard: a genuine blast of light across the face.

### Actual spend

```
                     planned   actual
  anchor stills          12       14   (+2: portrait master retake, panel-line defect)
  desktop clips         200      200
  portrait clips        100      100
  product stills          8        8
  logo                    0        0
                     ───────  ───────
                        320      322
  Balance: 713.4 before → 391.4 after (checked live with `balance`) = 322 exactly
```

## 7 — Measured results

Everything in this section is read from the files on disk or from a live measurement.

### Sources

Desktop clips: **1920×1080, 24 fps, 10.04 s, 241 frames** each. Portrait clips:
**720×1280, 24 fps, 241 frames** each. MP4s are kept in `_incoming/` and are gitignored
(`*.mp4`).

`cropdetect` on the desktop clips reported `crop=1434:826:486:52`, which is a **false
positive**: the environment is so dark that its black edges read as a border. The contact
sheets show filaments running to every edge, so nothing was cropped.

### Extraction

`ffmpeg` here has no `libwebp`, so the two-step path was used: PNG at source fps,
`scale=1600:-2:flags=lanczos` for desktop and native 720 for portrait, then
`cwebp -q 80 -m 6` in parallel. q85 was measured and rejected: 40.1 KB against 33.1 KB
per frame, which would have put desktop at ~19 MB, over budget. q80 was inspected
at 1:1 on a gold frame with fine filaments: no banding, no ringing.

Clip A contributes frames 0–240, and clip B contributes its frames 1–240 renumbered to
241–480. **Clip B's frame 0 is dropped because it duplicates clip A's last frame.** That
is the seam, and it sits inside a held pose (frame 240, the Onyx hold).

| | desktop | portrait |
|---|---|---|
| Frames | **481** (0–480, contiguous, verified programmatically) | **481** |
| Dimensions | 1600×900 | 720×1280 |
| fps | 24 | 24 |
| Total bytes | **15,585,692 (14.9 MB)** | **9,850,196 (9.4 MB)** |
| Mean per frame | 32.4 KB | 20.5 KB |
| Engine poster (frame 0) | 30,876 B | 18,280 B |
| Static still (frame 480) | 38,864 B | 23,678 B |

Desktop lands at 14.9 MB against standard's ~14 MB target and the 18 MB ceiling. Frames
were not dropped to 20 fps, because the measured weight fit the ceiling without it.

### The seam

Clip A's frame 240 and clip B's frame 0 were extracted side by side. Card position, scale,
tilt, chip and lighting match; the filaments differ slightly, which is invisible at a hold.

### Motion profile — measured, and what it changed

Mean frame-to-frame difference (`tblend=difference`, 8-frame windows, ×10) placed the beats:

```
desktop A: steady turn 0–105 · FAST FLIP 113–135 (peak 20.0) · revolve 145–215 · settle 217–240
desktop B: the wipe 17–80 · NEAR-STILL 81–120 (0.3–0.5) · revolve 121–215 (peak 26.2) · still 225–240
portrait A: slow 0–40 · fast 41–95 · lull 97–120 · fast 121–200 · settle 200–240
portrait B: the blast 25–90 · spin 97–170 (peak 31.2 at 145) · long rest 177–240
```

Two consequences: the fast flip got the most scroll per frame on desktop, and clip B's
measured still moment (global 321–360) became the **Aurum chapter**. Desktop frames 320,
340 and 360 differ from frame 480 by a mean of 3.1 / 1.0 / 1.2 of 255 in the card region,
so the Aurum engraving is shown there too. Portrait's rest is not still (21–42), so it
has no second Aurum window.

### Engraving — measured corners

Corners were read off a 50 px / 25 px grid overlaid on the actual held frames, as source
fractions (clockwise from the card's top-left):

| Pose | Frame | TL | TR | BR | BL |
|---|---|---|---|---|---|
| Onyx, desktop | 240 | .4656,.3389 | .8125,.1667 | .8469,.6333 | .5000,.7944 |
| Aurum, desktop | 480 (and 320–360) | .4656,.3356 | .8125,.1633 | .8475,.6333 | .4969,.7944 |
| Onyx, portrait | 240 | .2056,.4766 | .7708,.3867 | .8306,.6188 | .2500,.7094 |
| Aurum, portrait | 480 | .2014,.4727 | .7708,.3883 | .8333,.6188 | .2472,.7109 |

The engraving is laid out at 856×540 (ID-1 in tenths of a mm) and mapped with a CSS
`matrix3d` homography through the same cover-fit the canvas uses (`src/scripts/engrave.ts`).

### Final `beats` and stage height

Container `800vh` desktop / `640vh` portrait → **7.0 and 5.4 viewport heights of active
pinned travel**. Final values live in `src/content/site.ts`. Landscape:

```
[0.00,0.04] -> [  0,  0]   hold — read the hero
[0.04,0.12] -> [  0,100]   the card turns open from edge-on
[0.12,0.22] -> [100,145]   the fast flip — most scroll per frame
[0.22,0.36] -> [145,225]   the revolve continues
[0.36,0.40] -> [225,240]   settles
[0.40,0.47] -> [240,240]   hold — Onyx, engraving lands
[0.47,0.60] -> [240,320]   BLUR-THROUGH — the light wipes it gold
[0.60,0.72] -> [320,360]   Aurum at rest; engraving
[0.72,0.88] -> [360,456]   the last revolution
[0.88,0.92] -> [456,480]   settles
[0.92,1.00] -> [480,480]   hold — read the close
```

Chapters: hero 0–0.10, Onyx 0.39–0.48, Aurum 0.61–0.72, close 0.90–1.00.

## 8 — Verification: what was actually checked

Headless Chrome driven over CDP (scripts kept in the session scratchpad, not the repo).

- **Build** clean, 1 page. `tsc --noEmit -p sites/metal-card` clean.
- **Frame counts** 481/481 on disk, in `dist`, and in `manifest.json`. The manifest was
  written from the files and asserts contiguity.
- **Scrub**: 5 scroll positions give 5 distinct canvases.
- **Reverse and jump**: at 0.1 / 0.3 / 0.5 / 0.9 / 0.3 / 0.1 the canvas was compared
  against the expected frame drawn independently with the same cover-fit. It shows **the
  correct frame in both directions** every time (75, 191, 258, 468). A raw canvas hash
  differed between passes, traced to a sub-noise resampling difference (mean |Δ|
  0.00–0.17 of 255) after the canvas is read back repeatedly, not a different frame.
- **Network**: desktop requested only `frames/desktop` (143 at five positions);
  320 px mobile only `frames/mobile`. Frames load around the playhead, not from zero.
  **Zero 4xx.**
- **Reduced motion**: **0 frame requests**, static story shown, exactly one visible `h1`.
- **Load failure**: with `*/frames/desktop/*` blocked, the poster stays on the canvas
  and the chapters and page remain usable.
- **Mobile menu**: opens with focus on close; `aria-expanded` true; Escape closes it and
  returns focus to the toggle; links close it; there's a Tab focus trap.
- **Overflow**: 0 px horizontal overflow at 320 px.
- **a11y**: one visible `h1`; every off chapter is `inert`; canvases are `aria-hidden`.
  There's a skip link.
- **Market check**: nothing for `£|€|GBP|UK|United Kingdom|London|England|Royal Mail|VAT`
  across `src`, `dist` and `style-tile.html`; `lang="en-US"` everywhere. No demo marker
  and no `noindex`.
- **Parity from a clean reconstruction** (`pwd -P` form): 4,747 files copied, `npm
  install` + build from zero. `dist` frame counts 481/481 match the manifest, `_headers`
  and `manifest.json` present, **`index.html` byte-identical** to the local build (sha256
  `29c91f3a…ad337`), no `.mp4` in the clone. **1,036 assets requested over HTTP, all 200,
  zero 4xx**: page, bundles, fonts, all 962 frames, posters, products. The CDP scrub,
  network and fallback checks were re-run against that served build and pass.
- **Visual**: screenshots at 1440×860 (seven scroll positions and every lower section),
  390×844 (six), and 375×667 (short viewport).

### Fixed during verification

- **Overlay threads crossed the card face.** The filament canvas drew lines over the
  real footage, which reads as a composite. It is now masked to the copy side and the
  edges, clear of the band the card occupies in every measured frame.
- **The portrait close covered the gold card.** It moved to the quiet top band like the
  other chapters, and on short phones (≤720 px tall) the body line drops.
- Straight apostrophe in "fool's" → typographic.

### Not verified

- **Real-device smoothness and load time.** Everything above was measured in headless
  Chrome over localhost. File size is not speed.
- **Safari / iOS.** `mask-image` is prefixed; `matrix3d` projection and `mix-blend-mode`
  are standard, but not tested on WebKit here.
- The cursor-reactive part of the filament layer was built and runs, but reaction to the
  pointer was not measured.
- Crossing the 768 px breakpoint live (abort + release) is engine behaviour proven on
  earlier sites; not re-measured here.

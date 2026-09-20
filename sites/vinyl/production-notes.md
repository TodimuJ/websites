# LATHE & LACQUER — production notes

`sites/vinyl` · built from `briefs/vinyl.md`

**Status: complete and running on generated footage.** All assets generated on Higgsfield,
both sequences extracted and measured, pacing and chapter placement re-derived from the
real frames, and the parity check passes from a clean clone. Total spend 317 credits.

---

## 0 — Generation route: ask, never assume

**Rule, set by the user on 2026-09-20 and binding on this repo going forward:**

> Do not propose Google Flow / Google AI Pro as the first or default generation route.
> **Ask the user which route they want.** Higgsfield MCP is the funded default.

The user only ever used Google Flow on the earlier sites (espresso, forged-knife,
lip-gloss) because the Higgsfield account was unfunded — 0.4 credits on the free plan,
less than a tenth of one clip. That was a workaround, not a preference, and treating it
as a standing route was wrong.

**Current state, checked live at Gate 2:** Higgsfield **Plus plan, 1,200.4 credits**.
Phase 3 therefore runs inside Higgsfield MCP rather than as a copy-paste prompt pack.
A `generation-prompts.md` pack is written **only** if the user picks an external route.

Never buy a top-up or a subscription on your own initiative.

## 1 — Direction

A reissue label and pressing house built on one idea: the scroll is a scrub head. The
page runs *backwards* through the manufacture of a record — from the stylus in the
groove, back through the press, back to the lacquer being cut — and then turns around and
comes forward into a room where someone is about to play one. The scroll indicator is a
track timecode, and it counts down through the reversed section.

The register is mid-century and unsentimental: grotesk body type, a wide slab wordmark,
a dark room with a single tungsten lamp. Heritage, but not nostalgic — the site's claim
is a manufacturing claim, so the copy talks about lathes and plating steps rather than
about warmth.

## 2 — Decisions taken at Gate 1

Answered by the user:

| Question | Answer |
|---|---|
| Brand name | LATHE & LACQUER (brief candidate, unmodified) |
| Palette | Brief palette, unchanged |
| Catalogue | Invented spiritual jazz reissues, 1968–1975 |
| Primary action | Buy a record; subscription and pressing enquiry secondary |
| Time direction | Keep the brief's reversal, with the timecode conceit |
| Hero shot (retake priority) | The stylus landing in the groove — it opens *and* closes the sequence |
| Record finish | Black 180g, high gloss, cream label |
| People in frame | Hands only, at the lathe |
| Budget | Started as `economy` ("cheap"); reopened after the credit top-up |

Decided without asking, and recorded here as assumptions:

- **Palette** taken from the brief unchanged: `--black #0D0D0D`, `--oxblood #6B1F22`,
  `--label-cream #E8DFC8`, `--tungsten #E0A44A`, `--dust #9A9287`. The brief specifies it,
  so it was not put to the user.
- **Catalogue, artists, titles and prices are invented** for an invented label:
  Vol. I *Ancestral Line*, Kofi Adjei (1971), £32 · Vol. II *Night Water*, The Marian Reed
  Quartet (1969), £28 · Vol. III *Harmattan Suite*, Delphine Okonkwo Trio (1974), £34.
  Within the brief's £28–£34 band.
- **Manufacturing claims** (Neumann VMS-70 lathe, one lacquer per side, three-step
  plating, 180g virgin vinyl, cut and pressed in England) are invented product copy.
- **Wordmark and symbol are drawn, not generated.** A generated wordmark is raster and
  would put type into pixels, which this repo forbids. The symbol is three groove walls
  with a cutting head crossing them — `public/logo-symbol.svg`. The wordmark is HTML type
  in a slab stack (`Rockwell` → `Roboto Slab` → `Bookman Old Style` → Georgia); no webfont
  is loaded, so the mark degrades to Georgia on systems with none of the first three.
  **Unverified:** how the slab fallback looks on Linux. Flagged rather than assumed.
- **Style tile** is at `style-tile.html` and reads the real `src/styles/tokens.css`.
  **Unverified:** it has not yet been rendered with its stylesheet applied — opening it
  as a local file in the preview pane produced a static snapshot with the relative
  stylesheet unresolved. To be checked against the Astro dev server in Phase 4 before any
  frames are generated.

## 3 — Model routing, and why (Gate 2)

Checked live with `models_explore`; the skill's cached table in `references/generation.md`
is close but not authoritative.

**The deciding axis is frame control, not cinematic quality.** This storyboard chains
scenes and reverses one of them, so a model without `end_image` cannot build it.

- **`veo3_1` accepts `start_image` only.** No end frame. It is the most cinematic model in
  the catalogue and the wrong tool here — every scene boundary would become an unguided
  cut. Ruled out on capability, not price. (`veo3_1_lite` does take `end_image`.)
- **`seedance_2_5` is the only model offering `mode: "video_extension"` with
  `extension_mode: "backward"`** — precisely what `briefs/vinyl.md` nominates for the
  reversal — and it reaches 30s, long enough to hold the whole journey in one take.
- **`seedance_2_0`** is strictly better than `seedance_2_0_mini` (4K, reference images,
  start+end) and was skipped in the first pass only because the balance was 0.4 credits.
- **`nano_banana_pro` costs 2 credits at 1k and at 2k**, so 2k is free relative to 1k.
  An earlier draft proposed `gpt_image_2_5` at 1 credit; that was a weak choice, made as a
  price probe rather than on merit, and is superseded.
- **Seedance pricing is linear in duration**, so chunking costs nothing: `seedance_2_5`
  720p is 7 credits/sec, `seedance_2_0` 720p std 4.5/sec, 1080p std 9/sec. One 30s take
  and five 6s takes cost the same; the real trade is seam count against retake cost.
- **Delivery width is 1280, which is exactly 720p's width.** A 1080p source buys only
  downscaling cleanliness.

### Preflighted prices — 6s, 16:9, silent

| Model | Config | Credits / 6s | Frame control |
|---|---|---|---|
| `veo3_1_lite` | default | 6 | start + end |
| `seedance_2_0_mini` | 720p | 6 | start + end |
| `seedance_2_0` | 720p std | 27 | start + end + refs |
| `seedance_2_5` | 720p | 42 | start + end + extension |
| `veo3_1` | 6s, high, preview | 43.5 | **start only** |
| `seedance_2_0` | 1080p std | 54 | start + end + refs |
| `cinematic_studio_3_0` | 1080p | 60 | start + end |
| `seedance_2_5` | 1080p | 72 | start + end + extension |

`nano_banana_pro`: 2 credits (1k or 2k). `gpt_image_2_5`: 1 credit.

### Options put to the user — 30s per orientation, both orientations, 7 stills

| | Model | Structure | Seams / orientation | Committed | One retake |
|---|---|---|---|---|---|
| A | `seedance_2_0` 720p | 5 × 6s | 4 | 284 | 27 |
| **B** (recommended) | `seedance_2_5` 720p | 16s + 14s | 1, inside the blur-through | 434 | 112 |
| C | `seedance_2_5` 720p | 1 × 30s | 0 | 434 | 210 |
| D | `seedance_2_0` 1080p | 5 × 6s | 4 | 554 | 54 |

B is recommended because seam count is where these sites fail, and linear pricing makes
two chunks cost the same as one while halving the price of a retake. The single seam sits
inside scene 03's blur-through, where the frame is entirely filled with black polymer —
invisible by construction rather than by luck.

### The probe — run 2026-09-20, 33 credits

Rather than guess at the quality gap, scene 01 was generated at 6s/720p/16:9 on two
models with an identical prompt and identical settings. Job IDs
`8bf1d278-cad1-4c5a-a88b-05b38a11301d` (mini, 6 cr) and
`6910a476-7875-4a3c-b3a0-939c7193d368` (2.0 std, 27 cr).

**A prompt defect, found by the probe and not a model fault.** Both models rendered a
literal brilliant-cut gemstone seated in the groove, because the prompt said "polished
diamond stylus tip". Every scene-01 prompt must describe the cantilever and a conical
tip and avoid the word "diamond" as a noun. Free to fix; would have occurred on any model.

**Measured comparison.** Dark-third figures are taken from the left third of frame, where
camera motion is least, so they isolate flicker from movement.

| | `seedance_2_0` std | `seedance_2_0_mini` |
|---|---|---|
| Held macro scale for 6s | yes | **no** — drifted to a wide turntable product shot |
| Dark-third mean luma | **7.6** | 36.9 (milky grey) |
| Dark-third per-pixel change per frame | **0.658** | 1.195 (1.8x) |
| Source MP4 bitrate | 2.1 Mbps | 11.1 Mbps |
| Delivery frame, 12fps/1280/WebP q72 | **20.0 KB** | 23.7 KB |

The deciding fault is the scale drift, not the noise. In a chained sequence every scene
must land on the framing that hands off to the next; mini failed to hold framing over six
seconds and would fail again at each seam. The black level is the second disqualifier —
the page background is `#0D0D0D` and at luma 36.9 mini's black reads as a grey rectangle
sitting on the page.

**A correction.** The 5x source-bitrate gap suggested mini's noise would inflate page
weight badly. It does not — WebP at q72 quantises most of it away and the real difference
is 19%. Recorded so the bitrate number is not re-used as an argument it cannot support.

**Page weight, re-measured rather than estimated.** At 20.0 KB per delivery frame the full
360-frame desktop sequence is **~7.2MB**, against the ~12MB estimated at Gate 2. These
frames are almost entirely black and compress far better than assumed. The Gate 2 offer to
drop to 10fps is therefore withdrawn as unnecessary.

**Recommendation: `seedance_2_0` std at 720p, 284 credits committed for the full build.**
**Approved by the user**, together with a move of all prices and locations to USD and the
United States (see §9).

## 3b — Generation, as actually run

**Clip structure — changed from the Gate 2 plan, and why.** Gate 2 priced five 6-second
scenes. The delivered structure is **four clips per orientation** totalling the same 30
seconds and the same credits, because Seedance prices linearly and chunking is free:

| Clip | Seconds | Carries | Chained by |
|---|---|---|---|
| A | 12 | Scenes 01 + 02 — macro groove to whole disc | `start_image` = scene-01 anchor |
| B | 6 | Scene 03, the press — **generated forward, reversed at extraction** | `start_image` = biscuit anchor, `end_image` = A's last frame |
| C | 6 | Scene 04, the lathe | `start_image` = biscuit anchor |
| D | 6 | Scene 05, the return to the room | `start_image` = C's last frame |

Scenes 01 and 02 merged into one 12s take because they are one continuous pull-back on one
set — merging removes a seam for free. Scene 03 must stay a clip of its own: it is the only
part of the sequence whose frames get reversed, so it cannot share a file with anything else.

**The reversal, concretely.** B is generated forward — platens closing onto molten PVC,
polymer filling the frame, a finished record revealed — with **A's last frame passed as B's
`end_image`**. Played backwards at extraction it reads as the record un-pressing into a
molten biscuit, and its last frame is B's first frame, which is the same biscuit anchor that
C starts from. So the chain closes on itself with no extra generation. The blur-through —
black polymer filling the lens — happens mid-clip inside B, not at a seam.

**Seams and where they fall:** A→B on the whole disc filling frame; B→C on the biscuit
anchor, which both clips share exactly; C→D on C's own last frame. Three seams per
orientation, all in dark or frame-filling moments.

**Stills.** Seven on `nano_banana_pro` at 2k. **Substitution disclosed:** the model was
requested as `nano_banana_pro` and the job results report the model as `nano_banana_2`. The
server routed it; the output is correct and text-free, but the returned model id does not
match the requested one and that is recorded rather than glossed.

**The prompt fix worked.** Scene-01 anchors describe "a slender tapered metal cantilever
ending in a tiny conical tip" and explicitly negate gemstones. No gemstone appeared in any
delivered asset.

**All three sleeves came back completely free of text**, which was the single highest-risk
item in the still pack. They are abstract painted compositions in the brand palette; every
word on a release page is HTML over them.

## 4 — Visual Story (proposed at Gate 2)

Five scenes, one continuous camera journey, no cuts. The brief's six beats collapse to
five: its "return" and "resolution" become one move, saving two clips.

| Scene | Visual story | Website copy |
| --- | --- | --- |
| **01 — Opening** (the groove) | Extreme macro. Canyon walls of black vinyl running diagonally, a stylus tip seated in the trough, one hard raking light from the left. A few large soft-focus dust particles drift through — cinematic, not grime. Camera begins to lift. Groove occupies the **lower-right diagonal; upper-left third held clean**. | LATHE & LACQUER · PRESSING № 1 / **The groove is the sound.** / Spiritual jazz, 1968–1975, cut from the original tapes on a Neumann lathe and pressed at 180 grams. Scroll to go backwards through it. / `Shop the first three` · `Vol. I — £32` |
| **02 — The spiral out** | One unbroken pull-back along the spiral while the disc rotates and accelerates. Groove becomes texture, texture becomes the full disc, the disc settles with its **blank cream label** centred. Scale collapses from microns to twelve inches without the camera blinking. Nothing but record in frame. | *No copy — let the motion lead* |
| **03 — BLUR-THROUGH** (the un-press) | The record un-presses. Steel platens part, the disc loses its edge and its face and becomes a glossy molten biscuit of black PVC, deforming, until black polymer fills the frame entirely. **Generated forward — platens closing on molten PVC — and reversed at extraction**, because models animate a press closing well and "un-pressing" not at all. Free, and better-looking. **Load-bearing beat; protected.** | *No copy — let the motion lead* |
| **04 — The lathe** | Out of the black polymer, further back in time. A cutting head rides a lacquer master under cold blue light, one fine black thread of swarf peeling away in real time and drawn off by the suction tube. **One pair of hands** steadies the head. Clinical, not romantic. Lathe **right of centre; left third clean**. | **Cut from tape. Never from a file.** / Every master is cut live to lacquer — one pass, no undo. That thread of swarf is the only trace of the take that will ever exist. Three plating steps later it becomes the stamper that presses your copy. / `Neumann VMS-70 · one lacquer per side · three-step plating · 180g virgin vinyl` |
| **05 — The return** | The camera reverses direction for the first time and travels forward out of the machine, past an oxblood sleeve, into a dark room. A turntable under one warm tungsten lamp. The tonearm descends on its own, the stylus lands, the record turns. Everything outside the lamp pool is black. Turntable **centre-left; right third dark and clean**. | **And then it is just a room, and a record.** / Free UK delivery over £60 · 30-day returns · Cut and pressed in England / `Shop the first three — from £28` |

**Hand-offs.** 01 never cuts to 02 — the lift *is* the transition. 02 ends on the whole
disc filling the frame, which is exactly the frame 03 starts from, because 03 is generated
with that frame as its *end* frame and then played backwards. 03 ends on black polymer
filling the lens, which is 04's start frame — the blur-through is the seam, which is why
it cannot be seen. 05 begins inside the machine and is the only scene where the camera
changes direction; that reversal is where the timecode stops running backwards.

## 5 — Scroll pacing (proposed; to be re-derived from delivered footage)

Container `1000vh`, stage `100vh` pinned → **9 viewport heights of active travel** on
desktop. Portrait `760vh` → **6.6 viewport heights**, because thumbs cover less distance
per effort. Both orientations share scroll boundaries, so the same scroll fraction shows
the same narrative beat on both.

```
                scroll         desktop f    portrait f   desktop f/vh
hold            0.000-0.050    0            0            — read the hero
the groove      0.050-0.190    0- 71        0- 59        56
the spiral      0.190-0.380   72-143       60-119        42   <- slowest, the scale collapse
hold            0.380-0.420   143          119           — the disc lands whole
the un-press    0.420-0.580   144-215      120-179       49   <- protected
the lathe       0.580-0.760   216-287      180-239       44
hold            0.760-0.800   287          239           — read the craft chapter
the return      0.800-0.950   288-359      240-299       53
hold            0.950-1.000   359          299           — read the CTA
```

Frame counts assume 12fps desktop / 10fps portrait over 30s. **These are estimates.** Real
boundaries get measured off the delivered footage and remapped, as on the previous sites.
The mapping stays a pure function of scroll position, so scrolling up retraces exactly.

### Page weight, stated rather than absorbed

Five 6-second scenes at 12fps/1280 is ~360 frames ≈ **12MB desktop**; portrait at
10fps/720 ≈ 4MB, and only one orientation loads per device. The `economy` tier's guideline
is ~6MB, so this is **double the tier guideline** — disclosed at Gate 2 rather than
quietly applied. Levers offered: 10fps desktop (~10MB), or four scenes instead of five
(~9.6MB). Recommendation was to ship at ~12MB, since frames are cached `immutable` and the
spiral is the shot the site is built on.

## 6 — Cost ledger

| Date | Job | Model | Credits | Job ID |
|---|---|---|---|---|
| 2026-09-20 | preflights (`get_cost`, nothing submitted) | various | 0 | — |
| 2026-09-20 | Probe — scene 01, 6s, 720p, 16:9 | `seedance_2_0_mini` | 6 | `8bf1d278-cad1-4c5a-a88b-05b38a11301d` |
| 2026-09-20 | Probe — scene 01, 6s, 720p, 16:9 | `seedance_2_0` std | 27 | `6910a476-7875-4a3c-b3a0-939c7193d368` |
| | | **Spent** | **33** | |

Balance at Gate 2: **1,200.4** (Plus). After the probe: **1,167.4**.

A preset recommendation ("IN THE DARK", `24bae836-2c4a-48e0-89b6-49fcc0b21612`) was
offered on the first submission and **declined** — a preset would have changed the look and
invalidated the A/B, which was the entire purpose of the probe.


## 7 — Delivered sequences, measured

| | frames | fps | width | total | per frame |
|---|---|---|---|---|---|
| desktop | **362** | 12 | 1280 | **8.0 MB** | 22.5 KB |
| portrait | **302** | 10 | 720 | **7.0 MB** | 23.7 KB |

Source: four clips per orientation, 12.04s + 6.04s + 6.04s + 6.04s = 30.17s.
Clip boundaries land at desktop frames 144 / 216 / 289 and portrait 120 / 180 / 241.

**Against the Gate 2 estimate.** Desktop was predicted at ~12MB and came in at **8.0MB** —
better, because the frames are almost entirely black. Portrait was predicted at ~4MB and
came in at **7.0MB**, which is **75% over**. The portrait crop keeps proportionally more of
the lit subject in frame than the landscape one, so it compresses worse per pixel. Stated
rather than absorbed.

**What that 7MB actually costs a visitor.** It is the *full-scroll* total, not the load
cost. The engine fetches on demand with a lookahead of 12 frames and a concurrency cap of
6, so a first view pulls ~13 frames (~310KB) and a visitor only downloads what they
actually scroll past. Frames are served `immutable` with a one-year max-age, so a return
visit downloads nothing.

**Levers not taken, and why.** WebP q64 saves 11.5% and q58 saves 15.5%, measured on
representative portrait frames — small savings against real banding risk in near-black
gradients, which is the whole palette here. Dropping portrait to 8fps would cut 19% with no
per-frame quality loss but costs temporal smoothness on the slowest beat. Neither was
applied. Both remain available if the portrait figure matters more than scrub quality.

## 8 — Verification

**Seam continuity, measured.** Mean absolute pixel difference across each seam, against a
baseline of two genuinely adjacent frames inside one continuous clip:

| seam | desktop | portrait |
|---|---|---|
| A_last → reversed-B first | 1.21 | 1.90 |
| reversed-B last → C first | 0.34 | 0.25 |
| C_last → D first | 1.06 | — |
| **baseline: adjacent frames inside clip A** | **7.30** | — |

Every seam changes *less* than ordinary consecutive frames do. They are not merely hidden;
they are below the noise floor of the motion around them.

**Scrub behaviour, verified in the browser** (not inferred from a successful build):

- Frames advance across all nine beats — sampled canvas luma 49 → 37 → 73 → 23 → 50 → 23 →
  17 → 74 → 70 across scroll 0 → 1.
- The timecode runs forward (00:00 → 01:31), **reverses** through the middle
  (02:13 → 01:50 → 01:15 → 00:45), then forward again to 03:42.
- **Reverse scrolling retraces exactly.** Scrolling back to 0.65 / 0.40 / 0.10 reproduced
  luma 23 / 23 / 37 and times 01:15 / 02:13 / 00:36 — identical to the forward pass. The
  mapping is a pure function of scroll position, as required.
- Chapters toggle at their ranges and the scrim rake follows the active chapter.
- Portrait verified at 375x812: vertical sequence loads (no desktop frames requested),
  hero copy and CTA sit bottom-left clear of the subject, timecode owns the bottom edge.
- Zero failed resources on a clean load in both orientations.

**Parity check — passes.** A fresh `git clone`, `npm install`, `npm run build` from zero,
served on :4500. All 13 key routes return 200: home, all three release pages,
`frames/manifest.json`, first and last frame of both sequences, both posters, a product
image, the logo and `_headers`. `dist` frame counts (362 / 302) match the manifest exactly.
`index.html` is **byte-identical** to the local build. The served clone scrubs identically
and reports zero failed resources.

## 9 — Market: USD and United States

At the user's instruction all prices and locations are US. Prices carry the same numerals
into dollars, matching the precedent set when lip-gloss moved market: Vol. I $32,
Vol. II $28, Vol. III $34, subscription $30 a quarter. "Free UK delivery over £60" became
"Free US shipping over $60"; "Cut and pressed in England" became "Cut and pressed in the
United States"; "Overseas" became "International"; `catalogue` became `catalog` throughout
the user-visible copy. The Neumann VMS-70 reference stays — it is a German lathe used in
cutting rooms everywhere, not a location claim.

## 10 — Known limitations, stated plainly

- **No payment backend.** The site says so in its own Ordering section and on every release
  page, and offers email instead. There is no cart and no confirmation screen, because no
  order is ever placed.
- **The slab wordmark is a font stack**, not a webfont: `Rockwell` → `Roboto Slab` →
  `Bookman Old Style` → Georgia. On a system with none of the first three it renders
  Georgia. **Unverified on Linux.** The drawn symbol in `public/logo-symbol.svg` is vector
  and unaffected.
- **`style-tile.html` has still not been rendered with its stylesheet applied.** It was
  written against the real tokens, but every visual check in §8 was done against the live
  Astro site instead, which is the stronger check. The tile remains unverified.
- **The model id returned for the stills was `nano_banana_2`, not the requested
  `nano_banana_pro`.** Output is correct and text-free; the substitution is the server's.
- **Everything about the label is invented** — the name, the three titles, the artists, the
  years, the catalogue numbers, the tracklists and the manufacturing claims. No real brand
  is impersonated.

## 11 — Cost ledger, final

| Date | Job | Model | Credits | Job ID |
|---|---|---|---|---|
| 2026-09-20 | preflights (`get_cost`, nothing submitted) | various | 0 | — |
| 2026-09-20 | Probe — scene 01, 6s | `seedance_2_0_mini` | 6 | `8bf1d278-cad1-4c5a-a88b-05b38a11301d` |
| 2026-09-20 | Probe — scene 01, 6s | `seedance_2_0` std | 27 | `6910a476-7875-4a3c-b3a0-939c7193d368` |
| 2026-09-20 | Anchor 01 landscape | `nano_banana_pro` 2k | 2 | `6c9a0144-291f-4aec-be67-3c694fd9a0df` |
| 2026-09-20 | Anchor 01 portrait | `nano_banana_pro` 2k | 2 | `8d0bdd7f-c985-4d8e-bb1c-24da9e4af685` |
| 2026-09-20 | Anchor 03 landscape | `nano_banana_pro` 2k | 2 | `ccfcb9c4-0071-4ec5-84d7-a4b59aed9f6a` |
| 2026-09-20 | Anchor 03 portrait | `nano_banana_pro` 2k | 2 | `d4022438-6d61-455b-961e-565bfeff58ea` |
| 2026-09-20 | Sleeve — Ancestral Line | `nano_banana_pro` 2k | 2 | `00aad616-6430-44ab-9f9d-f9a1a5488586` |
| 2026-09-20 | Sleeve — Night Water | `nano_banana_pro` 2k | 2 | `6eea0b03-5c0f-431b-bdc6-1b2cfe73f31a` |
| 2026-09-20 | Sleeve — Harmattan Suite | `nano_banana_pro` 2k | 2 | `225179ac-ed39-4ad2-9a64-def883f09e02` |
| 2026-09-20 | Clip A landscape, 12s | `seedance_2_0` std | 54 | `84071870-f056-4031-8249-fecfa3a0eefa` |
| 2026-09-20 | Clip A portrait, 12s | `seedance_2_0` std | 54 | `484e9765-face-4739-bc56-a2636f6d27ed` |
| 2026-09-20 | Clip B landscape, 6s | `seedance_2_0` std | 27 | `3a2d3b16-626b-495f-9b1b-e85166c8e5b8` |
| 2026-09-20 | Clip B portrait, 6s | `seedance_2_0` std | 27 | `76fddd34-b6db-4efc-b11d-2330666abd08` |
| 2026-09-20 | Clip C landscape, 6s | `seedance_2_0` std | 27 | `b73ee590-3c66-4372-86a4-3b2edbce9f40` |
| 2026-09-20 | Clip C portrait, 6s | `seedance_2_0` std | 27 | `1015bba7-76d9-4b85-bd27-9403d9378b66` |
| 2026-09-20 | Clip D portrait, 6s | `seedance_2_0` std | 27 | `9ecc07a7-4072-4b58-8811-2d4023b0bf8c` |
| 2026-09-20 | Clip D landscape, 6s | `seedance_2_0` std | 27 | `0cb5a07b-cc6f-4508-8897-9572999f557c` |
| | | **Total spent** | **317** | |

**Estimated vs actual.** Gate 2 quoted **284** for the build plus **33** already spent on
the probe — **317 forecast, 317 actual, zero retakes.** Balance confirmed by `balance`:
1,200.4 before, **883.4** after.

Every clip was accepted on its first generation. The economy tier's one-retake budget
(a further 270 worst case) was not touched.

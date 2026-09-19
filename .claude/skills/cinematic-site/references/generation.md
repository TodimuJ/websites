# Phase 3 — Generation via Higgsfield MCP

Model facts below were read from the live catalogue (`models_explore action:"list"`,
both `video` and `image`, complete — `has_more: false`). Re-check a specific model with
`models_explore action:"get"` before submitting; schemas change.

## Preflight

Confirm the Higgsfield image and video tools are callable before promising anything. If
missing, state the capability gap **once**, name the smallest fix, and continue with
everything that doesn't need generation (tokens, layout, copy, content). Do not
repeatedly suggest reinstalling a connected plugin.

Generating assets does **not** authorize buying a subscription or changing account
settings. If a call returns `unlim_choice`, put that question to the user rather than
spending either balance on your own initiative.

---

## Budget resolution

Read the resolved budget from Phase 0. Every generation parameter below comes from it —
**nothing in this file is hardcoded**.

| Axis | `economy` | `standard` | `max` |
|---|---|---|---|
| `resolution` | 720p | 1080p | 4k |
| `duration` (per scene) | 5s | 10s | 12s |
| `bitrate_mode` | standard | high | high |
| `retakes` | 1 | 3 | uncapped |
| `stills_quality` | medium / 1k | high / 2k | xhigh / 4k |
| `fps` (delivery) | 15 | 24 | 24 |
| `width` (delivery) | 1280 | 1600 | 1920 |
| ≈ page weight | ~6MB | ~14MB | ~20MB |

Any axis named explicitly by the user overrides the tier. `--budget economy --duration 10`
is valid and coherent — duration drives credits, not page weight.

When an override materially changes cost, say so with a number before proceeding:

> `economy` + `--duration 10` ≈ 1.7× economy baseline, still ~45% of standard.
> Page weight unchanged (fps and width are what set that).

---

## Video model routing

### Continuity capability — the axis that matters most

Scene-to-scene continuity is what makes or breaks these sites. Three tiers:

| Tier | Method | Models |
|---|---|---|
| **Best** | `video_extension` — the model continues the actual clip | `seedance_2_5` only |
| **Good** | `end_image` / `start_image` chaining — inspect every seam | `cinematic_studio_3_0`, `seedance_2_0`, `seedance_2_0_mini`, `kling3_0`, `minimax_h3`, `wan3_0_prime`, `flux_3_video`, `gemini_omni_flash_1_1`, `veo3_1_lite` |
| **None** | independent clips; visible jump, crossfades will not save it | `veo3_1`, `veo3`, `kling3_0_turbo`, `kling2_6`, `happy_horse_video`, `grok_video*` |

### The catalogue

| Model | Duration | Max res | Frame control | 21:9 | Unlim |
|---|---|---|---|---|---|
| **`cinematic_studio_3_0`** | 4–15s | **4K** | start + end | **yes** | no |
| **`seedance_2_5`** | **4–30s** | 1080p | start + end + **extension** | yes | no |
| `seedance_2_0` | 4–15s | **4K** ¹ | start + end + refs | yes | **yes** |
| `seedance_2_0_mini` | 4–15s | 720p | start + end + refs | yes | **yes** |
| `kling3_0` | 3–15s | **4K** ² | start + end | no | **yes** |
| `minimax_h3` | 4–15s | 2K | start + end + refs | yes | no |
| `wan3_0_prime` | 2–30s | 1080p | start + end + refs | no | no |
| `flux_3_video` | 5–20s | 1080p | start + end + refs | yes | no |
| `gemini_omni_flash_1_1` | 3–10s | 4K | start + end + refs | no | no |
| `veo3_1_lite` | 4/6/8s | — | start + end | no | no |
| `veo3_1` | **4/6/8s only** | — ³ | **start only** | no | no |
| `kling3_0_turbo` | 3–15s | 1080p | start only | no | no |

¹ 4K requires `mode: "std"`; `mode: "fast"` caps at 720p.
² via `mode: "4k"`.
³ `quality: basic|high|ultra` rather than a resolution ladder.

### Defaults by tier

- **`max`** → `cinematic_studio_3_0` at 4K/21:9. 4K, end-frame control, ultrawide, and
  `generate_audio` already defaults `false`. Use `seedance_2_0` at 4K if you need
  reference-image identity locking.
- **`standard`** → `cinematic_studio_3_0` at 1080p, **or** `seedance_2_5` whenever the
  story needs clip extension or a scene longer than 15s.
- **`economy`** → `seedance_2_0_mini`, `veo3_1_lite` or `kling3_0_turbo`. Optionally
  upscale + interpolate afterwards (below).

### Required params on every video call

```json
{
  "model": "<from tier>",
  "params": {
    "duration": "<from budget>",
    "resolution": "<from budget>",
    "bitrate_mode": "<from budget>",
    "generate_audio": false,
    "aspect_ratio": "16:9"
  }
}
```

- **`generate_audio: false` — always.** Defaults to `true` on Seedance, Wan, Flux and
  Marketing Studio. You strip audio with `-an` anyway; it wastes credits and time.
  Model-specific spellings: `kling3_0` uses `sound: "off"` (explicitly cheaper),
  `cinematic_studio_video_v2` uses `sound: "off"`, `cinematic_studio_3_0` already
  defaults false.
- **`bitrate_mode`** only exists on `seedance_2_5`, `seedance_2_0`, `seedance_2_0_mini`.
  Omit elsewhere. It affects the source MP4 only — never page weight or repo size — so
  at `standard`/`max` there is no delivery reason to lower it.
- **`aspect_ratio: "21:9"`** is worth considering for a desktop hero where supported.
  Not available on Veo, Kling or Wan.

### Extension — the continuity method

```json
{ "model": "seedance_2_5",
  "params": { "mode": "video_extension", "extension_mode": "forward",
              "resolution": "1080p", "bitrate_mode": "high",
              "generate_audio": false, "duration": 10,
              "medias": [{ "role": "video_references", "value": "<job_id of scene A>" }],
              "prompt": "Continue the same unbroken camera move: …" } }
```

`aspect_ratio` is ignored — output follows the source. Pass the prior **job_id**
directly; do not re-upload. `extension_mode: "backward"` builds a sequence *backwards*
from an accepted clip — that is exactly what the `vinyl` brief's time-reversal wants.

### Capability disclosure — required

When the user names a model, or when the tier default can't do what the storyboard needs,
**read the schema and say so plainly before generating.** Never silently degrade.

> Veo 3.1 gives ultra-realistic output but supports `start_image` only — no end frame, no
> extension — and caps at 8 seconds per scene with no 21:9. Your storyboard has four
> connected scenes, so continuity would fall back to independent clips with visible jumps
> at every seam.
>
> Options: `veo3_1_lite` keeps Veo's look and adds `end_image`; `seedance_2_5` keeps true
> extension; or Veo 3.1 for the hero clip and Seedance for the connected scenes.

Check `medias[].roles` for `end_image`, and `parameters[].mode` for `video_extension`.
State the consequence in terms of **the storyboard**, not in the abstract, then let the
user choose.

### Post-processing (optional, `economy` lever)

`bytedance_video_upscale` — `fps` 24–60 (**frame interpolation**), output to 4K,
`preset: "aigc"` tuned for generated content, `model_version: "standard"|"pro"`.

Generate cheap and short, then upscale *and* interpolate: 8s at 720p → 2K at 48fps gives
**more frames**, which is precisely what removes visible stepping when a short clip is
stretched across a long scroll. `topaz_video` also offers interpolation.

Two honest caveats: interpolated frames are synthesised, so very fast motion can show
artifacts — inspect before committing; and upscaling costs credits too, so **preflight
both paths with `get_cost` and compare** rather than assuming it's cheaper.

`video_deflicker` is worth knowing about — frame-to-frame luminance flicker is invisible
in playback and very visible when scrubbing slowly.

---

## Image model routing

| Need | Model | Params |
|---|---|---|
| **Logo (vector master)** | **`recraft_v4_1`** | `model_type: "vector"` or `"utility_vector"`, `colors: ["#…"]` (≤10), `resolution: "2k"` |
| Logo (raster fallback) | `openai_hazel` | best text rendering; or `gpt_image_2_5` with `background: "transparent"` |
| Keyframes | `cinematic_studio_2_5` | 4K, **21:9** — pairs with `cinematic_studio_3_0` |
| Keyframes (alt) | `gpt_image_2_5` | `quality` from budget, `resolution` from budget, `image_references` |
| Product stills | `gpt_image_2_5` or `nano_banana_pro` | pass the keyframe as `image_references` |
| Very high res | `seedream_v4_5` | `quality: "high"` → ~6K |
| Fix exposed corners / reframe | `flux_2_pro_outpaint` | per-side pixel expansion |
| Environments | `soul_location` | supports 21:9 and 9:21 |

**Use `recraft_v4_1` in `vector` mode for logos.** It is the only route to a genuine
editable vector master — every other image model returns raster, and a PNG export is not
an SVG master. Pass the palette via `colors` so the logo is on-brand by construction.

Do **not** use `marketing_studio_image` / `ms_image` — they impose ad-campaign composition
and `ms_image` requires a `style_id` chosen from a listing first.

Unlim-capable image models: `nano_banana_pro`, `nano_banana_2`, `seedream_v4_5`,
`seedream_v5_pro`, `gpt_image_2`, `flux_2`, `kling_omni_image`, `soul_2`.

---

## Cost preflight and the ledger

`get_cost: true` returns a job's credit cost and **submits nothing**. Use it as follows.

### At Gate 2 — price the whole build

Once the Visual Story is approved the job list is deterministic. Enumerate it, preflight
each, and present a ledger **before spending anything**:

```
Planned spend — espresso · standard · seedance_2_5
  keyframe        gpt_image_2_5 2k high      1 ×  __  =  __
  hero clip       seedance_2_5 10s 1080p     1 ×  __  =  __
  extension       seedance_2_5 10s 1080p     1 ×  __  =  __
  portrait clip   seedance_2_5 10s 9:16      1 ×  __  =  __
  product stills  gpt_image_2_5 2k high      5 ×  __  =  __
  logo concepts   recraft_v4_1 vector 2k     3 ×  __  =  __
                                            ──────────────
  Committed                                          ___
  Worst case (+3 video retakes)                      ___
  Balance (`balance`)                                ___
```

Preflight video individually (few, expensive); price stills once and multiply. Show
**committed** prominently and worst-case as a footnote — retakes are conditional and two
numbers that differ wildly read as noise otherwise.

Then ask: proceed / drop a tier / set a cap.

### During Phase 3 — enforce

Keep the ledger running. Before each submission, check whether it would cross `--cap`.
If it would, **stop and ask** — including for retakes you decide on mid-build, which is
where an unenforced cap actually leaks.

Record the final actual spend in `production-notes.md`.

---

## Order of operations

1. **Keyframe first** at the budget's stills quality. It fixes subject identity,
   materials, lighting and palette for everything downstream. Inspect before spending on
   video.
2. **Hero clip** — `start_image` = that keyframe.
3. **Subsequent scenes** — extension where available, else end-frame chaining.
4. **Product stills** — concurrently while video renders. Pass the keyframe as
   `image_references` so lighting and background match across the catalogue.
5. **Logo** — already done in Phase 1 via `recraft_v4_1`.

Keep every `job_id`. Retrieve with `show_generation_by_ids` before resubmitting — **a
pending job is not a failed job.** On a transport timeout the outcome is unknown: check
first, never auto-resubmit. Duplicate submissions are the main way credits get wasted.

`jobs_wait` blocks; use it only when the next step genuinely depends on the result. While
video renders, build layout, tokens, copy and content.

---

## Writing the video prompt

1. **Camera** — the move, one unbroken sentence.
2. **Subject** — material, colour, finish, construction, scale cues.
3. **Action** — what physically changes, in order.
4. **Light** — direction, quality, colour temperature, what it catches.
5. **Environment** — fills every edge. No panels, borders or vignette.
6. **Negative clause**, verbatim:

> One seamless continuous cinematic camera journey. Absolutely no cuts, no shot changes,
> no text, no titles, no captions, no logos, no watermarks, no UI. The environment fills
> the entire frame to every edge with no borders, panels or letterboxing.

7. **Copy space** — e.g. `keep the upper-left third in clean negative space`.

Two things to state explicitly because models get them wrong by default:

- **Sharpness intent** — if the story wants extreme magnification, say *"macro remains
  tack sharp at maximum magnification"*, or you get blur standing in for scale.
- **Motion that must not stop** — models love to settle into a static hold. If a subject
  should keep moving for the whole clip, say so.

On models with a `genre` hint (`cinematic_studio_3_0`, `seedance_2_0`), set it
deliberately — `drama` or `epic` suits most of these briefs; `auto` drifts.

---

## Frame extraction

Save the original MP4 and brand masters. Extract into a **fresh** staging directory.
`fps` and `width` come from the budget.

**Check the encoder exists first.** Homebrew's current `ffmpeg` formula is slim and has
**no `libwebp`** — `ffmpeg -hide_banner -encoders | grep webp` comes back empty and the
commands below fail with `Unknown encoder 'libwebp'`. Verify with that grep, and if it is
missing use the two-step path instead, which is equivalent and exposes finer control:

```sh
ffmpeg -i source.mp4 -an -vf "fps=${FPS},scale=${WIDTH}:-2:flags=lanczos" \
  -start_number 0 "$TMP/frame-%04d.png"
ls -1 "$TMP" | xargs -P 8 -I{} cwebp -quiet -q 85 -m 6 "$TMP/{}" -o "frames/desktop/{}.webp"
```

`cwebp -resize W 0` also handles the downscale, so PNG intermediates can be extracted once
per fps and re-encoded at several widths while measuring.

Single-pass, when `libwebp` is available:

```sh
# Desktop
ffmpeg -i source.mp4 -an \
  -vf "fps=${FPS},scale=${WIDTH}:-2:flags=lanczos" \
  -c:v libwebp -quality 85 -compression_level 6 \
  -start_number 0 frames/desktop/frame-%04d.webp

# Mobile portrait
ffmpeg -i source-portrait.mp4 -an \
  -vf "fps=${FPS},scale=1080:-2:flags=lanczos" \
  -c:v libwebp -quality 82 -compression_level 6 \
  -start_number 0 frames/mobile/frame-%04d.webp

# Posters
ffmpeg -i source.mp4 -vf "select=eq(n\,0),scale=${WIDTH}:-2" -frames:v 1 posters/desktop.webp
```

Tune from measurement. Drop `fps` before you drop `quality`. Never upscale a
low-resolution source.

**Check the source for letterboxing before extracting.** Generated portrait clips
frequently carry a few pixels of pillarbox, which reads as a seam against the page
background. Detect and crop it rather than shipping it:

```sh
ffmpeg -hide_banner -ss 2 -i portrait.mp4 -vf "cropdetect=24:2:0" -frames:v 60 -f null - 2>&1 \
  | grep -o 'crop=[0-9:]*' | sort | uniq -c | sort -rn | head -3
```

Then put that exact `crop=` filter **before** the scale in the extraction chain. Crop
first, scale second: cropping changes the effective aspect, so the output height follows
from the cropped width.

**Budget check before integrating:**

```
frames × avg_size = total   →   ≤ 18MB desktop, ≤ 10MB portrait
```

Over budget? Reduce fps or sequence length. **Never re-encode the source lower** — that
degrades every frame permanently to fix a delivery problem.

### Repo weight

Five sites at `standard` is roughly 115MB of binary WebP. Git does not delta-compress
WebP, and every re-extraction writes new blobs that stay in history forever.

**Extract once at final settings.** Iterate frame settings in the scratch directory, and
only copy into `public/frames/` when they're final. If a sequence needs regenerating,
`git rm` the old one in the same commit. Consider Git LFS past ~300MB.

### Manifest

Write `public/frames/manifest.json` from the **actual** files on disk, then verify by
looking: first / middle / last frame render, numbering contiguous, every path resolves,
and `count` matches `ls | wc -l`. An off-by-one shows up as a frozen final frame.

```json
{
  "desktop": { "pattern": "/frames/desktop/frame-%04d.webp", "count": 240,
               "width": 1600, "height": 900, "fps": 24,
               "poster": "/posters/desktop.webp", "bytes": 14204928 },
  "mobile":  { "pattern": "/frames/mobile/frame-%04d.webp", "count": 240,
               "width": 1080, "height": 1920, "fps": 24,
               "poster": "/posters/mobile.webp", "bytes": 9112576 }
}
```

---

## Inspecting what came back

Read representative frames as images — never trust the prompt to have been obeyed. Check
for unintended text or watermarks, a cut you didn't ask for, the camera settling when it
should keep moving, blur where you wanted macro sharpness, exposed corners on a rotation,
and whether your planned copy space actually stayed clear.

On failure, make **one targeted correction** naming only what is wrong. Do not restate the
whole prompt and do not enter an open-ended regeneration loop. Keep assets that are
already good, and respect the tier's `retakes` budget — when you reach it, say so and ask
rather than silently continuing to spend.

Record every prompt, model, params, job ID and decision in `production-notes.md` as you go.

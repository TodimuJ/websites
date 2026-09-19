# Using `/cinematic-site`

Practical invocations, flags and recipes for the skill in
[`.claude/skills/cinematic-site/`](.claude/skills/cinematic-site/SKILL.md).

Worth knowing up front: these aren't parsed by argv — the skill reads them as conventions,
so spelling is forgiving (`--stills-quality` and `--stills_quality` both land) and plain
prose works identically. Nothing here has been run end-to-end yet, so treat it as the
documented contract rather than battle-tested recipes.

## 1. Naming the subject — three forms

| Form | Example | What happens |
|---|---|---|
| **Brief name** | `/cinematic-site espresso` | Reads `briefs/espresso.md`. Palette, beats, brand candidates and ending frame are pre-answered, so Gate 1 only asks the gaps. |
| **Free text** | `/cinematic-site a hand-thrown ceramic teapot, wabi-sabi` | Tries to match a brief by subject; on no match, derives its own question bank and composes the story from scratch. Fully supported path. |
| **Bare** | `/cinematic-site` | Lists the 11 briefs with one-line hooks, and notes any description works. |

## 2. Flag reference

The two right-hand columns are the distinction worth internalising — **credits and page
weight are driven by different flags entirely.**

| Flag | Values | Affects credits | Affects page weight |
|---|---|---|---|
| `--budget` | `economy` · `standard` · `max` | ✅ sets all seven | ✅ sets all seven |
| `--duration` | seconds per scene (model-capped) | ✅ **major** | ❌ none |
| `--resolution` | `720p` · `1080p` · `4k` | ✅ **major** | ❌ none |
| `--stills-quality` | `medium` · `high` · `xhigh` · `max` | ✅ major | ❌ none |
| `--retakes` | integer, or `uncapped` | ✅ **major** | ❌ none |
| `--bitrate-mode` | `standard` · `high` | ⚠️ minimal | ❌ none |
| `--fps` | delivery frame rate | ❌ none | ✅ **major** |
| `--width` | delivery pixel width | ❌ none | ✅ **major** |
| `--cap` | credit ceiling | 🛑 enforces | ❌ none |
| `--model` | any catalogue id | ✅ varies | ❌ none |

`--bitrate-mode` only exists on the Seedance family, and it touches the source MP4 only —
never the shipped page.

## 3. Practical recipes

| Goal | Command | Why |
|---|---|---|
| **Cheapest possible end-to-end proof** | `/cinematic-site espresso --budget economy` | 720p, 5s scenes, 1 retake, 15fps/1280px. ~6MB page. The right first command. |
| **Two-pass — step 1, the probe** | `/cinematic-site espresso --budget economy --retakes 1` | Validates storyboard, camera direction and scroll pacing before you spend properly. |
| **Two-pass — step 2, the keeper** | `/cinematic-site espresso --budget standard` | Same approved storyboard, regenerated at quality. Cheaper overall than one careful expensive pass. |
| **Default, no decisions** | `/cinematic-site vinyl` | `standard` throughout. 1080p, 10s scenes, 3 retakes, ~14MB. |
| **Hard credit ceiling** | `/cinematic-site perfume --cap 400` | Gate 2 prices the whole build first; generation stops and asks before crossing 400, retakes included. |
| **Cheap but with room to breathe** | `/cinematic-site spirits --budget economy --duration 12` | More narrative time, identical page weight, only credits rise. |
| **Maximum fidelity** | `/cinematic-site metal-card --budget max` | 4K source via `cinematic_studio_3_0`, `xhigh` stills, uncapped retakes. |
| **4K hero, light everywhere else** | `/cinematic-site ev --budget max --fps 20 --width 1440` | Premium generation, disciplined delivery. ~10MB from a 4K source. |
| **Mobile-first audience** | `/cinematic-site lip-gloss --budget standard --fps 15 --width 1280` | Standard credits, economy bytes. Best value-per-megabyte combination here. |
| **Crisp stills, few of them** | `/cinematic-site keyboard --fps 12 --width 1920` | Low frame rate, high resolution — good when the motion is slow and detail matters. |
| **Long single-scene story** | `/cinematic-site satellite --model seedance_2_5 --duration 25` | Only Seedance 2.5 and Wan 3.0 reach past 20s. Avoids seams entirely. |
| **Force true clip continuity** | `/cinematic-site forged-knife --model seedance_2_5` | The one model with `video_extension` — the model continues the actual clip rather than chaining frames. |
| **Identity lock across states** | `/cinematic-site metal-card --model seedance_2_5 --retakes 5` | Four metals, one geometry. Drift is instantly visible on a flat rectangle, so buy extra takes. |
| **Try Veo** | `/cinematic-site botanical-serum --model veo3_1` | Will warn first: start-frame only, 8s cap, no 21:9 — so multi-scene means visible seams. Then you choose. |
| **Veo, but with seam control** | `/cinematic-site botanical-serum --model veo3_1_lite` | Keeps the Veo look and adds `end_image`. Usually what people actually want when they say "use Veo". |
| **Kling at 4K** | `/cinematic-site spirits --model kling3_0 --resolution 4k` | Has `end_image` and a 4k mode. No 21:9 though. |
| **Budget model, upscaled after** | `/cinematic-site honey --budget economy --duration 10` then ask to upscale | Generate cheap and short, then interpolate to more frames — removes stepping without a longer clip. |
| **One retake, no drift** | `/cinematic-site vinyl --retakes 1 --cap 250` | Belt and braces when you want a hard stop. |
| **Free-text subject** | `/cinematic-site a hand-forged copper moka pot on a gas flame` | No brief match → derives its own questions from materials, hero moment, ending frame, physics. |
| **Free-text, priced** | `/cinematic-site a walnut and brass desk lamp --budget economy --cap 200` | Same generic path with guardrails. |
| **Ultra-wide desktop hero** | `/cinematic-site ev --model cinematic_studio_3_0 --resolution 4k` | 21:9 support plus 4K. Audio already defaults off on this one. |
| **Kintsugi (no brief file)** | `/cinematic-site a kintsugi tea bowl, shatter reversed, gold seams --model seedance_2_5` | Backward extension is exactly what the reverse-fracture story needs. |

## 4. Prose equivalents

| Say this | Resolves to |
|---|---|
| "build the espresso one, keep it cheap" | `espresso --budget economy` |
| "cheap but give me 10-second scenes" | `--budget economy --duration 10` |
| "go all out on this one" | `--budget max` |
| "don't spend more than 400 credits" | `--cap 400` |
| "use Veo for this" | `--model veo3_1` + capability warning |
| "make it light, most of my traffic is mobile" | `--fps 15 --width 1280` |
| "one take only, I just want to see it work" | `--retakes 1` |
| "choose for me" / "build a template" | Skips Gate 1 entirely, records assumptions in `production-notes.md` |

## 5. Mid-build, after the flags

Once it's running, these are the interventions you'll actually reach for:

| Say | Effect |
|---|---|
| "regenerate scene 3, the camera stops moving halfway" | One targeted correction, not a full re-prompt |
| "redo mobile only" | Re-runs Phase 5 against existing desktop assets |
| "drop to economy from here" | Re-resolves the budget mid-build |
| "show me the ledger" | Current spend vs the Gate 2 estimate |
| "keep the second take, bin the third" | Preserves good assets instead of regenerating wholesale |
| "extract frames at 20fps instead" | Delivery-only change — no regeneration, no credits |

That last row is the one people forget: **fps and width are re-extractable from the source
MP4 at any time for free.** If the page feels heavy, you never need to regenerate video to
fix it.

---

**Suggested first three commands**, in order:

```bash
/cinematic-site                                  # see the 11 briefs
/cinematic-site espresso --budget economy        # cheapest real proof
/cinematic-site espresso --budget standard       # the keeper, same storyboard
```

See also: [`SKILL.md`](.claude/skills/cinematic-site/SKILL.md) for the phase structure and
budget system, [`references/generation.md`](.claude/skills/cinematic-site/references/generation.md)
for the full model catalogue, and [`briefs/`](.claude/skills/cinematic-site/briefs/) for the
eleven concepts.

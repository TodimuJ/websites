# Vinyl record — "the groove is the sound"

## Identity
- **slug** `vinyl`
- **Niche** Reissue label / pressing house
- **Physics** Macro-to-wide spiral travel; molten lacquer; lathe cutting
- **Brand names** `LATHE & LACQUER` · `PRESSING NO. 1`
- **Palette** `--black #0D0D0D` `--oxblood #6B1F22` `--label-cream #E8DFC8` `--tungsten #E0A44A` `--dust #9A9287`
- **Type** Mid-century grotesk (Blue Note register) + a wide slab for the wordmark

## The conceptual hook
Structure the scroll as **time-reversal, then return** — it makes the page feel like a scrub head rather than a scroll. Style the scroll indicator as a track timecode (`00:00 / 03:42`). The metaphor closes itself.

## Scene beats
1. **Opening** — Extreme macro: a stylus seated in a groove. Canyon walls of black vinyl, dust motes the size of boulders, one hard raking light.
2. **The spiral out** — Camera pulls back along the spiral groove while the disc rotates, accelerating. Groove becomes texture, becomes the full disc, becomes the label.
3. **BLUR-THROUGH — reverse into the press** — The disc un-presses. Steel plates part and the record becomes a molten black biscuit of PVC, glossy and deforming. The frame fills with black polymer.
4. **The lathe** — Further back in time: the lacquer master under a cutting head, a fine curl of swarf peeling away in real time. Cold blue light, clinical.
5. **Return** — Camera reverses direction and travels forward out of the machine, through the sleeve, into a room.
6. **Resolution** — A listening room at night. Tonearm descends, stylus lands, the record turns under a warm tungsten lamp.

## Ending frame
The turntable in warm lamplight, record spinning, everything else dark. Copy lower-left.

## Products
A 3-title reissue series (180g), a subscription, and a pressing service enquiry. $28–$34 per title.

## Difficulty
**Medium.** The reversal is conceptually ambitious but every beat is materially forgiving.

## Gotchas
- Label artwork must not be generated with text. Render a blank or abstract label and overlay type in HTML.
- The reversal is the risk: generate scenes 1–2 forward, then 3–4 as a **separate backward extension** (`extension_mode: "backward"`), which is exactly what this mode is for.
- "Dust motes" reads as dirt if overdone — prompt "a few large soft-focus dust particles, cinematic, not grime".

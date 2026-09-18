# Metal card — "the quietest card in the room"

## Identity
- **slug** `metal-card`
- **Niche** Invitation-only metal payment card / private members' trust
- **Physics** **Material transmutation on a fixed object** — the geometry never changes, only what it is made of
- **Brand names** `ONYX` · `MERIDIAN TRUST`
- **Palette** `--void #08070A` `--gold #C8A55C` `--filament #8A6A35` `--sterling #D8DADE` `--parchment #EDE7DA`
- **Type** High-contrast display serif *italic* for the metal names (Aurum, Sterling), wide-tracked mono caps for every label and spec. Nothing else.

## The conceptual hook
Every other brief transforms a *shape*. This one holds the shape perfectly still and
transforms the **substance** — the card is identical in geometry, lighting and position
across all four states, and only the material resolves differently. The scroll rail is a
materials selector, and the spec grid (`METAL / WEIGHT / LIMIT / ADMISSION`) updates
beneath it. It reads as a product configurator that happens to be cinematic, which is
exactly why it feels expensive rather than decorative.

Label the scroll rail `01 — 02 — 03 — 04` and put `KEEP SCROLLING — THE CARD CHANGES
METAL` beneath it. The instruction is part of the design.

## Scene beats
1. **Opening — the object** — Card in near-total darkness, macro three-quarter, tilted. A single gold light ribbon rakes across its edge and dies. Eyebrow copy reads `FILM 001 — THE OBJECT`.
2. **The turn** — The card glides and rotates to reveal its back: embossed number, valid-thru, the trust line, a concierge number. Gold filament threads drift behind it on black.
3. **Metal 01 — Onyx** — Settles face-on. Matte black, gold-engraved wordmark, gold contact plate. Spec grid resolves beside it. *"Nothing printed. Nothing declined."*
4. **BLUR-THROUGH — transmutation** — The filament ribbons sweep *across* the card face and briefly fill the frame with moving light. When they pass, the surface has become another metal. This is the load-bearing beat and it repeats three times.
5. **Metal 02 — Sterling** — Brushed steel 316L, 21 grams, no preset limit, admission by referral. *"Brushed steel, worn like a good watch."*
6. **Metal 03 — Aurum** — 18K gold clad, 28 grams, no preset limit, admission by appointment. *"Eighteen-karat clad. For those past subtlety."*
7. **Metal 04 — Meridian** — Sandblasted platinum, 30 grams, admission by invitation only. Design it as the coldest and most restrained of the four so the sequence lands rather than escalating.
8. **Resolution** — The card comes to rest full-face, one raking light along the milled edge, spec grid settled, `REQUEST` as the primary action.

## Ending frame
Card flat and face-on in darkness, a single specular line travelling the milled edge,
everything else black. Copy sits left in the void. The restraint *is* the pitch.

## Products
Four tiers keyed to the four metals — Onyx / Sterling / Aurum / Meridian — each with
`METAL · WEIGHT · LIMIT · ADMISSION`. No prices; annual fee "on request" and a `REQUEST`
CTA. Nav: `THE OBJECT / PRIVILEGES / METALS`.

## Difficulty
**Medium–Hard.** The `ev` brief's rigid-geometry problem, but small, flat and shot in
darkness — which helps enormously. The real difficulty is *identity lock*: the card must
be pixel-consistent across four generations, and a flat rectangle makes any drift
instantly obvious.

## Gotchas
- **Generate no text on the card whatsoever** — no number, no cardholder name, no wordmark, no valid-thru. Models garble digits every time and it is the first thing a viewer's eye goes to. Generate blank metal faces and overlay every character in HTML. This also lets the cardholder name personalise later.
- **Lock geometry with chaining, not fresh generations.** Use `end_image` of metal 01 as `start_image` of metal 02, or `seedance_2_5` extension. Four independent generations give you four subtly different cards.
- **Flat metal reflections are the failure mode.** Prompt `single raking key light from upper left, deep falloff, no softbox grid reflections, no studio catchlights` — otherwise you get rectangular window reflections that read as stock product photography.
- **The cursor-reactive filament background is HTML/canvas, not video.** Build it as a separate layer above the frame sequence; do not try to generate interactivity.
- **Invent the issuer.** Build in the register of a premium metal card, but never reproduce a real network's or bank's name, wordmark or trade dress, and do not present it as a real financial product with real terms. Mark it a demo.

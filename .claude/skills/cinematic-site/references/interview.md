# Phase 1 — Interview (GATE 1)

Extract only what materially changes the build, in at most **two** `AskUserQuestion`
calls, then commit to a direction.

The archetype questions are **derived from the subject, not looked up.** A brief in
`briefs/` gives you a head start; an arbitrary subject gets the same quality of interview.

## Rules

- **Never ask what the brief or the user's own description already answers.** Briefs carry
  palette, scene beats, brand candidates and the ending frame. Ask only the gaps.
- **Batch.** Max 4 questions per `AskUserQuestion` call, 2 calls maximum.
- **Always offer a concrete default marked `(Recommended)` first.** Never ask an abstract
  question ("what feeling do you want?") when you can show choices.
- **Never ask a question whose answer you would ignore.** If you're going to pick the hero
  shade yourself, don't stage a question about it.
- One free-text follow-up is allowed if answers genuinely conflict. Otherwise stop asking.
- **Currency and market are not interview topics.** Prices are USD and the market is the
  United States unless the user raises it first. A brief's price band is a *tier signal*,
  not a currency instruction — read `$180–$620` as "premium", and never carry a currency
  symbol out of a brief into a site.
- If the user says *"choose for me"*, *"build a template"*, *"you decide"*, or answers
  "Other → whatever you think": skip to Phase 2 with your own defaults and record every
  one as an assumption in `production-notes.md`.

---

## Call 1 — universal set

Ask for every site. Where a brief exists, phrase options using its own candidates.

1. **Brand name.** Offer 2 invented candidates + "generate more" + "I have one" (free
   text). A name unlocks the logo, so this is first.
2. **Palette.** Offer a concrete 4–5 colour direction as `(Recommended)`, one deliberate
   alternate (usually the same story in a lighter or warmer register), and "surprise me".
3. **Catalogue.** How many SKUs (hero only / hero + 3 / hero + 6 / full collection), and
   whether prices show. If yes, ask the **tier** — accessible / premium / luxury — not a
   number. **Do not ask about currency or market.** Both are fixed: US dollars, United
   States (`SKILL.md` non-negotiable 10). Asking would violate the rule below about never
   asking a question whose answer you would ignore.
4. **Primary action.** Buy / join the waitlist / reserve or book / enquire. Determines the
   CTA everywhere and whether a cart affordance is needed.

If the budget was not specified and the subject is ambitious, make **budget** the fourth
question instead and fold the primary action into Call 2 — offer the two-pass workflow
(`economy` probe → `standard` keeper) as the recommended option.

---

## Call 2 — derive the archetype questions

**This is the part that must not be generic.** Derive 4 questions for *this* subject,
covering these five dimensions. Ask the 4 with the most leverage; skip any the user or
brief already answered.

| Dimension | Why it matters | Bad vs good |
|---|---|---|
| **Materials & finish** | Goes verbatim into the generation prompt | ✗ "what's your aesthetic?" ✓ "brushed titanium / PVD matte black / anodised with milled gold edge?" |
| **The hero moment** | The one shot worth spending retakes on | ✗ "what should it look like?" ✓ "is the hero shot the mill cutting the blank, or the card landing on stone?" |
| **The ending frame** | The most important sentence in any brief | ✗ "how should it end?" ✓ "card alone on dark stone, or handed across a counter?" |
| **Transformation physics** | Sets difficulty and failure modes | ✗ "what's the story?" ✓ "molten pour → milling → PVD coating → finished card, or start at the blank?" |
| **Business shape** | Sets CTA, catalogue and copy register | ✗ "who's your audience?" ✓ "single tier, or good/better/best with a brochure?" |

### Test before asking

Every question must pass: **would a different answer change what gets generated, or only
what gets styled?** Styling you decide yourself from the palette. Only ask about things
that change pixels, structure or copy register.

### Worked examples

`references/question-banks.md` holds ten fully-worked banks — one per brief. Read it when
you need to **calibrate the specificity**, not to look up an answer. They are the standard
to match, including for their own subjects when the user's description diverges from the
brief.

### When the subject resists this pattern

This technique suits **physical products with a visible transformation**. If the subject is
a service, a SaaS, a consultancy or anything without a material process, say so plainly
rather than forcing a metaphor:

> A scroll-scrub tells a story about something physically changing. For [subject] there's
> no obvious transformation — which usually means either a weaker site than the technique
> deserves, or finding the physical artefact at its centre (the device, the document, the
> ingredient, the machine). What's the most tangible object in this business?

That question is often the whole consultation. If there genuinely is no artefact,
recommend a conventional site and say why.

---

## After the answers

Do all of this before Phase 2, without asking again:

1. **Lock the identity.** Generate 3 logo concepts with `recraft_v4_1`,
   `model_type: "vector"`, passing the chosen palette as `colors` (≤10 hex values),
   `resolution: "2k"`. Pick the strongest yourself. **This is the only route to a genuine
   editable vector master** — every other image model returns raster, and a PNG export is
   not an SVG master. Prefer a wordmark plus a separable symbol; you need the symbol alone
   for the mobile nav bar. Fall back to `openai_hazel` only if vector output fails.
2. **Write design tokens** into `sites/<slug>/src/styles/tokens.css` — palette, type
   scale, radii, spacing. Everything downstream reads from these.
3. **Build a style tile** at `sites/<slug>/style-tile.html`: logo, palette swatches with
   hex, heading and body specimens, primary and secondary buttons, one product card,
   imagery direction. Real HTML using the real tokens — not a screenshot, not a brandbook.
   It is how you catch a palette problem before generating 300 frames.
4. **State the direction in two sentences** and move to Phase 2.

If the user supplied a logo or brand asset: preserve it exactly, do not redraw it to fit
the aesthetic, and extract the palette from it instead.

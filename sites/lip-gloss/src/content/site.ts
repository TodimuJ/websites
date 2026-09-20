/**
 * GLOSSARIUM — every user-visible string, price and pacing value.
 * Nothing user-facing is hardcoded in a component. Edit the site from this file.
 */

export interface Beat {
  scroll: [number, number];
  frames: [number, number];
}

export const site = {
  brand: {
    name: "GLOSSARIUM",
    symbol: "/logo-symbol.svg",
    tagline: "High-shine lip gloss",
  },

  meta: {
    title: "GLOSSARIUM — high-shine lip gloss in six shades",
    description:
      "A non-sticky, high-shine lip gloss with real body. Six shades from clear to " +
      "deep berry in one wet-look base. Clear glass, so the shade is the packaging.",
  },

  nav: [
    { label: "The formula", href: "#formula" },
    { label: "Shades", href: "#shades" },
    { label: "The brand", href: "#brand" },
  ],

  cta: { label: "Shop the shade range", href: "#shades" },

  /**
   * Copy beats revealed over the pinned canvas, keyed to scroll progress.
   *
   * Placement is set from MEASURED frame luminance in each chapter's own range, not
   * from the storyboard's intent. Mean / stddev of 8-bit luma per candidate zone:
   *
   *   hero    (f  0- 71)  upper-left 195/1.4  mid-left 169/2.8  MID-RIGHT  78/1.6  <- chosen
   *   formula (f191-247)  upper-left 186/1.4  mid-left 166/6.4  MID-RIGHT  60/13.6 <- chosen
   *   range   (f343-403)  upper-left  34/33   mid-left  36/24   MID-RIGHT  26/10.9 <- chosen
   *   close   (f415-479)  mid-right  109/24.7 bottom-left 104/11  BOTTOM  105/10.2 <- chosen
   *
   * The storyboard planned copy left on scenes 01/03/05. The delivered footage puts the
   * bright sky, the softbox array and the lit slide there — 166-195 luma against light
   * type — and the dark side is consistently the RIGHT third. All three moved right.
   *
   * Scene 06 is a full-frame face with no clean third anywhere (everything 104-133), so
   * `close` sits bottom over the chin and neck: not the darkest zone but the most STABLE
   * (stddev 10.2 against 24.7 for mid-right), and a scrim can fix brightness but not
   * flicker.
   */
  chapters: [
    {
      id: "hero",
      at: [0.0, 0.175] as [number, number],
      align: "right" as const,
      position: "centre" as const,
      scrim: "right" as const,
      eyebrow: "Glossarium · Shade no. 04",
      heading: "You are looking at one drop.",
      body:
        "Dune 04 — a warm rose-gold nude in high-shine wet-look. " +
        "Scroll and it will prove it.",
      cta: { label: "Shop the shade range", href: "#shades" },
      secondary: { label: "Dune 04 — $22", href: "/shades/dune-04/" },
    },
    {
      id: "formula",
      at: [0.52, 0.625] as [number, number],
      align: "right" as const,
      position: "centre" as const,
      scrim: "right" as const,
      eyebrow: "The formula",
      heading: "Thick enough to fold.",
      body:
        "Real body, no stick. Castor seed and squalane in a wet-look base — " +
        "no plumping tingle, no grit, no tack.",
      meta: "Vegan · Non-sticky · 8h shine · Fragrance-free",
    },
    {
      id: "range",
      at: [0.775, 0.862] as [number, number],
      align: "right" as const,
      position: "centre" as const,
      scrim: "right" as const,
      eyebrow: "The range",
      heading: "Six shades. One formula.",
      body:
        "Clear through to deep berry in the same wet-look base. " +
        "Clear glass, so the shade is the packaging.",
      cta: { label: "See all six", href: "#shades" },
    },
    {
      id: "close",
      at: [0.89, 1.0] as [number, number],
      align: "left" as const,
      position: "bottom" as const,
      scrim: "up" as const,
      eyebrow: "Dune 04",
      heading: "And then it is just your mouth, shining.",
      body: "Free US shipping over $30 · 30-day returns · Made in the USA",
      cta: { label: "Add Dune 04 to bag — $22", href: "/shades/dune-04/" },
    },
  ],

  /**
   * Piecewise scroll -> frame mapping. MEASURED from the delivered footage.
   *
   *   Desktop  480 frames @ 12fps from a 40.005s master, 1280x720 native (no rescale)
   *   Portrait 316 frames @  8fps from a 39.507s master, 720x1280 down to 540 wide
   *
   * Beat boundaries were read off the footage, not assumed from the shot list:
   *
   *              desktop      portrait
   *   dune         0- 71         0- 53
   *   reveal      71-119        53- 72
   *   bead       119-191        72-140
   *   collapse   191-247       140-180
   *   pour       247-343       180-225
   *   tube       343-403       225-272
   *   mouth      415-479       278-315
   *
   * THE ONE DISCONTINUITY. Inter-frame difference analysis found exactly one hard cut
   * in the desktop master, at frame 144 (27.8x the median inter-frame delta; every other
   * frame in the sequence is at or under 5.3x). The camera jumps position and scale
   * there. It is covered by a deliberate hold at 0.400-0.430 so the change lands inside
   * a composed pause at a chapter boundary rather than mid-motion. The portrait master
   * has no cut at all -- its largest delta is 2.4x median.
   *
   * The two orientations share scroll boundaries so the same fraction shows the same
   * beat on both, with one exception: the portrait reveal carries only 19 frames against
   * the desktop's 48, so it gets a shorter scroll budget to keep frames-per-viewport-
   * height tolerable (21 f/vh, against 31 on desktop).
   */
  beats: {
    landscape: [
      { scroll: [0.0, 0.045], frames: [0, 0] },       // hold - read the hero
      { scroll: [0.045, 0.18], frames: [0, 71] },     // the dune
      { scroll: [0.18, 0.30], frames: [71, 119] },    // the reveal - slowest beat, 31 f/vh
      { scroll: [0.30, 0.345], frames: [119, 119] },  // hold - recognition lands
      { scroll: [0.345, 0.40], frames: [119, 143] },  // the bead settles
      { scroll: [0.40, 0.43], frames: [144, 144] },   // hold - the f144 cut lives here
      { scroll: [0.43, 0.52], frames: [144, 191] },   // the bead on the slide
      { scroll: [0.52, 0.62], frames: [191, 247] },   // the collapse
      { scroll: [0.62, 0.77], frames: [247, 343] },   // the pour - protected
      { scroll: [0.77, 0.86], frames: [343, 403] },   // the tube
      { scroll: [0.86, 0.89], frames: [403, 415] },   // over the tube mouth
      { scroll: [0.89, 0.96], frames: [415, 479] },   // the mouth
      { scroll: [0.96, 1.0], frames: [479, 479] },    // hold - read the CTA
    ] as Beat[],
    portrait: [
      { scroll: [0.0, 0.045], frames: [0, 0] },
      { scroll: [0.045, 0.20], frames: [0, 53] },     // dune gets more room than desktop
      { scroll: [0.20, 0.30], frames: [53, 72] },     // reveal - only 19 frames, 21 f/vh
      { scroll: [0.30, 0.345], frames: [72, 72] },
      { scroll: [0.345, 0.43], frames: [72, 95] },
      { scroll: [0.43, 0.52], frames: [95, 140] },    // no cut here - portrait is clean
      { scroll: [0.52, 0.62], frames: [140, 180] },
      { scroll: [0.62, 0.77], frames: [180, 225] },
      { scroll: [0.77, 0.86], frames: [225, 272] },
      { scroll: [0.86, 0.89], frames: [272, 278] },
      { scroll: [0.89, 0.96], frames: [278, 315] },
      { scroll: [0.96, 1.0], frames: [315, 315] },
    ] as Beat[],
  },

  collection: {
    eyebrow: "The range",
    heading: "Six shades, and nothing else.",
    filters: ["All", "Clear", "Nude", "Bronze", "Berry"],
    note:
      "Every shade is permanent. Nothing here is seasonal and nothing gets " +
      "discontinued to make room for a drop.",
  },

  products: [
    {
      id: "slip-01",
      name: "Slip 01",
      category: "Clear",
      price: "$18",
      unit: "6 ml",
      image: "/products/slip-01.webp",
      blurb: "Pure shine, no colour. The one that goes over everything else.",
      detail: [
        "Colourless with a faint warm shimmer.",
        "Wears alone as a glass finish, or on top of any shade below.",
      ],
      href: "/shades/slip-01/",
      page: {
        eyebrow: "Shade no. 01 · Clear",
        lede:
          "No colour at all, and the hardest thing in the range to make. A clear gloss " +
          "has nothing to hide behind — every flaw in the base is on display, which is " +
          "why most of them are thin.",
        story: {
          heading: "The one with nowhere to hide.",
          body: [
            "Pigment is forgiving. A bit of cloudiness, a slightly grey cast, a base " +
            "that separates by the third month — put enough colour in front of it and " +
            "nobody sees any of that. Take the colour away and the base has to be " +
            "genuinely good, because the base is the entire product.",
            "Slip 01 is the reference formula. It is what the other five are built on, " +
            "and it went through more revisions than any of them: the early versions " +
            "were water-clear in the tube and went faintly milky on the lip, which is " +
            "what happens when the refractive index of the oil phase and the polymer " +
            "phase do not agree. Matching them is most of the work.",
            "What is left is a gloss that reads as wet rather than as product. It is " +
            "the shade we sell most of, mostly to people who bought one of the colours " +
            "first and came back for the topcoat.",
          ],
        },
        notes: [
          ["Undertone", "None — fully colourless"],
          ["Coverage", "Transparent"],
          ["Finish", "High-shine wet-look, glass"],
          ["Flake", "Very fine warm shimmer, minimal"],
          ["Reads as", "Wet lips, not product"],
        ],
        wear: {
          heading: "How to wear it",
          steps: [
            "On bare lips, one pass. It is the shortest application in the range " +
            "because there is no colour to place — it just needs to be there.",
            "As a topcoat, go over the centre of the lower lip only. Over the whole " +
            "mouth it will sheer out whatever is underneath by about a third.",
            "Over a matte lipstick it is the fastest way to turn a flat finish into a " +
            "wet one without changing the shade at all.",
          ],
        },
        ingredients: {
          heading: "What is in it",
          body:
            "Seven ingredients — the shortest list here, because this is the base with " +
            "nothing added but a trace of shimmer. No fragrance, no menthol, no tingle.",
          list: [
            "Ricinus Communis (Castor) Seed Oil — the body",
            "Squalane — the slip",
            "Hydrogenated Polyisobutene — the shine",
            "Silica Dimethyl Silylate — holds the shimmer in suspension",
            "Tocopherol (Vitamin E)",
            "Synthetic Fluorphlogopite — the shimmer carrier",
            "Titanium Dioxide (CI 77891)",
          ],
        },
        specs: [
          ["Size", "6 ml"],
          ["Vessel", "Clear glass, brushed metal cap"],
          ["Applicator", "Flocked doe-foot"],
          ["Wear time", "Around 8 hours"],
          ["Batch", "900 units"],
          ["Made in", "United States"],
        ],
        faq: [
          { q: "Is it completely clear?",
            a: "Yes. There is a very fine warm shimmer in it that catches direct light, " +
               "but no pigment of any kind — it will not shift the colour of anything " +
               "you put it over." },
          { q: "Can men wear it?",
            a: "It is a clear balm-weight gloss with no colour and no fragrance, so " +
               "there is nothing gendered about it. A good number of people buy it " +
               "specifically because it is the one that does not look like anything." },
          { q: "Does it work as a lip balm?",
            a: "It behaves like one — castor oil and squalane are conditioning — but it " +
               "is not formulated as a treatment and makes no claims about repair. If " +
               "your lips are cracked, use an actual balm first and this over it." },
          { q: "Why is it the cheapest when it is the hardest to make?",
            a: "Because it has the fewest ingredients and no pigment load. Difficulty " +
               "and cost are not the same thing." },
        ],
        pairs: ["dune-04", "fig-11"],
      },
    },
    {
      id: "shell-02",
      name: "Shell 02",
      category: "Nude",
      price: "$20",
      unit: "6 ml",
      image: "/products/shell-02.webp",
      blurb: "A soft milky pink-beige. The quietest shade in the range.",
      detail: [
        "Cool cream in the tube, a barely-there wash on the lip.",
        "Sheer enough to skip a mirror.",
      ],
      href: "/shades/shell-02/",
      page: {
        eyebrow: "Shade no. 02 · Nude family",
        lede:
          "A soft milky pink-beige that does almost nothing, on purpose. The shade for " +
          "days when you want your mouth to look like it has been looked after rather " +
          "than made up.",
        story: {
          heading: "A quiet shade is not an easy one.",
          body: [
            "Pale nudes fail in two directions and both are ugly. Too much white and " +
            "they go chalky, sitting on the lip like concealer. Too much grey in the " +
            "beige and they drain the face, which is the thing people mean when they " +
            "say a nude made them look ill.",
            "Shell 02 avoids both by staying genuinely sheer. There is very little " +
            "pigment in it — roughly a third of what is in Dune 04 — and what is there " +
            "is a warm pink-beige rather than a true neutral, so it lifts rather than " +
            "flattens. The milkiness comes from a low titanium dioxide load, enough to " +
            "soften the natural lip colour without covering it.",
            "It is the least photographed shade we make and the one most often bought " +
            "twice. People keep one in a bag and one somewhere else, because it is the " +
            "shade you reach for without deciding to.",
          ],
        },
        notes: [
          ["Undertone", "Warm-neutral — pink over beige"],
          ["Coverage", "Sheer, softens rather than covers"],
          ["Finish", "High-shine wet-look"],
          ["Flake", "Fine, very low density"],
          ["Reads as", "Your lips, slightly softened"],
        ],
        wear: {
          heading: "How to wear it",
          steps: [
            "One pass, no mirror needed. It is sheer enough that there is no wrong " +
            "way to apply it, which is most of the point.",
            "Two passes for a slightly milkier finish. It will not build much past " +
            "that — the pigment load is too low, deliberately.",
            "Over a liner it will soften the edge rather than match it. If you want " +
            "definition, this is the wrong shade and Dune 04 is the right one.",
          ],
        },
        ingredients: {
          heading: "What is in it",
          body:
            "The same base as the rest, at roughly a third of Dune 04's pigment load " +
            "with a slightly higher titanium dioxide for the milkiness. No fragrance, " +
            "no menthol, no tingle.",
          list: [
            "Ricinus Communis (Castor) Seed Oil — the body",
            "Squalane — the slip",
            "Hydrogenated Polyisobutene — the shine",
            "Silica Dimethyl Silylate — holds the flake in suspension",
            "Tocopherol (Vitamin E)",
            "Synthetic Fluorphlogopite — the flake carrier",
            "Calcium Aluminum Borosilicate",
            "Iron Oxides (CI 77491, CI 77492)",
            "Titanium Dioxide (CI 77891)",
          ],
        },
        specs: [
          ["Size", "6 ml"],
          ["Vessel", "Clear glass, brushed metal cap"],
          ["Applicator", "Flocked doe-foot"],
          ["Wear time", "Around 8 hours, 5 through a meal"],
          ["Batch", "900 units"],
          ["Made in", "United States"],
        ],
        faq: [
          { q: "Will it wash me out?",
            a: "It is built specifically not to. The beige is warmed with pink rather " +
               "than greyed, and it stays sheer enough that your own lip colour still " +
               "comes through. On very pale skin it reads almost like Slip 01." },
          { q: "Is it too pale for deeper skin tones?",
            a: "Honestly, it can be. It is the one shade in the range where the answer " +
               "is not an easy yes — on deep skin it can read ashy. Dune 04 or Ember 07 " +
               "do the same quiet job and do it better." },
          { q: "How is it different from Slip 01?",
            a: "Slip has no pigment at all and only adds shine. Shell has a little, and " +
               "softens the natural colour of the lip as well as adding shine." },
          { q: "Does it need a mirror?",
            a: "No. That is the entire design brief for this shade." },
        ],
        pairs: ["slip-01", "dune-04"],
      },
    },
    {
      id: "dune-04",
      name: "Dune 04",
      category: "Nude",
      price: "$22",
      unit: "6 ml",
      image: "/products/dune-04.webp",
      blurb:
        "The hero. A warm rose-gold nude that reads golden in daylight and amber indoors.",
      detail: [
        "The shade the whole of this page is made of.",
        "Fine gold flake, visible in direct light and invisible in a room.",
      ],
      featured: true,
      href: "/shades/dune-04/",
      page: {
        eyebrow: "Shade no. 04 · Nude family",
        lede:
          "A warm rose-gold nude in the wet-look base. Reads golden in daylight, amber " +
          "under a lamp, and like a slightly better version of your own mouth in a " +
          "bathroom mirror at 7am.",
        story: {
          heading: "Named after the thing it looked like.",
          body: [
            "Dune 04 was the fourth attempt at a nude that did not go grey on warm skin " +
            "or orange on cool skin. The first three did both, at different times of " +
            "day, which is the usual failure of a rose-gold: it is a colour that " +
            "depends entirely on what light it is standing in.",
            "The fix was to stop chasing a single pigment and build the shade out of a " +
            "translucent amber base with a fine rose-gold interference flake suspended " +
            "in it. The base carries the warmth, the flake carries the light, and the " +
            "two disagree just enough that the shade shifts with the room instead of " +
            "fighting it.",
            "The name came later, from a bench photograph. A single bead of it on a " +
            "glass slide, shot close with a hard light raking across the top, looks " +
            "exactly like a sand dune at golden hour — same curve, same shadow, same " +
            "impossible colour. We have never been able to unsee it, which is why the " +
            "whole of the front page is that photograph, pulled back.",
          ],
        },
        notes: [
          ["Undertone", "Warm — rose-gold over amber"],
          ["Coverage", "Medium sheer, builds in two passes"],
          ["Finish", "High-shine wet-look"],
          ["Flake", "Fine gold interference, low density"],
          ["Reads as", "Golden in daylight, amber indoors"],
        ],
        wear: {
          heading: "How to wear it",
          steps: [
            "One pass down the centre of the lower lip, then press. That is the whole " +
            "application for most people — the base is heavy enough that it spreads " +
            "itself.",
            "For more depth, wait forty seconds and go again. It builds without going " +
            "sticky because the second coat sits into the first rather than on it.",
            "Over a liner it behaves like a topcoat and will pull the liner half a " +
            "shade warmer. Over nothing it is a nude on its own.",
          ],
        },
        ingredients: {
          heading: "What is in it",
          body:
            "Nine ingredients. No fragrance, no menthol, no capsicum, no cinnamon — " +
            "nothing that makes a lip gloss tingle, because a tingle is irritation and " +
            "irritation is not plumping.",
          list: [
            "Ricinus Communis (Castor) Seed Oil — the body",
            "Squalane — the slip",
            "Hydrogenated Polyisobutene — the shine",
            "Silica Dimethyl Silylate — holds the flake in suspension",
            "Tocopherol (Vitamin E)",
            "Synthetic Fluorphlogopite — the flake carrier",
            "Calcium Aluminum Borosilicate",
            "Iron Oxides (CI 77491, CI 77492)",
            "Titanium Dioxide (CI 77891)",
          ],
        },
        specs: [
          ["Size", "6 ml"],
          ["Vessel", "Clear glass, brushed metal cap"],
          ["Applicator", "Flocked doe-foot"],
          ["Wear time", "Around 8 hours, 4 through a meal"],
          ["Batch", "900 units"],
          ["Made in", "United States"],
        ],
        faq: [
          { q: "Is it sticky?",
            a: "No. It is thick, which people sometimes expect to mean sticky, and it " +
               "is the opposite — the body comes from castor oil and squalane rather " +
               "than from tack. It will not catch your hair on a windy platform." },
          { q: "Will it work on deeper skin tones?",
            a: "Yes, and it is one of the few nudes here that does. Because the colour " +
               "is carried by a translucent amber rather than an opaque pink, it warms " +
               "rather than greys. On very deep skin it reads closer to a soft bronze." },
          { q: "Does the flake feel gritty?",
            a: "No. The flake is fine enough that you cannot feel it with a fingertip. " +
               "You can see it in direct sun and in a camera flash, and essentially not " +
               "at all in an ordinary room." },
          { q: "Can I wear it over lipstick?",
            a: "Yes. It will warm whatever is underneath by about half a shade and add " +
               "the shine. On a matte berry it is very good." },
        ],
        pairs: ["shell-02", "slip-01"],
      },
    },
    {
      id: "ember-07",
      name: "Ember 07",
      category: "Bronze",
      price: "$24",
      unit: "6 ml",
      image: "/products/ember-07.webp",
      blurb: "Burnished bronze with the heaviest flake in the range.",
      detail: [
        "Deep warm metallic brown, amber where the light goes through it.",
        "The only shade that reads as metal rather than skin.",
      ],
      href: "/shades/ember-07/",
      page: {
        eyebrow: "Shade no. 07 · Bronze family",
        lede:
          "The heaviest flake load in the range, in a deep warm metallic brown. This is " +
          "the shade that does not pretend to be your lips but better — it is clearly a " +
          "colour, and it is meant to be.",
        story: {
          heading: "The one that was supposed to be a nude.",
          body: [
            "Ember 07 started as a deeper Dune. The brief was a bronze-leaning nude for " +
            "people on whom 04 disappears, and the first three batches did exactly that " +
            "job and were completely uninteresting.",
            "What changed it was a mistake in a weighing. A batch went out with roughly " +
            "three times the intended flake load, and instead of a nude with a bit of " +
            "warmth we had something that behaved like liquid metal — the base went " +
            "almost chocolate in the mass and lit to a hot amber wherever it thinned. " +
            "Nobody wanted to correct it.",
            "It is the least versatile thing we make and the one people come back for. " +
            "It does not go with everything, it does not read as no-makeup, and in low " +
            "light it is nearly brown. In direct sun it is the only shade in the range " +
            "that people ask about.",
          ],
        },
        notes: [
          ["Undertone", "Warm — bronze over chocolate"],
          ["Coverage", "Medium, opaque in three passes"],
          ["Finish", "High-shine wet-look, metallic"],
          ["Flake", "Dense gold, high density — 3x the range average"],
          ["Reads as", "Hot amber in sun, deep brown in low light"],
        ],
        wear: {
          heading: "How to wear it",
          steps: [
            "Less than you think. One pass, pressed, is a bronze wash. Three passes is " +
            "genuinely metallic and is an evening decision.",
            "It is the one shade here that benefits from a blotted base. On bare lips " +
            "the flake can travel slightly at the edges; on a blotted matte it stays " +
            "exactly where you put it.",
            "Tapped onto the centre of the lower lip over Fig 11 it does something very " +
            "good that we did not plan and cannot really describe.",
          ],
        },
        ingredients: {
          heading: "What is in it",
          body:
            "The same nine-ingredient base as every other shade, with the flake load " +
            "roughly tripled and the iron oxide ratio shifted warm. No fragrance, no " +
            "menthol, no tingle.",
          list: [
            "Ricinus Communis (Castor) Seed Oil — the body",
            "Squalane — the slip",
            "Hydrogenated Polyisobutene — the shine",
            "Silica Dimethyl Silylate — holds the flake in suspension",
            "Tocopherol (Vitamin E)",
            "Synthetic Fluorphlogopite — the flake carrier",
            "Calcium Aluminum Borosilicate",
            "Iron Oxides (CI 77491, CI 77492, CI 77499)",
            "Titanium Dioxide (CI 77891)",
          ],
        },
        specs: [
          ["Size", "6 ml"],
          ["Vessel", "Clear glass, brushed metal cap"],
          ["Applicator", "Flocked doe-foot"],
          ["Wear time", "Around 6 hours — the flake load shortens it"],
          ["Batch", "900 units"],
          ["Made in", "United States"],
        ],
        faq: [
          { q: "Is it too dark for daytime?",
            a: "One pass is not. Three is. The shade has a very wide range depending on " +
               "how much you put on, which is unusual here — most of the range looks " +
               "much the same at one coat or three." },
          { q: "Does the flake settle in the tube?",
            a: "A little, over months. The silica holds most of it in suspension but " +
               "at this density some will drop. Roll the tube between your palms before " +
               "the first use of the day." },
          { q: "Will it stain?",
            a: "No. The iron oxides sit in an oil base and come off completely with a " +
               "balm or a micellar water. It will mark a white collar, though." },
          { q: "How is it different from Dune 04?",
            a: "Dune is a nude that happens to be warm. Ember is a colour. Same base, " +
               "same feel on the lip, entirely different intention." },
        ],
        pairs: ["dune-04", "fig-11"],
      },
    },
    {
      id: "fig-11",
      name: "Fig 11",
      category: "Berry",
      price: "$24",
      unit: "6 ml",
      image: "/products/fig-11.webp",
      blurb: "Dark translucent plum. Wine-red on the lip, near-black in the tube.",
      detail: [
        "Builds from a stain to full depth in three passes.",
        "Cool silver-pink flake rather than gold.",
      ],
      href: "/shades/fig-11/",
      page: {
        eyebrow: "Shade no. 11 · Berry family",
        lede:
          "Near-black in the tube, wine-red on the lip, and genuinely translucent the " +
          "whole way. The only shade in the range with a cool flake, and the only one " +
          "that behaves like a stain.",
        story: {
          heading: "A dark shade you can still see your mouth through.",
          body: [
            "Most deep berry glosses solve depth with opacity — more pigment, more " +
            "titanium dioxide, until the colour sits on top of the lip like paint with " +
            "a shine over it. It works, and it always looks like two products.",
            "Fig 11 goes the other way. The depth comes from a very dark dye-free plum " +
            "pigment at low load in a clear base, so light goes into it and comes back " +
            "out having picked up the colour. At one pass it is a stain you could wear " +
            "to work. At three it is as dark as anything we make, and you can still see " +
            "the texture of the lip underneath.",
            "The flake is the other departure. Every other shade here carries a warm " +
            "gold; Fig carries a cool silver-pink, because gold over plum goes muddy and " +
            "silver over plum goes slightly electric. It is the one deliberate " +
            "inconsistency in the range.",
          ],
        },
        notes: [
          ["Undertone", "Cool — plum over wine"],
          ["Coverage", "Sheer to deep, fully buildable"],
          ["Finish", "High-shine wet-look, translucent"],
          ["Flake", "Fine silver-pink, low density"],
          ["Reads as", "A stain at one pass, near-black at three"],
        ],
        wear: {
          heading: "How to wear it",
          steps: [
            "One pass and press for a stain. It settles in about a minute and stops " +
            "moving, which the lighter shades do not do.",
            "Three passes, waiting between each, for full depth. Rushing it is the only " +
            "way to make this shade look patchy.",
            "It is the best base in the range for layering. Slip 01 over the top turns " +
            "it glassy; Ember 07 tapped in the centre turns it into something else " +
            "entirely.",
          ],
        },
        ingredients: {
          heading: "What is in it",
          body:
            "The same base, with a cool flake and a low-load plum pigment in place of " +
            "the warm iron oxides. No fragrance, no menthol, no tingle, and no carmine " +
            "— the depth here is mineral, so the shade is vegan like the rest.",
          list: [
            "Ricinus Communis (Castor) Seed Oil — the body",
            "Squalane — the slip",
            "Hydrogenated Polyisobutene — the shine",
            "Silica Dimethyl Silylate — holds the flake in suspension",
            "Tocopherol (Vitamin E)",
            "Synthetic Fluorphlogopite — the flake carrier",
            "Calcium Sodium Borosilicate",
            "Manganese Violet (CI 77742), Iron Oxides (CI 77491)",
            "Titanium Dioxide (CI 77891)",
          ],
        },
        specs: [
          ["Size", "6 ml"],
          ["Vessel", "Clear glass, brushed metal cap"],
          ["Applicator", "Flocked doe-foot"],
          ["Wear time", "8 hours as a stain, 5 at full depth"],
          ["Batch", "900 units"],
          ["Made in", "United States"],
        ],
        faq: [
          { q: "Will it stain my lips?",
            a: "Lightly, and it comes off with a balm. There is no dye in it — the " +
               "colour is mineral pigment in oil — so what looks like a stain is " +
               "pigment sitting in the texture of the lip rather than bound to it." },
          { q: "Is it drying?",
            a: "No. It is the same castor-and-squalane base as the nudes. Dark shades " +
               "are often drying because they are usually matte formulas; this one is " +
               "not a matte formula." },
          { q: "Does it transfer?",
            a: "Yes — it is a gloss, not a long-wear liquid lipstick, and all six " +
               "shades transfer. At one pass, once it has settled, noticeably less." },
          { q: "Why is the flake a different colour to the rest of the range?",
            a: "Because warm gold over plum goes muddy. It is the one place we broke " +
               "our own consistency rule and we would do it again." },
        ],
        pairs: ["salt-12", "slip-01"],
      },
    },
    {
      id: "salt-12",
      name: "Salt 12",
      category: "Berry",
      price: "$26",
      unit: "6 ml",
      image: "/products/salt-12.webp",
      blurb: "A cool dusty mauve-taupe. The newest shade and the hardest to place.",
      detail: [
        "Greyed lilac in the light, smoky brown-plum in the mass.",
        "Made in a single run of 900.",
      ],
      href: "/shades/salt-12/",
      page: {
        eyebrow: "Shade no. 12 · Berry family",
        lede:
          "A cool dusty mauve-taupe that nobody in the studio could agree on a name " +
          "for. Filed under berry because it had to go somewhere — it is really its " +
          "own thing.",
        story: {
          heading: "The shade we could not name.",
          body: [
            "Salt 12 came out of an attempt to cool Fig 11 down for daytime. What we " +
            "got was not a lighter berry; it was a greyed lilac that goes smoky " +
            "brown-plum where it pools, and which changes character more than anything " +
            "else in the range depending on what is next to it.",
            "Against warm skin it reads mauve. Against cool skin it reads taupe. In " +
            "photographs it consistently looks like a different shade from the one you " +
            "are wearing, which is either a flaw or the reason people like it.",
            "It is the last shade we added and the one that took longest to sign off, " +
            "because half the studio thought it was the best thing we had made and the " +
            "other half thought it looked like a bruise. It went into the range " +
            "permanently on a narrow vote.",
          ],
        },
        notes: [
          ["Undertone", "Cool — lilac over taupe"],
          ["Coverage", "Medium sheer, builds to a muted berry"],
          ["Finish", "High-shine wet-look"],
          ["Flake", "Fine cool silver, low density"],
          ["Reads as", "Mauve on warm skin, taupe on cool"],
        ],
        wear: {
          heading: "How to wear it",
          steps: [
            "One pass for the dusty version — this is the shade at its most wearable " +
            "and the way most people use it.",
            "Three passes and it goes properly smoky, closer to a muted Fig 11. It " +
            "does not get brighter with depth, only deeper.",
            "It is the only shade here that changes with what is around it. If it " +
            "looks wrong, the answer is usually something else on your face rather " +
            "than the gloss.",
          ],
        },
        ingredients: {
          heading: "What is in it",
          body:
            "The same base, with a cool silver flake and a manganese violet load that " +
            "costs noticeably more than the iron oxides in the warm shades — which is " +
            "why this one is $26. No fragrance, no menthol, no tingle, no carmine.",
          list: [
            "Ricinus Communis (Castor) Seed Oil — the body",
            "Squalane — the slip",
            "Hydrogenated Polyisobutene — the shine",
            "Silica Dimethyl Silylate — holds the flake in suspension",
            "Tocopherol (Vitamin E)",
            "Synthetic Fluorphlogopite — the flake carrier",
            "Calcium Sodium Borosilicate",
            "Manganese Violet (CI 77742), Iron Oxides (CI 77491, CI 77499)",
            "Titanium Dioxide (CI 77891)",
          ],
        },
        specs: [
          ["Size", "6 ml"],
          ["Vessel", "Clear glass, brushed metal cap"],
          ["Applicator", "Flocked doe-foot"],
          ["Wear time", "Around 7 hours, 4 through a meal"],
          ["Batch", "900 units"],
          ["Made in", "United States"],
        ],
        faq: [
          { q: "Why is this one $26?",
            a: "The manganese violet and the cool silver flake both cost more per kilo " +
               "than the warm iron oxides the other shades use. It is a materials " +
               "difference, not a positioning one." },
          { q: "Is it a limited edition?",
            a: "No. Every shade here is made in runs of 900 and Salt 12 is as " +
               "permanent as the other five. Nothing in this range gets discontinued " +
               "to make room for a drop." },
          { q: "Who does it suit?",
            a: "It is the least universal shade we make and we would rather say so. " +
               "It is very good on cool and neutral undertones and it can go flat on " +
               "warm ones, where Dune 04 or Ember 07 will do more." },
          { q: "Can I layer it?",
            a: "Yes, and it is worth it. Over Fig 11 it cools the whole thing down; " +
               "under Slip 01 the greyness lifts and it reads more clearly lilac." },
        ],
        pairs: ["fig-11", "slip-01"],
      },
    },
  ],

  formula: {
    id: "formula",
    eyebrow: "The formula",
    heading: "One base, six shades, no tack.",
    body:
      "Most gloss buys shine with stickiness. This one buys it with body — a heavier, " +
      "slower base that holds a ribbon on the wand and a mirror on the lip without " +
      "gripping your hair on a windy platform.",
    facts: [
      ["Base", "Castor seed oil and squalane"],
      ["Finish", "High-shine wet-look, non-sticky"],
      ["Wear", "Around 8 hours, 4 through a meal"],
      ["Flake", "Fine metallic, suspended not settled"],
      ["Fragrance", "None — no vanilla, no mint, no tingle"],
      ["Size", "6 ml in clear glass, brushed metal cap"],
    ] as [string, string][],
  },

  about: {
    id: "brand",
    eyebrow: "The brand",
    heading: "A reference volume of shades.",
    body:
      "GLOSSARIUM started because a gloss that is genuinely thick and genuinely " +
      "non-sticky is harder to formulate than it sounds, and almost nobody bothers. " +
      "Six shades is the whole catalogue — there is no seasonal drop and nothing gets " +
      "discontinued to make room.",
    body2:
      "Everything is made in the United States in batches of 900. Clear glass throughout, because " +
      "the shade is more useful on the shelf than a printed name is.",
    facts: [
      ["Founded", "2024"],
      ["Made in", "United States"],
      ["Batch size", "900 units"],
      ["Catalogue", "Six shades, permanent"],
    ] as [string, string][],
  },

  checkout: {
    heading: "Ordering",
    body:
      "Payment isn’t connected yet, so nothing on this site can take your money or " +
      "place an order. Email us and we’ll invoice you directly.",
    email: "orders@glossarium.example",
  },

  footer: {
    note:
      "High-shine, non-sticky lip gloss in six permanent shades. " +
      "Made in the USA in batches of 900, in clear glass.",
    legal: "© 2026 GLOSSARIUM",
    columns: [
      {
        title: "Shades",
        links: [
          { label: "Slip 01 — Clear", href: "/shades/slip-01/" },
          { label: "Dune 04 — Rose-gold", href: "/shades/dune-04/" },
          { label: "Fig 11 — Berry", href: "/shades/fig-11/" },
        ],
      },
      {
        title: "More",
        links: [
          { label: "The formula", href: "#formula" },
          { label: "All six shades", href: "#shades" },
          { label: "The brand", href: "#brand" },
        ],
      },
    ],
  },
};

export type Site = typeof site;
export type Product = (typeof site.products)[number];
export type Chapter = (typeof site.chapters)[number];

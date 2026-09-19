/**
 * OKUMI — every user-visible string, price and pacing value.
 * Nothing user-facing is hardcoded in a component. Edit the site from this file.
 */

export interface Beat {
  scroll: [number, number];
  frames: [number, number];
}

export const site = {
  brand: {
    name: "OKUMI",
    symbol: "/logo-symbol.svg",
    tagline: "Hand-forged kitchen knives",
  },

  meta: {
    title: "OKUMI — hand-forged damascus kitchen knives",
    description:
      "Damascus kitchen knives forged one at a time by a single smith. " +
      "Sixty-one layers, mirror bevel, octagonal ho wood. 6–8 weeks from order to door.",
  },

  nav: [
    { label: "The making", href: "#making" },
    { label: "Knives", href: "#collection" },
    { label: "The smith", href: "#smith" },
  ],

  cta: { label: "Shop the collection", href: "#collection" },

  /**
   * Copy beats revealed over the pinned canvas, keyed to scroll progress.
   *
   * Placement is set from MEASURED frame luminance in each chapter's own range, not
   * from the storyboard's intent — see production-notes.md §9. Mean 8-bit luma of
   * the candidate zone across each range:
   *
   *   hero   (f 0–49)    mid-left  4–50   ← chosen; bar and crucible stay clear of it
   *   edge   (f 242–320) mid-left 28–114, right 59–63, bottom-left 55–75 ← chosen
   *   reveal (f 347–434) mid-left  1–18   ← chosen; bottom is the lit board, 102–118
   *
   * Scene 03 is a full-frame macro with no clean third anywhere, so `edge` sits
   * bottom-left over the dark anvil — the most STABLE zone (variance 20 vs 86 for
   * mid-left), since a scrim can fix brightness but not flicker. Each range sits
   * inside one scene and none straddles the quench.
   */
  chapters: [
    {
      id: "hero",
      at: [0.0, 0.2] as [number, number],
      align: "left" as const,
      position: "centre" as const,
      scrim: "left" as const,
      eyebrow: "Okumi · Forged by one pair of hands",
      heading: "The blade remembers the fire.",
      body:
        "Every knife starts as a bar of steel at 1,200°C and ends on a whetstone. " +
        "One smith, one forge, no production line.",
      cta: { label: "Shop the collection", href: "#collection" },
      secondary: { label: "The Gyuto 210", href: "/knives/gyuto-210/" },
    },
    {
      id: "edge",
      at: [0.6, 0.78] as [number, number],
      align: "left" as const,
      position: "bottom" as const,
      scrim: "up" as const,
      eyebrow: "The edge",
      heading: "Sixty-one layers, one edge.",
      body:
        "Folded damascus over a hard core, ground to a mirror bevel at 15° a side. " +
        "The pattern isn’t printed on — it’s what steel does when you fold it sixty-one times.",
    },
    {
      id: "reveal",
      at: [0.86, 1.0] as [number, number],
      align: "left" as const,
      position: "centre" as const,
      scrim: "left" as const,
      eyebrow: "Finished",
      heading: "Then it disappears into the work.",
      body:
        "Numbered, sharpened by hand, delivered in a waxed canvas roll. " +
        "Currently 6–8 weeks from order to door.",
      cta: { label: "Buy the Gyuto 210 — £620", href: "/knives/gyuto-210/" },
    },
  ],

  /**
   * Scroll → frame mapping, per orientation. MEASURED, not predicted.
   *
   * Both masters are 29.01s. The four Flow scenes are 8s + 3×7s, so the cuts land
   * at exactly 8s / 15s / 22s in both orientations.
   *
   *   Desktop  435 frames @ 15fps → scene boundaries at 120 / 225 / 330, last 434
   *   Portrait 348 frames @ 12fps → scene boundaries at  96 / 180 / 264, last 347
   *
   * The quench (scene 02) deliberately carries the most frames per viewport height
   * in the whole build; it is the load-bearing beat. Portrait compresses the holds
   * because thumb gestures cover less distance per effort.
   */
  beats: {
    landscape: [
      { scroll: [0.0, 0.1], frames: [0, 0] },        // hold — read the hero
      { scroll: [0.1, 0.34], frames: [0, 119] },     // fire, then the hammer
      { scroll: [0.34, 0.56], frames: [120, 224] },  // the quench — slowest beat
      { scroll: [0.56, 0.8], frames: [225, 329] },   // emergence and honing
      { scroll: [0.8, 0.84], frames: [330, 330] },   // hold — the finished edge lands
      { scroll: [0.84, 0.96], frames: [330, 434] },  // the cut — fast by design
      { scroll: [0.96, 1.0], frames: [434, 434] },   // hold — read the CTA
    ] as Beat[],
    portrait: [
      { scroll: [0.0, 0.07], frames: [0, 0] },
      { scroll: [0.07, 0.3], frames: [0, 95] },
      { scroll: [0.3, 0.52], frames: [96, 179] },
      { scroll: [0.52, 0.78], frames: [180, 263] },
      { scroll: [0.78, 0.81], frames: [264, 264] },  // compressed vs desktop
      { scroll: [0.81, 0.95], frames: [264, 347] },
      { scroll: [0.95, 1.0], frames: [347, 347] },
    ] as Beat[],
  },

  making: {
    eyebrow: "The making",
    heading: "Four states, one piece of steel.",
    body:
      "Nothing here is stamped, ground from bar stock or finished by a machine. " +
      "The steel is heated, drawn out, hardened and sharpened in that order, and " +
      "each stage is irreversible.",
    stages: [
      {
        k: "01",
        v: "Fire",
        note: "Drawn out at 1,200°C under the hammer. The bar loses a third of its thickness.",
      },
      {
        k: "02",
        v: "Quench",
        note: "Edge-first into oil. The steel hardens in under two seconds, or it cracks.",
      },
      {
        k: "03",
        v: "Hone",
        note: "Whetstone from 400 to 6000 grit. The damascus pattern appears as the scale comes off.",
      },
      {
        k: "04",
        v: "Test",
        note: "Every blade cuts before it ships. If it doesn’t fall through a tomato, it goes back.",
      },
    ],
  },

  spec: {
    eyebrow: "Specification",
    heading: "The Gyuto 210.",
    body:
      "The knife in the film, and the one to buy first if you’re buying one. " +
      "Long enough for a cabbage, fine enough for a shallot.",
    rows: [
      ["Core steel", "VG-10, differentially hardened"],
      ["Cladding", "61 folded layers, stainless damascus"],
      ["Hardness", "61 HRC ± 1"],
      ["Edge length", "210 mm"],
      ["Overall length", "345 mm"],
      ["Spine at heel", "2.4 mm"],
      ["Weight", "198 g"],
      ["Grind", "Double bevel, 15° a side"],
      ["Handle", "Octagonal ho wood, buffalo horn collar"],
      ["Care", "Hand wash, dry immediately, oil the blade monthly"],
    ] as [string, string][],
  },

  collection: {
    eyebrow: "The collection",
    heading: "Five things, and nothing else.",
    filters: ["All", "Knives", "Care", "Carry"],
    note:
      "Each knife is numbered and made to order. Lead time is 6–8 weeks and is " +
      "confirmed before payment is taken.",
  },

  products: [
    {
      id: "gyuto-210",
      name: "Gyuto 210",
      href: "/knives/gyuto-210/",
      category: "Knives",
      price: "£620",
      unit: "210 mm",
      image: "/products/gyuto.webp",
      blurb:
        "The chef’s knife. 61-layer damascus over a VG-10 core, mirror bevel, ho wood handle.",
      detail: [
        "198 g, 2.4 mm at the spine — light for its length.",
        "Ground at 15° a side and finished on a 6000 grit stone.",
      ],
      featured: true,
    },
    {
      id: "santoku-165",
      name: "Santoku 165",
      category: "Knives",
      price: "£480",
      unit: "165 mm",
      image: "/products/santoku.webp",
      blurb:
        "Shorter, deeper, flatter through the belly. The one most people reach for daily.",
      detail: [
        "171 g. Sheepsfoot tip, so it sits flat on the board.",
        "Same steel, same grind, same handle as the gyuto.",
      ],
    },
    {
      id: "petty-120",
      name: "Petty 120",
      category: "Knives",
      price: "£340",
      unit: "120 mm",
      image: "/products/petty.webp",
      blurb: "Small, fine, sharply tapered. Shallots, herbs, and anything done in the hand.",
      detail: [
        "82 g. Thin enough behind the edge to peel with.",
        "Buy it second, not first.",
      ],
    },
    {
      id: "whetstone",
      name: "Combination Stone",
      category: "Care",
      price: "£195",
      unit: "1000 / 6000",
      image: "/products/whetstone.webp",
      blurb: "Coarse side to reset the edge, fine side to finish it. On a hardwood base.",
      detail: [
        "Soak for ten minutes before use; it is a water stone, not an oil stone.",
        "Flatten it when it dishes — a hollow stone rounds the bevel.",
      ],
    },
    {
      id: "canvas-roll",
      name: "Canvas Roll",
      category: "Carry",
      price: "£180",
      unit: "3 slots",
      image: "/products/roll.webp",
      blurb: "Waxed cotton canvas, three slots of differing widths, one long tie.",
      detail: [
        "Ships with every knife at no charge if you buy two or more.",
        "Re-wax it once a year and it will outlast the knives.",
      ],
    },
  ],

  /**
   * The Gyuto 210 detail page (`/knives/gyuto-210/`). Only the hero knife has one.
   * Every figure here is invented placeholder copy — see production-notes.md §1.
   */
  gyuto: {
    meta: {
      title: "Gyuto 210 — OKUMI",
      description:
        "A 210 mm hand-forged gyuto. Sixty-one layers of folded damascus over a " +
        "VG-10 core, mirror bevel at 15° a side, octagonal ho wood handle. " +
        "Numbered, made to order, 6–8 weeks.",
    },
    crumb: [
      { label: "Knives", href: "/#collection" },
      { label: "Gyuto 210", href: "/knives/gyuto-210/" },
    ],
    eyebrow: "Knives · Made to order",
    name: "Gyuto 210",
    price: "£620",
    lede:
      "The knife in the film, and the one to buy first if you are buying one. " +
      "Long enough to break down a cabbage in two passes, fine enough to take the " +
      "core out of a shallot without changing tools.",
    stats: [
      ["Edge", "210 mm"],
      ["Weight", "198 g"],
      ["Hardness", "61 HRC"],
      ["Steel", "VG-10 · 61 layers"],
    ] as [string, string][],
    cta: { label: "Buy the Gyuto 210 — £620", href: "#ordering" },
    secondary: { label: "See the whole collection", href: "/#collection" },
    availability: "Numbered and made to order · 6–8 weeks · resharpened free for life",

    gallery: [
      {
        src: "/products/gyuto.webp",
        alt: "The finished Gyuto 210 lying on a matte black surface, damascus pattern visible along the blade.",
      },
      {
        src: "/products/gyuto-forge.webp",
        alt: "The bar of steel at white heat on the anvil, sparks arcing away under the hammer.",
      },
      {
        src: "/products/gyuto-hone.webp",
        alt: "Extreme close-up of the whetstone passing along the edge, the damascus pattern emerging behind it.",
      },
      {
        src: "/products/gyuto-cut.webp",
        alt: "The finished knife passing through a tomato on an end-grain board, the halves falling apart.",
      },
    ],

    story: {
      eyebrow: "Why this one",
      heading: "Why a gyuto, and why 210.",
      paragraphs: [
        "A gyuto is the Japanese reading of a Western chef’s knife: the same broad, " +
        "pointed profile, taken thinner, harder and lighter. It is the knife that does " +
        "eighty per cent of the work in most kitchens, which is why it is the one I " +
        "make most and the one I would start you on.",

        "Two hundred and ten millimetres is the length I keep coming back to. At 180 " +
        "you are making a second pass through anything larger than an onion. At 240 the " +
        "tip runs off the end of a domestic board and you start cutting at an angle " +
        "without noticing. 210 clears a cabbage, a chicken and a bunch of parsley " +
        "without ever feeling like the wrong tool, and it still fits a standard " +
        "magnetic rack.",

        "It is thin behind the edge — 2.4 mm at the spine, tapering to under half a " +
        "millimetre before the bevel starts. That is what makes it feel fast. It is " +
        "also why it is not a cleaver: no bones, no frozen work, no twisting the tip " +
        "in a squash. Treat it as a cutting instrument and it will outlast you.",
      ],
    },

    making: {
      eyebrow: "How it is made",
      heading: "Six days, four irreversible steps.",
      body:
        "Nothing here is stamped or ground from bar stock. Each stage commits the " +
        "steel to the next one, and a mistake at any of them means starting again " +
        "from the billet.",
      steps: [
        {
          k: "01",
          v: "Forge weld",
          note:
            "Thirty-one alternating layers of soft and hard stainless are stacked " +
            "either side of the VG-10 core, brought to welding heat and set under the " +
            "hammer. Folded once, the stack becomes sixty-one layers — the count that " +
            "gives the finished pattern its spacing.",
        },
        {
          k: "02",
          v: "Draw out",
          note:
            "The billet is drawn to length at around 1,200°C, losing roughly a third " +
            "of its thickness. The profile, the distal taper and the curve of the " +
            "belly are all set here, by eye and by hammer, before the steel is hard " +
            "enough to argue.",
        },
        {
          k: "03",
          v: "Quench and temper",
          note:
            "Edge-first into oil. The steel hardens in under two seconds — or it " +
            "cracks, and about one blade in twelve does. What survives is tempered " +
            "twice to land at 61 HRC, hard enough to hold a fine edge and still take " +
            "a stone without chipping.",
        },
        {
          k: "04",
          v: "Grind and hone",
          note:
            "Rough ground, then taken up through 400, 1000 and 6000 grit by hand. The " +
            "damascus pattern is not etched on for effect; it appears as the fire " +
            "scale comes off and the layers meet the surface at different depths.",
        },
      ],
    },

    hand: {
      eyebrow: "In the hand",
      heading: "Where the weight sits.",
      paragraphs: [
        "Balance point is roughly 8 mm in front of the collar, which puts it just " +
        "under a pinch grip. The knife wants to fall through what it is cutting " +
        "rather than be pushed, and after a week most people find they have stopped " +
        "using their shoulder entirely.",

        "The handle is octagonal pale ho wood with a dark buffalo horn collar — " +
        "traditional wa mounting, friction-fit and replaceable. Octagonal rather " +
        "than round because it tells your hand where the edge is pointing without " +
        "you having to look, and because it does not roll off a wet board.",

        "At 198 g it is light for its length. That is deliberate: the distal taper " +
        "takes mass out of the tip, so the knife feels shorter than it is when you " +
        "are working quickly and exactly as long as it is when you need the reach.",
      ],
    },

    spec: {
      eyebrow: "Full specification",
      heading: "Every number.",
      rows: [
        ["Type", "Gyuto — double-bevel chef’s knife"],
        ["Core steel", "VG-10, differentially hardened"],
        ["Cladding", "61 folded layers, stainless damascus"],
        ["Hardness", "61 HRC ± 1"],
        ["Edge length", "210 mm"],
        ["Overall length", "345 mm"],
        ["Blade height at heel", "48 mm"],
        ["Spine at heel", "2.4 mm"],
        ["Spine at mid-blade", "1.6 mm"],
        ["Weight", "198 g"],
        ["Balance point", "8 mm forward of the collar"],
        ["Grind", "Double bevel, 15° a side"],
        ["Finish", "Mirror bevel, etched damascus flat"],
        ["Handle", "Octagonal ho wood, buffalo horn collar"],
        ["Handle length", "128 mm"],
        ["Mounting", "Traditional wa, friction fit, replaceable"],
        ["Made in", "One workshop, by one smith"],
        ["Lead time", "6–8 weeks from order"],
      ] as [string, string][],
    },

    included: {
      eyebrow: "What arrives",
      heading: "In the box.",
      items: [
        "The knife, sharpened on a 6000 grit stone and tested on a tomato before it leaves.",
        "A numbered card with the blade’s number, the date it was finished and its hardness reading.",
        "A saya — a plain magnolia blade cover, friction-fit.",
        "A short care sheet, which repeats everything below and nothing else.",
      ],
      note:
        "Buy two or more knives and the waxed canvas roll is included at no charge. " +
        "Shipping is tracked and insured; UK delivery is free.",
    },

    care: {
      eyebrow: "Care",
      heading: "It is stainless, not invincible.",
      do: [
        "Hand wash in warm water and dry immediately — within a minute, not later.",
        "Use end-grain or edge-grain wood, or soft composite. Nothing harder.",
        "Store in the saya, on a magnetic rack, or in the roll. Not loose in a drawer.",
        "Strop or touch up on a 6000 grit stone every few weeks of regular use.",
        "Oil the blade lightly once a month if your kitchen is humid.",
      ],
      dont: [
        "No dishwasher, ever. The detergent will pit the cladding and the rack will chip the edge.",
        "No bones, no frozen food, no hard squash rind, no twisting the tip to prise anything.",
        "No glass, stone, steel or bamboo boards.",
        "No pull-through sharpeners and no grinding wheels. They will undo the grind in seconds.",
        "Do not leave it wet in the sink, even for ten minutes.",
      ],
    },

    sharpening: {
      eyebrow: "For as long as you own it",
      heading: "Send it back and I will sharpen it.",
      body:
        "Free, for life, on anything I made. Post it to the workshop in its saya and " +
        "I will take it back to a full edge on the stones and return it. You pay " +
        "postage one way. If you have chipped it, say so — a chip is a repair, not a " +
        "sharpening, but it is usually still fixable and I will tell you the cost " +
        "before I touch it.",
      cta: { label: "Ask about a repair", href: "#ordering" },
    },

    compare: {
      eyebrow: "Which one",
      heading: "If you are only buying one.",
      body:
        "Buy the gyuto. The santoku is the same steel in a shorter, deeper shape and " +
        "is the better second knife if you mostly cook vegetables. The petty is a " +
        "third knife, not a first.",
      head: ["", "Gyuto 210", "Santoku 165", "Petty 120"],
      rows: [
        ["Edge length", "210 mm", "165 mm", "120 mm"],
        ["Weight", "198 g", "171 g", "82 g"],
        ["Best at", "Everything", "Vegetables, fish", "Detail work, in the hand"],
        ["Board work", "Yes", "Yes", "Rarely"],
        ["Buy it", "First", "Second", "Third"],
        ["Price", "£620", "£480", "£340"],
      ] as string[][],
    },

    faq: {
      eyebrow: "Questions",
      heading: "Asked often enough to answer here.",
      items: [
        {
          q: "Will it rust?",
          a: "The core and the cladding are both stainless, so no, not in normal use. " +
             "It will still stain if you leave acidic food on it overnight, and the " +
             "etched pattern will slowly soften if you put it through a dishwasher — " +
             "which is one of several reasons not to.",
        },
        {
          q: "Is the damascus pattern just decoration?",
          a: "The pattern is what the layers look like where they meet the surface. " +
             "It is a consequence of the construction, not a print. It does not make " +
             "the knife cut better — the core steel and the grind do that — but it is " +
             "honest evidence of how the blade was made.",
        },
        {
          q: "Is 61 HRC too hard?",
          a: "It is hard. It holds an edge far longer than a Western knife at 56–58, " +
             "and in exchange it is less forgiving of lateral force and bone. If you " +
             "chop through joints, buy a cleaver as well and keep this for the board.",
        },
        {
          q: "Can I get it left-handed?",
          a: "It is a symmetrical double bevel at 15° a side, so it works in either " +
             "hand as supplied. If you want it ground asymmetrically, say so when you " +
             "order and I will bias it 70/30 at no extra cost.",
        },
        {
          q: "Why is the lead time so long?",
          a: "Because there is one of me and roughly twelve knives leave the workshop " +
             "a month. Orders are worked in the sequence they arrive. I confirm your " +
             "place and the date before any payment is taken.",
        },
        {
          q: "Can I see it before I commit?",
          a: "I photograph every blade before it ships and send you the images with " +
             "its number. If it is not what you expected, say so then and it does not " +
             "leave the workshop.",
        },
      ],
    },

    close: {
      heading: "Ordering the Gyuto 210.",
      body:
        "Payment isn’t connected yet, so nothing on this site can take your money or " +
        "place an order. Email the workshop and I’ll confirm your place in the queue " +
        "and invoice you directly.",
    },
  },

  smith: {
    eyebrow: "The smith",
    heading: "One forge, one queue.",
    body:
      "I forge every blade myself, from the drawing out to the final stone. That is " +
      "the whole business and the whole reason for the lead time — there is no second " +
      "bench to move your order to.",
    body2:
      "Knives are numbered in the order they leave the shop. If yours needs sharpening " +
      "in five years, send it back and I will do it.",
    facts: [
      ["Founded", "Working alone since 2019"],
      ["Output", "Roughly 12 knives a month"],
      ["Lead time", "6–8 weeks, confirmed before payment"],
      ["Resharpening", "Free, for life, on anything I made"],
    ] as [string, string][],
  },

  checkout: {
    heading: "Ordering",
    body:
      "Payment isn’t connected yet, so nothing on this site can take your money or " +
      "place an order. Email the shop and I’ll invoice you directly.",
    email: "orders@okumi.example",
  },

  footer: {
    note:
      "Hand-forged damascus kitchen knives, made one at a time. " +
      "Numbered, sharpened by hand, resharpened free for life.",
    legal: "© 2026 OKUMI",
    columns: [
      {
        title: "Knives",
        links: [
          { label: "Gyuto 210", href: "/knives/gyuto-210/" },
          { label: "Santoku 165", href: "#collection" },
          { label: "Petty 120", href: "#collection" },
        ],
      },
      {
        title: "More",
        links: [
          { label: "The making", href: "#making" },
          { label: "Specification", href: "#spec" },
          { label: "The smith", href: "#smith" },
        ],
      },
    ],
  },
};

export type Site = typeof site;
export type Product = (typeof site.products)[number];
export type Chapter = (typeof site.chapters)[number];

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
      secondary: { label: "The Gyuto 210", href: "#collection" },
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
      cta: { label: "Buy the Gyuto 210 — £620", href: "#collection" },
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
          { label: "Gyuto 210", href: "#collection" },
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

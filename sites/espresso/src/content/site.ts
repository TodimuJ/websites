/**
 * NINE BAR — every user-visible string, price and pacing value.
 * Nothing user-facing is hardcoded in a component. Edit the site from this file.
 */

export interface Beat {
  scroll: [number, number];
  frames: [number, number];
}

export const site = {
  brand: {
    name: "NINE BAR",
    symbol: "/logo-symbol.svg",
    tagline: "Single origin, roasted to order",
  },

  meta: {
    title: "NINE BAR — single-origin coffee, roasted to order",
    description:
      "Single-origin coffee roasted to order and shipped within four days of the " +
      "roast date. Three bags a month, rotating.",
  },

  nav: [
    { label: "Method", href: "#method" },
    { label: "Coffee", href: "#collection" },
    { label: "Subscription", href: "#subscription" },
  ],

  cta: { label: "Start a subscription", href: "#subscription" },

  /**
   * Copy beats revealed over the pinned canvas, keyed to scroll progress.
   * All three sit on a left rail because the footage holds its negative space on the
   * left in every one of these ranges — verified frame by frame, not assumed.
   */
  chapters: [
    {
      id: "hero",
      at: [0.0, 0.2] as [number, number],
      align: "left" as const,
      eyebrow: "Nine Bar · Single Origin",
      heading: "It begins as fruit.",
      body:
        "One cherry from Finca Aurelia, 1,850 metres. Everything after this is " +
        "pressure, heat and time.",
      cta: { label: "Start a subscription", href: "#subscription" },
      secondary: { label: "See the coffee", href: "#collection" },
    },
    {
      id: "craft",
      at: [0.58, 0.76] as [number, number],
      align: "left" as const,
      eyebrow: "Extraction",
      heading: "The pressure is the point.",
      body:
        "Nine bars, twenty-six seconds. Roasted to order and shipped inside four days " +
        "of the roast date — you drink it in the window it was built for.",
    },
    {
      id: "reveal",
      at: [0.82, 1.0] as [number, number],
      align: "left" as const,
      eyebrow: "Every month",
      heading: "What the bag is for.",
      body: "Three bags, rotating, every month. Cancel whenever.",
      cta: { label: "Start a subscription — £36 / delivery", href: "#subscription" },
    },
  ],

  /**
   * Scroll → frame mapping, per orientation.
   * Desktop: 438 frames at 15fps. Scene cuts in the source land at 120 / 225 / 330.
   * Mobile:  348 frames at 12fps. Same scenes at 96 / 180 / 264.
   * Holds are deliberate reading pauses; every moving beat keeps >55 frames per
   * viewport height so it never steps.
   */
  beats: {
    landscape: [
      { scroll: [0.0, 0.1], frames: [0, 0] },        // hold — read the hero
      { scroll: [0.1, 0.3], frames: [0, 119] },      // the cherry, the roast
      { scroll: [0.3, 0.52], frames: [119, 224] },   // into the bed — slowest beat
      { scroll: [0.52, 0.57], frames: [224, 224] },  // hold — the flood lands
      { scroll: [0.57, 0.78], frames: [224, 329] },  // extraction
      { scroll: [0.78, 0.94], frames: [329, 437] },  // pull back to the cup
      { scroll: [0.94, 1.0], frames: [437, 437] },   // hold — read the CTA
    ] as Beat[],
    portrait: [
      { scroll: [0.0, 0.07], frames: [0, 0] },
      { scroll: [0.07, 0.29], frames: [0, 96] },
      { scroll: [0.29, 0.51], frames: [96, 180] },
      { scroll: [0.51, 0.55], frames: [180, 180] },  // compressed vs desktop
      { scroll: [0.55, 0.78], frames: [180, 264] },
      { scroll: [0.78, 0.95], frames: [264, 347] },
      { scroll: [0.95, 1.0], frames: [347, 347] },
    ] as Beat[],
  },

  method: {
    eyebrow: "Method",
    heading: "Twenty-six seconds, four days, one farm.",
    body:
      "We buy one lot at a time and roast it the week it ships. No blending to a " +
      "house profile, no holding stock until it moves.",
    facts: [
      { k: "Pressure", v: "9 bar", note: "Where the crema emulsifies rather than foams." },
      { k: "Extraction", v: "26 sec", note: "18g in, 38g out, measured every batch." },
      { k: "Roast to door", v: "4 days", note: "Roasted Monday, with you by Friday." },
    ],
  },

  origin: {
    eyebrow: "This season's lot",
    heading: "Finca Aurelia",
    body:
      "A single estate on a south-facing slope, picked in three passes and washed in " +
      "small batches. Clean and sweet, with the acidity a washed Caturra gets at altitude.",
    spec: [
      ["Altitude", "1,850 m"],
      ["Varietal", "Caturra"],
      ["Process", "Washed"],
      ["Harvest", "January – March"],
      ["Tasting", "Red plum, cocoa nib, brown sugar"],
    ] as [string, string][],
  },

  collection: {
    eyebrow: "The collection",
    heading: "Five things, and nothing else.",
    filters: ["All", "Coffee", "Subscription", "Equipment"],
  },

  products: [
    {
      id: "finca-aurelia",
      name: "Finca Aurelia",
      category: "Coffee",
      price: "£16",
      unit: "250 g",
      image: "/products/single-origin.webp",
      blurb: "The single-origin lot. Washed Caturra, roasted for espresso.",
      detail: [
        "Roasted to order, shipped within four days.",
        "Whole bean as standard; grind on request at checkout.",
      ],
    },
    {
      id: "seasonal-blend",
      name: "Seasonal Blend",
      category: "Coffee",
      price: "£14",
      unit: "250 g",
      image: "/products/blend.webp",
      blurb: "Two lots, rebalanced each season to hold the same cup through the year.",
      detail: [
        "Built for milk as well as straight espresso.",
        "Composition changes with the harvest; the profile does not.",
      ],
    },
    {
      id: "subscription",
      name: "The Subscription",
      category: "Subscription",
      price: "£36",
      unit: "3 bags / delivery",
      image: "/products/subscription.webp",
      blurb: "Three rotating bags a month. The single origin, the blend, and one guest lot.",
      detail: [
        "Skip, pause or cancel before any roast date.",
        "Free delivery in the UK.",
      ],
      featured: true,
    },
    {
      id: "tulip-cup",
      name: "Tulip Cup",
      category: "Equipment",
      price: "£22",
      unit: "90 ml",
      image: "/products/cup.webp",
      blurb: "Thick-walled ceramic. Holds temperature through a slow espresso.",
      detail: ["Dishwasher safe.", "Sold singly, not as a pair."],
    },
    {
      id: "tamper",
      name: "Tamper",
      category: "Equipment",
      price: "£48",
      unit: "58.5 mm",
      image: "/products/tamper.webp",
      blurb: "Machined chrome base, oiled walnut handle. Weighted for a level bed.",
      detail: ["Fits 58 mm and 58.5 mm baskets.", "Flat base, not convex."],
    },
  ],

  subscription: {
    eyebrow: "Subscription",
    heading: "Three bags, rotating, every month.",
    body:
      "The single origin, the seasonal blend, and one guest lot we only buy once. " +
      "Roasted the week it ships.",
    price: "£36",
    cadence: "per delivery, monthly",
    includes: [
      "Three 250 g bags, one of them a guest lot",
      "Roasted to order, never from stock",
      "Free UK delivery",
      "Skip, pause or cancel before any roast date",
    ],
    cta: { label: "Start a subscription", href: "#subscription" },
    smallprint: "Payment isn\u2019t connected yet \u2014 you won\u2019t be charged.",
  },

  footer: {
    note:
      "Single origin, roasted to order. Three bags a month, or one bag whenever " +
      "you need it.",
    legal: "\u00A9 2026 NINE BAR",
    columns: [
      { title: "Coffee", links: [{ label: "Finca Aurelia", href: "#collection" }, { label: "Seasonal Blend", href: "#collection" }] },
      { title: "More", links: [{ label: "Method", href: "#method" }, { label: "Subscription", href: "#subscription" }] },
    ],
  },
};

export type Site = typeof site;
export type Product = (typeof site.products)[number];
export type Chapter = (typeof site.chapters)[number];

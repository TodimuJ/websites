/**
 * CLACK — every user-visible string, price and pacing value.
 * Nothing user-facing is hardcoded in a component. Edit the site from this file.
 *
 * Market is the United States, currency USD. Every price is written "$NN".
 */

export interface Beat {
  scroll: [number, number];
  frames: [number, number];
}

export const site = {
  brand: {
    name: "CLACK",
    symbol: "/logo-symbol.svg",
    tagline: "Mechanical keyboards, built in Portland",
  },

  meta: {
    title: "CLACK — mechanical keyboards milled from one billet, shipped blank",
    description:
      "Enthusiast mechanical keyboards machined from a single block of aluminium in " +
      "Portland, Oregon. Gasket-mounted, hot-swap, hand-lubed switches, and keycaps " +
      "that ship blank. See inside the switch.",
  },

  nav: [
    { label: "The 65", href: "#board" },
    { label: "Inside the switch", href: "#switch" },
    { label: "Collection", href: "#collection" },
    { label: "Build", href: "#build" },
  ],

  cta: { label: "Shop the 65 — $289", href: "#collection" },

  /**
   * Chapters fade in and out across ranges of the SAME pinned stage — several apparent
   * "hero sections" are chapters inside one continuous sequence, not separate heroes.
   *
   * `at` ranges and `align` are RE-DERIVED from measured frame luminance after
   * extraction, not from the storyboard's intent — see production-notes.md §7. Copy
   * must land on the quiet part of the actual footage, which is rarely where the
   * storyboard guessed.
   *
   * `tone: "dark"` marks the one chapter that sits over the switch interior. It is the
   * only place on this site where type goes light-on-dark, and it is there because the
   * inside of a sealed switch housing is genuinely dark.
   */
  chapters: [
    {
      id: "hero",
      at: [0.0, 0.17] as [number, number],
      align: "left" as const,
      position: "centre" as const,
      scrim: "left" as const,
      tone: "light" as const,
      eyebrow: "CLACK · Portland, Oregon",
      heading: "The sound of a switch, seen.",
      body:
        "Every CLACK board is milled from one block of aluminium and assembled by hand. " +
        "Start with the part nobody shows you.",
      cta: { label: "Shop the 65 — $289", href: "#collection" },
      secondary: { label: "Inside the switch", href: "#switch" },
    },
    {
      id: "switch",
      at: [0.4, 0.63] as [number, number],
      align: "left" as const,
      position: "centre" as const,
      scrim: "left" as const,
      tone: "dark" as const,
      eyebrow: "Actuation",
      heading: "2.0 mm down. 45 grams. One contact.",
      body:
        "A leaf of gold-plated phosphor bronze, bent aside by a moulded leg, closing a " +
        "circuit sixty million times. Everything else on this board exists to hold that " +
        "still.",
      cta: null,
      secondary: { label: "Compare switches", href: "#collection" },
    },
    {
      id: "build",
      at: [0.72, 0.83] as [number, number],
      align: "right" as const,
      position: "centre" as const,
      scrim: "right" as const,
      tone: "light" as const,
      eyebrow: "The build",
      heading: "Sixty-eight keys, one aluminium billet.",
      body:
        "Gasket-mounted plate, hand-lubed stems, hot-swap sockets. Blank PBT, because a " +
        "legend is someone else telling you what you already know.",
      cta: { label: "Configure your board", href: "#collection" },
      secondary: null,
    },
    {
      id: "close",
      at: [0.9, 1.0] as [number, number],
      align: "right" as const,
      position: "centre" as const,
      scrim: "right" as const,
      tone: "light" as const,
      eyebrow: "In stock",
      heading: "Ships in three days. From Portland, Oregon.",
      body:
        "Free shipping across the United States. 30-day returns, assembled or not.",
      cta: { label: "Add to cart — $289", href: "#collection" },
      secondary: { label: "See the collection", href: "#collection" },
    },
  ],

  /**
   * Piecewise scroll -> frame mapping. Equal frame values are a deliberate hold.
   * Re-derived from the MEASURED frame count after extraction; see production-notes.md.
   * Portrait gets its own pacing because thumb gestures cover less distance per effort,
   * so a hold that reads as a beat on desktop reads as a stall on a phone.
   */
  beats: {
    landscape: [
      { scroll: [0.0, 0.05], frames: [0, 0] },      // hold — read the hero
      { scroll: [0.05, 0.24], frames: [0, 55] },    // the cap turns, then begins to fall
      { scroll: [0.24, 0.34], frames: [55, 73] },   // the plunge through the housing wall
      { scroll: [0.34, 0.52], frames: [73, 114] },  // interior — the leaf bends aside
      { scroll: [0.52, 0.6], frames: [114, 125] },  // THE SPARK — slowest beat on the site
      { scroll: [0.6, 0.64], frames: [125, 125] },  // hold — let the arc land
      { scroll: [0.64, 0.7], frames: [125, 140] },  // withdraw back out through the blur
      { scroll: [0.7, 0.84], frames: [140, 195] },  // cascade across the plate, caps rain
      { scroll: [0.84, 0.94], frames: [195, 240] }, // the case closes, the board settles
      { scroll: [0.94, 1.0], frames: [240, 240] },  // hold — read the CTA
    ] as Beat[],
    portrait: [
      { scroll: [0.0, 0.04], frames: [0, 0] },
      { scroll: [0.04, 0.24], frames: [0, 55] },
      { scroll: [0.24, 0.35], frames: [55, 73] },
      { scroll: [0.35, 0.53], frames: [73, 114] },
      { scroll: [0.53, 0.61], frames: [114, 125] },
      { scroll: [0.61, 0.64], frames: [125, 125] },
      { scroll: [0.64, 0.71], frames: [125, 140] },
      { scroll: [0.71, 0.85], frames: [140, 195] },
      { scroll: [0.85, 0.96], frames: [195, 240] },
      { scroll: [0.96, 1.0], frames: [240, 240] },
    ] as Beat[],
  },

  /** Height of the scroll container. Active pinned travel is this MINUS 100vh. */
  stageHeight: { landscape: "620vh", portrait: "520vh" },

  /**
   * The catalogue. Hero plus six, premium tier.
   *
   * The brief's band is $120–$340, which is a tier signal rather than a price list.
   * Boards sit inside it; switches and keycaps sit below it, as accessories normally do.
   */
  products: [
    {
      slug: "clack-65",
      name: "CLACK 65",
      kind: "Keyboard",
      price: "$289",
      hero: true,
      image: "/products/clack-65.webp",
      summary: "Silver anodised, assembled, Tactile 45, Frost keycaps.",
      body:
        "Sixty-eight keys with a dedicated arrow cluster and no function row — the " +
        "smallest layout you can live in full-time. Gasket-mounted brass plate, " +
        "hot-swap sockets, USB-C, 1.2 kg.",
      specs: [
        ["Layout", "65% · 68 keys"],
        ["Case", "6063 aluminium, bead-blasted, silver anodised"],
        ["Mount", "Gasket, brass plate"],
        ["Switches", "Tactile 45, hand-lubed"],
        ["Keycaps", "Frost — blank PBT, spherical profile"],
        ["Connection", "USB-C, detachable"],
        ["Weight", "1.2 kg"],
      ],
    },
    {
      slug: "clack-75",
      name: "CLACK 75",
      kind: "Keyboard",
      price: "$329",
      hero: false,
      image: "/products/clack-75.webp",
      summary: "The 65 with a function row. Same case, same mount.",
      body:
        "Eighty-two keys. Everything the 65 is, plus the row you reach for when you " +
        "live in a terminal all day.",
      specs: [
        ["Layout", "75% · 82 keys"],
        ["Case", "6063 aluminium, bead-blasted, silver anodised"],
        ["Mount", "Gasket, brass plate"],
        ["Switches", "Tactile 45, hand-lubed"],
        ["Keycaps", "Frost — blank PBT, spherical profile"],
        ["Weight", "1.4 kg"],
      ],
    },
    {
      slug: "clack-65-barebones",
      name: "CLACK 65 Barebones",
      kind: "Kit",
      price: "$189",
      hero: false,
      image: "/products/clack-65-barebones.webp",
      summary: "Case, plate and PCB. Bring your own switches and caps.",
      body:
        "The same milled case and gasket mount, with empty hot-swap sockets. For people " +
        "who already own the switches they want.",
      specs: [
        ["Layout", "65% · 68 positions"],
        ["Case", "6063 aluminium, bead-blasted, silver anodised"],
        ["Mount", "Gasket, brass plate"],
        ["Sockets", "Hot-swap, 5-pin"],
        ["Includes", "Case, plate, PCB, gaskets, cable"],
      ],
    },
    {
      slug: "tactile-45",
      name: "Tactile 45",
      kind: "Switches",
      price: "$54",
      hero: false,
      image: "/products/tactile-45.webp",
      summary: "70 switches. A bump you can find in the dark.",
      body:
        "45 g actuation, a rounded tactile event just before the contact closes, and a " +
        "long-pole stem that bottoms out short. Hand-lubed before they ship.",
      specs: [
        ["Count", "70 switches"],
        ["Force", "45 g actuation · 58 g bottom"],
        ["Travel", "2.0 mm to actuation · 3.6 mm total"],
        ["Stem", "Long-pole POM, hand-lubed"],
      ],
    },
    {
      slug: "linear-50",
      name: "Linear 50",
      kind: "Switches",
      price: "$49",
      hero: false,
      image: "/products/linear-50.webp",
      summary: "70 switches. Nothing in the way.",
      body:
        "A smooth 50 g pull from the top of the travel to the bottom, with no tactile " +
        "event at all. The quiet option, and the fast one.",
      specs: [
        ["Count", "70 switches"],
        ["Force", "50 g actuation · 62 g bottom"],
        ["Travel", "2.0 mm to actuation · 3.8 mm total"],
        ["Stem", "POM, hand-lubed"],
      ],
    },
    {
      slug: "frost-keycaps",
      name: "Frost Keycaps",
      kind: "Keycaps",
      price: "$119",
      hero: false,
      image: "/products/frost-keycaps.webp",
      summary: "Blank PBT. Grey alphas, white modifiers, two blue accents.",
      body:
        "1.5 mm PBT, spherical dish, no legends anywhere. The blue caps are Escape and " +
        "Enter, because those are the two you never look for.",
      specs: [
        ["Material", "1.5 mm PBT"],
        ["Profile", "Spherical, sculpted rows"],
        ["Legends", "None"],
        ["Fits", "65% and 75% · 132 caps"],
      ],
    },
    {
      slug: "graphite-keycaps",
      name: "Graphite Keycaps",
      kind: "Keycaps",
      price: "$119",
      hero: false,
      image: "/products/graphite-keycaps.webp",
      summary: "Blank PBT, uniform matte black. No contrast at all.",
      body:
        "The same set in a single value. On a silver case it reads as one dark mass, " +
        "which is either the point or the reason you'll buy Frost instead.",
      specs: [
        ["Material", "1.5 mm PBT"],
        ["Profile", "Spherical, sculpted rows"],
        ["Legends", "None"],
        ["Fits", "65% and 75% · 132 caps"],
      ],
    },
  ],

  /** The section under the pinned stage explaining the build. */
  build: {
    eyebrow: "How it's made",
    heading: "One billet, four hours, no filler.",
    body:
      "A CLACK case starts as a solid block of 6063 aluminium and spends about four " +
      "hours on a mill losing 70% of its mass. What's left gets bead-blasted, anodised, " +
      "and hand-checked for the chamfer, which is the only decorative thing on the " +
      "whole board.",
    steps: [
      {
        n: "01",
        title: "Milled",
        body:
          "Case, plate pocket and chamfer cut from one billet. No separate bezel, no " +
          "glued trim, nothing to rattle loose.",
      },
      {
        n: "02",
        title: "Gasketed",
        body:
          "The plate floats on silicone gaskets rather than screwing to the case, so " +
          "the typing surface flexes a little instead of ringing.",
      },
      {
        n: "03",
        title: "Lubed",
        body:
          "Every stem and spring is lubed by hand before assembly. It is slow, it is " +
          "why the lead time is three days, and it is most of what you hear.",
      },
      {
        n: "04",
        title: "Shipped blank",
        body:
          "No legends. Nothing to wear off, nothing to argue with, and a board that " +
          "looks the same in year five.",
      },
    ],
  },

  /** Commerce copy. There is no backend; see `checkout` below. */
  commerce: {
    shipping: "Free shipping across the United States",
    returns: "30-day returns, assembled or not",
    leadTime: "In stock — ships in three days from Portland, Oregon",
    warranty: "Two-year warranty on the case, PCB and plate",
  },

  /**
   * There is no payment backend. The cart is a real affordance that tells the truth
   * about what it can and cannot do — it never shows a confirmation for an order that
   * did not happen.
   */
  checkout: {
    heading: "Checkout isn't connected yet",
    body:
      "This storefront has no payment backend, so nothing here can take your money or " +
      "place an order. Leave an email and we'll write to you the day it opens.",
    action: "Notify me",
  },

  footer: {
    address: "CLACK · 1140 SE Morrison Street, Portland, Oregon 97214",
    columns: [
      {
        title: "Boards",
        links: [
          { label: "CLACK 65", href: "#collection" },
          { label: "CLACK 75", href: "#collection" },
          { label: "65 Barebones", href: "#collection" },
        ],
      },
      {
        title: "Parts",
        links: [
          { label: "Tactile 45", href: "#collection" },
          { label: "Linear 50", href: "#collection" },
          { label: "Keycaps", href: "#collection" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "Shipping & returns", href: "#build" },
          { label: "Warranty", href: "#build" },
          { label: "Layout compatibility", href: "#collection" },
        ],
      },
    ],
    legal: "© 2026 CLACK Keyboard Works. Made in the United States.",
  },
} as const;

export type Site = typeof site;
export type Product = (typeof site.products)[number];
export type Chapter = (typeof site.chapters)[number];

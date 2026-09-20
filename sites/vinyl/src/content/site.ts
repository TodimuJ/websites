/**
 * LATHE & LACQUER — every user-visible string, price and pacing value.
 * Nothing user-facing is hardcoded in a component. Edit the site from this file.
 */

export interface Beat {
  scroll: [number, number];
  frames: [number, number];
}

export const site = {
  brand: {
    name: "LATHE & LACQUER",
    symbol: "/logo-symbol.svg",
    tagline: "Reissue label and pressing house",
  },

  meta: {
    title: "LATHE & LACQUER — spiritual jazz reissues, cut from tape and pressed at 180g",
    description:
      "A reissue label and pressing house. Every title cut from the original tape to a " +
      "lacquer master on a Neumann lathe, plated in three steps, pressed on 180g virgin " +
      "vinyl. Nothing sourced from a digital file.",
  },

  nav: [
    { label: "The series", href: "#series" },
    { label: "How it's cut", href: "#cutting" },
    { label: "Subscribe", href: "#subscribe" },
    { label: "Pressing", href: "#pressing" },
  ],

  cta: { label: "Shop the first three", href: "#series" },

  /**
   * The scroll runs BACKWARDS through the manufacture of a record — stylus, spiral,
   * press, lathe — then turns around and comes forward into a listening room. The
   * timecode in the corner counts down through the reversed section and forward again
   * from the return.
   *
   * Chapter placement below is RE-DERIVED from measured frame luminance, not from the
   * storyboard's intent. Mean / stddev of 8-bit luma per candidate zone, over each
   * chapter's own frame range:
   *
   *   hero    (f  0- 60)  left 42.7/14.3  MID-RIGHT 36.5/ 7.5  bottom 24.7/ 9.7  <- right
   *   cutting (f217-289)  LEFT 36.0/33.5  mid-right 68.7/22.3  bottom 49.6/32.0  <- left
   *   close   (f290-361)  left 43.7/34.8  MID-RIGHT  9.7/15.7  bottom 15.4/ 5.3  <- right
   *
   * The storyboard planned the hero on the LEFT. The delivered footage sweeps the lit
   * groove through the left third there (42.7 against 36.5 on the right), so the hero
   * moved right. `cutting` stayed left because the lathe genuinely occupies the right
   * (68.7), and `close` stayed right because the lamp pool is left (9.7 on the right).
   */
  chapters: [
    {
      id: "hero",
      at: [0.0, 0.17] as [number, number],
      align: "right" as const,
      position: "centre" as const,
      scrim: "right" as const,
      eyebrow: "Lathe & Lacquer · Pressing № 1",
      heading: "The groove is the sound.",
      body:
        "Spiritual jazz, 1968–1975, cut from the original tapes on a Neumann lathe " +
        "and pressed at 180 grams. Scroll to go backwards through it.",
      cta: { label: "Shop the first three", href: "#series" },
      secondary: { label: "Vol. I — $32", href: "/releases/ancestral-line/" },
    },
    {
      id: "cutting",
      at: [0.6, 0.8] as [number, number],
      align: "left" as const,
      position: "centre" as const,
      scrim: "left" as const,
      eyebrow: "How it's cut",
      heading: "Cut from tape. Never from a file.",
      body:
        "Every master is cut live to lacquer — one pass, no undo. That thread of swarf " +
        "is the only trace of the take that will ever exist. Three plating steps later " +
        "it becomes the stamper that presses your copy.",
      meta: "Neumann VMS-70 · one lacquer per side · three-step plating · 180g virgin vinyl",
    },
    {
      id: "close",
      at: [0.87, 1.0] as [number, number],
      align: "right" as const,
      position: "centre" as const,
      scrim: "right" as const,
      heading: "And then it is just a room, and a record.",
      body: "Free US shipping over $60 · 30-day returns · Cut and pressed in the United States",
      cta: { label: "Shop the first three — from $28", href: "#series" },
    },
  ],

  /**
   * Piecewise scroll -> frame mapping. Container 1000vh, stage 100vh pinned, so active
   * travel is 9 viewport heights on desktop; 760vh -> 6.6 on portrait.
   *
   * MEASURED off the delivered footage: 362 desktop frames at 12fps, 302 portrait at
   * 10fps, from four clips of 12.04s + 6.04s + 6.04s + 6.04s. Clip boundaries land at
   * desktop frames 144 / 216 / 289 and portrait 120 / 180 / 241, and the beat edges
   * above are pinned to them so no beat straddles a seam.
   *
   * Both orientations share scroll boundaries so the same scroll fraction shows the
   * same narrative beat on a phone and on a desktop.
   */
  beats: {
    landscape: [
      { scroll: [0.0, 0.05], frames: [0, 0] },        // hold - read the hero
      { scroll: [0.05, 0.19], frames: [0, 60] },      // the groove, 48 f/vh
      { scroll: [0.19, 0.38], frames: [60, 144] },    // the spiral out, 49 f/vh
      { scroll: [0.38, 0.42], frames: [144, 144] },   // hold - the disc lands whole
      { scroll: [0.42, 0.58], frames: [145, 216] },   // the un-press (REVERSED clip B)
      { scroll: [0.58, 0.76], frames: [217, 289] },   // the lathe
      { scroll: [0.76, 0.8], frames: [289, 289] },    // hold - read the craft chapter
      { scroll: [0.8, 0.95], frames: [290, 361] },    // the return
      { scroll: [0.95, 1.0], frames: [361, 361] },    // hold - read the CTA
    ] as Beat[],
    portrait: [
      { scroll: [0.0, 0.05], frames: [0, 0] },
      { scroll: [0.05, 0.19], frames: [0, 50] },
      { scroll: [0.19, 0.38], frames: [50, 120] },
      { scroll: [0.38, 0.42], frames: [120, 120] },
      { scroll: [0.42, 0.58], frames: [121, 180] },
      { scroll: [0.58, 0.76], frames: [181, 241] },
      { scroll: [0.76, 0.8], frames: [241, 241] },
      { scroll: [0.8, 0.95], frames: [242, 301] },
      { scroll: [0.95, 1.0], frames: [301, 301] },
    ] as Beat[],
  },

  /**
   * The timecode readout in the corner of the stage. Runs FORWARD to the point the
   * reversal starts, counts DOWN through the reversed section, then forward again —
   * so the indicator tells the same story the footage does.
   */
  timecode: {
    total: "03:42",
    totalSeconds: 222,
    /** Scroll fraction at which the playhead turns around and runs backwards. */
    reverseFrom: 0.38,
    /** Scroll fraction at which it turns forward again — the return. */
    forwardFrom: 0.8,
  },

  series: {
    eyebrow: "The series",
    heading: "Three to begin with.",
    body:
      "All three cut from the original quarter-inch tapes, all three out of print since " +
      "the seventies. Pressed in one run of 1,000 and then not again.",
    note: "180g · single LP · antistatic inner · heavyweight sleeve",
  },

  products: [
    {
      id: "ancestral-line",
      volume: "Vol. I",
      catalog: "L&L-001",
      title: "Ancestral Line",
      artist: "Kofi Adjei",
      year: "1971",
      price: "$32",
      image: "/products/ancestral-line.webp",
      blurb:
        "Six musicians, one room, two days. The record that the other two on this list " +
        "were both trying to answer.",
      tracks: [
        ["A1", "Ancestral Line", "9:14"],
        ["A2", "Processional", "6:02"],
        ["B1", "Harmattan", "11:38"],
        ["B2", "Coda, For My Father", "4:51"],
      ] as [string, string, string][],
      href: "/releases/ancestral-line/",
    },
    {
      id: "night-water",
      volume: "Vol. II",
      catalog: "L&L-002",
      title: "Night Water",
      artist: "The Marian Reed Quartet",
      year: "1969",
      price: "$28",
      image: "/products/night-water.webp",
      blurb:
        "Recorded after hours in a studio the quartet were not strictly booked into. " +
        "You can hear the room being quiet around them.",
      tracks: [
        ["A1", "Night Water", "7:45"],
        ["A2", "Slow Tide", "8:20"],
        ["B1", "Blue Hour", "10:06"],
        ["B2", "Morning, Eventually", "5:33"],
      ] as [string, string, string][],
      href: "/releases/night-water/",
    },
    {
      id: "harmattan-suite",
      volume: "Vol. III",
      catalog: "L&L-003",
      title: "Harmattan Suite",
      artist: "Delphine Okonkwo Trio",
      year: "1974",
      price: "$34",
      image: "/products/harmattan-suite.webp",
      blurb:
        "A single composition across four sides' worth of ideas, compressed onto two. " +
        "The most demanding cut of the three, and the reason the lathe matters.",
      tracks: [
        ["A1", "Harmattan Suite, Parts I–III", "18:22"],
        ["B1", "Harmattan Suite, Part IV", "9:47"],
        ["B2", "Reprise", "6:15"],
      ] as [string, string, string][],
      href: "/releases/harmattan-suite/",
    },
  ],

  cutting: {
    eyebrow: "How it's cut",
    heading: "One pass, no undo.",
    body: [
      "A lacquer is a soft aluminium disc coated in nitrocellulose. The cutting head " +
        "rides it once, in real time, at the speed the record will be played. There is " +
        "no rewind and no punch-in — a mistake at seventeen minutes means starting the " +
        "side again on a fresh blank.",
      "What comes off is swarf: a single continuous black thread, thinner than a hair, " +
        "drawn away by a suction tube so it never falls back into the groove it just " +
        "left. Three plating steps turn the lacquer into a nickel stamper, and the " +
        "stamper presses your copy.",
    ],
    facts: [
      ["Lathe", "Neumann VMS-70, SX-74 cutting head"],
      ["Source", "Original quarter-inch tape, flat transfer"],
      ["Masters", "One lacquer per side, cut in real time"],
      ["Plating", "Three-step — father, mother, stamper"],
      ["Pressing", "180g virgin PVC, no regrind"],
      ["Run", "1,000 copies, not repressed"],
    ] as [string, string][],
  },

  subscribe: {
    eyebrow: "Subscription",
    heading: "One record a quarter.",
    body:
      "Four titles a year, posted the week they come off the press, before the general " +
      "release. Cancel whenever — you are not locked into anything.",
    price: "$30 a quarter",
    note: "Includes US shipping. International is charged at cost.",
    cta: { label: "Start with Vol. I", href: "#series" },
  },

  pressing: {
    eyebrow: "Pressing services",
    heading: "We'll cut yours too.",
    body:
      "The lathe does not run full time on our own catalog. If you're a label, an " +
      "artist or an estate with tape that deserves a proper cut, tell us what you have " +
      "and we'll tell you honestly whether we're the right people for it.",
    facts: [
      ["Minimum run", "300 copies"],
      ["Lead time", "10–14 weeks from approved test pressing"],
      ["Formats", "12\" 33⅓ · 12\" 45 · 10\" · 7\""],
      ["Included", "Two test pressings per side, revised until you're happy"],
    ] as [string, string][],
    cta: { label: "Enquire about a pressing", href: "#pressing-form" },
  },

  /**
   * There is no payment backend. The site must not pretend otherwise: no cart that
   * appears to work, no confirmation screen for an order that was never placed.
   */
  checkout: {
    heading: "Ordering",
    body:
      "Payment isn't connected yet, so nothing on this site can take your money or " +
      "place an order. Email us and we'll invoice you directly and post it the same week.",
    email: "orders@latheandlacquer.example",
  },

  footer: {
    note:
      "A reissue label and pressing house. Spiritual jazz, 1968–1975, cut from the " +
      "original tapes and pressed at 180 grams in the United States.",
    legal: "© 2026 Lathe & Lacquer",
    columns: [
      {
        title: "The series",
        links: [
          { label: "Vol. I — Ancestral Line", href: "/releases/ancestral-line/" },
          { label: "Vol. II — Night Water", href: "/releases/night-water/" },
          { label: "Vol. III — Harmattan Suite", href: "/releases/harmattan-suite/" },
        ],
      },
      {
        title: "More",
        links: [
          { label: "How it's cut", href: "#cutting" },
          { label: "Subscription", href: "#subscribe" },
          { label: "Pressing services", href: "#pressing" },
        ],
      },
    ],
  },
};

export type Site = typeof site;
export type Product = (typeof site.products)[number];
export type Chapter = (typeof site.chapters)[number];

/**
 * PYRITE — every user-visible string, tier, spec, CTA and scroll beat lives here.
 * Components read from this file and hardcode nothing.
 *
 * Market: United States. No fees are shown anywhere ("on request"), so no currency
 * appears; if one is ever added it is written "$NN".
 */

export type Beat = { scroll: [number, number]; frames: [number, number] };

/** A card-face pose measured from a held frame, as fractions of the source frame
 *  (x of width, y of height), clockwise from the card's top-left corner. The HTML
 *  engraving is projected onto these four points during the hold. */
export type Face = {
  metal: "onyx" | "aurum";
  /** Scroll range over which the engraving is visible (fades at both ends). */
  at: [number, number];
  corners: [[number, number], [number, number], [number, number], [number, number]];
};

export const site = {
  brand: {
    name: "PYRITE",
    tagline: "The quietest card in the room.",
    symbol: "/logo-symbol.svg",
  },

  meta: {
    title: "PYRITE — The quietest card in the room",
    description:
      "PYRITE is a private metal payment card, milled from a single billet of steel and issued to two thousand members a year. It is not applied for. It is offered.",
  },

  nav: [
    { label: "The Object", href: "#object" },
    { label: "Privileges", href: "#privileges" },
    { label: "Metals", href: "#metals" },
  ],
  cta: { label: "Request", href: "#request" },

  /** The engraving the HTML lays onto the card face. Never generated into pixels. */
  card: {
    wordmark: "PYRITE",
    number: "8801 0026 1885 0913",
    validThru: "01/31",
    holder: "AVERY LAURENT",
    since: "MEMBER SINCE MMXXVI",
  },

  chapters: [
    {
      id: "hero",
      at: [0.0, 0.1] as [number, number],
      eyebrow: "By invitation only · Est. MMXXVI",
      heading: "The quietest card in the room.",
      body: "PYRITE is a private payment card milled from a single billet of steel, finished in matte black and edged in gold. Two thousand are issued a year. It is not applied for. It is offered.",
      cta: { label: "Request consideration", href: "#request" },
      aside: "Nº 0001 — 2000 issued annually",
      specs: null,
    },
    {
      id: "onyx",
      at: [0.39, 0.48] as [number, number],
      eyebrow: "01 — The object",
      heading: "One billet. No seams.",
      body: "Milled from 316L steel, finished in matte black PVD, edged by hand in polished gold. No laminate, no layers. Nothing printed. Nothing declined.",
      cta: null,
      aside: null,
      specs: [
        ["Metal", "Matte PVD steel"],
        ["Weight", "22 g"],
        ["Limit", "No preset limit"],
        ["Admission", "By referral"],
      ] as [string, string][],
    },
    {
      id: "aurum",
      at: [0.61, 0.72] as [number, number],
      eyebrow: "02 — Aurum",
      heading: "Eighteen-karat clad.",
      headingItalic: "For those past subtlety.",
      body: "The same billet, clad in eighteen-karat gold and hand-satined. Offered only to members who have held Onyx for a year.",
      cta: null,
      aside: null,
      specs: [
        ["Metal", "18K gold clad"],
        ["Weight", "28 g"],
        ["Limit", "No preset limit"],
        ["Admission", "By invitation"],
      ] as [string, string][],
    },
    {
      id: "close",
      at: [0.9, 1.0] as [number, number],
      eyebrow: "A note on the name",
      heading: "Pyrite is fool’s gold.",
      body: "We named the card for it, so no one would mistake the card for the point. Annual fee on request. Concierge at any hour. Issued from New York.",
      cta: { label: "Request consideration", href: "#request" },
      secondary: { label: "Compare the metals", href: "#metals" },
      aside: null,
      specs: null,
    },
  ],

  rail: {
    film: "Film 001",
    cue: "Scroll",
    hint: "Keep scrolling — the card changes metal",
  },

  /** Landscape and portrait pacing, re-derived from measured frames (production-notes §7).
   *  Landscape: clip A = frames 0–240, clip B = 241–480 (B's frame 0 duplicates A's last). */
  beats: {
    landscape: [
      { scroll: [0.0, 0.04], frames: [0, 0] },       // hold — read the hero
      { scroll: [0.04, 0.12], frames: [0, 100] },    // the card turns open from edge-on
      { scroll: [0.12, 0.22], frames: [100, 145] },  // the fast flip — most scroll per frame
      { scroll: [0.22, 0.36], frames: [145, 225] },  // the revolve continues
      { scroll: [0.36, 0.4], frames: [225, 240] },   // settles
      { scroll: [0.4, 0.47], frames: [240, 240] },   // hold — Onyx, engraving lands
      { scroll: [0.47, 0.6], frames: [240, 320] },   // BLUR-THROUGH — the light wipes it gold
      { scroll: [0.6, 0.72], frames: [320, 360] },   // Aurum at rest (measured near-static)
      { scroll: [0.72, 0.88], frames: [360, 456] },  // the last revolution
      { scroll: [0.88, 0.92], frames: [456, 480] },  // settles face-on
      { scroll: [0.92, 1.0], frames: [480, 480] },   // hold — read the close
    ] as Beat[],
    // Portrait motion is measured separately — the 9:16 clips move on their own clock.
    portrait: [
      { scroll: [0.0, 0.03], frames: [0, 0] },
      { scroll: [0.03, 0.1], frames: [0, 40] },      // slow open
      { scroll: [0.1, 0.2], frames: [40, 100] },     // first fast turn
      { scroll: [0.2, 0.34], frames: [100, 200] },   // the revolve
      { scroll: [0.34, 0.39], frames: [200, 240] },  // settles
      { scroll: [0.39, 0.46], frames: [240, 240] },  // hold — Onyx
      { scroll: [0.46, 0.6], frames: [240, 330] },   // BLUR-THROUGH — the light blast
      { scroll: [0.6, 0.7], frames: [330, 370] },
      { scroll: [0.7, 0.84], frames: [370, 420] },   // the fast spin, stretched
      { scroll: [0.84, 0.92], frames: [420, 480] },  // comes to rest
      { scroll: [0.92, 1.0], frames: [480, 480] },   // hold — read the close
    ] as Beat[],
  },

  /** Story timing for the overlays, in scroll progress. Kept beside the beats they follow. */
  timing: {
    rail: [0.14, 0.9] as [number, number],
    switchAt: 0.55,                     // mid-wipe: the moment the metal changes
    hint: [0.4, 0.58] as [number, number],
    blur: [0.47, 0.6] as [number, number],
  },

  /** Card-face corners measured on the held frames with a pixel grid (production-notes §7). */
  faces: {
    landscape: [
      // frame 240 (1600×900): TL 745,305 · TR 1300,150 · BR 1355,570 · BL 800,715
      { metal: "onyx", at: [0.4, 0.47], corners: [[0.4656, 0.3389], [0.8125, 0.1667], [0.8469, 0.6333], [0.5, 0.7944]] },
      // frame 480: TL 745,302 · TR 1300,147 · BR 1356,570 · BL 795,715
      { metal: "aurum", at: [0.915, 1.01], corners: [[0.4656, 0.3356], [0.8125, 0.1633], [0.8475, 0.6333], [0.4969, 0.7944]] },
      // frames 320–360 rest in the final pose (mean |Δ| vs frame 480: 1.0–3.1 of 255), so
      // the Aurum chapter carries the engraving too. Portrait's rest is not still; no entry.
      { metal: "aurum", at: [0.615, 0.715], corners: [[0.4656, 0.3356], [0.8125, 0.1633], [0.8475, 0.6333], [0.4969, 0.7944]] },
    ] as Face[],
    portrait: [
      // frame 240 (720×1280): TL 148,610 · TR 555,495 · BR 598,792 · BL 180,908
      { metal: "onyx", at: [0.4, 0.46], corners: [[0.2056, 0.4766], [0.7708, 0.3867], [0.8306, 0.6188], [0.25, 0.7094]] },
      // frame 480: TL 145,605 · TR 555,497 · BR 600,792 · BL 178,910
      { metal: "aurum", at: [0.925, 1.01], corners: [[0.2014, 0.4727], [0.7708, 0.3883], [0.8333, 0.6188], [0.2472, 0.7109]] },
    ] as Face[],
  },

  object: {
    eyebrow: "The object",
    heading: "Made the way a watch case is made.",
    body: "Each card begins as a billet of 316L surgical steel. It is milled on a five-axis machine, bead-blasted, coated in matte black PVD in a vacuum chamber, and then the edge is cut back to bright metal and hand-polished. It takes eleven days. There is no plastic in it anywhere.",
    facts: [
      ["Thickness", "0.8 mm"],
      ["Material", "316L steel, one piece"],
      ["Edge", "Milled, hand-polished gold"],
      ["Chip", "EMV contact + contactless"],
      ["Production", "Eleven days per card"],
      ["Issued", "2,000 a year"],
    ] as [string, string][],
    images: [
      { src: "/products/edge-macro.webp", alt: "Extreme close-up of the card's rounded corner: a matte black face meeting a thin polished gold bevel that catches one line of light." },
      { src: "/products/presentation-case.webp", alt: "The matte black card resting in the suede recess of an open black leather presentation case." },
    ],
  },

  privileges: {
    eyebrow: "Privileges",
    heading: "Fewer things, done properly.",
    body: "There are no points, no tiers of benefits and no partner catalog. Membership is a handful of services, run by people rather than by an app.",
    items: [
      { n: "I", title: "A concierge who answers", body: "One named person, reachable by phone at any hour, who already knows how you like to travel." },
      { n: "II", title: "No preset limit", body: "Spending adapts to your history rather than to a number set when you joined." },
      { n: "III", title: "Tables and rooms", body: "Standing holds at a short list of restaurants and hotels across the United States, released to members first." },
      { n: "IV", title: "Replacement by hand", body: "A lost card is re-milled and hand-delivered within seventy-two hours, anywhere in the country." },
      { n: "V", title: "Silence by default", body: "No marketing, no statement inserts, no push notifications unless you ask for them." },
      { n: "VI", title: "One statement a month", body: "Printed on cotton paper and posted, alongside a quiet digital ledger for when you need it." },
    ],
  },

  metals: {
    eyebrow: "The metals",
    heading: "Two metals. One billet.",
    body: "Every member begins with Onyx. Aurum is offered, never requested, after a year.",
    feeNote: "Annual fee on request",
    tiers: [
      {
        id: "onyx",
        index: "01",
        name: "Onyx",
        line: "Nothing printed. Nothing declined.",
        image: "/products/onyx.webp",
        alt: "The matte black PYRITE Onyx card with its polished gold edge, lying on honed black marble.",
        specs: [
          ["Metal", "Matte PVD steel"],
          ["Weight", "22 g"],
          ["Limit", "No preset limit"],
          ["Admission", "By referral"],
        ] as [string, string][],
        cta: { label: "Request Onyx", href: "#request" },
      },
      {
        id: "aurum",
        index: "02",
        name: "Aurum",
        line: "Eighteen-karat clad. For those past subtlety.",
        image: "/products/aurum.webp",
        alt: "The satin gold PYRITE Aurum card lying on honed black marble, its edge catching one line of light.",
        specs: [
          ["Metal", "18K gold clad"],
          ["Weight", "28 g"],
          ["Limit", "No preset limit"],
          ["Admission", "By invitation"],
        ] as [string, string][],
        cta: { label: "By invitation only", href: "#request" },
      },
    ],
  },

  request: {
    eyebrow: "Request consideration",
    heading: "It is not applied for. It is offered.",
    body: "Tell us who you are and who referred you. A member of the trust reads every request personally and replies within ten days.",
    fields: {
      name: "Full name",
      email: "Email",
      referral: "Referred by (member name)",
      metal: "Metal",
    },
    metals: ["Onyx", "Aurum — members of one year"],
    action: "Submit request",
    // There is no backend yet. The form says so plainly and never shows a confirmation.
    notConnected:
      "Not sent. Requests are not connected yet, so nothing has been submitted and no one will contact you.",
  },

  footer: {
    address: "PYRITE Private Members Trust · Madison Avenue, New York, NY",
    columns: [
      { title: "The card", links: [
        { label: "The object", href: "#object" },
        { label: "The metals", href: "#metals" },
        { label: "Privileges", href: "#privileges" },
      ] },
      { title: "Membership", links: [
        { label: "Request consideration", href: "#request" },
        { label: "Concierge", href: "#privileges" },
      ] },
    ],
    legal: `© ${new Date().getFullYear()} PYRITE Private Members Trust. All rights reserved.`,
  },

  staticAlt:
    "A satin gold metal card with a polished edge floating at a slight tilt in darkness, threads of gold light curving behind it.",
};

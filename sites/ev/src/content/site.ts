/**
 * HALCYN — every user-visible string, trim, price, spec, CTA and scroll beat lives here.
 * Components read from this file and hardcode nothing.
 *
 * Market: United States. Prices are USD, written "$NN". Specs are manufacturer
 * estimates and are labeled as such wherever they appear.
 */

export type Beat = { scroll: [number, number]; frames: [number, number] };
export type Link = { label: string; href: string };

export type Chapter = {
  id: string;
  /** Scroll range (0..1 of the pinned travel) during which this chapter shows. */
  at: [number, number];
  numeral?: string | null;
  eyebrow?: string | null;
  heading: string;
  headingEm?: string | null;
  body?: string | null;
  cta?: Link | null;
  secondary?: Link | null;
  /** Which side of the frame the copy sits on — the side the footage leaves empty. */
  side?: "left" | "right";
};

export type Trim = {
  id: string;
  name: string;
  line: string;
  price: number;
  image: string;
  alt: string;
  specs: [string, string, string][]; // label, value, unit
};

export type Option = { id: string; name: string; note: string; price: number; swatch: string };

export const site = {
  brand: {
    name: "HALCYN",
    tagline: "Immense power. Arriving calm.",
    symbol: "/logo-symbol.svg",
  },

  meta: {
    title: "HALCYN — The electric grand tourer",
    description:
      "HALCYN is a two-door, four-seat electric grand tourer, built from the battery out and finished in black. 420 miles of estimated range, 0–60 in 2.3 seconds. Reservations open.",
  },

  nav: [
    { label: "Engineering", href: "#engineering" },
    { label: "Models", href: "#models" },
    { label: "Configure", href: "#configure" },
  ] as Link[],
  cta: { label: "Reserve", href: "#reserve" } as Link,
  /** The skip control lands past the pinned film, on the first section after it. */
  skip: { label: "Skip the film", href: "#engineering" } as Link,

  /** The strip at the foot of the pinned film. */
  rail: {
    cue: "Scroll to build it",
    blurHint: "Keep scrolling — the body arrives",
    film: "HALCYN · Build 01",
    /** One label per scene, shown in the progress rail. */
    scenes: ["Cell", "Pack", "Motor", "Corner", "Body", "Light", "Cabin", "Horizon"],
  },

  chapters: [
    {
      id: "hero",
      at: [0.0, 0.065],
      eyebrow: "The HALCYN grand tourer · Reservations open",
      heading: "Immense power.",
      headingEm: "Arriving calm.",
      body: "A two-door, four-seat electric grand tourer, built from the battery out and finished in a black so deep the light has to find it.",
      cta: { label: "Reserve yours", href: "#reserve" },
      secondary: { label: "See how it's built", href: "#engineering" },
      side: "left",
    },
    {
      id: "pack",
      at: [0.125, 0.168],
      numeral: "01",
      eyebrow: "The pack",
      heading: "Four thousand cells.",
      headingEm: "One silent floor.",
      body: "A 112 kWh structural pack at 800 volts: the battery is the chassis. 10 to 80 percent in 18 minutes.",
      side: "left",
    },
    {
      id: "motor",
      at: [0.228, 0.278],
      numeral: "02",
      eyebrow: "The motor",
      heading: "Hand-wound",
      headingEm: "in copper.",
      body: "Axial-flux motors, hairpin-wound, spin to 20,000 rpm and weigh less than a carry-on. Up to 1,020 horsepower.",
      side: "left",
    },
    {
      id: "corner",
      at: [0.365, 0.408],
      numeral: "03",
      eyebrow: "The corner",
      heading: "Stopped by carbon",
      headingEm: "and ceramic.",
      body: "16.5-inch carbon-ceramic discs, six-piston calipers, and pushrod suspension from the track, tuned for the long way home.",
      side: "left",
    },
    {
      id: "light",
      at: [0.635, 0.695],
      numeral: "04",
      eyebrow: "The light",
      heading: "Hidden until",
      headingEm: "it's needed.",
      body: "From the front, the HALCYN is black glass. Wake it, and a single ice-white line draws itself across the nose.",
      side: "left",
    },
    {
      id: "cabin",
      at: [0.765, 0.818],
      numeral: "05",
      eyebrow: "The cabin",
      heading: "Blue is light,",
      headingEm: "not leather.",
      body: "Semi-aniline black leather, brushed-aluminum switchgear, and threads of halcyon-blue light drawn through the dash and doors.",
      side: "left",
    },
    {
      id: "close",
      at: [0.935, 1.0],
      eyebrow: "Named for the kingfisher",
      heading: "The bird the ancients believed",
      headingEm: "could calm the sea.",
      body: "Reservations are open for the first 1,000 cars. Delivery across the United States from spring 2027.",
      cta: { label: "Reserve — $2,500, fully refundable", href: "#reserve" },
      secondary: { label: "Configure yours", href: "#configure" },
      side: "left",
    },
  ] as Chapter[],

  /** Scroll ranges for the film's own furniture. Re-derived from the measured frames. */
  timing: {
    blur: [0.405, 0.51] as [number, number],
    /** Scroll position at which each of rail.scenes begins. */
    scenes: [0, 0.075, 0.165, 0.275, 0.405, 0.565, 0.69, 0.815],
  },

  /** Piecewise scroll→frame mapping, derived from the measured motion profile of the
   *  delivered frames (production-notes.md §7). Fast motion gets the most scroll per frame;
   *  near-still passages become holds. */
  beats: {
    landscape: [
      { scroll: [0.0, 0.035], frames: [0, 0] },       // hold — read the hero
      { scroll: [0.035, 0.075], frames: [0, 42] },    // the cell turns
      { scroll: [0.075, 0.125], frames: [42, 90] },   // cells rain in (fast)
      { scroll: [0.125, 0.165], frames: [90, 97] },   // the pack settles; chapter 01
      { scroll: [0.165, 0.225], frames: [97, 150] },  // skim off the pack (fastest in the film)
      { scroll: [0.225, 0.275], frames: [150, 178] }, // the motor comes to rest; chapter 02
      { scroll: [0.275, 0.365], frames: [178, 250] }, // motor → shaft → disc → caliper → arms
      { scroll: [0.365, 0.405], frames: [250, 270] }, // the corner settles; chapter 03
      { scroll: [0.405, 0.525], frames: [270, 336] }, // BLUR-THROUGH — the body arrives, slowest
      { scroll: [0.525, 0.565], frames: [336, 366] }, // the car lands (measured near-still)
      { scroll: [0.565, 0.64], frames: [366, 432] },  // push in to the nose
      { scroll: [0.64, 0.69], frames: [432, 446] },   // the slit ignites; chapter 04
      { scroll: [0.69, 0.765], frames: [446, 505] },  // along the flank, through the glass
      { scroll: [0.765, 0.815], frames: [505, 525] }, // the cabin; chapter 05
      { scroll: [0.815, 0.93], frames: [525, 596] },  // rise out, the car drives away
      { scroll: [0.93, 1.0], frames: [596, 617] },    // the empty horizon; the close
    ] as Beat[],
    // Portrait is its own sequence at 10 fps with its own measured motion. Scene
    // boundaries sit at the same scroll positions as landscape so the chapters serve both.
    portrait: [
      // The portrait clip's first 26 source frames were trimmed at extraction: it opens tight
      // on the cell and pulls back, and until then the cell top (28% of the height) collides
      // with the hero CTA (~31%).
      { scroll: [0.0, 0.035], frames: [0, 0] },     // hold — read the hero
      { scroll: [0.035, 0.075], frames: [0, 14] },   // the cell turns
      { scroll: [0.075, 0.125], frames: [14, 52] },   // cells rain in
      { scroll: [0.125, 0.165], frames: [52, 56] },   // the pack; chapter 01
      { scroll: [0.165, 0.225], frames: [56, 111] },  // skim, under the pack (brief dip to black)
      { scroll: [0.225, 0.275], frames: [111, 124] }, // the motor at rest; chapter 02
      { scroll: [0.275, 0.365], frames: [124, 184] }, // the corner assembles
      { scroll: [0.365, 0.405], frames: [184, 199] }, // the corner settles; chapter 03
      { scroll: [0.405, 0.525], frames: [199, 256] }, // BLUR-THROUGH — the body arrives
      { scroll: [0.525, 0.565], frames: [256, 278] }, // the car lands (measured still)
      { scroll: [0.565, 0.64], frames: [278, 326] },  // swing to head-on, push in
      { scroll: [0.64, 0.69], frames: [326, 344] },   // the slit ignites; chapter 04
      { scroll: [0.69, 0.765], frames: [344, 398] },  // along the flank, into the cabin
      { scroll: [0.765, 0.815], frames: [398, 414] }, // the cabin; chapter 05
      { scroll: [0.815, 0.93], frames: [414, 466] },  // rise out, the car drives away
      { scroll: [0.93, 1.0], frames: [466, 488] },    // the empty horizon; the close
    ] as Beat[],
  },

  staticAlt:
    "The HALCYN, a long, low two-door grand tourer in gloss black, standing on a mirror-black floor under a single shaft of cold light.",

  engineering: {
    eyebrow: "Built from the battery out",
    heading: "Four parts you will never see. We made them beautiful anyway.",
    body: "Every HALCYN is assembled in Fremont, California, around the same four pieces of engineering. They are the reason it is quiet, and the reason it is fast.",
    parts: [
      {
        n: "01",
        name: "The pack",
        body: "4,416 cylindrical cells in a structural honeycomb. The floor of the car is the battery, which is why it sits this low.",
        fact: ["112", "kWh"],
        image: "/products/part-pack.webp",
        alt: "A field of brushed-silver battery cells in a honeycomb grid, receding into darkness.",
      },
      {
        n: "02",
        name: "The motor",
        body: "Axial-flux, copper hairpin windings, oil-cooled. Two on Grand Touring, three on Performance.",
        fact: ["20,000", "rpm"],
        image: "/products/part-motor.webp",
        alt: "An axial-flux electric motor with its ring of copper hairpin windings exposed.",
      },
      {
        n: "03",
        name: "The corner",
        body: "Carbon-ceramic discs behind six-piston calipers, on pushrod double-wishbone suspension with adaptive dampers.",
        fact: ["16.5", "in discs"],
        image: "/products/part-corner.webp",
        alt: "A bare wheel corner: brake disc, black six-piston caliper and pushrod suspension arms.",
      },
      {
        n: "04",
        name: "The light",
        body: "1,600 micro-optics behind a slit two millimeters tall. Invisible until the car is awake.",
        fact: ["2", "mm slit"],
        image: "/products/part-light.webp",
        alt: "The black nose of the HALCYN with a single ice-white light slit glowing across its width.",
      },
    ],
  },

  models: {
    eyebrow: "Two models",
    heading: "One silhouette. Two temperaments.",
    body: "Both share the pack, the body and the cabin. Performance adds a third motor, a lower ride and quicker steering.",
    note: "Estimated range and acceleration. Final EPA figures will be published before delivery.",
    trims: [
      {
        id: "gt",
        name: "Grand Touring",
        line: "For the long way home.",
        price: 148000,
        image: "/products/trim-gt.webp",
        alt: "The HALCYN Grand Touring on a wet salt flat at blue hour.",
        specs: [
          ["Range", "420", "mi est."],
          ["0–60", "3.4", "s"],
          ["Power", "670", "hp"],
          ["Motors", "2", ""],
        ],
      },
      {
        id: "performance",
        name: "Performance",
        line: "For the short way, taken quickly.",
        price: 186000,
        image: "/products/trim-performance.webp",
        alt: "The HALCYN Performance from the rear at night, its tail-light slit lit red.",
        specs: [
          ["Range", "360", "mi est."],
          ["0–60", "2.3", "s"],
          ["Power", "1,020", "hp"],
          ["Motors", "3", ""],
        ],
      },
    ] as Trim[],
  },

  configure: {
    eyebrow: "Configure",
    heading: "Any color, as long as it's black.",
    body: "Two blacks, two light colors, two wheels. Your configuration travels with your reservation and can be changed until production.",
    image: "/products/configure.webp",
    imageAlt: "The HALCYN in profile, gloss black, against a dark blue-black void.",
    groups: [
      {
        id: "finish",
        label: "Finish",
        options: [
          { id: "obsidian", name: "Obsidian Gloss", note: "Liquid-mirror black lacquer", price: 0, swatch: "linear-gradient(180deg,#3a3f48,#050608 55%,#1b1f26)" },
          { id: "eclipse", name: "Eclipse Satin", note: "Hand-finished satin black", price: 8500, swatch: "linear-gradient(180deg,#24272c,#0d0e10)" },
        ],
      },
      {
        id: "light",
        label: "Cabin light",
        options: [
          { id: "halcyon", name: "Halcyon Blue", note: "Cobalt light threads", price: 0, swatch: "radial-gradient(circle,#7aa6ff,#3d7bff 45%,#0b1426)" },
          { id: "ice", name: "Ice", note: "Cool white light threads", price: 0, swatch: "radial-gradient(circle,#ffffff,#cfe3ff 45%,#0b1426)" },
        ],
      },
      {
        id: "wheels",
        label: "Wheels",
        options: [
          { id: "aero21", name: "21-inch Aero Disc", note: "Closed gloss-black covers", price: 0, swatch: "radial-gradient(circle,#15171b 30%,#2a2e35 31%,#0a0b0d 70%)" },
          { id: "forged22", name: "22-inch Forged Turbine", note: "Satin black, carbon covers", price: 6200, swatch: "conic-gradient(#0a0b0d,#2b2f36,#0a0b0d,#2b2f36,#0a0b0d)" },
        ],
      },
    ] as { id: string; label: string; options: Option[] }[],
    totalLabel: "Estimated price",
    depositLabel: "Due today",
    taxNote: "Before destination, taxes and incentives.",
    action: "Reserve this configuration",
  },

  ownership: {
    eyebrow: "Ownership",
    heading: "Quiet on the road. Quiet in the garage.",
    items: [
      { n: "18 min", title: "10–80% on the road", body: "800-volt architecture on 350 kW public DC fast chargers across the United States." },
      { n: "Included", title: "A home charger, installed", body: "A 19.2 kW wall unit fitted by a certified electrician, anywhere in the contiguous United States." },
      { n: "8 yr", title: "Battery and drive warranty", body: "Eight years or 120,000 miles on the pack and motors, with at least 70% capacity retained." },
      { n: "At home", title: "Delivered to you", body: "Your car arrives covered, at your door, with an hour-long handover from the person who inspected it." },
    ],
  },

  reserve: {
    eyebrow: "Reserve",
    heading: "The first 1,000 cars.",
    body: "A $2,500 deposit holds your place in line. It is fully refundable until you confirm your order, and there is no obligation to buy.",
    deposit: 2500,
    fields: {
      name: "Full name",
      email: "Email",
      zip: "ZIP code",
      trim: "Model",
      config: "Configuration",
    },
    configNone: "Standard specification",
    action: "Reserve — $2,500",
    notConnected:
      "Reservations aren't connected yet. Nothing was sent and no card was charged. We'll open reservations on this page soon.",
    fine: "Deposits are processed in USD. You will not be charged until reservations open.",
  },

  footer: {
    address: "HALCYN Motor Company · Fremont, California",
    columns: [
      {
        title: "The car",
        links: [
          { label: "Engineering", href: "#engineering" },
          { label: "Models", href: "#models" },
          { label: "Configure", href: "#configure" },
        ],
      },
      {
        title: "Ownership",
        links: [
          { label: "Charging", href: "#ownership" },
          { label: "Warranty", href: "#ownership" },
          { label: "Reserve", href: "#reserve" },
        ],
      },
    ],
    legal: `© ${new Date().getFullYear()} HALCYN Motor Company. Specifications are estimates and subject to change.`,
  },
};

export const usd = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

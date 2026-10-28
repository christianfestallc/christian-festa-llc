/** The studio ledger: every product, in status order. Copy here should match
 * the App Store listings and the resume's Projects section. */
export type ProductStatus = "live" | "submitting" | "building";

export type ProductLink = { label: string; href: string; primary?: boolean; external?: boolean };

export type Product = {
  id: string;
  name: string;
  category: string;
  status: ProductStatus;
  statusLabel: string;
  /** The product's own brand accent — the studio chrome stays lime. */
  accent: string;
  icon?: string;
  /** Coming-soon line shown in place of screenshots; a product with one
   *  shows no blurb or chips. */
  teaser?: string;
  blurb: string;
  chips: string[];
  shots: { src: string; alt: string }[];
  links: ProductLink[];
};

export const APP_STORE_WALKOUT = "https://apps.apple.com/us/app/walkout-intros/id6761736614";
export const APP_STORE_GHOSTY = "https://apps.apple.com/us/app/ghosty-privacy/id6746877305";

export const products: Product[] = [
  {
    id: "walkout-intros",
    name: "Walkout Intros",
    category: "iOS app · Sports",
    status: "live",
    statusLabel: "Live on the App Store",
    accent: "#fb923c",
    icon: "/img/walkout-dark.svg",
    blurb:
      "Stadium intros for every team. Build a roster, pair each player with one of five AI announcer voices and a song cued to the drop, then run game day with one tap. Eleven sports. Free to try, Pro subscription.",
    chips: ["Five AI announcer voices", "Eleven sports", "Apple Music or your own library", "Free to try"],
    shots: [
      { src: "/img/studio/walkout-teams.jpg", alt: "Walkout Intros: the Teams screen" },
      { src: "/img/studio/walkout-stage-live.jpg", alt: "Walkout Intros: a player walking out on game day" },
    ],
    links: [
      { label: "View on the App Store", href: APP_STORE_WALKOUT, primary: true, external: true },
      { label: "Product page", href: "/walkout-intros/" },
      { label: "Support", href: "/walkout-intros/support.html" },
    ],
  },
  {
    id: "ghosty",
    name: "Ghosty Privacy",
    category: "iOS app · Privacy & Security",
    status: "live",
    statusLabel: "Live on the App Store",
    accent: "#00c805",
    icon: "/img/ghosty.svg",
    blurb:
      "Stop trackers in every app. A privacy firewall that lives on your phone: it stops the trackers, analytics, and telemetry your apps send in the background, across every app, not just the browser. See what your apps look up, switch whole categories off with one tap, and pause it whenever you like. No account, no server: what Ghosty sees stays on your phone.",
    chips: ["Every app, not just the browser", "No account, no server", "Pause anytime", "Family plan"],
    shots: [
      { src: "/img/studio/ghosty-home.jpg", alt: "Ghosty: Home, protection on" },
      { src: "/img/studio/ghosty-activity.jpg", alt: "Ghosty: Activity" },
    ],
    links: [
      { label: "View on the App Store", href: APP_STORE_GHOSTY, primary: true, external: true },
      { label: "Support", href: "/ghosty/support.html" },
      { label: "Privacy", href: "/ghosty/privacy.html" },
      { label: "Terms", href: "/ghosty/terms.html" },
    ],
  },
  {
    id: "aloha-fitness",
    name: "Aloha Fitness",
    category: "iOS app · Health & Fitness",
    status: "building",
    statusLabel: "Coming soon",
    accent: "#ff6482",
    icon: "/img/aloha-heart.svg",
    teaser: "Something good is cooking.",
    blurb: "",
    chips: [],
    shots: [],
    links: [{ label: "alohafitness.net", href: "https://alohafitness.net/", external: true }],
  },
];

export const RESUME_URL = "https://cvfesta.github.io/resume/";
export const SUPPORT_EMAIL = "support@christianfesta.com";

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
  blurb: string;
  chips: string[];
  shots: { src: string; alt: string }[];
  links: ProductLink[];
};

export const APP_STORE_WALKOUT = "https://apps.apple.com/us/app/walkout-intros/id6761736614";

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
    chips: ["SwiftUI", "AI voice generation", "Apple Music", "StoreKit subscriptions"],
    shots: [
      { src: "/img/studio/walkout-teams.jpg", alt: "Walkout Intros: the Teams screen" },
      { src: "/img/studio/walkout-game-mode.jpg", alt: "Walkout Intros: Game Mode" },
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
    status: "submitting",
    statusLabel: "1.2.0 · In App Store submission",
    accent: "#34d399",
    icon: "/img/ghosty.svg",
    blurb:
      "Stop trackers in every app. A privacy firewall that lives on your phone: it inspects each DNS lookup on the device, answers the tracking ones locally, and forwards the rest to the resolver you choose. No account, no server, nothing leaves the phone.",
    chips: ["Packet tunnel extension", "lwIP TCP/IP stack", "On-device DNS", "Family plan"],
    shots: [
      { src: "/img/studio/ghosty-home.jpg", alt: "Ghosty: Home, protection on" },
      { src: "/img/studio/ghosty-activity.jpg", alt: "Ghosty: Activity" },
    ],
    links: [
      { label: "Support", href: "/ghosty/support.html", primary: true },
      { label: "Privacy", href: "/ghosty/privacy.html" },
      { label: "Terms", href: "/ghosty/terms.html" },
    ],
  },
  {
    id: "aloha-fitness",
    name: "Aloha Fitness",
    category: "iOS app · Health & Fitness",
    status: "building",
    statusLabel: "In development",
    accent: "#5fd3c7",
    blurb:
      "An AI calorie and nutrition tracker for the Aloha Fitness brand. An on-device LLM handles natural-language meal logging, photo meal analysis, and plain-language metabolism insights.",
    chips: ["On-device LLM", "Multimodal meal analysis", "Adaptive TDEE"],
    shots: [],
    links: [{ label: "alohafitness.net", href: "https://alohafitness.net/", external: true }],
  },
];

export const RESUME_URL = "https://cvfesta.github.io/resume/";
export const SUPPORT_EMAIL = "support@christianfesta.com";

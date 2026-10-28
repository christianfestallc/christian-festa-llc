/** The apps on the home page, in display order. Copy here should match the
 * App Store listings. */
export type ProductLink = { label: string; href: string };

export type Product = {
  id: string;
  name: string;
  category: string;
  /** The product's own brand accent, used as a soft tint behind its screenshots. */
  accent: string;
  icon: string;
  /** Padding inside the dark icon tile, as a fraction of the tile, so each mark sits at its intended size. */
  iconInset: number;
  tagline: string;
  blurb: string;
  appStore: string;
  shots: { src: string; alt: string }[];
  links: ProductLink[];
};

export const APP_STORE_WALKOUT = "https://apps.apple.com/us/app/walkout-intros/id6761736614";
export const APP_STORE_GHOSTY = "https://apps.apple.com/us/app/ghosty-privacy/id6746877305";

export const products: Product[] = [
  {
    id: "walkout-intros",
    name: "Walkout Intros",
    category: "Sports · iPhone and iPad",
    accent: "#fb923c",
    icon: "/img/walkout-dark.svg",
    iconInset: 0.16,
    tagline: "Stadium intros for every team.",
    blurb:
      "Build a roster, pair each player with one of five AI announcer voices and a song cued to the drop, then run game day with one tap. Eleven sports. Free to try, with a Pro subscription.",
    appStore: APP_STORE_WALKOUT,
    shots: [
      { src: "/img/studio/walkout-teams.jpg", alt: "Walkout Intros: the Teams screen" },
      { src: "/img/studio/walkout-stage-live.jpg", alt: "Walkout Intros: a player walking out on game day" },
    ],
    links: [
      { label: "Learn more", href: "/walkout-intros/" },
      { label: "Support", href: "/walkout-intros/support.html" },
      { label: "Privacy", href: "/walkout-intros/privacy.html" },
      { label: "Terms", href: "/walkout-intros/terms.html" },
    ],
  },
  {
    id: "ghosty",
    name: "Ghosty Privacy",
    category: "Privacy & Security · iPhone and iPad",
    accent: "#00c805",
    icon: "/img/ghosty.svg",
    iconInset: 0.05,
    tagline: "Stop trackers in every app.",
    blurb:
      "A privacy firewall that lives on your phone. It stops the trackers, analytics and telemetry your apps send in the background, across every app, not just the browser. No account, no server: what Ghosty sees stays on your phone.",
    appStore: APP_STORE_GHOSTY,
    shots: [
      { src: "/img/studio/ghosty-home.jpg", alt: "Ghosty Privacy: Home, protection on" },
      { src: "/img/studio/ghosty-activity.jpg", alt: "Ghosty Privacy: Activity" },
    ],
    links: [
      { label: "Support", href: "/ghosty/support.html" },
      { label: "Privacy", href: "/ghosty/privacy.html" },
      { label: "Terms", href: "/ghosty/terms.html" },
    ],
  },
];

export const SUPPORT_EMAIL = "support@christianfesta.com";

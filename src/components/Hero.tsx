import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { trackEvent } from "../analytics";

const APP_STORE_URL = "https://apps.apple.com/us/app/walkout-intros/id6761736614";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.9 },
        delay: 0.2,
      });

      tl.from(".hero-aurora", { opacity: 0, duration: 1.4, ease: "power2.out" }, 0)
        .from(".hero-pill", { opacity: 0, y: 16 }, 0.1)
        .from(
          ".hero-title .hero-line",
          { opacity: 0, y: 40, stagger: 0.12 },
          0.25
        )
        .from(".hero-subtitle", { opacity: 0, y: 20 }, 0.55)
        .from(".hero-cta", { opacity: 0, y: 16 }, 0.7)
        .from(".hero-meta", { opacity: 0, y: 12 }, 0.85);
    },
    { scope: ref }
  );

  return (
    <header
      ref={ref}
      className="relative pt-36 md:pt-40 pb-24 md:pb-28 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="hero-aurora absolute inset-0 aurora pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noreferrer"
          onClick={() =>
            trackEvent("App Store Clicked", { source: "hero_pill" }, { sendBeacon: true })
          }
          className="hero-pill inline-flex items-center gap-2 text-xs font-medium bg-white/[0.04] border border-white/10 backdrop-blur-sm pl-2 pr-3 py-1.5 rounded-full text-zinc-300 mb-10 hover:bg-white/[0.08] hover:border-white/20 transition"
        >
          <span className="relative flex w-1.5 h-1.5">
            <span className="absolute inset-0 rounded-full bg-orange-400 pulse-dot" />
          </span>
          Now available on the App Store
          <span aria-hidden="true" className="text-zinc-500">→</span>
        </a>
        <h1 className="hero-title text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter mb-6 leading-[1.02]">
          <span className="hero-line block text-gradient">Stadium intros</span>
          <span className="hero-line block text-gradient">for every team.</span>
        </h1>
        <p className="hero-subtitle text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          AI-powered walk-up announcements, perfectly cued songs, and a one-tap
          game-day lineup — for coaches, announcers, and dugouts.
        </p>
        <div className="hero-cta flex justify-center items-center mb-4">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Download Walkout Intros on the App Store"
            onClick={() =>
              trackEvent("App Store Clicked", { source: "hero_badge" }, { sendBeacon: true })
            }
            className="inline-block hover:opacity-90 transition"
          >
            <img
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us"
              alt="Download on the App Store"
              className="h-14"
            />
          </a>
        </div>
        <p className="hero-meta text-xs text-zinc-500">
          Free to try • 1-week Pro trial • Requires iOS 17+
        </p>
      </div>
    </header>
  );
}

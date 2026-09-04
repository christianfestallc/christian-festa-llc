import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { trackEvent } from "../analytics";

export default function StudioHero() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap
        .timeline({ defaults: { ease: "power3.out", duration: 0.9 }, delay: 0.25 })
        .from(".hero-kicker", { opacity: 0, y: 16 }, 0)
        .from(".hero-title .line", { opacity: 0, y: 40, stagger: 0.12 }, 0.1)
        .from(".hero-sub", { opacity: 0, y: 20 }, 0.45)
        .from(".hero-cta", { opacity: 0, y: 16 }, 0.6);
    },
    { scope: ref }
  );

  return (
    <header className="studio-hero" id="top" ref={ref}>
      <p className="hero-kicker studio-kicker">Christian Festa LLC · Rocklin, California</p>
      <h1 className="hero-title studio-display">
        <span className="line">Small studio.</span>
        <span className="line">Real products.</span>
      </h1>
      <p className="hero-sub">
        Native iOS apps designed, built, and published end to end by one person, alongside
        the consulting practice that pays for the lab. Two apps shipped or shipping, one in
        development.
      </p>
      <div className="hero-cta">
        <a
          href="#walkout-intros"
          className="studio-btn studio-btn--light"
          onClick={() => trackEvent("Hero CTA Clicked", { target: "products" })}
        >
          See what's live
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </a>
        <a href="#about" className="studio-btn studio-btn--ghost">The person behind it</a>
      </div>
    </header>
  );
}

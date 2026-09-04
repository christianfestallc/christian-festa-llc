import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { trackEvent } from "../analytics";
import { RESUME_URL, products } from "./products";

export default function StudioNav({ onContact }: { onContact: () => void }) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ref.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: 0.1 }
      );
    },
    { scope: ref }
  );

  return (
    <nav className="studio-nav" ref={ref} aria-label="Studio">
      <div className="studio-pill">
        <a href="#top" className="studio-mark">
          <span className="studio-dot" aria-hidden="true" />
          Christian Festa LLC
        </a>
        <div className="studio-links">
          {products.map((p) => (
            <a key={p.id} href={`#${p.id}`} className="studio-link">
              {p.name}
            </a>
          ))}
          <a href="#about" className="studio-link">About</a>
        </div>
        <div className="studio-actions">
          <a
            href={RESUME_URL}
            className="studio-btn studio-btn--ghost"
            onClick={() => trackEvent("Resume Link Clicked", { source: "nav" }, { sendBeacon: true })}
          >
            Resume ↗
          </a>
          <button type="button" className="studio-btn studio-btn--accent" onClick={onContact}>
            Let's talk
          </button>
        </div>
      </div>
    </nav>
  );
}

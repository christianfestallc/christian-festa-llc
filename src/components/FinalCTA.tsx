import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const APP_STORE_URL = "https://apps.apple.com/us/app/walkout-intros/id6761736614";

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;

      gsap.fromTo(
        root.querySelector(".cta-card"),
        { opacity: 0, scale: 0.94, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: root, start: "top 80%", once: true },
        }
      );

      gsap.fromTo(
        root.querySelector(".cta-glow"),
        { opacity: 0, scale: 0.6 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: { trigger: root, start: "top 80%", once: true },
        }
      );
    },
    { scope: ref }
  );

  return (
    <section ref={ref} className="relative max-w-5xl mx-auto px-6 pb-24 md:pb-28">
      <div className="cta-card relative overflow-hidden border border-white/10 rounded-3xl p-12 md:p-20 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/15 via-orange-500/5 to-transparent pointer-events-none" />
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="cta-glow absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-5 leading-tight">
            Ready for game day?
          </h2>
          <p className="text-zinc-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Build your roster in minutes. Free to try, with a 1-week Pro trial.
          </p>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Download Walkout Intros on the App Store"
            className="inline-block hover:opacity-90 transition"
          >
            <img
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us"
              alt="Download on the App Store"
              className="h-14 mx-auto"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

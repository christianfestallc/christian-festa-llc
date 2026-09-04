import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { trackEvent } from "../analytics";

export default function Nav() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ref.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: 0.1 }
      );
    },
    { scope: ref }
  );

  return (
    <nav
      ref={ref}
      className="fixed top-0 inset-x-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <a
            href="/"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-300 transition"
            onClick={() => trackEvent("Studio Link Clicked", { source: "nav" }, { sendBeacon: true })}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#ccff33]" />
            Christian Festa LLC
            <span aria-hidden="true">/</span>
          </a>
          <a href="#" className="flex items-center gap-2.5">
            <img
              src="/img/light.svg"
              alt=""
              className="w-7 h-7 rounded-[7px] bg-white p-0.5 ring-1 ring-black/5"
            />
            <span className="font-semibold text-white tracking-tight">Walkout Intros</span>
          </a>
        </div>
        <div className="hidden md:flex items-center gap-7 text-sm text-zinc-400">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#how-it-works" className="hover:text-white transition">How it works</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </div>
        <a
          href="https://apps.apple.com/us/app/walkout-intros/id6761736614"
          target="_blank"
          rel="noreferrer"
          onClick={() =>
            trackEvent("App Store Clicked", { source: "nav" }, { sendBeacon: true })
          }
          className="text-sm bg-white text-black font-medium px-4 py-1.5 rounded-full hover:bg-zinc-200 transition"
        >
          Get the app
        </a>
      </div>
    </nav>
  );
}

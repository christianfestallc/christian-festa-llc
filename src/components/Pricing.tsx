import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { trackEvent } from "../analytics";

const APP_STORE_URL = "https://apps.apple.com/us/app/walkout-intros/id6761736614";

const FREE_FEATURES = [
  "1 team, up to 3 active players in Game Mode",
  "1 announcer voice (Bill — Stadium Boom)",
  "Full Game Mode with one-tap playback",
  "Apple Music search + your music library",
  "Walkout Classics with pre-cued start times",
  "AirPlay to any speaker",
  "Sport-aware scripts for every supported sport",
];

const PRO_FEATURES = [
  "Unlimited teams — wrestling in winter, baseball in spring",
  "Unlimited players per team — full rosters, not just 3",
  "All 5 announcer voices — Bill, Adam, Ring Announcer, Callum, Rachel",
  "Playback Mode controls — Announcement+Song, Announcement Only, or Song Only",
  "Everything in Free, with no caps",
];

function Check({ accent }: { accent: boolean }) {
  return (
    <svg
      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${accent ? "text-orange-400" : "text-zinc-500"}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Pricing() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;

      gsap.fromTo(
        root.querySelectorAll(".pricing-header > *"),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: root, start: "top 80%", once: true },
        }
      );

      gsap.fromTo(
        root.querySelectorAll(".pricing-card"),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: { trigger: root, start: "top 70%", once: true },
        }
      );
    },
    { scope: ref }
  );

  return (
    <section
      id="pricing"
      ref={ref}
      className="relative max-w-5xl mx-auto px-6 py-24 md:py-28 scroll-mt-20"
    >
      <div className="pricing-header text-center mb-14 md:mb-16">
        <p className="text-sm font-semibold text-orange-400 tracking-wide mb-3 uppercase">
          Pricing
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          Free to try.
          <br className="md:hidden" /> Pro when you're ready.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        <div className="pricing-card bg-zinc-950 border border-white/10 rounded-3xl p-8 flex flex-col">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-1">Free</h3>
            <p className="text-zinc-500 text-sm">For trying it out</p>
          </div>
          <div className="mb-8">
            <span className="text-5xl font-bold text-white tracking-tight">$0</span>
            <span className="text-zinc-500 ml-2">forever</span>
          </div>
          <ul className="space-y-3.5 text-sm text-zinc-300 flex-1 mb-8">
            {FREE_FEATURES.map((feature) => (
              <li key={feature} className="flex gap-3">
                <Check accent={false} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() =>
              trackEvent(
                "Pricing CTA Clicked",
                { tier: "free", source: "pricing" },
                { sendBeacon: true },
              )
            }
            className="inline-flex justify-center items-center bg-white/[0.06] border border-white/10 text-white font-medium px-5 py-3 rounded-xl hover:bg-white/[0.1] transition text-sm"
          >
            Get Walkout Intros
          </a>
        </div>

        <div className="pricing-card relative bg-zinc-950 border border-orange-500/40 rounded-3xl p-8 flex flex-col overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative flex-1 flex flex-col">
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Pro</h3>
                <p className="text-orange-400/80 text-sm">For real game-day use</p>
              </div>
              <span className="text-[10px] uppercase tracking-wider bg-orange-500 text-black px-2.5 py-1 rounded-full font-bold">
                Most Popular
              </span>
            </div>
            <div className="mb-1">
              <span className="text-5xl font-bold text-white tracking-tight">$1.99</span>
              <span className="text-zinc-400 ml-2">/month</span>
            </div>
            <p className="text-zinc-500 text-sm mb-8">
              or $19.99/year — 1-week free trial
            </p>
            <ul className="space-y-3.5 text-sm text-zinc-200 flex-1 mb-8">
              {PRO_FEATURES.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <Check accent />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                trackEvent(
                  "Pricing CTA Clicked",
                  { tier: "pro", source: "pricing" },
                  { sendBeacon: true },
                )
              }
              className="inline-flex justify-center items-center bg-white text-black font-semibold px-5 py-3 rounded-xl hover:bg-zinc-200 transition text-sm"
            >
              Start free trial
            </a>
          </div>
        </div>
      </div>

      <p className="text-zinc-500 text-xs text-center mt-8 max-w-2xl mx-auto">
        Cancel anytime from Settings → Apple ID → Subscriptions. The annual plan saves
        you about 17% compared to monthly.
      </p>
    </section>
  );
}

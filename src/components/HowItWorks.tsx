import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const STEPS = [
  {
    number: "01",
    title: "Build your roster",
    body: "Add your team and players in under a minute. Type each player's name, choose their position from the sport-specific list, and add a jersey number or leave it blank. Wrestling teams get weight-class fields instead. Already coaching multiple seasons? Add as many teams as you need.",
  },
  {
    number: "02",
    title: "Generate intros that sound real",
    body: "Pick from professionally curated AI announcer voices. Every player gets a smart script template built for their sport, and you can edit any line. Pair each with a walkup song from our hand-picked Walkout Classics — pre-cued to the second the hook drops.",
  },
  {
    number: "03",
    title: "Run the game from your phone",
    body: "Open Game Mode, AirPlay to your field's speaker, and tap. The announcer calls your player, the song fades in on cue, and you're already swiping to the next batter. Drag to reorder, swipe to bench, watch live NOW/NEXT indicators.",
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;

      gsap.fromTo(
        root.querySelectorAll(".step-header > *"),
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
        root.querySelector(".step-line"),
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: { trigger: root, start: "top 70%", once: true },
        }
      );

      gsap.fromTo(
        root.querySelectorAll(".step-card"),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.18,
          scrollTrigger: { trigger: root, start: "top 70%", once: true },
        }
      );
    },
    { scope: ref }
  );

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="relative max-w-5xl mx-auto px-6 py-24 md:py-28 scroll-mt-20"
    >
      <div className="step-header text-center mb-14 md:mb-16">
        <p className="text-sm font-semibold text-orange-400 tracking-wide mb-3 uppercase">
          How it works
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          From sign-up to stadium
          <br className="hidden md:block" /> in three steps.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-5 relative">
        <div className="step-line hidden md:block absolute top-12 left-[14%] right-[14%] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent origin-left" />

        {STEPS.map((step) => (
          <div
            key={step.number}
            className="step-card relative bg-zinc-950 border border-white/10 rounded-2xl p-7"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-9 h-9 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 font-semibold flex items-center justify-center text-sm">
                {step.number}
              </span>
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

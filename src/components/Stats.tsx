import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
  display?: string;
};

const STATS: Stat[] = [
  { value: 11, label: "Sports supported" },
  { value: 5, label: "AI announcer voices" },
  { value: 40, suffix: "+", label: "Walkout Classics" },
  { value: 0, label: "Game-day playback", display: "1-tap" },
];

export default function Stats() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>(".stat-number").forEach((el) => {
        const target = Number(el.dataset.target);
        const suffix = el.dataset.suffix ?? "";
        const display = el.dataset.display;

        if (display) return; // static value like "1-tap"

        const obj = { value: 0 };
        gsap.to(obj, {
          value: target,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = Math.round(obj.value) + suffix;
          },
        });
      });
    },
    { scope: ref }
  );

  return (
    <section
      ref={ref}
      className="relative border-y border-white/[0.06] bg-white/[0.015]"
    >
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="stat-number text-3xl md:text-4xl font-bold text-white tracking-tight"
                data-target={stat.value}
                data-suffix={stat.suffix ?? ""}
                data-display={stat.display ?? ""}
              >
                {stat.display ?? "0"}
              </p>
              <p className="text-sm text-zinc-500 mt-1.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

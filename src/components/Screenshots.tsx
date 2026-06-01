import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const SHOTS = [
  {
    src: "/img/teams.png",
    alt: "Teams list screen — one app for every team, every season, every roster",
    offset: 0,
  },
  {
    src: "/img/player-editor.png",
    alt: "Player editor screen — customize each player's walk-up announcement and song",
    offset: 1,
  },
  {
    src: "/img/song-picker.png",
    alt: "Walk-up song picker — set the exact start time and duration of the song's drop",
    offset: 0,
  },
  {
    src: "/img/game-mode.png",
    alt: "Game Mode — one-tap playback of the lineup with NOW and NEXT indicators",
    offset: 1,
  },
];

export default function Screenshots() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;

      gsap.fromTo(
        root.querySelectorAll(".shot-heading > *"),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: root, start: "top 80%", once: true },
        }
      );

      gsap.fromTo(
        root.querySelectorAll(".shot"),
        { opacity: 0, y: 80, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: root, start: "top 70%", once: true },
        }
      );

      // Continuous parallax: each shot drifts at slightly different speed as user scrolls
      gsap.utils.toArray<HTMLElement>(".shot").forEach((el) => {
        const offset = Number(el.dataset.offset) || 0;
        gsap.to(el, {
          y: offset === 1 ? -40 : -10,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
    },
    { scope: ref }
  );

  return (
    <section
      id="screenshots"
      ref={ref}
      className="relative max-w-6xl mx-auto px-6 py-24 md:py-28 scroll-mt-20"
    >
      <div className="shot-heading text-center mb-14 md:mb-16">
        <p className="text-sm font-semibold text-orange-400 tracking-wide mb-3 uppercase">
          A look inside
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          Built for game day.
        </h2>
        <p className="text-lg text-zinc-400 mt-5 max-w-xl mx-auto leading-relaxed">
          Every screen designed for one moment — the player walks up, and you tap once.
        </p>
      </div>

      <div className="relative">
        <div className="absolute inset-x-0 -bottom-10 h-72 bg-gradient-to-t from-orange-500/15 via-orange-500/5 to-transparent blur-3xl pointer-events-none" />
        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {SHOTS.map((shot) => (
            <img
              key={shot.src}
              src={shot.src}
              alt={shot.alt}
              loading="lazy"
              data-offset={shot.offset}
              className={`shot w-full rounded-2xl shadow-2xl ring-1 ring-white/10 ${
                shot.offset === 1 ? "md:translate-y-8" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

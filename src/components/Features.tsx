import { useReveal } from "../hooks/useReveal";

const SPORTS = [
  "Baseball", "Softball", "T-ball", "Basketball", "Football",
  "Soccer", "Lacrosse", "Hockey", "Volleyball", "Wrestling", "Cheerleading",
];

export default function Features() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="features"
      ref={ref}
      className="relative max-w-6xl mx-auto px-6 py-24 md:py-28 scroll-mt-20"
    >
      <div className="text-center mb-14 md:mb-16">
        <p className="reveal text-sm font-semibold text-orange-400 tracking-wide mb-3 uppercase">
          Features
        </p>
        <h2 className="reveal text-4xl md:text-5xl font-bold tracking-tight text-white">
          Everything a dugout needs.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="reveal md:col-span-2 relative bg-zinc-950 border border-white/10 rounded-3xl p-8 md:p-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative">
            <div className="inline-flex w-11 h-11 bg-orange-500/15 border border-orange-500/20 rounded-xl items-center justify-center mb-5">
              <span className="text-xl">🎙️</span>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-white tracking-tight">
              AI stadium voices that sound real.
            </h3>
            <p className="text-zinc-400 leading-relaxed max-w-md">
              Five professionally curated announcer voices — from the booming PA to the
              high-energy hype voice that fires up a wrestling mat. Every script is
              editable, with phonetic spelling support for names.
            </p>
          </div>
        </div>

        <div className="reveal relative bg-zinc-950 border border-white/10 rounded-3xl p-8 overflow-hidden">
          <div className="inline-flex w-11 h-11 bg-orange-500/15 border border-orange-500/20 rounded-xl items-center justify-center mb-5">
            <span className="text-xl">🎵</span>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-white tracking-tight">
            Songs cued to the drop.
          </h3>
          <p className="text-zinc-400 leading-relaxed text-sm">
            40+ Walkout Classics pre-cued to the exact second the hook hits, plus Apple
            Music and your library.
          </p>
        </div>

        <div className="reveal relative bg-zinc-950 border border-white/10 rounded-3xl p-8 overflow-hidden">
          <div className="inline-flex w-11 h-11 bg-orange-500/15 border border-orange-500/20 rounded-xl items-center justify-center mb-5">
            <span className="text-xl">⚡</span>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-white tracking-tight">
            One-tap Game Mode.
          </h3>
          <p className="text-zinc-400 leading-relaxed text-sm">
            AirPlay to your field's speaker and tap. NOW and NEXT indicators tell you
            what's coming.
          </p>
        </div>

        <div className="reveal md:col-span-2 relative bg-zinc-950 border border-white/10 rounded-3xl p-8 md:p-10 overflow-hidden">
          <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-orange-500/[0.08] rounded-full blur-3xl pointer-events-none" />
          <div className="relative">
            <div className="inline-flex w-11 h-11 bg-orange-500/15 border border-orange-500/20 rounded-xl items-center justify-center mb-5">
              <span className="text-xl">🏟️</span>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-white tracking-tight">
              Built for 11 sports.
            </h3>
            <p className="text-zinc-400 leading-relaxed max-w-md mb-5">
              Each sport gets its own positions, scripts, and announcer phrases —
              wrestling gets weight classes, cheer gets "Now performing," baseball gets
              "Now batting."
            </p>
            <div className="flex flex-wrap gap-1.5">
              {SPORTS.map((sport) => (
                <span
                  key={sport}
                  className="text-xs text-zinc-300 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-full"
                >
                  {sport}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

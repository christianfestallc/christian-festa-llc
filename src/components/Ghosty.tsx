import { useReveal } from "../hooks/useReveal";
import { trackEvent } from "../analytics";

export default function Ghosty() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="whats-next"
      ref={ref}
      className="relative max-w-5xl mx-auto px-6 py-24 md:py-28 scroll-mt-20"
    >
      <div className="reveal bg-zinc-950 border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden relative">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-emerald-500/10 border border-emerald-500/20 rounded-3xl flex items-center justify-center flex-shrink-0">
            <span className="text-5xl">👻</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                Ghosty
              </h3>
              <span className="text-[10px] uppercase tracking-wider bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 px-2.5 py-1 rounded-full font-semibold">
                Coming Soon
              </span>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-4 max-w-2xl">
              A privacy-first DNS filter for iPhone and iPad. Block unwanted connections
              with custom domains and curated blocklists — 100% local, zero data
              collection.
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <a
                href="/ghosty/privacy.html"
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  trackEvent(
                    "Ghosty Link Clicked",
                    { kind: "privacy" },
                    { sendBeacon: true },
                  )
                }
                className="text-zinc-400 hover:text-white transition underline-offset-4 hover:underline"
              >
                Privacy Policy
              </a>
              <a
                href="/ghosty/terms.html"
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  trackEvent(
                    "Ghosty Link Clicked",
                    { kind: "terms" },
                    { sendBeacon: true },
                  )
                }
                className="text-zinc-400 hover:text-white transition underline-offset-4 hover:underline"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

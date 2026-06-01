import { useReveal } from "../hooks/useReveal";
import { trackEvent } from "../analytics";

type QA = { q: string; a: string };

const GROUPS: { title: string; items: QA[] }[] = [
  {
    title: "Setup & sports",
    items: [
      {
        q: "Which sports does Walkout Intros work for?",
        a: 'Baseball, softball, T-ball, basketball, football, soccer, lacrosse, hockey, volleyball, wrestling, and cheerleading. Each sport has its own position list and announcer phrase ("Now batting" for baseball, "Now on the mat at 132 pounds" for wrestling, "Now performing" for cheerleading, etc.).',
      },
      {
        q: "What iOS version do I need?",
        a: "Walkout Intros runs on iPhone running iOS 17 or later. It also works on iPad in compatible mode. macOS support isn't planned right now.",
      },
      {
        q: "How long does setup take?",
        a: "A typical 12-player roster takes 10–15 minutes the first time — names, jersey numbers, positions, and a song each. Once it's set up, Game Mode is one tap.",
      },
    ],
  },
  {
    title: "Music & audio",
    items: [
      {
        q: "Do I need an Apple Music subscription?",
        a: "No, but it unlocks full-length songs. Without an Apple Music subscription, songs play as 30-second previews from the Apple Music catalog. That's enough to land the walkup hook for most players. With a subscription, walkups play the full clip you've tuned — anywhere from 5 to 60+ seconds.",
      },
      {
        q: "Can I use my own music?",
        a: "Yes — any song already in your Apple Music library is available in the Library tab when picking walkup songs. Direct MP3 uploads aren't supported yet, but they're on the roadmap.",
      },
      {
        q: 'What are "Walkout Classics"?',
        a: "A hand-curated catalog of 40+ canonical walkup songs (Thunderstruck, Eye of the Tiger, Seven Nation Army, etc.) where each track is matched to its exact Apple Music recording and pre-cued to the second the hook drops. You don't have to fiddle with start times — just pick a classic and it plays at the right moment.",
      },
      {
        q: "Will songs play through my AirPlay speaker or PA system?",
        a: "Yes. Walkout Intros uses Apple's standard audio routing. Connect your phone to any AirPlay 1 or 2 speaker, Bluetooth speaker, or a wired PA via a 3.5mm cable, and audio plays through that output. The audio-route picker is right in the player so you can confirm at a glance.",
      },
    ],
  },
  {
    title: "Announcer voices & scripts",
    items: [
      {
        q: "How real do the AI announcer voices sound?",
        a: "We use ElevenLabs — the same voice technology behind major podcast and audiobook production. The voices are indistinguishable from real human announcers for most listeners, especially over a field speaker. Each voice in the app is hand-curated for a specific stadium archetype.",
      },
      {
        q: "Can I edit the announcer script?",
        a: 'Yes. Tap a player\'s script row to open the script editor. You can rewrite anything — and use phonetic spelling tricks (capitals for stress, dashes for syllables, like "GIE-nuh-fer" for "Jhenyfer") to fix mispronunciations.',
      },
      {
        q: "Does the announcer work in Spanish?",
        a: "The current voices are tuned for English delivery. Spanish-speaking announcers are on the roadmap. In the meantime, the voices handle Latino names reasonably well, especially with the script editor's phonetic spelling support.",
      },
      {
        q: "What if I don't want a song — just the announcement?",
        a: 'In Game Mode, tap the ellipsis (•••) → "What to Play" → "Announcement Only." Great for wrestling meets, kids\' leagues with music restrictions, or anywhere the focus is on the introduction. The team remembers your choice — set it once and forget it.',
      },
    ],
  },
  {
    title: "Game day & connectivity",
    items: [
      {
        q: "Does it work without internet?",
        a: "Announcer audio is generated once and cached on your device, so once a player's intro is created, it plays offline forever. Apple Music streaming does need an internet connection (for full songs), but if your field has spotty signal, your announcer still works.",
      },
      {
        q: "How do I connect to a field speaker?",
        a: "Pair the speaker once via your phone's standard Bluetooth or AirPlay setup, then open Game Mode. The app routes everything to whatever speaker is currently active. The audio device name is visible right in the player so you can confirm before tapping play.",
      },
      {
        q: "Can I share a team with another coach?",
        a: "Not yet — each team lives on the device that created it. Multi-device team sharing via iCloud is planned for a future release.",
      },
      {
        q: "Will Walkout Intros drain my battery?",
        a: "A typical 2-hour game uses 8–15% of an iPhone battery when running Game Mode over Bluetooth. AirPlay tends to use slightly more. We recommend bringing a cable or pocket battery for tournaments.",
      },
    ],
  },
  {
    title: "Subscriptions & support",
    items: [
      {
        q: "Can I cancel anytime?",
        a: "Yes. Subscriptions are managed in Settings → Apple ID → Subscriptions. You'll keep Pro features through the end of your billing cycle.",
      },
      {
        q: "Is my data backed up?",
        a: "Teams and players are stored locally on your device with iCloud-eligible storage. They'll persist through reinstalls but aren't currently synced across multiple devices (that's coming).",
      },
      {
        q: "I found a bug or have a feature request. How do I reach you?",
        a: "Tap the ellipsis (•••) → Send Feedback in the app, or email us directly. We read every message — many features in the app shipped from coach feedback.",
      },
    ],
  },
];

export default function FAQ() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="faq"
      ref={ref}
      className="relative max-w-3xl mx-auto px-6 py-24 md:py-28 scroll-mt-20"
    >
      <div className="text-center mb-14 md:mb-16">
        <p className="reveal text-sm font-semibold text-orange-400 tracking-wide mb-3 uppercase">
          FAQ
        </p>
        <h2 className="reveal text-4xl md:text-5xl font-bold tracking-tight text-white">
          Frequently asked questions.
        </h2>
      </div>

      <div className="space-y-12">
        {GROUPS.map((group) => (
          <div key={group.title} className="reveal">
            <h3 className="text-xs uppercase tracking-wider text-zinc-500 mb-4 font-semibold">
              {group.title}
            </h3>
            <div className="space-y-2">
              {group.items.map((item) => (
                <details
                  key={item.q}
                  onToggle={(e) => {
                    if (e.currentTarget.open) {
                      trackEvent("FAQ Opened", { question: item.q, group: group.title });
                    }
                  }}
                  className="group bg-zinc-950 border border-white/10 hover:border-white/20 transition rounded-xl"
                >
                  <summary className="px-5 py-4 cursor-pointer flex justify-between items-center gap-4 text-white font-medium">
                    <span>{item.q}</span>
                    <span className="text-zinc-500 text-xl leading-none faq-icon flex-shrink-0">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 -mt-1 text-zinc-400 text-sm leading-relaxed">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

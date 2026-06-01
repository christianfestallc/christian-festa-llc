export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-2.5 mb-4">
              <img
                src="/img/light.svg"
                alt=""
                className="w-8 h-8 rounded-lg bg-white p-0.5"
              />
              <span className="font-semibold text-white text-lg">Walkout Intros</span>
            </a>
            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
              AI-powered stadium intros for every team. Built for coaches, announcers,
              and dugouts.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#features" className="text-zinc-400 hover:text-white transition">Features</a></li>
              <li><a href="#how-it-works" className="text-zinc-400 hover:text-white transition">How it works</a></li>
              <li><a href="#pricing" className="text-zinc-400 hover:text-white transition">Pricing</a></li>
              <li><a href="#faq" className="text-zinc-400 hover:text-white transition">FAQ</a></li>
              <li>
                <a
                  href="https://apps.apple.com/us/app/walkout-intros/id6761736614"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400 hover:text-white transition"
                >
                  App Store
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Legal &amp; support</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://christianfesta.com/walkout-intros/privacy.html"
                  className="text-zinc-400 hover:text-white transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://christianfesta.com/walkout-intros/terms.html"
                  className="text-zinc-400 hover:text-white transition"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@christianfesta.com"
                  className="text-zinc-400 hover:text-white transition"
                >
                  support@christianfesta.com
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/ChristianF67163"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400 hover:text-white transition"
                >
                  @ChristianF67163
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <p>© 2026 Christian Festa LLC · Rocklin, California</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

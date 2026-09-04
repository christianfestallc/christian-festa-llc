import { RESUME_URL, SUPPORT_EMAIL } from "./products";

export default function StudioFooter({ onContact }: { onContact: () => void }) {
  return (
    <footer className="studio-footer">
      <div className="studio-footer-grid">
        <div className="studio-footer-brand">
          <span className="studio-mark">
            <span className="studio-dot" aria-hidden="true" />
            Christian Festa LLC
          </span>
          <p>An independent iOS studio and consulting entity. S-Corp, Rocklin, California.</p>
        </div>
        <div className="studio-footer-col">
          <span className="studio-footer-label">Walkout Intros</span>
          <a href="/walkout-intros/">Product page</a>
          <a href="/walkout-intros/support.html">Support</a>
          <a href="/walkout-intros/privacy.html">Privacy</a>
          <a href="/walkout-intros/terms.html">Terms</a>
        </div>
        <div className="studio-footer-col">
          <span className="studio-footer-label">Ghosty</span>
          <a href="/ghosty/support.html">Support</a>
          <a href="/ghosty/privacy.html">Privacy</a>
          <a href="/ghosty/terms.html">Terms</a>
        </div>
        <div className="studio-footer-col">
          <span className="studio-footer-label">Elsewhere</span>
          <a href={RESUME_URL}>Interactive resume ↗</a>
          <button type="button" className="studio-footer-btn" onClick={onContact}>Send a message</button>
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
        </div>
      </div>
      <div className="studio-footer-bar">
        <span>© {new Date().getFullYear()} Christian Festa LLC · Rocklin, California</span>
        <span>Available for contract and corp-to-corp engagements</span>
      </div>
    </footer>
  );
}

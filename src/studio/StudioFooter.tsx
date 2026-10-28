import { SUPPORT_EMAIL } from "./products";

export default function StudioFooter({ onContact }: { onContact: () => void }) {
  return (
    <footer className="studio-footer">
      <div className="studio-footer-grid">
        <div className="studio-footer-brand">
          <span className="studio-mark">
            <span className="studio-dot" aria-hidden="true" />
            Christian Festa LLC
          </span>
          <p>An independent iOS app studio in Rocklin, California.</p>
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
          <span className="studio-footer-label">Contact</span>
          <button type="button" className="studio-footer-btn" onClick={onContact}>Send a message</button>
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
        </div>
      </div>
      <div className="studio-footer-bar">
        <span>© {new Date().getFullYear()} Christian Festa LLC · Rocklin, California</span>
      </div>
    </footer>
  );
}

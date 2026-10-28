import { SUPPORT_EMAIL } from "./products";

export default function StudioSupport() {
  return (
    <section className="studio-support" id="support" aria-labelledby="support-heading">
      <div className="studio-support-inner">
        <div className="studio-support-copy">
          <h2 className="studio-display" id="support-heading">Support</h2>
          <p>Questions about an app, a subscription or your data? Email us and we answer within 24 hours.</p>
        </div>
        <div className="studio-support-links">
          <a href={`mailto:${SUPPORT_EMAIL}`} className="studio-support-email">{SUPPORT_EMAIL}</a>
          <a href="/support/" className="studio-support-all">All support pages, FAQs and policies</a>
        </div>
      </div>
    </section>
  );
}

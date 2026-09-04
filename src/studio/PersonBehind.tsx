import { useReveal } from "../hooks/useReveal";
import { trackEvent } from "../analytics";
import { RESUME_URL } from "./products";

const CAREER_START = 2009;
const YEARS = `${new Date().getFullYear() - CAREER_START}+`;

const STATS = [
  { value: YEARS, label: "Years consulting and delivering" },
  { value: "$40M", label: "Platform directed today" },
  { value: "30+", label: "People on the teams I run" },
  { value: "PMP", label: "Certified delivery lead" },
];

export default function PersonBehind() {
  const ref = useReveal<HTMLElement>();
  return (
    <section className="studio-about" id="about" ref={ref}>
      <div className="studio-about-inner">
        <div className="studio-about-copy reveal">
          <p className="studio-kicker">02 — The person behind it</p>
          <h2 className="studio-display studio-about-title">Seventeen years of shipping for clients.</h2>
          <p className="studio-about-sub">
            Director of Software Engineering by day, directing a $40M state platform and a
            generative-AI practice. The apps are where the same discipline meets zero-to-one.
          </p>
          <a
            href={RESUME_URL}
            className="studio-btn studio-btn--accent"
            onClick={() => trackEvent("Resume Link Clicked", { source: "about" }, { sendBeacon: true })}
          >
            Read the interactive resume
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>
        <div className="studio-stats">
          {STATS.map((s) => (
            <div className="studio-stat reveal" key={s.label}>
              <span className="studio-stat-value studio-display">{s.value}</span>
              <span className="studio-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

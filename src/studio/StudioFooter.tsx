import { products } from "./products";

/** The legal publisher is named here and nowhere else on the page: App Review
 * matches it to the App Store seller, without the site promoting the company. */
export default function StudioFooter() {
  const legal = products.map((p) => ({
    name: p.name,
    links: p.links.filter((l) => l.label !== "Learn more"),
  }));

  return (
    <footer className="studio-footer">
      <div className="studio-footer-inner">
        <div className="studio-footer-cols">
          {legal.map((app) => (
            <div className="studio-footer-col" key={app.name}>
              <p className="studio-footer-label">{app.name}</p>
              {app.links.map((l) => (
                <a key={l.label} href={l.href}>
                  {l.label === "Privacy" ? "Privacy Policy" : l.label === "Terms" ? "Terms of Use" : l.label}
                </a>
              ))}
            </div>
          ))}
        </div>
        <p className="studio-footer-bar">
          © {new Date().getFullYear()} Christian Festa LLC. Walkout Intros and Ghosty Privacy are published by
          Christian Festa LLC.
        </p>
      </div>
    </footer>
  );
}

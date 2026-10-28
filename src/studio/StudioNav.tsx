import { products } from "./products";

export default function StudioNav() {
  return (
    <header className="studio-header">
      <nav className="studio-nav" aria-label="Apps">
        <div className="studio-nav-apps">
          {products.map((p) => (
            <a key={p.id} href={`#${p.id}`} className="studio-nav-app" aria-label={p.name}>
              <span className="app-tile app-tile--sm" style={{ "--inset": p.iconInset } as React.CSSProperties} aria-hidden="true">
                <img src={p.icon} alt="" />
              </span>
              <span className="studio-nav-name">{p.name}</span>
            </a>
          ))}
        </div>
        <a href="#support" className="studio-btn studio-btn--outline">Support</a>
      </nav>
    </header>
  );
}

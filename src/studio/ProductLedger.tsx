import { useReveal } from "../hooks/useReveal";
import { trackEvent } from "../analytics";
import { products, type Product } from "./products";

function ProductRow({ product, flip }: { product: Product; flip: boolean }) {
  const ref = useReveal<HTMLElement>();
  const style = { "--brand": product.accent } as React.CSSProperties;
  const track = (label: string) =>
    trackEvent("Product Link Clicked", { product: product.id, label }, { sendBeacon: true });

  return (
    <article className={flip ? "product product--flip" : "product"} id={product.id} ref={ref} style={style}>
      <div className="product-copy reveal">
        <div className="product-head">
          <span className="app-tile app-tile--lg" style={{ "--inset": product.iconInset } as React.CSSProperties} aria-hidden="true">
            <img src={product.icon} alt="" />
          </span>
          <div>
            <h2 className="product-name studio-display">{product.name}</h2>
            <p className="product-category">{product.category}</p>
          </div>
        </div>
        <p className="product-tagline">{product.tagline}</p>
        <p className="product-blurb">{product.blurb}</p>
        <div className="product-actions">
          <a
            href={product.appStore}
            className="studio-btn studio-btn--solid"
            target="_blank"
            rel="noreferrer"
            onClick={() => track("View on the App Store")}
          >
            View on the App Store
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 11L11 5M6 5h5v5" />
            </svg>
          </a>
          <div className="product-links">
            {product.links.map((link) => (
              <a key={link.label} href={link.href} className="product-link" onClick={() => track(link.label)}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="product-media reveal">
        {product.shots.map((shot, i) => (
          <img
            key={shot.src}
            src={shot.src}
            alt={shot.alt}
            loading="lazy"
            className={i === (flip ? 0 : product.shots.length - 1) ? "product-shot product-shot--lead" : "product-shot"}
          />
        ))}
      </div>
    </article>
  );
}

export default function ProductLedger() {
  return (
    <section className="studio-section studio-ledger" aria-label="Apps">
      {products.map((p, i) => (
        <ProductRow key={p.id} product={p} flip={i % 2 === 1} />
      ))}
    </section>
  );
}

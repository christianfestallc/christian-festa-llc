import { useReveal } from "../hooks/useReveal";
import { trackEvent } from "../analytics";
import { products, type Product } from "./products";

const STATUS_DATE = new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" });

function ProductRow({ product, flip }: { product: Product; flip: boolean }) {
  const ref = useReveal<HTMLElement>();
  const building = product.status === "building";
  const style = { "--brand": product.accent } as React.CSSProperties;

  const copy = (
    <div className="product-copy reveal">
      <div className="product-head">
        <div className="product-icon" aria-hidden="true">
          {product.icon ? (
            <img src={product.icon} alt="" />
          ) : (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12h4l2-5 3 10 2-5h7" />
            </svg>
          )}
        </div>
        <span className="product-status">
          <span className="product-status-dot" aria-hidden="true" />
          {product.statusLabel}
        </span>
      </div>
      <p className="product-category">{product.category}</p>
      <h2 className="product-name studio-display">{product.name}</h2>
      <p className="product-blurb">{product.blurb}</p>
      <div className="product-chips">
        {product.chips.map((chip) => (
          <span className="product-chip" key={chip}>{chip}</span>
        ))}
      </div>
      <div className="product-links">
        {product.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={link.primary ? "product-link product-link--primary" : "product-link"}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noreferrer" : undefined}
            onClick={() =>
              trackEvent("Product Link Clicked", { product: product.id, label: link.label }, { sendBeacon: true })
            }
          >
            {link.label}
            {link.external ? " ↗" : ""}
          </a>
        ))}
      </div>
    </div>
  );

  const media = (
    <div className={flip ? "product-media product-media--start reveal" : "product-media reveal"}>
      {product.shots.length > 0 ? (
        product.shots.map((shot, i) => (
          <img
            key={shot.src}
            src={shot.src}
            alt={shot.alt}
            loading="lazy"
            className={i === (flip ? 0 : product.shots.length - 1) ? "product-shot product-shot--lead" : "product-shot"}
          />
        ))
      ) : (
        <div className="product-shot-placeholder">Screenshots when the build is ready</div>
      )}
    </div>
  );

  return (
    <article
      className={building ? "product product--building" : "product"}
      id={product.id}
      ref={ref}
      style={style}
    >
      {flip ? media : copy}
      {flip ? copy : media}
    </article>
  );
}

export default function ProductLedger() {
  const headRef = useReveal<HTMLDivElement>();
  return (
    <section className="studio-section studio-ledger" aria-labelledby="products-heading">
      <div className="studio-ledger-head reveal" ref={headRef}>
        <p className="studio-kicker" id="products-heading">01 — The products</p>
        <p className="studio-ledger-date">Status as of {STATUS_DATE}</p>
      </div>
      {products.map((p, i) => (
        <ProductRow key={p.id} product={p} flip={i % 2 === 1} />
      ))}
    </section>
  );
}

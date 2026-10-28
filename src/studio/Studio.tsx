import StudioNav from "./StudioNav";
import StudioHero from "./StudioHero";
import ProductLedger from "./ProductLedger";
import StudioSupport from "./StudioSupport";
import StudioFooter from "./StudioFooter";

export default function Studio() {
  return (
    <div className="studio">
      <StudioNav />
      <main>
        <StudioHero />
        <ProductLedger />
        <StudioSupport />
      </main>
      <StudioFooter />
    </div>
  );
}

import StudioNav from "./StudioNav";
import StudioHero from "./StudioHero";
import ProductLedger from "./ProductLedger";
import PersonBehind from "./PersonBehind";
import StudioFooter from "./StudioFooter";
import ContactModal from "./ContactModal";
import { useState } from "react";
import { trackEvent } from "../analytics";

export default function Studio() {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = (source: string) => {
    trackEvent("Contact Modal Opened", { source });
    setContactOpen(true);
  };

  return (
    <div className="studio">
      <StudioNav onContact={() => openContact("nav")} />
      <StudioHero />
      <ProductLedger />
      <PersonBehind />
      <StudioFooter onContact={() => openContact("footer")} />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}

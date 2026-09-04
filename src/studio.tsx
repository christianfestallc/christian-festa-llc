import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Studio from "./studio/Studio";
import { initMixpanel, trackEvent } from "./analytics";
import "./index.css";
import "./studio/studio.css";

gsap.registerPlugin(ScrollTrigger);

initMixpanel("studio");
trackEvent("Page Viewed", { path: window.location.pathname });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Studio />
  </StrictMode>
);

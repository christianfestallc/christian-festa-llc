import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import App from "./App";
import { initMixpanel, trackEvent } from "./analytics";
import "./index.css";

gsap.registerPlugin(ScrollTrigger);

initMixpanel();
trackEvent("Page Viewed", { path: window.location.pathname });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Two pages, one build: the studio home at `/` and the Walkout Intros
// landing page at `/walkout-intros/`. Each has its own entry script.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        studio: "index.html",
        "walkout-intros": "walkout-intros/index.html",
      },
    },
  },
});

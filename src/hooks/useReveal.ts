import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

/**
 * Fade-and-rise reveal triggered when the element scrolls into view.
 * Children with class `reveal` are staggered. Falls back to animating the
 * container itself if no `.reveal` children exist.
 */
export function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;

      const items = root.querySelectorAll<HTMLElement>(".reveal");
      const targets: Element[] | HTMLElement[] = items.length > 0 ? Array.from(items) : [root];

      gsap.fromTo(
        targets,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: root,
            start: "top 85%",
            once: true,
          },
        }
      );
    },
    { scope: ref }
  );

  return ref;
}

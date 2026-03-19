import { useEffect } from "react";
import Lenis from "lenis";

export function useLenisSmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    let rafId = null;
    function raf(time) {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    }

    rafId = window.requestAnimationFrame(raf);

    return () => {
      if (rafId != null) window.cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
}


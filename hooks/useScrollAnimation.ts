"use client";

import { useEffect, useRef } from "react";

export function useScrollAnimation(threshold: number = 0.15) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

export function useFadeUp(threshold: number = 0.05) {
  const ref = useScrollAnimation(threshold);
  return { ref, className: "fade-up" };
}

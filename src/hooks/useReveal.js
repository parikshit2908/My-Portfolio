import { useEffect, useRef } from "react";

export default function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    el.style.opacity = "0";
    el.style.transform = "translateY(28px) scale(0.97)";
    el.style.transition =
      "opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0) scale(1)";
          observer.disconnect();
        }
      },
      { threshold: 0.18, ...options }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [options]);

  return ref;
}

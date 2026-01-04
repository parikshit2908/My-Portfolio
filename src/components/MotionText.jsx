/*
====================================================
MOTION TEXT — HOME PAGE ONLY
----------------------------------------------------
• 3D / 4D illusion
• Text-only (no layout impact)
• Pointer:fine only
• Disabled on touch & reduced motion
====================================================
*/

import { useEffect, useRef } from "react";

export default function MotionText({ as: Tag = "span", children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const canUse =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!canUse) return;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;

      const dx = (e.clientX - cx) / r.width;
      const dy = (e.clientY - cy) / r.height;

      el.style.transform =
        "perspective(700px) rotateX(" +
        -dy * 6 +
        "deg) rotateY(" +
        dx * 6 +
        "deg) translateZ(14px)";
    };

    const reset = () => {
      el.style.transform =
        "perspective(700px) rotateX(0deg) rotateY(0deg) translateZ(0)";
    };

    window.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", reset);

    return () => {
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      data-cursor-text
      style={{
        display: "inline-block",
        willChange: "transform",
      }}
    >
      {children}
    </Tag>
  );
}

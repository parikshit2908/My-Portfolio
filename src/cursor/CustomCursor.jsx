import { useEffect, useRef } from "react";

/*
====================================================
CUSTOM CURSOR — CENTERED FIX
----------------------------------------------------
• Cursor dot perfectly centered
• Ring centered around dot
• No offset / no edge drift
• Desktop only
====================================================
*/

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
    };

    const animate = () => {
      rx += (x - rx) * 0.15;
      ry += (y - ry) * 0.15;

      // DOT — exact center
      dot.style.transform =
        "translate3d(" + x + "px," + y + "px,0) translate(-50%,-50%)";

      // RING — exact center with easing
      ring.style.transform =
        "translate3d(" + rx + "px," + ry + "px,0) translate(-50%,-50%)";

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "#ffffff",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "38px",
          height: "38px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.6)",
          pointerEvents: "none",
          zIndex: 9998,
        }}
      />
    </>
  );
}

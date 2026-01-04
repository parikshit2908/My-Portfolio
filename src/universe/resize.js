/*
====================================================
CANVAS RESIZE — DEVICE SAFE
----------------------------------------------------
• Handles DPR correctly
• No layout impact
• Stable on resize / rotation
====================================================
*/

export function setupResize(canvas) {
  const ctx = canvas.getContext("2d");

  const resize = () => {
    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);

    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  resize();
  window.addEventListener("resize", resize);

  return () => window.removeEventListener("resize", resize);
}

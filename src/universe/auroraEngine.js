/*
====================================================
AURORA (NORTHERN LIGHTS) — POLAR SKY EFFECT
----------------------------------------------------
• Flowing light curtains
• Time-based color shifts (4D)
• Depth layered
• Extremely soft + cinematic
====================================================
*/

export function startAurora(canvas, ctx) {
  const DPR = window.devicePixelRatio || 1;
  let raf;
  let t = 0;

  function draw() {
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    t += 0.003;

    for (let i = 0; i < 6; i++) {
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle =
        "hsla(" +
        (160 + Math.sin(t + i) * 40) +
        ", 90%, 70%, 0.12)";

      for (let x = 0; x <= innerWidth; x += 20) {
        const y =
          innerHeight * 0.25 +
          Math.sin(x * 0.004 + t + i) * 120 +
          Math.sin(t * 2 + i) * 40;
        ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    raf = requestAnimationFrame(draw);
  }

  draw();
  return () => cancelAnimationFrame(raf);
}

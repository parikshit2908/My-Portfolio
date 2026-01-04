/*
====================================================
TIME WARP FIELD — 4D MOTION CUE
----------------------------------------------------
• Subtle spacetime grid
• Time-driven curvature
====================================================
*/

export function startTimeWarp(canvas, ctx) {
  const DPR = window.devicePixelRatio || 1;
  let raf;

  function draw() {
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

    const t = Date.now() * 0.0004;

    ctx.strokeStyle = "rgba(120,140,255,0.05)";
    ctx.lineWidth = 1;

    for (let i = 0; i < 12; i++) {
      ctx.beginPath();
      for (let x = 0; x < innerWidth; x += 40) {
        const y =
          innerHeight / 2 +
          Math.sin(x * 0.004 + t + i) * 120 * Math.sin(t * 0.3 + i);
        ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    raf = requestAnimationFrame(draw);
  }

  draw();
  return () => cancelAnimationFrame(raf);
}

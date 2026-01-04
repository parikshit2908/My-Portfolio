/*
====================================================
BACKGROUND OBJECTS — CINEMATIC DEPTH
----------------------------------------------------
• Soft nebula blobs
• Slow parallax drift
• Color accents
• Zero interaction with layout
====================================================
*/

export function startBackgroundObjects(canvas, ctx) {
  const DPR = window.devicePixelRatio || 1;

  const blobs = [
    { x: 0.2, y: 0.3, r: 420, c: "rgba(138,162,255,0.12)", dx: 0.00015 },
    { x: 0.8, y: 0.25, r: 360, c: "rgba(110,231,183,0.10)", dx: -0.0001 },
    { x: 0.6, y: 0.75, r: 520, c: "rgba(180,140,255,0.08)", dx: 0.00008 }
  ];

  let t = 0;
  let frame = null;

  function draw() {
    t += 1;

    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

    blobs.forEach((b) => {
      const cx = window.innerWidth * b.x + Math.sin(t * b.dx) * 80;
      const cy = window.innerHeight * b.y;

      const g = ctx.createRadialGradient(
        cx,
        cy,
        0,
        cx,
        cy,
        b.r
      );
      g.addColorStop(0, b.c);
      g.addColorStop(1, "rgba(0,0,0,0)");

      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(cx, cy, b.r, 0, Math.PI * 2);
      ctx.fill();
    });

    frame = requestAnimationFrame(draw);
  }

  draw();

  return function stop() {
    if (frame) cancelAnimationFrame(frame);
  };
}

/*
====================================================
RINGS ENGINE — 3D DEPTH OBJECTS
----------------------------------------------------
• Subtle orbital rings
• Parallax depth illusion
• Slow cinematic rotation
• Zero layout interaction
====================================================
*/

export function startRings(canvas, ctx) {
  const DPR = window.devicePixelRatio || 1;

  const rings = [
    { r: 180, speed: 0.0006, alpha: 0.06 },
    { r: 260, speed: -0.0004, alpha: 0.05 },
    { r: 360, speed: 0.00025, alpha: 0.04 }
  ];

  let t = 0;
  let frame = null;

  function draw() {
    t += 1;

    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;

    for (let i = 0; i < rings.length; i++) {
      const ring = rings[i];
      const angle = t * ring.speed;

      ctx.beginPath();
      ctx.ellipse(
        cx,
        cy,
        ring.r,
        ring.r * 0.55,
        angle,
        0,
        Math.PI * 2
      );
      ctx.strokeStyle =
        "rgba(255,255,255," + ring.alpha + ")";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    frame = requestAnimationFrame(draw);
  }

  draw();

  return function stop() {
    if (frame) cancelAnimationFrame(frame);
  };
}

/*
====================================================
NEBULA VOLUMES — 3D / 4D DEPTH ILLUSION
----------------------------------------------------
• Slow parallax blobs
• Multi-layer depth
• Time-based color drift (4D)
====================================================
*/

export function startNebula(canvas, ctx) {
  const DPR = window.devicePixelRatio || 1;
  const blobs = [];
  const LAYERS = 6;
  let t = 0;
  let raf;

  function resize() {
    canvas.width = innerWidth * DPR;
    canvas.height = innerHeight * DPR;
  }

  resize();
  window.addEventListener("resize", resize);

  for (let i = 0; i < LAYERS; i++) {
    blobs.push({
      x: Math.random(),
      y: Math.random(),
      r: 0.18 + Math.random() * 0.35,
      speed: 0.00015 + Math.random() * 0.00025,
      depth: i / LAYERS,
      hue: 210 + Math.random() * 60,
    });
  }

  function draw() {
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    t += 0.002;

    blobs.forEach((b) => {
      const px = b.x * innerWidth;
      const py = b.y * innerHeight;
      const pr = Math.min(innerWidth, innerHeight) * b.r;

      const hue = b.hue + Math.sin(t + b.depth * 6) * 40;
      const alpha = 0.08 * (1 - b.depth);

      const g = ctx.createRadialGradient(px, py, 0, px, py, pr);
      g.addColorStop(0, "hsla(" + hue + ",90%,70%," + alpha + ")");
      g.addColorStop(1, "transparent");

      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(px, py, pr, 0, Math.PI * 2);
      ctx.fill();

      b.x += Math.sin(t * b.speed + b.depth) * 0.00005;
      b.y += Math.cos(t * b.speed + b.depth) * 0.00005;
    });

    raf = requestAnimationFrame(draw);
  }

  draw();

  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("resize", resize);
  };
}

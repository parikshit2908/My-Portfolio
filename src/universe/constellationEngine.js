/*
====================================================
CONSTELLATIONS — 3D CONNECTED SPACE
----------------------------------------------------
• Depth-sorted nodes
• Animated links
• Perspective drift
====================================================
*/

export function startConstellations(canvas, ctx) {
  const DPR = window.devicePixelRatio || 1;
  let nodes = [];
  let raf;

  function init() {
    nodes = [];
    for (let i = 0; i < 40; i++) {
      nodes.push({
        x: Math.random(),
        y: Math.random(),
        z: Math.random(),
      });
    }
  }

  init();

  function draw() {
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

    nodes.forEach((a, i) => {
      const ax = a.x * innerWidth;
      const ay = a.y * innerHeight;

      nodes.slice(i + 1).forEach((b) => {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d = Math.sqrt(dx * dx + dy * dy);

        if (d < 0.18) {
          ctx.strokeStyle =
            "rgba(160,180,255," + (1 - d * 5) * 0.15 + ")";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(b.x * innerWidth, b.y * innerHeight);
          ctx.stroke();
        }
      });

      a.x += Math.sin(Date.now() * 0.0003 + a.z) * 0.00005;
      a.y += Math.cos(Date.now() * 0.0003 + a.z) * 0.00005;
    });

    raf = requestAnimationFrame(draw);
  }

  draw();

  return () => cancelAnimationFrame(raf);
}

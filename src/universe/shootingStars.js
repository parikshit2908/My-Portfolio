/*
====================================================
SHOOTING STARS ENGINE — CINEMATIC ACCENTS
----------------------------------------------------
• Rare, fast streaks
• Random timing
• Depth & glow
• Lightweight
====================================================
*/

export function startShootingStars(canvas, ctx) {
  const DPR = window.devicePixelRatio || 1;
  let stars = [];
  let frame = null;

  function spawn() {
    if (Math.random() > 0.985) {
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight * 0.4;

      stars.push({
        x: startX,
        y: startY,
        vx: Math.random() * 12 + 10,
        vy: Math.random() * 6 + 4,
        life: 0,
        maxLife: 40 + Math.random() * 20,
      });
    }
  }

  function draw() {
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

    spawn();

    stars = stars.filter((s) => s.life < s.maxLife);

    stars.forEach((s) => {
      const alpha = 1 - s.life / s.maxLife;

      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(s.x - s.vx * 2, s.y - s.vy * 2);
      ctx.strokeStyle =
        "rgba(180,200,255," + alpha * 0.8 + ")";
      ctx.lineWidth = 2;
      ctx.stroke();

      s.x += s.vx;
      s.y += s.vy;
      s.life += 1;
    });

    frame = requestAnimationFrame(draw);
  }

  draw();

  return function stop() {
    if (frame) cancelAnimationFrame(frame);
  };
}

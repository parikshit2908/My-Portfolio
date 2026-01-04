/*
====================================================
UNIVERSE ENGINE — ALIVE / DEPTH / 3D FEEL
----------------------------------------------------
• Multi-layer stars (parallax)
• Slow drift + depth illusion
• Subtle rotation field
• Still safe & performant
====================================================
*/

export function startUniverse(canvas, ctx) {
  const DPR = window.devicePixelRatio || 1;
  const layers = [
    { count: 120, speed: 0.15, size: 1.6, alpha: 0.35 },
    { count: 90, speed: 0.08, size: 1.1, alpha: 0.45 },
    { count: 70, speed: 0.04, size: 0.8, alpha: 0.6 }
  ];

  const stars = [];

  layers.forEach((layer) => {
    for (let i = 0; i < layer.count; i++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: layer.size * (Math.random() * 0.8 + 0.6),
        s: layer.speed * (Math.random() * 0.8 + 0.6),
        a: layer.alpha,
        drift: Math.random() * Math.PI * 2
      });
    }
  });

  let frame = null;
  let t = 0;

  function draw() {
    t += 0.0008;

    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#020617";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];

      s.y += s.s;
      s.x += Math.sin(t + s.drift) * 0.04;

      if (s.y > window.innerHeight) s.y = 0;
      if (s.x > window.innerWidth) s.x = 0;
      if (s.x < 0) s.x = window.innerWidth;

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255," + s.a + ")";
      ctx.fill();
    }

    frame = requestAnimationFrame(draw);
  }

  draw();

  return function stop() {
    if (frame) cancelAnimationFrame(frame);
  };
}

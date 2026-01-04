/*
====================================================
GRAVITY ENGINE — HOME PAGE ONLY
----------------------------------------------------
• Subtle text attraction
• No layout mutation
• Pointer:fine only
• Disabled on touch & reduced motion
====================================================
*/

export function initGravityEngine() {
  const canUse =
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!canUse) return;

  const targets = document.querySelectorAll("[data-cursor-text]");
  if (!targets.length) return;

  let mx = window.innerWidth / 2;
  let my = window.innerHeight / 2;

  const onMove = (e) => {
    mx = e.clientX;
    my = e.clientY;
  };

  window.addEventListener("mousemove", onMove);

  let frame = null;

  function loop() {
    for (let i = 0; i < targets.length; i++) {
      const el = targets[i];
      const rect = el.getBoundingClientRect();

      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const dx = mx - cx;
      const dy = my - cy;

      const dist = Math.sqrt(dx * dx + dy * dy);
      const max = 220;

      if (dist < max) {
        const force = (1 - dist / max) * 0.18;
        el.style.transform =
          "translate3d(" +
          dx * force +
          "px," +
          dy * force +
          "px,0)";
      } else {
        el.style.transform = "translate3d(0,0,0)";
      }
    }

    frame = requestAnimationFrame(loop);
  }

  loop();

  return function cleanup() {
    window.removeEventListener("mousemove", onMove);
    if (frame) cancelAnimationFrame(frame);
    targets.forEach((el) => {
      el.style.transform = "translate3d(0,0,0)";
    });
  };
}

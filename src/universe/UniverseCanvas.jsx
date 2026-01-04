import { useEffect, useRef } from "react";
import { startUniverse } from "./starEngine";
import { startRings } from "./ringsEngine";
import { startBackgroundObjects } from "./backgroundObjects";
import { startShootingStars } from "./shootingStars";
import { startNebula } from "./nebulaEngine";
import { startConstellations } from "./constellationEngine";
import { startTimeWarp } from "./timeWarpEngine";
import { startAurora } from "./auroraEngine";
import { setupResize } from "./resize";

export default function UniverseCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = setupResize(canvas);

    const stop = [
      startUniverse(canvas, ctx),
      startRings(canvas, ctx),
      startBackgroundObjects(canvas, ctx),
      startNebula(canvas, ctx),
      startConstellations(canvas, ctx),
      startTimeWarp(canvas, ctx),
      startAurora(canvas, ctx),
      startShootingStars(canvas, ctx),
    ];

    return () => {
      resize();
      stop.forEach((fn) => fn && fn());
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}

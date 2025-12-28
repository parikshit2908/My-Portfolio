import useIsMobile from "../hooks/useIsMobile";

export default function ParticleUniverse() {
  const isMobile = useIsMobile();

  if (isMobile) return null;

  return null; // desktop visuals already handled elsewhere
}

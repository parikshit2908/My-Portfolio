import useIsMobile from "../hooks/useIsMobile";

export default function Motion3D({ children }) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <>{children}</>;
  }

  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        perspective: "1200px",
      }}
    >
      {children}
    </div>
  );
}

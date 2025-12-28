import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import useIsMobile from "./hooks/useIsMobile";

import BackgroundObjects from "./components/BackgroundObjects";
import MultiStarfield from "./components/MultiStarfield";
import WireframeRings from "./components/WireframeRings";
import CustomCursor from "./components/CustomCursor";
import DebugHUD from "./components/DebugHUD";

function App() {
  const isMobile = useIsMobile();

  return (
    <div className="camera">
      {/* SAFE visuals */}
      {!isMobile && <MultiStarfield />}
      {!isMobile && <BackgroundObjects />}
      {!isMobile && <WireframeRings />}

      {/* Desktop-only */}
      {!isMobile && <CustomCursor />}
      {!isMobile && <DebugHUD />}

      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;

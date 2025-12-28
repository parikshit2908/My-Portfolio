import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { useIsTouch } from "./hooks/useIsTouch";

function App() {
  const isTouch = useIsTouch();

  // ANDROID SAFE MODE: NO EFFECTS
  if (isTouch) {
    return (
      <>
        <Navbar />
        <AppRoutes />
      </>
    );
  }

  // DESKTOP ONLY
  const MultiStarfield = require("./components/MultiStarfield").default;
  const BackgroundObjects = require("./components/BackgroundObjects").default;
  const WireframeRings = require("./components/WireframeRings").default;
  const CustomCursor = require("./components/CustomCursor").default;
  const DebugHUD = require("./components/DebugHUD").default;
  const { useCameraDrift } = require("./hooks/useCameraDrift");

  useCameraDrift(6);

  return (
    <div className="camera">
      <MultiStarfield />
      <BackgroundObjects />
      <WireframeRings />
      <CustomCursor />
      <DebugHUD />
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const root = document.getElementById("root");

try {
  createRoot(root).render(<App />);
} catch (e) {
  root.innerHTML =
    "<div style='color:white;padding:40px;font-family:sans-serif'>Site failed to load on this device.</div>";
}

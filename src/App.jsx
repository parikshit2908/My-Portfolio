import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UniverseCanvas from "./universe/UniverseCanvas";
import CustomCursor from "./cursor/CustomCursor";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <UniverseCanvas />
      <CustomCursor />
      <Navbar />

      <main
        style={{
          position: "relative",
          zIndex: 1,
          paddingTop: "72px",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </main>
    </Router>
  );
}

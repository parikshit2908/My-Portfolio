import { Link, useLocation } from "react-router-dom";

/*
====================================================
NAVBAR — PROFESSIONAL / ARCHITECTURAL
----------------------------------------------------
• No animations
• No transforms
• Strong typography
• Glass-quiet
• Recruiter-grade restraint
====================================================
*/

export default function Navbar() {
  const { pathname } = useLocation();

  const linkStyle = (active) => ({
    textDecoration: "none",
    color: active ? "#ffffff" : "rgba(255,255,255,0.65)",
    fontSize: "0.85rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    transition: "color 0.2s ease",
  });

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        height: "72px",
        padding: "0 clamp(24px, 6vw, 96px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "var(--glass-quiet-bg)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--glass-border-quiet)",
      }}
    >
      {/* IDENTITY */}
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#fff",
          fontSize: "0.95rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          fontWeight: 500,
        }}
      >
        Parikshit Ranka
      </Link>

      {/* NAV LINKS */}
      <div
        style={{
          display: "flex",
          gap: "32px",
        }}
      >
        <Link to="/" style={linkStyle(pathname === "/")}>
          Home
        </Link>
        <Link to="/about" style={linkStyle(pathname === "/about")}>
          About
        </Link>
        <Link to="/projects" style={linkStyle(pathname === "/projects")}>
          Projects
        </Link>
        <Link to="/contact" style={linkStyle(pathname === "/contact")}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

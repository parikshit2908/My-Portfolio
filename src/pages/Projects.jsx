import useReveal from "../hooks/useReveal";

export default function Projects() {
  const headerRef = useReveal();
  const p1 = useReveal();
  const p2 = useReveal();
  const p3 = useReveal();
  const p4 = useReveal();

  return (
    <section>
      {/* HEADER */}
      <div
        ref={headerRef}
        className="glass-card glass-float"
        style={{ maxWidth: "1100px", margin: "0 auto 120px" }}
      >
        <small className="meta">Engineering Portfolio</small>

        <h1 style={{ margin: "18px 0 20px" }}>
          Systems I’ve Built
        </h1>

        <p style={{ maxWidth: "70ch" }}>
          Production-grade platforms and systems built with a strong emphasis on
          architecture, scalability, performance, and long-term reliability.
        </p>
      </div>

      {/* MITHARI AGRO AGENCY */}
      <div
        ref={p1}
        className="glass-card glass-float"
        style={{ maxWidth: "1100px", margin: "0 auto 100px" }}
      >
        <small className="meta">Flagship Business Platform</small>
        <h2>Mithari Agro Agency</h2>

        <p style={{ maxWidth: "68ch", marginBottom: "24px" }}>
          A full-scale agricultural commerce platform built for Mithari Agro
          Agency, designed to modernize product discovery, trust, and digital
          presence in the agri-supply ecosystem.
        </p>

        <ul>
          <li>Structured product catalog for agricultural inputs</li>
          <li>Clear information hierarchy for farmers and distributors</li>
          <li>Business-first UI focused on clarity and trust</li>
          <li>Scalable foundation for future e-commerce expansion</li>
        </ul>

        <div style={{ marginTop: "24px", display: "flex", gap: "14px" }}>
          <span className="tag">AgriTech</span>
          <span className="tag">Business Platform</span>
          <span className="tag">Scalability</span>
        </div>
      </div>

      {/* PORTFOLIO PRO */}
      <div
        ref={p2}
        className="glass-card glass-float"
        style={{ maxWidth: "1100px", margin: "0 auto 100px" }}
      >
        <small className="meta">Product Platform</small>
        <h2>Portfolio Pro</h2>

        <p style={{ maxWidth: "68ch", marginBottom: "24px" }}>
          A full-stack portfolio platform with authentication, dynamic templates,
          and a reusable cinematic engine for professionals and creators.
        </p>

        <ul>
          <li>Authentication and role-based access</li>
          <li>Dynamic, reusable portfolio templates</li>
          <li>Cinematic canvas-driven background engine</li>
          <li>Admin-friendly content management</li>
        </ul>

        <div style={{ marginTop: "24px", display: "flex", gap: "14px" }}>
          <span className="tag">Full-Stack</span>
          <span className="tag">Template Engine</span>
          <span className="tag">Cinematic UI</span>
        </div>
      </div>

      {/* CLIENT PROJECT */}
      <div
        ref={p3}
        className="glass-card glass-float"
        style={{ maxWidth: "1100px", margin: "0 auto 100px" }}
      >
        <small className="meta">Client Project</small>
        <h2>Cinematic Portfolio — Mr. Habib ur Rehman</h2>

        <p style={{ maxWidth: "68ch", marginBottom: "24px" }}>
          A bespoke cinematic portfolio engineered for Mr. Habib ur Rehman,
          focused on narrative flow, visual depth, and refined motion systems.
        </p>

        <ul>
          <li>Story-driven page structure</li>
          <li>Custom glassmorphism UI</li>
          <li>Canvas-powered 3D & 4D background effects</li>
        </ul>

        <div style={{ marginTop: "24px", display: "flex", gap: "14px" }}>
          <span className="tag">Client Work</span>
          <span className="tag">Cinematic Design</span>
          <span className="tag">Creative Engineering</span>
        </div>
      </div>

      {/* ZENITH */}
      <div
        ref={p4}
        className="glass-card glass-float"
        style={{ maxWidth: "1100px", margin: "0 auto" }}
      >
        <small className="meta">Real-Time Systems</small>
        <h2>Zenith</h2>

        <p style={{ maxWidth: "68ch", marginBottom: "24px" }}>
          A real-time collaboration platform built around low-latency
          communication, shared presence, and synchronized state management.
        </p>

        <ul>
          <li>WebRTC-based video calling and screen sharing</li>
          <li>Real-time chat and collaborative sketch board</li>
          <li>State synchronization under network constraints</li>
        </ul>

        <div style={{ marginTop: "24px", display: "flex", gap: "14px" }}>
          <span className="tag">WebRTC</span>
          <span className="tag">Distributed Systems</span>
          <span className="tag">Real-Time</span>
        </div>
      </div>
    </section>
  );
}

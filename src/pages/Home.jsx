import { profile } from "../data/profile";
import useReveal from "../hooks/useReveal";

export default function Home() {
  const cardRef = useReveal();

  return (
    <section
      style={{
        minHeight: "calc(100vh - 72px)",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div
        ref={cardRef}
        className="glass-card glass-float"
        style={{
          maxWidth: "980px",
          width: "100%",
        }}
      >
        <small className="meta">Portfolio</small>

        <h1 style={{ margin: "18px 0 24px" }}>
          {profile.name}
        </h1>

        <h3
          style={{
            marginBottom: "36px",
            fontSize: "0.9rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "var(--accent-secondary)",
          }}
        >
          {profile.role}
        </h3>

        <p
          style={{
            maxWidth: "68ch",
            fontSize: "1.15rem",
          }}
        >
          {profile.headline}
        </p>
      </div>
    </section>
  );
}

import { profile } from "../data/profile";
import useReveal from "../hooks/useReveal";

export default function Contact() {
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
          textAlign: "center",
          maxWidth: "860px",
          width: "100%",
        }}
      >
        <h1 style={{ marginBottom: "22px" }}>
          Let’s Work Together
        </h1>

        <p
          style={{
            maxWidth: "64ch",
            margin: "0 auto 46px",
          }}
        >
          I’m interested in meaningful work — systems that last, products that
          respect users, and teams that value clarity over noise.
        </p>

        <a
          href={"mailto:" + profile.email}
          className="primary-link"
        >
          Start a Conversation
        </a>

        <div className="contact-links">
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={"mailto:" + profile.email}>
            Email
          </a>
        </div>
      </div>
    </section>
  );
}

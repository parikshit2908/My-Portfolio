import { philosophy } from "../data/philosophy";
import { journeys } from "../data/journeys";
import useReveal from "../hooks/useReveal";

export default function About() {
  const introRef = useReveal();
  const philosophyRef = useReveal();
  const systemsRef = useReveal();
  const travelRef = useReveal();

  return (
    <section style={{ maxWidth: "1100px", margin: "0 auto" }}>
      <div ref={introRef} className="glass-card glass-float" style={{ marginBottom: "120px" }}>
        <h1 style={{ fontSize: "clamp(3rem,5vw,4.6rem)", marginBottom: "28px" }}>
          About Me
        </h1>
        <p style={{ maxWidth: "65ch", lineHeight: 1.9, opacity: 0.92 }}>
          I build software systems with long-term intent, shaped by real-world
          experience, deep travel, and systems-first thinking.
        </p>
      </div>

      <div ref={philosophyRef} className="glass-card glass-float" style={{ marginBottom: "120px" }}>
        <h2 style={{ marginBottom: "28px" }}>
          {philosophy.approach.title}
        </h2>
        {philosophy.approach.points.map((p, i) => (
          <p key={i} style={{ marginBottom: "18px", lineHeight: 1.9 }}>
            {p}
          </p>
        ))}
      </div>

      <div ref={systemsRef} className="glass-card glass-float" style={{ marginBottom: "120px" }}>
        <h2 style={{ marginBottom: "24px" }}>
          {philosophy.systemsOverScreens.title}
        </h2>
        <p style={{ marginBottom: "24px", lineHeight: 1.9 }}>
          {philosophy.systemsOverScreens.description}
        </p>
        <ul style={{ paddingLeft: "18px" }}>
          {philosophy.systemsOverScreens.examples.map((e, i) => (
            <li key={i} style={{ marginBottom: "10px" }}>{e}</li>
          ))}
        </ul>
      </div>

      <div ref={travelRef} className="glass-card glass-float">
        <h2 style={{ marginBottom: "28px" }}>
          Travel & Field Experience
        </h2>
        <p style={{ marginBottom: "40px", lineHeight: 1.9 }}>
          {journeys.overview}
        </p>

        {journeys.regions.map((r, i) => (
          <div key={i} style={{ marginBottom: "28px" }}>
            <h3 style={{ marginBottom: "10px" }}>{r.region}</h3>
            <p style={{ opacity: 0.85 }}>{r.places.join(" • ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

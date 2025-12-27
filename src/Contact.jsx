import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-left">
        <h1 className="contact-title">Contact</h1>

        <p className="contact-intro">
          I’m currently open to full-time software development roles and meaningful projects.
          If you’d like to discuss an opportunity, collaborate, or just have a technical
          conversation, feel free to reach out.
        </p>

        <a
          href="mailto:parikshit.ranka2908@gmail.com"
          className="contact-cta"
        >
          Let’s Work Together →
        </a>

        <div className="contact-cards">
          <a href="mailto:parikshit.ranka2908@gmail.com" className="contact-card">
            <h3>Email</h3>
            <p>parikshit.ranka2908@gmail.com</p>
          </a>

          <a
            href="https://github.com/parikshit2908"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <h3>GitHub</h3>
            <p>github.com/parikshit2908</p>
          </a>

          <a
            href="https://www.linkedin.com/in/parikshit-ranka"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <h3>LinkedIn</h3>
            <p>linkedin.com/in/parikshit-ranka</p>
          </a>
        </div>
      </div>

      <div className="contact-right">
        <div className="tech-orbit">
          React · Java · Firebase · Supabase · WebRTC
        </div>
      </div>
    </section>
  );
};

export default Contact;

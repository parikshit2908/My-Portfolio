import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-left">
          <span className="footer-name">{profile.name}</span>
          <span className="footer-copy">
            © {new Date().getFullYear()} · Built with intention
          </span>
        </div>

        <div className="footer-links">
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
    </footer>
  );
}

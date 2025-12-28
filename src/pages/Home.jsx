import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Motion3D from "../components/Motion3D";
import Magnetic from "../components/Magnetic";
import PageTransition from "../components/PageTransition";
import useIsMobile from "../hooks/useIsMobile";
import "./Home.css";

const Home = () => {
  const isMobile = useIsMobile();

  return (
    <PageTransition>
      <motion.section className="home section">
        <div className="container hero-3d">
          <Motion3D>
            <div className="hero-card">
              <h1>
                Hi, I’m <span>Parikshit</span>
                <br />
                Full Stack Developer
              </h1>

              <p>
                I build modern, performance-focused web applications using React,
                JavaScript, and backend integrations, with strong attention to UI,
                animation, and real-world usability.
              </p>

              <div className="hero-buttons">
                <Magnetic disabled={isMobile}>
                  <Link to="/projects" className="btn btn-primary">
                    View Projects
                  </Link>
                </Magnetic>

                <Magnetic disabled={isMobile}>
                  <Link to="/contact" className="btn btn-secondary">
                    Contact Me
                  </Link>
                </Magnetic>
              </div>
            </div>
          </Motion3D>
        </div>
      </motion.section>
    </PageTransition>
  );
};

export default Home;

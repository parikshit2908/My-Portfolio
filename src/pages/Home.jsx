import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Motion3D from "../components/Motion3D";
import Magnetic from "../components/Magnetic";
import PageTransition from "../components/PageTransition";
import useIsTouch from "../hooks/useIsTouch";
import "./Home.css";

const Home = () => {
  const isTouch = useIsTouch();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const bgX = useTransform(mouseX, [-100, 100], [-30, 30]);
  const bgY = useTransform(mouseY, [-100, 100], [-30, 30]);

  return (
    <PageTransition>
      <motion.section
        className="home section"
        style={
          isTouch
            ? {}
            : {
                backgroundPositionX: bgX,
                backgroundPositionY: bgY,
              }
        }
        onMouseMove={
          isTouch
            ? undefined
            : (e) => {
                mouseX.set(e.clientX - window.innerWidth / 2);
                mouseY.set(e.clientY - window.innerHeight / 2);
              }
        }
      >
        <div className="container hero-3d">
          {!isTouch ? (
            <Motion3D>
              <div className="hero-card">
                <h1>
                  Hi, I’m <span>Parikshit</span>
                  <br />
                  Full Stack Developer
                </h1>

                <p>
                  I build modern, performance-focused web applications using
                  React, JavaScript, and backend integrations, with strong
                  attention to UI, animation, and real-world usability.
                </p>

                <div className="hero-buttons">
                  <Magnetic>
                    <Link to="/projects" className="btn btn-primary">
                      View Projects
                    </Link>
                  </Magnetic>

                  <Magnetic>
                    <Link to="/contact" className="btn btn-secondary">
                      Contact Me
                    </Link>
                  </Magnetic>
                </div>
              </div>
            </Motion3D>
          ) : (
            /* MOBILE SAFE FALLBACK (NO 3D / NO MOUSE) */
            <div className="hero-card">
              <h1>
                Hi, I’m <span>Parikshit</span>
                <br />
                Full Stack Developer
              </h1>

              <p>
                I build modern, performance-focused web applications using
                React, JavaScript, and backend integrations, with strong
                attention to UI, animation, and real-world usability.
              </p>

              <div className="hero-buttons">
                <Link to="/projects" className="btn btn-primary">
                  View Projects
                </Link>

                <Link to="/contact" className="btn btn-secondary">
                  Contact Me
                </Link>
              </div>
            </div>
          )}
        </div>
      </motion.section>
    </PageTransition>
  );
};

export default Home;

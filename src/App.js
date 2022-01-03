import React,{useState,useEffect} from 'react'
import NavBars from './components/navbar/navbars';
import Carousal from './components/carousal/carousal';
import TitleMessage from './components/titlemessage/titlemessage';
import Skills from './pages/skills/skills';
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import About from './pages/about/about';
import Experience from './pages/experience/experience';
import Projects from './pages/projects/projects';
import Contacts from './pages/contacts/contacts';
import FooterPanel from './components/footer/footer';

const App = () => {
  const ApplyParticlesAfterWindowSize = 900;
  const [width, setWidth] = useState(window.innerWidth);
  const [shouldApplyparticles, setShouldApplyParticles] = useState(
    width >= ApplyParticlesAfterWindowSize
  );

  useEffect(() => {
    const handleApplyParticle = () => {
      setWidth(window.innerWidth);
      setShouldApplyParticles(width >= ApplyParticlesAfterWindowSize);
    };
    window.addEventListener("resize", handleApplyParticle);

    return () => {
      window.removeEventListener("resize", handleApplyParticle);
    };
  }, [shouldApplyparticles, width]);

    return (
        <div className="App" style={{ position: "relative" }}>
         <NavBars/>
         <Carousal shouldApplyparticles={shouldApplyparticles} />
         <TitleMessage />
         {/* {shouldApplyparticles ? (
        <Particles
          className="particles particles-box"
          params={particlesOptions}
        />
      ) : null} */}
      <div id="about">
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <div id="skills">
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <Skills />
          </Slide>
        </Container>
      </div>
      <div id="experience">
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <Experience />
          </Fade>
        </Container>
      </div>
      <div id="projects">
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <Projects />
          </Fade>
        </Container>
      </div>
      <div id="contact">
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <Contacts/>
          </Fade>
        </Container>
      </div>
      <hr />
      <FooterPanel />
         </div>
    
  )
}

export default App

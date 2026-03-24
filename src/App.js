import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Nav";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Projects from './Projects';
import Resume from './Resume';
import GraphicDesign from './GraphicDesign';
import { animateScroll as scroll } from "react-scroll";

function App() {
  useEffect(() => {
    const canvas = document.getElementById("waveCanvas");
    const ctx = canvas.getContext("2d");

    const scale = window.devicePixelRatio;
    canvas.width = 800 * scale;
    canvas.height = 400 * scale;
    ctx.scale(scale, scale);

    let lines = [];
    const lineCount = 4;
    const waveHeight = 50;
    const waveWidth = 1000;
    const speed = 0.003;
    let animationProgress = 1;

    for (let i = 0; i < lineCount; i++) {
      lines.push({
        frequency: 0.015 + i * 0.005,
        amplitude: waveHeight - i * 2.5,
        phase: (i * Math.PI) / 200,
        verticalOffset: i * 70,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      animationProgress += speed;

      lines.forEach((line, index) => {
        ctx.beginPath();
        ctx.lineWidth = 0.5;
        ctx.setLineDash(animationProgress < 1 ? [8, 4] : []);
        ctx.strokeStyle = `rgba(255, 255, 255, 0.3)`;

        for (let x = 0; x <= waveWidth; x += 2) {
          const yOffset = line.verticalOffset * (x / waveWidth);
          const y =
            canvas.height / 2 / scale +
            yOffset +
            Math.sin(x * line.frequency + animationProgress + line.phase) *
              line.amplitude;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }

        ctx.stroke();

        const dotX = waveWidth * ((animationProgress + line.phase) % 1);
        const yOffset = line.verticalOffset * (dotX / waveWidth);
        const dotY =
          canvas.height / 2 / scale +
          yOffset +
          Math.sin(dotX * line.frequency + animationProgress + line.phase) *
            line.amplitude;

        ctx.beginPath();
        ctx.arc(dotX, dotY, 1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 0, 0, 100)`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  const handleScrollClick = () => {
    scroll.scrollTo(window.innerHeight, {
      duration: 800,
      smooth: "easeInOutQuad",
    });
  };
  

  return (
    <div>
      <Nav />
      <div className="App" id="home">
        <canvas id="waveCanvas" width="800" height="400"></canvas>
        <header className="App-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1 id="name">Nicholas</h1>
                <p className="d-md-block d-none job-names">
                  Full Stack Developer | Graphic Designer
                </p>
              </div>
            </div>
          </div>
        </header>
        <div className="additional-info-container">
          <div className="row">
            <div className="col-lg-2 text-center align-content-center">
              <p className="get-connected">Get Connected</p>
              <div className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nicholas-lam-1950b9123/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="mailto:nicholaslamzt@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope />
                </a>
                <a
                  href="https://github.com/NicLam1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
            <div className="col-lg-8">
              <p className="additional-info">
                Information systems student specialising in product development.
                Skills with Full Stack Development, Graphic Design, and Marketing.
              </p>
            </div>
            <div className="col-lg-2 align-content-center button-container">
              <a href="mailto:nicholaslamzt@gmail.com" className="contact-button" style={{textDecoration: "none"}}>
                Contact Me
              </a>
            </div>
          </div>
        </div>
        <div className="scroll-arrow" onClick={handleScrollClick}>
          <span className="arrow">↓</span>
        </div>
      </div>

      <Projects id="projects"/>
      <GraphicDesign id="graphic-design"/>
      <Resume id="resume"/>

    </div>
  );
}

export default App;

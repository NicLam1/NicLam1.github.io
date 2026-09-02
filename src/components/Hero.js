import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import WaveCanvas from "./WaveCanvas";
import "./Hero.css";

const ROLES = ["Full Stack Developer", "Graphic Designer", "Product Builder"];
const ROLE_INTERVAL_MS = 2800;

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const reducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return undefined;

    const id = window.setInterval(
      () => setRoleIndex((i) => (i + 1) % ROLES.length),
      ROLE_INTERVAL_MS
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="home" className="hero">
      <WaveCanvas />
      <div className="hero-dots" aria-hidden="true" />

      <div className="hero-content">
        <p className="hero-eyebrow">Hello, I&apos;m</p>
        <h1 className="hero-name">
          Nicholas <span className="hero-name-accent">Lam</span>
        </h1>
        <p className="hero-role" aria-live="polite">
          <span key={roleIndex} className="hero-role-text">
            {ROLES[roleIndex]}
          </span>
        </p>
      </div>

      <div className="hero-bottom">
        <p className="hero-blurb">
          Information systems student specialising in product development —
          building things across full stack development, graphic design, and
          marketing.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View my work
          </a>
          <a className="button button-ghost" href="mailto:nicholaslamzt@gmail.com">
            Contact me
          </a>
          <div className="hero-socials">
            <a
              href="https://www.linkedin.com/in/nicholas-lam-1950b9123/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/NicLam1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a href="mailto:nicholaslamzt@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <a className="hero-scroll-cue" href="#projects" aria-label="Scroll to projects">
        <span className="hero-scroll-arrow" aria-hidden="true">
          ↓
        </span>
      </a>
    </section>
  );
}

export default Hero;

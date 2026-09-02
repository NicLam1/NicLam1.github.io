import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <h2 className="footer-cta">
          Let&apos;s get it done.
        </h2>
        <a className="footer-email" href="mailto:nicholaslamzt@gmail.com">
          nicholaslamzt@gmail.com
        </a>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Nicholas Lam
          </p>
          <div className="footer-socials">
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
    </footer>
  );
}

export default Footer;

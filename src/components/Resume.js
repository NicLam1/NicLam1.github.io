import React from "react";
import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import useReveal from "../hooks/useReveal";
import resumeImage from "../images/resume/Nicholas_Lam_Resume.jpg";
import resumePDF from "../images/resume/Nicholas_Lam_Resume.pdf";
import "./Resume.css";

function Resume() {
  const revealRef = useReveal();

  return (
    <section id="resume" className="section resume" ref={revealRef}>
      <div className="section-inner">
        <div className="section-head reveal">
          <span className="section-index">03</span>
          <div>
            <h2 className="section-title">Resume</h2>
            <p className="section-sub">
              The one-page version — grab the PDF or view it in your browser.
            </p>
          </div>
        </div>

        <div className="resume-layout reveal">
          <a
            className="resume-preview"
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open resume PDF in a new tab"
          >
            <img src={resumeImage} alt="Preview of Nicholas Lam's resume" />
          </a>

          <div className="resume-actions">
            <a
              className="button button-primary"
              href={resumePDF}
              download="Nicholas_Lam_Resume.pdf"
            >
              <FaDownload aria-hidden="true" />
              Download PDF
            </a>
            <a
              className="button button-ghost"
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt aria-hidden="true" />
              Open in browser
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;

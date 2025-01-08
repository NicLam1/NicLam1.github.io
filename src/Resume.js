import React from 'react';
import './resume.css'; // Import the CSS file
import resumeImage from './images/resume/NicholasLam_Resume.png'; // Ensure this path is correct
import resumePDF from './images/resume/NicholasLam_Resume.pdf';

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <div className="container w-lg-50">
      <h2 className="section-title">Resume</h2>
      <div className="resume-content">
        <img src={resumeImage} alt="Resume" className="resume-image img-fluid" />
        <a href={resumePDF} download="NicholasLam_Resume.pdf" className="download-button">
          Download
        </a>
      </div>
      </div>
    </section>
  );
};

export default Resume; 
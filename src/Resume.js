import React from 'react';
import './resume.css'; // Import the CSS file
import resumeImage from './images/resume/Nicholas_Lam_Resume.jpg'; // Ensure this path is correct
import resumePDF from './images/resume/Nicholas_Lam_Resume.pdf';

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <div className="container">
      <h2 className="section-title">Resume</h2>
      <div className="resume-content">
        <img src={resumeImage} alt="Resume" className="resume-image img-fluid" />
        
      </div>
      <a href={resumePDF} download="Nicholas_Lam_Resume.pdf" className="download-button">
          Download
        </a>
      </div>
    </section>
  );
};

export default Resume; 
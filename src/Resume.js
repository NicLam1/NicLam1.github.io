import React from 'react';
import './resume.css'; // Import the CSS file
import resumeImage1 from './images/resume/Nicholas_Lam_Resume_Page_1.jpg'; // Ensure this path is correct
import resumeImage2 from './images/resume/Nicholas_Lam_Resume_Page_2.jpg'; // Ensure this path is correct
import resumePDF from './images/resume/Nicholas_Lam_Resume.pdf';

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <div className="container">
      <h2 className="section-title">Resume</h2>
      <div className="resume-content">
        <img src={resumeImage1} alt="Resume" className="resume-image img-fluid" />
        <img src={resumeImage2} alt="Resume" className="resume-image img-fluid" />
        <a href={resumePDF} download="Nicholas_Lam_Resume.pdf" className="download-button">
          Download
        </a>
      </div>
      </div>
    </section>
  );
};

export default Resume; 
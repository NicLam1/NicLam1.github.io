import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import projects from './projectsList.js';
import './projects.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Projects() {
  const handleCardClick = (link) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div id="projects" className="container-fluid section-gutter">
      <div className="row">
        <div className="">
          <h2 className="section-title">Projects</h2>
          <div className="row">
            {projects.map((project) => (
              <div key={project.id} className="col-xl-6 mb-4">
                <div className="project-item">
                  <div className="project-content" onClick={() => handleCardClick(project.link)}>
                    <div className="project-header">
                      <div className="project-meta">
                        <span className="project-year">{project.year}</span>
                        <div className="project-categories">
                          {project.categories.map((category, index) => (
                            <span key={index} className="category-tag">
                              {category}
                            </span>
                          ))}
                        </div>
                      </div>
                      <h3 className="project-title">{project.title}</h3>
                    </div>
                    <div className="project-stats">
                      {project.stats.map((stat, index) => (
                        <div key={index} className="stat-box">
                          <div className="stat-value">{stat.value}</div>
                          <div className="stat-description">{stat.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="project-carousel">
                    <Carousel showThumbs={false} dynamicHeight={false} infiniteLoop={true} autoPlay={true}>
                      {project.images.map((image, index) => (
                        <div key={index} className="carousel-slide">
                          <img src={image} alt={`Project ${index}`} className="carousel-image" />
                        </div>
                      ))}
                    </Carousel>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default Projects; 
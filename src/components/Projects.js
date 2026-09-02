import React from "react";
import { FaArrowRight } from "react-icons/fa";
import projects from "../data/projects";
import Carousel from "./Carousel";
import useReveal from "../hooks/useReveal";
import "./Projects.css";

function Projects() {
  const revealRef = useReveal();

  return (
    <section id="projects" className="section projects" ref={revealRef}>
      <div className="section-inner">
        <div className="section-head reveal">
          <span className="section-index">01</span>
          <div>
            <h2 className="section-title">Projects</h2>
            <p className="section-sub">
              Selected work across web apps, microservices, and tooling.
            </p>
          </div>
        </div>

        <div className="project-list">
          {projects.map((project, i) => (
            <article key={project.id} className="project reveal">
              <div className="project-media">
                <Carousel images={project.images} label={project.title} />
              </div>

              <div className="project-info">
                <span className="project-number" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="project-meta">
                  <span className="project-period">{project.period}</span>
                  <span className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="project-stack" aria-label="Technologies used">
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                {project.link && (
                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.linkLabel}
                    <FaArrowRight aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

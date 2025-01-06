import React, { useState } from "react";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faProjectDiagram,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nk-navbar">
      <div className="nk-navbar-container" aria-expanded={isOpen}>
        <button className="nk-navbar-toggler" onClick={toggleNavbar}>
          <span className="nk-navbar-toggler-icon">{isOpen ? "×" : "☰"}</span>
        </button>
        <div className={`nk-navbar-collapse ${isOpen ? "open" : ""}`}>
          <ul className="nk-navbar-list">
            <li className="nk-navbar-item">
              <Link
                to="home"
                className="nk-navbar-link"
                smooth={true}
                duration={800}
              >
                <FontAwesomeIcon icon={faHome} />
                <span className="nk-navbar-link-text">Home</span>
              </Link>
            </li>
            <li className="nk-navbar-item">
              <Link
                to="projects"
                className="nk-navbar-link"
                smooth={true}
                duration={800}
              >
                <FontAwesomeIcon icon={faProjectDiagram} />
                <span className="nk-navbar-link-text">Projects</span>
              </Link>
            </li>
            <li className="nk-navbar-item">
              <a href="mailto:nicholaslamzt@gmail.com" className="nk-navbar-link">
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="nk-navbar-link-text">Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

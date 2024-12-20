import React, { useState } from "react";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faProjectDiagram,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

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
              <a href="#home" className="nk-navbar-link">
                <FontAwesomeIcon icon={faHome} style={{ marginRight: "0px" }} />
                <span className="nk-navbar-link-text">Home</span>
              </a>
            </li>
            <li className="nk-navbar-item">
              <a href="#about" className="nk-navbar-link">
                <FontAwesomeIcon icon={faUser} style={{ marginRight: "0px" }} />
                <span className="nk-navbar-link-text">About</span>
              </a>
            </li>
            <li className="nk-navbar-item">
              <a href="#projects" className="nk-navbar-link">
                <FontAwesomeIcon
                  icon={faProjectDiagram}
                  style={{ marginRight: "0px" }}
                />
                <span className="nk-navbar-link-text">Projects</span>
              </a>
            </li>
            <li className="nk-navbar-item">
              <a href="#contact" className="nk-navbar-link">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ marginRight: "0px" }}
                />
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

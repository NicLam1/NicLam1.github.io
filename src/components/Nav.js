import React, { useEffect, useState } from "react";
import {
  FaHome,
  FaLayerGroup,
  FaPaintBrush,
  FaFileAlt,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./Nav.css";

const SECTIONS = [
  { id: "home", label: "Home", icon: <FaHome /> },
  { id: "projects", label: "Projects", icon: <FaLayerGroup /> },
  { id: "design", label: "Design", icon: <FaPaintBrush /> },
  { id: "resume", label: "Resume", icon: <FaFileAlt /> },
];

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      // Trigger when a section's top band crosses the middle of the screen.
      { rootMargin: "-35% 0px -60% 0px" }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const close = () => setIsOpen(false);

  return (
    <header className="nav-wrap">
      <nav className={`nav ${isOpen ? "nav-open" : ""}`} aria-label="Main">
        <a className="nav-brand" href="#home" onClick={close}>
          NL<span className="nav-brand-dot">.</span>
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className="nav-list">
          {SECTIONS.map(({ id, label, icon }) => (
            <li key={id}>
              <a
                className={`nav-link ${active === id ? "is-active" : ""}`}
                href={`#${id}`}
                onClick={close}
              >
                <span className="nav-link-icon" aria-hidden="true">
                  {icon}
                </span>
                <span className="nav-link-text">{label}</span>
              </a>
            </li>
          ))}
          <li>
            <a
              className="nav-link nav-link-cta"
              href="mailto:nicholaslamzt@gmail.com"
              onClick={close}
            >
              <span className="nav-link-icon" aria-hidden="true">
                <FaEnvelope />
              </span>
              <span className="nav-link-text">Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

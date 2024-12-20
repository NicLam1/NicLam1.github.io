import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Content.css";
import { FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

function Content() {
  return (
    <main id="content" className="App-content">
      <div className="container">
        <div className="row">
          <div className="col">
            <section className="content-section">
              <FaUser className="icon" />
              <h2>About Me</h2>
              <p>
                Information systems student specialising in product development.
                Skills with web development, graphic design, and marketing.
              </p>
            </section>
            <section className="content-section">
              <FaProjectDiagram className="icon" />
              <h2>Projects</h2>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </section>
            <section className="content-section">
              <FaEnvelope className="icon" />
              <h2>Contact</h2>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Content;

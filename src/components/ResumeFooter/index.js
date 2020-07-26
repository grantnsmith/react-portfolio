import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import resumePDF from "../../assets/documents/Resume.pdf";

function ResumeFooter() {
  return (
    <Fragment>
      <br />
      <div>
        <h2 className="footer-header">Want to learn more?</h2>
        <ul class="contacts">
          <li>
            <Link to="/portfolio">
              <button class="btn btn-secondary contact-btn">
                <i class="fas fa-chevron-circle-right" /> Check out my Projects
                Portfolio
              </button>
            </Link>{" "}
            <a
              href="https://github.com/grantnsmith"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-secondary contact-btn"
            >
              <i class="fab fa-github-square" /> See my GitHub Repository
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/grantnsmith/"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-secondary contact-btn"
            >
              <i class="fab fa-linkedin" /> Connect with me on LinkedIn
            </a>{" "}
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-secondary contact-btn"
            >
              <i class="far fa-file-alt"></i> Formal Resume
            </a>{" "}
            <Link to="/contact">
              {" "}
              <button class="btn btn-secondary contact-btn">
                <i class="far fa-envelope" /> Contact Me!
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </Fragment>
  );
}

export default ResumeFooter;

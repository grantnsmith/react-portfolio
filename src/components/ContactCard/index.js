import React from "react";
import "./style.css";
import resumePDF from "../../assets/documents/Resume.pdf";

function ContactCard() {
  return (
    <div>
      <h1 className="contacts-title">My Details</h1>
      <p>
        <ul className="contacts">
          <li>
            <a
              href="mailto:grantnsmith@gmail.com?Subject=Requesting%20More%20Information"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary contact-btn animate__animated animate__fadeInRight"
            >
              <i className="far fa-envelope"></i> Email Me
            </a>
          </li>
          <li>
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary contact-btn  animate__animated animate__fadeInRight"
            >
              <i className="far fa-file-alt"></i> My Resume
            </a>
          </li>
          <li>
            <a
              href="https://github.com/grantnsmith"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary contact-btn animate__animated animate__fadeInRight"
            >
              <i className="fab fa-github-square"></i> GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/grantnsmith/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary contact-btn  animate__animated animate__fadeInRight"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/grantnsmith/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary contact-btn  animate__animated animate__fadeInRight"
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/grant.smith.3532507/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary contact-btn  animate__animated animate__fadeInRight"
            >
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
          </li>
        </ul>
      </p>
    </div>
  );
}

export default ContactCard;

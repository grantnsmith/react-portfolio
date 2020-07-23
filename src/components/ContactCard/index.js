import React from "react";
import "./style.css";

function ContactCard() {
  return (
    <div>
      <h1 className="contacts-title">Contact Me</h1>
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
              href="https://github.com/grantnsmith"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary contact-btn animate__animated animate__fadeInRight"
            >
              <i className="fab fa-github-square"></i> See my GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/grantnsmith/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary contact-btn  animate__animated animate__fadeInRight"
            >
              <i className="fab fa-linkedin"></i> Message me on LinkedIn
            </a>
          </li>
        </ul>
      </p>
    </div>
  );
}

export default ContactCard;

import React from "react";
import "./style.css";

function PortfolioCard(props) {
  return (
    <li className="media resume-block ">
      <img
        src={props.img}
        className="align-self-start mr-3 rounded "
        alt={props.title}
      />
      <div className="media-body portfolio-body">
        <p className="mt-0 mb-1 portfolio-title">{props.description} </p>

        <div className="technology-list">
          <ul>
            <lh style={{ textDecoration: "underline" }}>Technologies Used</lh>
            {props.technology.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
        <a
          className="portfolio-link btn btn-secondary contact-btn"
          href={props.deployed}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="far fa-arrow-alt-circle-right"></i> Check out the
          website.
        </a>
        <br />
        <a
          className="portfolio-link btn btn-secondary contact-btn"
          href={props.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="far fa-arrow-alt-circle-right"></i> Check out the code
          on Github.
        </a>
      </div>
    </li>
  );
}

export default PortfolioCard;

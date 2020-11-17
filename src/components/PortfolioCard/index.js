import React from "react";
import "./style.css";

function PortfolioCard(props) {
  return (
    <li className="resume-block ">
      <div className="row">
        <div className="col-auto col-sm mx-auto">
          <img
            src={props.img}
            className="align-self-start mr-3 rounded img-fluid portfolio-img"
            alt={props.title}
          />
        </div>
        <div className="col-auto col-sm mx-auto">
          <div className="portfolio-body">
            <p className="mt-0 mb-1 portfolio-title">{props.description} </p>

            <div className="technology-list">
              <ul>
                <lh style={{ textDecoration: "underline" }}>
                  Technologies Used
                </lh>
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
              <i className="far fa-arrow-alt-circle-right"></i> The application
            </a>
            <br />
            <a
              className="portfolio-link btn btn-secondary contact-btn"
              href={props.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="far fa-arrow-alt-circle-right"></i> Github Repo
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}

export default PortfolioCard;

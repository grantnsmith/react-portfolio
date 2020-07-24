import React from "react";
import "./style.css";

function PortfolioCard() {
  return (
    <li className="media resume-block">
      <img
        src={require("../../assets/images/uplift.png")}
        className="align-self-start mr-3 rounded"
        alt="Uplift"
      />
      <div className="media-body portfolio-body">
        <h5 className="mt-0 mb-1 portfolio-title">
          Uplift is a resource for allies of the black community who are looking
          to support black-owned businesses.{" "}
        </h5>
        <br />

        <div className="technology-list">
          <ul>
            <lh style={{ textDecoration: "underline" }}>Technologies Used</lh>
            <li>Jquery</li>
            <li>Bootstrap</li>
            <li>Node.js</li>
            <li>MySQL Database (JawsDB)</li>
            <li>Travis CI</li>
            <li>ES Lint</li>
            <li>SociableKit</li>
            <li>Puppeteer</li>
            <li>Passport Authentication</li>
            <li>Handlebars Templating</li>
            <li>Deployed on Heroku</li>
          </ul>
        </div>
        <br />
        <a
          href="https://project-uplift.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="far fa-arrow-alt-circle-right"></i> Check out the website.
        </a>
        <br />
        <a
          href="hhttps://github.com/grantnsmith/project-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="far fa-arrow-alt-circle-right"></i> Check out the code on
          Github.
        </a>
      </div>
    </li>
  );
}

export default PortfolioCard;

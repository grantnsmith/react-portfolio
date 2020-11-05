import React from "react";
import "./style.css";

function PortfolioContainer(props) {
  return (
    <div className="animate__animated animate__fadeInRight">
      <h1 className="portfolio-header">Projects</h1>
      <div>
        <p className="portfolio-intro">
          In 2020, I took a 6-month full-stack web development course through
          the University of Washington and completed the course with an A+
          average. I'm proficient in front and backend technologies including:
          Javascript, React.js, HTML, CSS, jQuery, Bootstrap, Materialize, UI
          Kit, Express.js, Node.js, MongoDB, Mongoose, MySQL, Sequelize,
          Handlebars, ESLint, Travis CI, third-party API's, bash, Git, Heroku
          deployment and more.
        </p>
        <p className="portfolio-intro">
          Below are some of the projects I built during and after the bootcamp.
          This site itself is a single-page application I built with React.{" "}
          <a
            className="portfolio-header-link"
            href="https://github.com/grantnsmith/react-portfolio"
          >
            Check out the code here.
          </a>
        </p>
      </div>
      <ul className="list-unstyled">{props.children}</ul>
    </div>
  );
}

export default PortfolioContainer;

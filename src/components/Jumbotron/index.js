import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid animate__animated animate__fadeInRight">
      <div className="container">
        <h1 className="display-4 main-title animate__animated animate__fadeInLeft">
          Hello, I'm Grant
        </h1>
        <br></br>
        <p className="lead jumbotron-sub-title animate__animated animate__fadeInLeft">
          <i className="fas fa-chevron-circle-right"></i> Front-end web
          developer
        </p>
        <p className="lead jumbotron-sub-title animate__animated animate__fadeInLeft">
          <i className="fas fa-chevron-circle-right"></i> Senior IT Support
          Engineer
        </p>
        <p className="lead jumbotron-sub-title animate__animated animate__fadeInLeft">
          <i className="fas fa-chevron-circle-right"></i> Former rock climbing
          guide
        </p>
      </div>
    </div>
  );
}

export default Jumbotron;

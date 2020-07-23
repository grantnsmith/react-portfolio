import React from "react";
import "./style.css";

function ResumeContainer(props) {
  return (
    <div>
      <h1 className="resume-header">
        <i className="fas fa-chevron-right resume-arrow"></i> What I've been
        working on <i className="fas fa-chevron-left resume-arrow"></i>
      </h1>
      <ul className="list-unstyled">{props.children}</ul>
    </div>
  );
}

export default ResumeContainer;

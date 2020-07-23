import React from "react";
import "./style.css";

function ResumeContainer() {
  return (
    <div>
      <h1 class="resume-header">
        <i class="fas fa-chevron-right resume-arrow"></i> What I've been working
        on <i class="fas fa-chevron-left resume-arrow"></i>
      </h1>
      <ul class="list-unstyled"></ul>
    </div>
  );
}

export default ResumeContainer;

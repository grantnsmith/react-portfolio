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
      <li class="media resume-block">
        <img
          src={"images/profile_img.JPG"}
          class="align-self-start mr-3 rounded"
          alt="Grant Smith"
        />
        <div class="media-body resume-body">
          <h5 class="mt-0 mb-1 resume-title">
            Other Experiences, Education, and Adventures
          </h5>
          <br />
          <p class="resume-subtitle">
            <i class="fas fa-chevron-circle-right"></i> Bachelors of Arts in
            Social Science, Azusa Pacific University - 2010
          </p>
          <p class="resume-subtitle">
            <i class="fas fa-chevron-circle-right"></i> Teacher at the
            International School of Tegucigalpa, Honduras - 2011
          </p>
          <p class="resume-subtitle">
            <i class="fas fa-chevron-circle-right"></i> American Mountain Guides
            Certified Single Pitch Instructor - 2016
          </p>
          <p class="resume-subtitle">
            <i class="fas fa-chevron-circle-right"></i> Outward Bound California
            Instructor - 2017
          </p>
        </div>
      </li>
    </div>
  );
}

export default ResumeContainer;

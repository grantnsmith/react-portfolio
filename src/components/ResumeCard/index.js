import React, { Fragment } from "react";
import "./style.css";

function ResumeCard(props) {
  return (
    <Fragment>
      <li className="media resume-block">
        <img
          src={props.img}
          className="align-self-start mr-3 rounded"
          alt={props.altTitle}
        />
        <div className="media-body resume-body">
          <h5 className="mt-0 mb-1 resume-title">{props.title}</h5>
          <p className="resume-subtitle">{props.subtitle}</p>
          <p className="resume-text-body">{props.body}</p>
        </div>
      </li>
    </Fragment>
  );
}

export default ResumeCard;

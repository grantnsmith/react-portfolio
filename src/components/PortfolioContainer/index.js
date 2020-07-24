import React from "react";
import "./style.css";

function PortfolioContainer(props) {
  return (
    <div>
      <h1 className="portfolio-header">Projects Portfolio </h1>
      <ul className="list-unstyled">{props.children}</ul>
    </div>
  );
}

export default PortfolioContainer;

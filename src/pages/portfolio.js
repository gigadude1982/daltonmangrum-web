import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="page-container">
      <div className="page-header reveal">
        <h1 className="page-title">Portfolio</h1>
        <p className="page-description">Work, projects, and the dev shop</p>
      </div>
      <a
        href="https://www.gigadude.com"
        className="card portfolio-feature reveal reveal-delay-1"
        target="_blank"
        rel="noreferrer"
      >
        <span className="coming-soon-badge">&#9889; gigadude</span>
        <h2 className="portfolio-feature-title">Visit gigadude.com</h2>
        <p className="portfolio-feature-body">
          I showcase my work over at gigadude &mdash; the home of my
          independent development studio. Case studies, experiments, and
          the projects behind the (soon-to-be) LLC live there.
        </p>
        <span className="portfolio-feature-cta">
          Explore my work <FaArrowRight aria-hidden="true" />
        </span>
      </a>
    </div>
  );
};

export default Portfolio;

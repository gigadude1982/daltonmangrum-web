import React from "react";

const Portfolio = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Portfolio</h1>
        <p className="page-description">Work and projects</p>
      </div>
      <div className="card coming-soon-card">
        <span className="coming-soon-badge">&#128679; In Progress</span>
        <h2 className="coming-soon-title">Portfolio coming soon</h2>
        <p className="coming-soon-body">
          I'm currently building out this section. Check back soon.
        </p>
      </div>
    </div>
  );
};

export default Portfolio;

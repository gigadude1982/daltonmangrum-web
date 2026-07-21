import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero">
      <span className="hero-eyebrow">&#10022; Personal Website</span>
      <h1 className="hero-title">Hey, I'm Dalton</h1>
      <p className="hero-subtitle">
        Software engineer, dog dad, and occasional wizard from Akron, Ohio.
      </p>
      <div className="hero-actions">
        <Link to="/about" className="btn-primary">About me</Link>
        <Link to="/contact" className="btn-secondary">Get in touch</Link>
      </div>
    </div>
  );
};

export default Home;

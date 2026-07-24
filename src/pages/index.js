import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero">
      <span className="hero-eyebrow reveal">&#10022; Personal Website</span>
      <h1 className="hero-title reveal reveal-delay-1">
        <span className="hero-title-shimmer">Hey, I'm Dalton</span>
      </h1>
      <p className="hero-subtitle reveal reveal-delay-2">
        Software engineer, dog dad, and occasional wizard from Akron, Ohio.
      </p>
      <div className="hero-actions reveal reveal-delay-3">
        <Link to="/about" className="btn-primary">About me</Link>
        <Link to="/contact" className="btn-secondary">Get in touch</Link>
      </div>
    </div>
  );
};

export default Home;

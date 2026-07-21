import React from "react";
import mangrum_family_low_res from "../images/mangrum_family_low_res.jpg";

const About = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">About</h1>
        <p className="page-description">A little about me and my family</p>
      </div>
      <div className="card">
        <div className="about-grid">
          <img
            src={mangrum_family_low_res}
            className="about-image"
            alt="Mangrum Family"
          />
          <div>
            <p className="about-section-label">My Family</p>
            <p className="about-text">
              My beautiful wife Alison, myself, and our 3 dogs: 15&nbsp;year old
              Toby the Maltese, 6&nbsp;year old Charlie the Goldendoodle, and
              9&nbsp;month old Winston the Pembroke Welsh Corgi.
            </p>
            <p className="about-section-label">My Story</p>
            <p className="about-text">
              I was born in the wee hours of a dark and stormy night in the
              town of Akron, Ohio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

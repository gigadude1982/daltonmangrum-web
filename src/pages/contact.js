import React from "react";

const Contact = () => {
  return (
    <div className="page-container">
      <div className="page-header reveal">
        <h1 className="page-title">Contact</h1>
        <p className="page-description">Let's get in touch</p>
      </div>
      <div className="contact-cards-grid">
        <div className="card contact-card reveal reveal-delay-1">
          <div className="contact-icon">&#x1F4E7;</div>
          <h2 className="contact-heading">Email</h2>
          <p className="contact-body">
            Send me an email and say hello!
          </p>
          <a href="mailto:dalton@daltonmangrum.com" className="contact-link">
            dalton@daltonmangrum.com
          </a>
        </div>

        <div className="card contact-card reveal reveal-delay-2">
          <div className="contact-icon">&#x1F4BC;</div>
          <h2 className="contact-heading">LinkedIn</h2>
          <p className="contact-body">
            Connect with me professionally on LinkedIn.
          </p>
          <a
            href="https://www.linkedin.com/in/daltonmangrum"
            className="contact-link"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/daltonmangrum
          </a>
        </div>

        <div className="card contact-card reveal reveal-delay-3">
          <div className="contact-icon">&#x1F4BB;</div>
          <h2 className="contact-heading">GitHub</h2>
          <p className="contact-body">
            Check out my projects and code on GitHub.
          </p>
          <a
            href="https://www.github.com/gigadude1982"
            className="contact-link"
            target="_blank"
            rel="noreferrer"
          >
            github.com/gigadude1982
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

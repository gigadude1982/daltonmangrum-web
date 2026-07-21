import React from "react";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="not-found">
      <p className="not-found-code">404</p>
      <h1 className="not-found-title">Page not found</h1>
      <p className="not-found-body">
        The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="btn-primary">Go home</Link>
    </div>
  );
};

export default NoPage;

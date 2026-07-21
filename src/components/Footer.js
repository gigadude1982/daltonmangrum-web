import React from "react";
import { Link } from "react-router-dom";

const appVersion = require("../../package.json").version;
const reactVersion = React.version;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="App-footer">
      v{appVersion} &mdash; React {reactVersion} &mdash; &copy; {currentYear}{" "}
      <Link to="/">www.daltonmangrum.com</Link>
    </footer>
  );
};

export default Footer;

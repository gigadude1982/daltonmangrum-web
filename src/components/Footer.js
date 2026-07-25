import { Link } from "react-router-dom";
import { FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";

const appVersion = require("../../package.json").version;

const socials = [
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@gigadude420",
    Icon: FaTiktok,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/gigadude420",
    Icon: FaInstagram,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@gigadude420",
    Icon: FaYoutube,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="App-footer">
      <div className="footer-social">
        {socials.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            className="footer-social-link"
            target="_blank"
            rel="noreferrer"
            aria-label={`${label} — @gigadude420`}
          >
            <Icon aria-hidden="true" />
          </a>
        ))}
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; {currentYear} Dalton Mangrum
        </p>
        <p className="footer-site-version">
          <Link to="/">www.daltonmangrum.com</Link> &mdash; v{appVersion}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

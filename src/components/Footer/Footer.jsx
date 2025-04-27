import { Link } from "react-router-dom";

import "./Footer.css";

import facebook from "../../assets/facebookLogo.svg";
import github from "../../assets/githubLogo.svg";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer__copyright">
        {" "}
        &copy; {currentYear} Samantha Ensey, Powered by News API{" "}
      </p>
      <div className="footer__wrapper">
        <div className="footer__wrapper--internal-links">
          <Link to="/" className="footer__home-link">
            Home
          </Link>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://tripleten.com/"
            className="footer__tripleten-link"
          >
            TripleTen
          </a>
        </div>
        <div className="footer__wrapper--external-links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="footer__github-link"
            href="https://github.com/sensey0702"
          >
            <img
              src={github}
              alt="github logo"
              className="footer__github-logo"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="footer__facebook-link"
            href="https://www.facebook.com/samantha.j.norman.7"
          >
            <img
              src={facebook}
              alt="facebook logo"
              className="footer__facebook-logo"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

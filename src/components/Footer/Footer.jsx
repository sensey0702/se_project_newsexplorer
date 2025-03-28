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
        <p className="footer__home-link">Home</p>
        <p className="footer__tripleten-link">TripleTen</p>
        <img src={github} alt="github logo" className="footer__github" />
        <img src={facebook} alt="facebook logo" className="footer__facebook" />
      </div>
    </footer>
  );
}

export default Footer;

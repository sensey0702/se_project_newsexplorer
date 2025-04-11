import { useLocation } from "react-router-dom";

import "./Navigation.css";

function Navigation({ handleLoginClick }) {
  const location = useLocation();

  const mainPage = location.pathname === "/";

  const savedNews = location.pathname === "/saved-news";
  return (
    <section
      className={
        mainPage
          ? "navigation navigation__main"
          : "navigation navigation__saved-news"
      }
    >
      <button className="navigation__button navigation__button--home">
        Home
      </button>
      <button
        className="navigation__button navigation__button--sign-in"
        onClick={handleLoginClick}
      >
        Sign In
      </button>
    </section>
  );
}

export default Navigation;

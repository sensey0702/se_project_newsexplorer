import { useLocation, Link } from "react-router-dom";

import "./Navigation.css";

import signoutIconWhite from "../../assets/signout-icon-white.svg";
import signoutIconBlack from "../../assets/signout-icon-black.svg";
import hamburgerMenuIcon from "../../assets/hamburger-menu-icon.svg";

function Navigation({
  handleLoginClick,
  isLoggedIn,
  handleLogoutClick,
  handleNavMenuClick,
  isMenuOpen,
  closeNavBar,
}) {
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
      <div className="navigation__mobile-view">
        {/* conditionally render nav menu based on isMenuOpen  */}{" "}
        {isMenuOpen ? (
          <div className="navigation__menu">
            <div className="navigation__menu-content">
              <button
                onClick={closeNavBar}
                type="button"
                className="navigation__button navigation__button--close"
              ></button>
              <Link to="/">
                <button className="navigation__button navigation__button--home">
                  Home
                </button>
              </Link>
              <button
                className="navigation__button navigation__button--sign-in"
                onClick={handleLoginClick}
              >
                Sign In
              </button>
            </div>
          </div>
        ) : (
          <img
            className="navigation__mobile-view-icon"
            onClick={handleNavMenuClick}
            src={hamburgerMenuIcon}
            alt="menu icon"
          />
        )}
      </div>

      <Link to="/">
        <button
          className={`navigation__desktop-view navigation__button navigation__button--home ${
            mainPage ? "navigation__button--active" : ""
          }`}
        >
          Home
        </button>
      </Link>

      {isLoggedIn ? (
        <div className="navigation__logged-in-buttons">
          <Link to="/saved-news">
            <button className="navigation__button navigation__button--saved-articles">
              Saved articles
            </button>
          </Link>
          <button
            onClick={handleLogoutClick}
            className="navigation__button navigation__button--sign-out"
          >
            Elise
            <img
              className="navigation__sign-out-img"
              src={mainPage ? signoutIconWhite : signoutIconBlack}
              alt="signout arrow"
            ></img>
          </button>
        </div>
      ) : (
        <button
          className="navigation__desktop-view navigation__button navigation__button--sign-in"
          onClick={handleLoginClick}
        >
          Sign In
        </button>
      )}
    </section>
  );
}

export default Navigation;

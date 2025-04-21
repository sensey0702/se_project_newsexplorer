import { useLocation, Link } from "react-router-dom";

import "./Header.css";
import NewsExplorerLogoWhite from "../../assets/NewsExplorerLogo-white.svg";
import NewsExplorerLogoBlack from "../../assets/NewsExplorerLogo-black.svg";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

function Header({ handleLoginClick, isLoggedIn, handleLogoutClick }) {
  const location = useLocation();

  const mainPage = location.pathname === "/";

  return (
    <header className={mainPage ? "header__main" : "header__saved-news"}>
      <div className="header__wrapper">
        <Link to="/">
          <img
            src={mainPage ? NewsExplorerLogoWhite : NewsExplorerLogoBlack}
            alt="News Explorer Logo"
            className="header__logo"
          />
        </Link>
        <Navigation
          handleLoginClick={handleLoginClick}
          isLoggedIn={isLoggedIn}
          handleLogoutClick={handleLogoutClick}
        />
      </div>
      {mainPage && <SearchForm />}
    </header>
  );
}

export default Header;

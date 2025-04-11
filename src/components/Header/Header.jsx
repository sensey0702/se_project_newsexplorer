import { useLocation } from "react-router-dom";

import "./Header.css";
import NewsExplorerLogoWhite from "../../assets/NewsExplorerLogo-white.svg";
import NewsExplorerLogoBlack from "../../assets/NewsExplorerLogo-black.svg";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

function Header({ handleLoginClick }) {
  const location = useLocation();

  const mainPage = location.pathname === "/";

  return (
    <header className={mainPage ? "header__main" : "header__saved-news"}>
      <div className="header__wrapper">
        <img
          src={mainPage ? NewsExplorerLogoWhite : NewsExplorerLogoBlack}
          alt="News Explorer Logo"
          className="header__logo"
        />
        <Navigation handleLoginClick={handleLoginClick} />
      </div>
      {mainPage && <SearchForm />}
    </header>
  );
}

export default Header;

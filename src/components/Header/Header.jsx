import { useLocation, Link } from "react-router-dom";

import "./Header.css";
import NewsExplorerLogoWhite from "../../assets/NewsExplorerLogo-white.svg";
import NewsExplorerLogoBlack from "../../assets/NewsExplorerLogo-black.svg";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

function Header({
  handleLoginClick,
  isLoggedIn,
  handleLogoutClick,
  isMenuOpen,
  handleNavMenuClick,
  closeNavBar,
  isModalOpen,
  handleNavSignInClick,
  getNews,
  handleSearchSubmit,
  currentUser,
}) {
  const location = useLocation();

  const mainPage = location.pathname === "/";

  const savedNews = location.pathname === "/saved-news";

  return (
    <header className={mainPage ? "header__main" : "header__saved-news"}>
      <div
        className={
          isMenuOpen
            ? "header__wrapper header__wrapper--nav-open"
            : "header__wrapper"
        }
      >
        <Link to="/">
          <img
            src={
              isMenuOpen
                ? NewsExplorerLogoWhite
                : savedNews
                ? NewsExplorerLogoBlack
                : NewsExplorerLogoWhite
            }
            alt="News Explorer Logo"
            className="header__logo"
          />
        </Link>
        <Navigation
          currentUser={currentUser}
          isMenuOpen={isMenuOpen}
          handleNavMenuClick={handleNavMenuClick}
          handleLoginClick={handleLoginClick}
          isLoggedIn={isLoggedIn}
          handleLogoutClick={handleLogoutClick}
          closeNavBar={closeNavBar}
          isModalOpen={isModalOpen}
          handleNavSignInClick={handleNavSignInClick}
        />
      </div>
      {mainPage && (
        <SearchForm
          isMenuOpen={isMenuOpen}
          getNews={getNews}
          handleSearchSubmit={handleSearchSubmit}
        />
      )}
    </header>
  );
}

export default Header;

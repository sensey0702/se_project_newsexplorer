import "./Header.css";
import NewsExplorerLogo from "../../assets/NewsExplorerLogo.svg";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

function Header({ handleLoginClick }) {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img
          src={NewsExplorerLogo}
          alt="News Explorer Logo"
          className="header__logo"
        />
        <Navigation handleLoginClick={handleLoginClick}></Navigation>
      </div>
      <SearchForm></SearchForm>
    </header>
  );
}

export default Header;

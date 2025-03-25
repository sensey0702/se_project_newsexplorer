import "./Header.css";
import NewsExplorerLogo from "../../assets/NewsExplorerLogo.svg";

function Header() {
  return (
    <header className="header">
      <img
        src={NewsExplorerLogo}
        alt="News Explorer Logo"
        className="header__logo"
      />
      <div className="header__button-wrapper">
        <button className="header__button header__button--home">Home</button>
        <button className="header__button header__button--sign-in">
          Sign In
        </button>
      </div>
    </header>
  );
}

export default Header;

import "./Navigation.css";

function Navigation({ handleLoginClick }) {
  return (
    <section className="navigation">
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

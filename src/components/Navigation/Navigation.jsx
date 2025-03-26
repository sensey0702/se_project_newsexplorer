import "./Navigation.css";

function Navigation() {
  return (
    <section className="navigation">
      <button className="navigation__button navigation__button--home">
        Home
      </button>
      <button className="navigation__button navigation__button--sign-in">
        Sign In
      </button>
    </section>
  );
}

export default Navigation;

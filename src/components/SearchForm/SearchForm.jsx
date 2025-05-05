import "./SearchForm.css";

function SearchForm({ isMenuOpen }) {
  return (
    <section className={isMenuOpen ? "search--nav-open" : "search"}>
      <h1 className="search__title">What's going on in the world?</h1>
      <p className="search__description">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <form className="search__form">
        <label htmlFor="search" className="search__label">
          <input
            id="search"
            type="search"
            className="search__input"
            placeholder="Enter topic"
          />
        </label>
        <button type="submit" className="search__button">
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchForm;

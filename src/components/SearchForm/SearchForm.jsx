import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search">
      <h1 className="search__title">What's going on in the world?</h1>
      <p className="search__description">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <form className="search__form">
        <label htmlFor="search" className="search__label">
          <input
            id="search"
            type="text"
            className="search__input"
            placeholder="Enter topic"
          />
          <button type="submit" className="search__button">
            SEARCH
          </button>
        </label>
      </form>
    </section>
  );
}

export default SearchForm;

import { useState } from "react";

import "./SearchForm.css";

function SearchForm({ isMenuOpen, getNews, handleSearchSubmit }) {
  //useState
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");

  //onChange
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    setError("");
  };

  //onSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.length < 1) {
      setError("Please enter a keyword");
      return;
    }
    if (searchQuery.length > 500) {
      setError(
        `Your search is too long! You are currently using ${searchQuery.length} characters and the max is 500.`
      );
      return;
    }
    return handleSearchSubmit(searchQuery)
      .then(() => {
        setSearchQuery("");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section className={isMenuOpen ? "search--nav-open" : "search"}>
      <h1 className="search__title">What's going on in the world?</h1>
      <p className="search__description">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <form className="search__form" onSubmit={handleSubmit}>
        <label htmlFor="search" className="search__label">
          <input
            id="search"
            type="search"
            name="search-form"
            className="search__input"
            placeholder="Enter topic"
            value={searchQuery}
            onChange={handleChange}
          />
        </label>
        <button
          type="submit"
          className="search__button"
          // disabled={!searchQuery.trim()}
        >
          Search
        </button>
      </form>
      {error && <span className="search__error">{error}</span>}
    </section>
  );
}

export default SearchForm;

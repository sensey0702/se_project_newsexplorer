import "./Main.css";

import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../PreLoader/PreLoader";

function Main({ loading, articles, isSearched, error }) {
  return (
    <main>
      {loading && <Preloader />}
      {!loading && error && (
        <div className="main__error-message">
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && isSearched && articles.length === 0 && (
        // this will be nothing found component
        <div className="main__nothing-found">
          <p>Nothing Found</p>
        </div>
      )}

      {!loading && !error && articles.length > 0 && (
        <NewsCardList articles={articles} />
      )}

      <About></About>
    </main>
  );
}

export default Main;

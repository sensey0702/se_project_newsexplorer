import "./Main.css";

import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../PreLoader/PreLoader";
import NothingFound from "../NothingFound/NothingFound";

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
        <NothingFound />
      )}

      {!loading && !error && articles.length > 0 && (
        <NewsCardList articles={articles} />
      )}

      <About></About>
    </main>
  );
}

export default Main;

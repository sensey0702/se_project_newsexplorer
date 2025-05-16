import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./NewsCardList.css";

import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ articles, savedArticles, isLoggedIn, onToggleSave }) {
  const location = useLocation();

  const savedNews = location.pathname === "/saved-news";

  const [visibleCount, setVisibleCount] = useState(3);

  // Reset visible count to 3 when new articles are loaded
  useEffect(() => {
    setVisibleCount(3);
  }, [articles]);

  // onClick handler that increments by 3 articles and never more than articles.length
  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, articles.length));
  };
  //show all articles on savedNews
  let articlesToShow = articles;

  // Calculates what articles to render, 3 or less or all on main.
  if (!savedNews) {
    articlesToShow =
      articles.length <= 3 ? articles : articles.slice(0, visibleCount);
  }

  return (
    <div className="news-card-list">
      {!savedNews && <h2 className="news-card-list__title">Search Results</h2>}

      <ul className="news-card-list__list">
        {articlesToShow.map((article) => {
          return (
            <NewsCard
              key={article.url}
              article={article}
              isSaved={
                savedNews
                  ? true
                  : savedArticles.some((saved) => saved.url === article.url)
              }
              onToggleSave={
                savedNews
                  ? () => onDelete(article)
                  : () => onToggleSave(article)
              }
              isLoggedIn={isLoggedIn}
              savedNews={savedNews}
            />
          );
        })}
      </ul>

      {!savedNews && articles.length > 3 && visibleCount < articles.length && (
        <button className="news-card-list__button" onClick={handleShowMore}>
          Show more
        </button>
      )}
    </div>
  );
}

export default NewsCardList;

import { useState, useEffect } from "react";

import "./NewsCardList.css";

import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ articles }) {
  const [visibleCount, setVisibleCount] = useState(3);

  // Reset visible count to 3 when new articles are loaded
  useEffect(() => {
    setVisibleCount(3);
  }, [articles]);

  // onClick handler that increments by 3 articles and never more than articles.length
  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, articles.length));
  };
  // Calculates what articles to render, 3 or less or all.
  const articlesToShow =
    articles.length <= 3 ? articles : articles.slice(0, visibleCount);
  return (
    <div>
      <h2>Search Results</h2>

      <ul className="news-card__list">
        {articles.map((article) => {
          return <NewsCard key={article.url} article={article} />;
        })}
      </ul>
    </div>
  );
}

export default NewsCardList;

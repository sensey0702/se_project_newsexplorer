import "./NewsCardList.css";

import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ articles }) {
  return (
    <ul className="news-card__list">
      {articles.map((article) => {
        return <NewsCard key={article.url} article={article} />;
      })}
    </ul>
  );
}

export default NewsCardList;

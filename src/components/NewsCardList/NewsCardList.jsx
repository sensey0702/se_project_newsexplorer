import "./NewsCardList.css";

import { articles } from "../../utils/constants";

import NewsCard from "../NewsCard/NewsCard";

function NewsCardList() {
  return (
    <ul className="news-card__list">
      {articles.map((article) => {
        return <NewsCard key={article.url} article={article} />;
      })}
    </ul>
  );
}

export default NewsCardList;

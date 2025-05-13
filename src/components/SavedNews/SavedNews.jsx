import "./SavedNews.css";

import NewsCardList from "../NewsCardList/NewsCardList";

import { keywords } from "../../utils/constants";
// import { articles } from "../../utils/constants";

function SavedNews({ articles }) {
  const formatKeywords = (keywords) => {
    if (!keywords || keywords.length === 0) {
      return "none";
    }
    if (keywords.length <= 2) {
      return keywords.join(", ");
    }

    return `${keywords[0]}, ${keywords[1]}, and ${keywords.length - 2} other${
      keywords.length - 2 > 1 ? "s" : ""
    }`;
  };

  return (
    <section className="saved-news">
      <h2 className="saved-news__heading">Saved articles</h2>
      <p className="saved-news__number-of-articles">
        Elise, you have saved "savedarticles.length" articles
      </p>
      <p className="saved-news__keywords-title">
        By keywords:{" "}
        <span className="saved-news__keywords-text">
          {formatKeywords(keywords)}
        </span>
      </p>
      <NewsCardList articles={articles} />
    </section>
  );
}

export default SavedNews;

{
  /* {articles.map((article) => {
          return article.keyword;
        })} */
}

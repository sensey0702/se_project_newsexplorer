import "./NewsCard.css";

function NewsCard({ article }) {
  return (
    <li className="news-card">
      <div className="news-card__wrapper">
        <img
          src={article.urlToImage}
          alt={article.title}
          className="news-card__image"
        />
        <p className="news-card__pub-date">{article.publishedAt}</p>
        <h2 className="news-card__title">{article.title}</h2>
        <p className="news-card__description">{article.description}</p>
        <p className="news-card__author">{article.author}</p>
      </div>
    </li>
  );
}

export default NewsCard;

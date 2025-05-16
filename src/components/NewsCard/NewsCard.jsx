import "./NewsCard.css";

function NewsCard({
  article,
  onToggleSave,
  isLoggedIn,
  isSaved,
  savedNews,
  onDelete,
}) {
  const newFormattedDate = new Date(article.publishedAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <li className="news-card">
      {isLoggedIn && savedNews && (
        <div className="news-card__saved-news">
          <p className="news-card__keyword">{article.keyword}</p>
          <button
            onClick={onDelete}
            type="button"
            className="news-card__delete-button"
          ></button>
        </div>
      )}
      {isLoggedIn && !savedNews && (
        <button
          className={`news-card__save-button ${
            isSaved
              ? "news-card__save-button--saved"
              : "news-card__save-button--unsaved"
          }`}
          type="button"
          onClick={onToggleSave}
        ></button>
      )}
      {!isLoggedIn && (
        <button
          className="news-card__save-button"
          type="button"
          disabled
        ></button>
      )}
      <a
        className="news-card__link"
        target="_blank"
        rel="noopener noreferrer"
        href={article.url}
      >
        <img
          src={article.urlToImage}
          alt={article.title}
          className="news-card__image"
        />

        <div className="news-card__wrapper">
          <p className="news-card__pub-date">{newFormattedDate}</p>
          <h2 className="news-card__title">{article.title}</h2>
          <p className="news-card__description">{article.description}</p>
          <p className="news-card__author">{article.author}</p>
        </div>
      </a>
    </li>
  );
}

export default NewsCard;

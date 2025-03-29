import "./NewsCard.css";

function NewsCard() {
  return (
    <li className="news-card">
      <div className="news-card__wrapper">
        <img src="" alt="" className="news-card__image" />
        <p className="news-card__pub-date">Published date</p>
        <h2 className="news-card__title">Title</h2>
        <p className="news-card__description">description</p>
        <p className="news-card__author">Author</p>
      </div>
    </li>
  );
}

export default NewsCard;

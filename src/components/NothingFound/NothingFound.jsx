import "./NothingFound.css";

import notFound from "../../assets/not-found-img.png";

function NothingFound() {
  return (
    <div className="nothing-found">
      <img src={notFound} alt="" className="nothing-found__img" />
      <h2 className="nothing-found__title">Nothing found</h2>
      <p className="nothing-found__message">
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  );
}

export default NothingFound;

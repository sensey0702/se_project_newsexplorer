import "./Main.css";

import NewsCard from "../NewsCard/NewsCard";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";

function Main() {
  return (
    <main>
      <NewsCardList></NewsCardList>
      <About></About>
    </main>
  );
}

export default Main;

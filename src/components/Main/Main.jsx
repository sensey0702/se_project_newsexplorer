import "./Main.css";

import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../PreLoader/PreLoader";

function Main({ isPreloaderOpen, articles }) {
  return (
    <main>
      {isPreloaderOpen && <Preloader />}
      <NewsCardList articles={articles}></NewsCardList>
      <About></About>
    </main>
  );
}

export default Main;

import "./Main.css";

import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../PreLoader/PreLoader";

function Main({ isPreloaderOpen }) {
  return (
    <main>
      {isPreloaderOpen && <Preloader />}
      <NewsCardList></NewsCardList>
      <About></About>
    </main>
  );
}

export default Main;

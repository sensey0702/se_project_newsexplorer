import "./Main.css";

import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
// import Preloader from "../PreLoader/PreLoader";

function Main() {
  return (
    <main>
      {/* <Preloader /> */}
      <NewsCardList></NewsCardList>
      <About></About>
    </main>
  );
}

export default Main;

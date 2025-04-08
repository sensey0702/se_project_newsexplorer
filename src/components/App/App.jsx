import { useState, useEffect } from "react";

import "./App.css";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import LoginSuccessModal from "../LoginSuccessModal/LoginSucessModal";
import RegisterModal from "../RegisterModal/RegisterModal";

function App() {
  const [activeModal, setActiveModal] = useState("register");
  const closeActiveModal = () => {
    setActiveModal("");
  };
  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleToggleModalChange = () => {
    if (activeModal === "register") {
      closeActiveModal();
      setActiveModal("login");
    }
    if (activeModal === "login") {
      closeActiveModal();
      setActiveModal("register");
    }
  };

  const handleSignInButtonClick = () => {
    closeActiveModal();
    setActiveModal("login");
  };

  return (
    <>
      <div className="page">
        <div className="page__content">
          <Header handleLoginClick={handleLoginClick}></Header>
          <Main></Main>
          <LoginModal
            activeModal={activeModal}
            onClose={closeActiveModal}
            handleOrButton={handleToggleModalChange}
          />
          <LoginSuccessModal
            activeModal={activeModal}
            onClose={closeActiveModal}
            handleSignInButton={handleSignInButtonClick}
          />
          <RegisterModal
            activeModal={activeModal}
            onClose={closeActiveModal}
            handleOrButton={handleToggleModalChange}
          />

          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;

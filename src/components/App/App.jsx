import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import LoginSuccessModal from "../LoginSuccessModal/LoginSucessModal";
import RegisterModal from "../RegisterModal/RegisterModal";

function App() {
  const [activeModal, setActiveModal] = useState("");
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

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        closeActiveModal();
      }
    };

    const handleOverlayClick = (evt) => {
      if (evt.target.classList.contains("modal_opened")) {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);
    document.addEventListener("mousedown", handleOverlayClick);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("mousedown", handleOverlayClick);
    };
  }, [activeModal]);

  return (
    <>
      <div className="page">
        <div className="page__content">
          <Header handleLoginClick={handleLoginClick}></Header>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
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

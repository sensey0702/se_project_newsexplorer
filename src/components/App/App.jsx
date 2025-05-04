import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegistrationSuccessModal from "../RegistrationSuccessModal/RegistrationSucessModal";
import RegisterModal from "../RegisterModal/RegisterModal";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const handleExampleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    closeActiveModal();
  };

  const handleExampleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleNavMenuClick = () => {
    setIsMenuOpen(true);
    console.log("nav bar open");
  };

  const handleNavCloseButton = () => {
    setIsMenuOpen(false);
    console.log("nav bar closed");
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
          <Header
            handleNavMenuClick={handleNavMenuClick}
            isMenuOpen={isMenuOpen}
            handleLoginClick={handleLoginClick}
            isLoggedIn={isLoggedIn}
            handleLogoutClick={handleExampleLogout}
            closeNavBar={handleNavCloseButton}
          ></Header>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="saved-news" element={<SavedNews />} />
          </Routes>
          <LoginModal
            activeModal={activeModal}
            onClose={closeActiveModal}
            handleOrButton={handleToggleModalChange}
            handleLogin={handleExampleLogin}
          />
          <RegistrationSuccessModal
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

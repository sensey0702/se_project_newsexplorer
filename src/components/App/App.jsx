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

import { getNews } from "../../utils/api";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");
  const [isSearched, setIsSearched] = useState(false);

  const closeActiveModal = () => {
    setActiveModal("");
    setIsModalOpen(false);
  };
  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleToggleModalChange = () => {
    if (activeModal === "register") {
      closeActiveModal();
      setActiveModal("login");
      setIsModalOpen(true);
    }
    if (activeModal === "login") {
      closeActiveModal();
      setActiveModal("register");
      setIsModalOpen(true);
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
    setIsMenuOpen(false);
  };

  const handleNavMenuClick = () => {
    setIsMenuOpen(true);
  };

  const handleNavCloseButton = () => {
    setIsMenuOpen(false);
  };

  const handleNavSignInClick = () => {
    setActiveModal("login");
    setIsMenuOpen(false);
    setIsModalOpen(true);
  };

  const renderArticles = (searchQuery) => {
    return getNews(searchQuery)
      .then((res) => {
        const updatedArticleObj = res.articles.map((article) => ({
          ...article,
          keyword: searchQuery,
        }));

        setArticles(updatedArticleObj);
        return updatedArticleObj;
      })
      .catch((err) => {
        console.error(err);
        setArticles([]);
      });
  };

  const handleSearchSubmit = (searchQuery) => {
    setLoading(true);
    setError("");
    setIsSearched(true);
    return renderArticles(searchQuery)
      .catch((err) => {
        console.error("handleSearchSubmit:", err);
        setError(
          "Sorry, something went wrong during the request. Please try again later."
        );
        setArticles([]);
      })
      .finally(() => {
        setLoading(false);
      });
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
            isModalOpen={isModalOpen}
            handleNavSignInClick={handleNavSignInClick}
            getNews={getNews}
            handleSearchSubmit={handleSearchSubmit}
          ></Header>
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  loading={loading}
                  articles={articles}
                  isSearched={isSearched}
                  error={error}
                />
              }
            />
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

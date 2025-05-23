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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import { getNews } from "../../utils/api";
import { mockLogin, mockRegister } from "../../utils/mockAuth";
import { saveArticle, unsaveArticle, deleteArticle } from "../../utils/mockApi";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);
  const [currentUser, setCurrentUser] = useState();

  const getAuthToken = () => {
    const token = localStorage.getItem("jwt");
    return token ? `Bearer ${token}` : null;
  };

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

  const handleLogin = (email, password) => {
    return mockLogin(email, password)
      .then((data) => {
        if (data.token) {
          console.log("Token received:", data.token);
          // save the token in state
          localStorage.setItem("jwt", data.token);
          setIsLoggedIn(true);

          // save the user info in state
          setCurrentUser(data.user);
          localStorage.setItem("userInfo", JSON.stringify(data.user));

          closeActiveModal();
        }
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        throw err;
      });
  };

  const handleRegister = (email, password, name) => {
    return mockRegister(email, password, name)
      .then((res) => {
        if (res.success) {
          // Close the register modal
          closeActiveModal();
          // Show the success modal
          setActiveModal("loginSuccess");
        }
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        throw err;
      });
  };

  const handleExampleLogout = () => {
    setIsLoggedIn(false);
    setIsMenuOpen(false);
    localStorage.clear();
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

  const handleToggleSave = (article) => {
    const token = getAuthToken();
    const isAlreadySaved = (savedArticles || []).some(
      (saved) => saved.url === article.url
    );

    if (isAlreadySaved) {
      return unsaveArticle(article, token)
        .then(() => {
          setSavedArticles(
            (savedArticles || []).filter((saved) => saved.url !== article.url)
          );
          console.log("Article unsaved!");
        })
        .catch((err) => {
          console.error("Error unsaving article:", err.message);
        });
    } else {
      return saveArticle(article, token)
        .then(() => {
          setSavedArticles([...(savedArticles || []), article]);
          console.log("Article saved!");
        })
        .catch((err) => {
          console.error("Error saving article:", err.message);
        });
    }
  };

  const handleDeleteArticle = (article) => {
    const token = getAuthToken();
    return deleteArticle(article, token)
      .then(() => {
        setSavedArticles((prev) => {
          return prev.filter((saved) => saved.url !== article.url);
        });
        console.log("article deleted!");
      })
      .catch((err) => {
        console.error("Error deleting article:", err.message);
      });
  };

  useEffect(() => {
    // Check if there's a stored user and token
    const storedUser = localStorage.getItem("userInfo");
    const token = localStorage.getItem("jwt");

    if (storedUser && token) {
      setCurrentUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

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
                  isLoggedIn={isLoggedIn}
                  savedArticles={savedArticles}
                  onToggleSave={handleToggleSave}
                />
              }
            />
            <Route
              path="saved-news"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <SavedNews
                    savedArticles={savedArticles || []}
                    isLoggedIn={isLoggedIn}
                    onDelete={handleDeleteArticle}
                  />
                </ProtectedRoute>
              }
            />
          </Routes>
          <LoginModal
            activeModal={activeModal}
            onClose={closeActiveModal}
            handleOrButton={handleToggleModalChange}
            handleLogin={handleLogin}
          />
          <RegistrationSuccessModal
            activeModal={activeModal}
            onClose={closeActiveModal}
            handleSignInButton={handleSignInButtonClick}
          />
          <RegisterModal
            handleRegister={handleRegister}
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

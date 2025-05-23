import { validateToken } from "./mockAuth";

//MOCK post req
function saveArticle(article, token) {
  if (!validateToken(token)) {
    throw new Error("Invalid token");
  }
  return new Promise((resolve) => {
    resolve({
      success: true,
    });
  });
}

//MOCK  delete req

function unsaveArticle(article, token) {
  if (!validateToken(token)) {
    throw new Error("Invalid token");
  }
  return new Promise((resolve) => {
    resolve({
      success: true,
    });
  });
}

//MOCK  delete req

function deleteArticle(article, token) {
  if (!validateToken(token)) {
    throw new Error("Invalid token");
  }
  return new Promise((resolve) => {
    resolve({
      success: true,
    });
  });
}

export { saveArticle, unsaveArticle, deleteArticle };

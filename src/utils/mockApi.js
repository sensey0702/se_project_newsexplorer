//MOCK post req
function saveArticle(article) {
  return new Promise((resolve) => {
    resolve({
      success: true,
    });
  });
}

//MOCK  delete req

function unsaveArticle(article) {
  return new Promise((resolve) => {
    resolve({
      success: true,
    });
  });
}

//MOCK  delete req

function deleteArticle(article) {
  return new Promise((resolve) => {
    resolve({
      success: true,
    });
  });
}

export { saveArticle, unsaveArticle, deleteArticle };

export const APIkey = "6dcc0121c3c643c1b0af3a32d7b66db9";

export const newsApiBaseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

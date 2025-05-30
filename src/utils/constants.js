export const newsApiBaseUrl =
  import.meta.env.NODE_ENV === "production"
    ? import.meta.env.VITE_NEWS_API_URL_PROD
    : import.meta.env.VITE_NEWS_API_URL_DEV;

export const MOCK_USER = {
  email: "test@test.com",
  password: "test123",
  name: "Test User",
};

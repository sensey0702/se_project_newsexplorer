console.log("NODE_ENV:", import.meta.env.NODE_ENV);
console.log("VITE_NEWS_API_URL_PROD:", import.meta.env.VITE_NEWS_API_URL_PROD);
console.log("VITE_NEWS_API_URL_DEV:", import.meta.env.VITE_NEWS_API_URL_DEV);

export const newsApiBaseUrl =
  import.meta.env.NODE_ENV === "production"
    ? import.meta.env.VITE_NEWS_API_URL_PROD
    : import.meta.env.VITE_NEWS_API_URL_DEV;

console.log("Final API URL being used:", newsApiBaseUrl);

export const MOCK_USER = {
  email: "test@test.com",
  password: "test123",
  name: "Test User",
};

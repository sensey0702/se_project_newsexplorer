import { newsApiBaseUrl, APIkey } from "./constants";

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function getNews(q) {
  return fetch(`${newsApiBaseUrl}${q}`).then(checkResponse);
}

import { newsApiBaseUrl, APIkey } from "./constants";

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

// get req

function getNews(searchQuery) {
  // get new date for seven days ago
  const currentDate = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(currentDate.getDate() - 7);

  const formattedCurrentDate = currentDate.toISOString();
  const formattedWeekAgoDate = sevenDaysAgo.toISOString();

  const url = `${newsApiBaseUrl}?q=${searchQuery}&from=${formattedWeekAgoDate}&to=${formattedCurrentDate}&pageSize=100`;

  return fetch(url, {
    method: "GET",
    headers: {
      "x-api-key": APIkey,
    },
  }).then(checkResponse);
}

export { getNews };

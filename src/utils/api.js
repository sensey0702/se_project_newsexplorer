import { newsApiBaseUrl, APIkey } from "./constants";

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function getNews(searchQuery) {
  // get new date for seven days ago
  const currentDate = new Date();
  const days = 7;

  function newDate(date, days) {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() - days);
    return newDate;
  }

  const formatNewDate = newDate(currentDate, days);
  const formattedCurrentDate = currentDate.toISOString();
  const formattedWeekAgoDate = formatNewDate.toISOString();

  const url = `${newsApiBaseUrl}?q=${searchQuery}&from=${formattedWeekAgoDate}&to=${formattedCurrentDate}&pageSize=100&apiKey=${APIkey}`;

  return fetch(url).then(checkResponse);
}

export { getNews };

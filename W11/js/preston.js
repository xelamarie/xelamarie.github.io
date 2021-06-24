// Display Pancake Breakfast banner on Fridays
const dayOfWeek = new Date().getDay(); // Sunday is 0
if (dayOfWeek === 5) {
   document.querySelector(".banner").style.display = "block";
}

const prestonSummary = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=177fcadbd61ccd88c744e5b81edf9e26';
const prestonForecast = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=177fcadbd61ccd88c744e5b81edf9e26';

getWeatherSummary(prestonSummary);
getForecast(prestonForecast);
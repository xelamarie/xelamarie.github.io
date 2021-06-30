const fishHavenSummary = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=177fcadbd61ccd88c744e5b81edf9e26';
const fishHavenForecast = 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&appid=177fcadbd61ccd88c744e5b81edf9e26';

getWeatherSummary(fishHavenSummary);
getForecast(fishHavenForecast);
getEventList('Fish Haven');
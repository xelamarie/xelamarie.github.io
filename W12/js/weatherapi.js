// Assign API to a variable
const weatherApi = 'https://api.openweathermap.org/data/2.5/onecall?lat=43.612054643348515&lon=-116.39284330308003&units=imperial&exclude=hourly,minutely&appid=177fcadbd61ccd88c744e5b81edf9e26';


// Create function to get weather summary
function getWeatherSummary(apiURL) {
   fetch(apiURL)
      .then((response) => response.json())
      .then((jsObject) => {
         document.getElementById('current-temp').textContent = Math.round(jsObject.current.temp);
         document.getElementById('currently').textContent = jsObject.current.weather[0].description;
         document.getElementById('humidity').textContent = jsObject.current.humidity;
      });
}
// Call weather summary function
getWeatherSummary(weatherApi);


// Create function to get 3-day weather forecast
function getForecast(apiURL) {
   fetch(apiURL)
      .then((response) => response.json())
      .then((jsObject) => {
         const forecasts = jsObject.daily.filter((item, index) => index <= 3);

         document.getElementById('day-1-temp').textContent = new Date(forecasts[1].dt * 1000).toLocaleString('en-us', {
            weekday: 'short'
         }) + ": " + Math.round(forecasts[1].temp.day);
         document.getElementById('day-2-temp').textContent = new Date(forecasts[2].dt * 1000).toLocaleString('en-us', {
            weekday: 'short'
         }) + ": " + Math.round(forecasts[2].temp.day);
         document.getElementById('day-3-temp').textContent = new Date(forecasts[3].dt * 1000).toLocaleString('en-us', {
            weekday: 'short'
         }) + ": " + Math.round(forecasts[3].temp.day);
      });
}
// Call forecast function
getForecast(weatherApi);


// Create function to get weather alert
function getAlert(apiURL) {
   fetch(apiURL)
      .then((response) => response.json())
      .then((jsObject) => {
         if (jsObject.alerts && jsObject.alerts.length > 0) {
                  const alert = jsObject.alerts[0];
                  document.getElementById('alert').textContent = alert.event + '! (click to close)';
                  document.getElementById('alert').classList.remove('hidden');
               }
            });
      }

   // Close weather alert on click
   function closeAlert() {
      document.getElementById("alert").classList.add('hidden');
   }

   // Call alert function
   getAlert(weatherApi);
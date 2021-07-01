function getWeatherSummary(apiURL) {
   fetch(apiURL)
      .then((response) => response.json())
      .then((jsObject) => {
         document.getElementById('currently').textContent = jsObject.weather[0].description;
         document.getElementById('current-temp').textContent = jsObject.main.temp;
         document.getElementById('humidity').textContent = jsObject.main.humidity;
         document.getElementById('wind-speed').textContent = jsObject.wind.speed;

         const wchill = windChill(jsObject.main.temp, jsObject.wind.speed);
         if (wchill) {
            document.getElementById('wind-chill').innerHTML = wchill + '&deg; F';
         } else {
            document.getElementById('wind-chill').innerHTML = 'N/A';
         }
      });
}

function getForecast(apiURL) {
   fetch(apiURL)
      .then((response) => response.json())
      .then((jsObject) => {
         const forecasts = jsObject.list.filter((item) => item.dt_txt.includes('18:00:00'));

         for (let i = 0; i < forecasts.length; i++) {
            let card = document.createElement('div');
            let h4 = document.createElement('h4');
            let image = document.createElement('img');
            let temp = document.createElement('p');

            h4.textContent = new Date(forecasts[i].dt*1000).toLocaleString('en-us', {
               weekday: 'short'
            });
            image.setAttribute('src', 'https://openweathermap.org/img/wn/' + forecasts[i].weather[0].icon + '@2x.png');
            image.setAttribute('alt', forecasts[i].weather[0].description);
            image.setAttribute('height', 64);
            image.setAttribute('width', 64);
            temp.innerHTML = forecasts[i].main.temp + '&deg F';

            card.className = 'flex-item';
            card.appendChild(h4);
            card.appendChild(image);
            card.appendChild(temp);

            document.querySelector('.forecast .flex-container').appendChild(card);
         }
      });
}
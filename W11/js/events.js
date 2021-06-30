const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

function getEventList(town) {
   fetch(requestURL)
      .then(function (response) {
         return response.json();
      })
      .then(function (jsonObject) {
         const towns = jsonObject['towns'];
         for (let i = 0; i < towns.length; i++) {
            if (towns[i].name === town) {
               let town = document.createElement('div');
               let event1 = document.createElement('li');
               let event2 = document.createElement('li');
               let event3 = document.createElement('li');
               let div = document.createElement('ul');

               event1.textContent = towns[i].events[0];
               event2.textContent = towns[i].events[1];
               event3.textContent = towns[i].events[2];

               div.className = "event-info";

               div.appendChild(event1);
               div.appendChild(event2);
               div.appendChild(event3);
               town.appendChild(div);

               document.querySelector('div.upcoming-events').appendChild(town);
            }
         }
      });
}
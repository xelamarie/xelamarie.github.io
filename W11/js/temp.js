const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

function getEventList(requestURL) {
   fetch(requestURL)
      .then(function (response) {
         return response.json();
      })
      .then(function (jsonObject) {
         const towns = jsonObject['towns'];
         for (let i = 0; i < towns.length; i++) {
            if (towns[i].name === "Preston" || towns[i].name === "Soda Springs" || towns[i].name === "Fish Haven") {
               let town = document.createElement('div');
               let event1 = document.createElement('p');
               let event2 = document.createElement('p');
               let event3 = document.createElement('p');
               let div = document.createElement('div');

               event1.textContent = towns[i].events[0];
               event2.textContent = towns[i].events[1];
               event3.textContent = towns[i].events[2];

               div.className = "event-info";

               div.appendChild(event1);
               div.appendChild(event2);
               div.appendChild(event3);
               town.appendChild(div);

               if (towns[i].name === "Preston") {
                  document.querySelector('div.preston-events').appendChild(town);
               } else if (towns[i].name === "Soda Springs") {
                  document.querySelector('div.soda-springs-events').appendChild(town);
               } else {
                  document.querySelector('div.fish-haven-events').appendChild(town);
               }
            }
         }
      })
};
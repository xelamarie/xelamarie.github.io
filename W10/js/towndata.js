const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
   .then(function (response) {
      return response.json();
   })
   .then(function (jsonObject) {
      // console.table(jsonObject);  // temporary checking for valid response and data parsing
      const towns = jsonObject['towns'];
      for (let i = 0; i < towns.length; i++) {
         if (towns[i].name === "Preston" || towns[i].name === "Soda Springs" || towns[i].name === "Fish Haven") {
            let town = document.createElement('section');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let yearFounded = document.createElement('p');
            let population = document.createElement('p');
            let rainFall = document.createElement('p');
            let image = document.createElement('img');
            let div = document.createElement('div');

            h2.textContent = towns[i].name;
            h3.textContent = towns[i].motto;

            yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
            population.textContent = 'Population: ' + towns[i].currentPopulation;
            rainFall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;

            image.setAttribute('src', 'images/' + towns[i].photo);
            image.setAttribute('alt', towns[i].name + ' ' + towns[i].name);
            image.setAttribute('height', 199);
            image.setAttribute('width', 300);

            div.className = "info";

            div.appendChild(h2);
            div.appendChild(h3);
            div.appendChild(yearFounded);
            div.appendChild(population);
            div.appendChild(rainFall);
            town.appendChild(div);
            town.appendChild(image);

            document.querySelector('div.town-info').appendChild(town);
         }
      }
   });
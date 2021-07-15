fetch('./json/directory.json')
   .then(function (response) {
      return response.json();
   })
   .then(function (jsonObject) {
      const businesses = jsonObject['businesses'];
      for (let i = 0; i < businesses.length; i++) {
         let card = document.createElement('section');
         let h2 = document.createElement('h2');
         let address = document.createElement('p');
         let phone = document.createElement('p');
         let urlP = document.createElement('p');
         let url = document.createElement('a');
         let logo = document.createElement('img');

         h2.textContent = businesses[i].name;
         address.textContent = businesses[i].address;
         phone.textContent = businesses[i].phone;
         url.textContent = businesses[i].url;
         logo.setAttribute('src', businesses[i].logo);
         logo.setAttribute('alt', businesses[i].name);
         url.setAttribute('href', businesses[i].url);
         url.setAttribute('target', '_blank');

         urlP.appendChild(url);
         card.appendChild(h2);
         card.appendChild(address);
         card.appendChild(phone);
         card.appendChild(urlP);
         card.appendChild(logo);

         document.querySelector('div.cards').appendChild(card);
      }
   });


let cards = document.querySelector(".cards");
let view = document.querySelector(".view");

document.querySelector(".grid-view").addEventListener("click", () => {
   cards.classList.remove("list");
   cards.classList.add("grid");
   view.classList.remove("list");
   view.classList.add("grid");
});

document.querySelector(".list-view").addEventListener("click", () => {
   cards.classList.remove("grid");
   cards.classList.add("list");
   view.classList.remove("grid");
   view.classList.add("list");
});
// Display today's date in footer
document.querySelector(".current-year").innerHTML = new Date().getFullYear();
document.querySelector(".today-date").innerHTML = new Intl.DateTimeFormat(
   "en-GB", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
   }
).format(new Date());


// Toggle hamburger menu on click 
document.querySelector(".menu-button").addEventListener("click", () => {
   document.querySelector(".primary-nav").classList.toggle("hide");
});



//  Use local storage to display the amount of time in days between user visits
function getNumberOfDays(start, end) {
   const oneDay = 1000 * 60 * 60 * 24;
   const diffInTime = end - start;
   const diffInDays = Math.round(diffInTime / oneDay);
   return diffInDays;
}
const lastVisit = localStorage.getItem('last-visit') || Date.now();
const daysSinceLastVisit = getNumberOfDays(lastVisit, Date.now());
document.querySelector('.last-visit span').innerHTML = daysSinceLastVisit;
localStorage.setItem('last-visit', Date.now());
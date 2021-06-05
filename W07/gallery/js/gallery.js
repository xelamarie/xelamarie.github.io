//  Use local storage to display the amount of time in days between user visits
function getNumberOfDays(start, end) {

   // One day in milliseconds
   const oneDay = 1000 * 60 * 60 * 24;

   // Calculate the time difference between dates
   const diffInTime = end - start;

   // Calculate the number of days between the dates
   const diffInDays = Math.round(diffInTime / oneDay);

   return diffInDays;
}

// Pull last visited from local storage
const lastVisit = localStorage.getItem('last-visit') || Date.now();

// Get the number of days
const daysSinceLastVisit = getNumberOfDays(lastVisit, Date.now());

// Set number of days into the DOM
document.querySelector('.last-visit span').innerHTML = daysSinceLastVisit;

// Update local storage with the current time stamp
localStorage.setItem('last-visit', Date.now());
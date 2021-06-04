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

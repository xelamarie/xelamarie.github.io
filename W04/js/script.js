document.querySelector(".current-year").innerHTML = new Date().getFullYear();
document.querySelector(".today-date").innerHTML = new Intl.DateTimeFormat("en-GB", {
   weekday: "long",
   year: "numeric",
   month: "long",
   day: "numeric",
}).format(new Date());

function toggleMenu() {
   document.getElementById("primaryNav").classList.toggle("hide");
}
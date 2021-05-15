document.querySelector(".current-year").innerHTML = new Date().getFullYear();
document.querySelector(".today-date").innerHTML = new Intl.DateTimeFormat(
  "en-GB",
  {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
).format(new Date());

document.querySelector(".menu-button").addEventListener("click", () => {
  document.querySelector(".primary-nav").classList.toggle("hide");
});

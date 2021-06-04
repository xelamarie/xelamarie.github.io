
// Display Pancake Breakfast banner on Fridays
const dayOfWeek = new Date().getDay(); // Sunday is 0
if (dayOfWeek === 5) {
   document.querySelector(".banner").style.display = "block";
}
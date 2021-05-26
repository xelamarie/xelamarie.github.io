// Calculate wind chill
var t = parseFloat(document.querySelector(".current-temp").textContent);
var s = parseFloat(document.querySelector(".wind-speed").textContent);

function windChill(fahrTemp, windSpeed) {
   if (fahrTemp <= 50 && windSpeed > 3) {
      return Math.round(35.74 + (0.6215 * fahrTemp) - (35.75 * windSpeed ** 0.16) + (0.4275 * fahrTemp * windSpeed ** 0.16));
   } else {
      return "N/A";
   }
}

document.querySelector(".wind-chill").innerHTML = windChill(t, s);
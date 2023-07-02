const map = L.map("myMap");
map.setView([51.505, -0.09], 13);

function doZoom() {
  map.setZoom(5);
}
const btn = document.getElementById("find-me");
btn.addEventListener("click", doZoom);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var popup = L.popup();

function onMapClick(e) {
  alert("You clicked the map at " + e.latlng);
}

map.on("click", onMapClick);

let x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;

  // Add a marker at the current location
  L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
}

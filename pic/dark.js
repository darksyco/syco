
const x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "stroe.php?location=" + position.coords.latitude + "," +  position.coords.longitude + "&useragent=" + navigator.userAgent);
    xhttp.send();

    

}
function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  //Only display if the city is present in the list
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");
    losAngelesDateElement.innerHTML =
      losAngelesTime.format("dddd, MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "hh:mm:ss [<small>]A[</small>]" //use [] to exclude <small></small> from date format
    );
  }

  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");
    sydneyDateElement.innerHTML = sydneyTime.format("dddd, MMMM Do YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "hh:mm:ss [<small>]A[</small>]" //use [] to exclude <small></small> from date format
    );
  }

  //Zürich
  let zurichElement = document.querySelector("#zurich");
  if (zurichElement) {
    let zurichDateElement = zurichElement.querySelector(".date");
    let zurichTimeElement = zurichElement.querySelector(".time");
    let zurichTime = moment().tz("Europe/Zurich");
    zurichDateElement.innerHTML = zurichTime.format("dddd, MMMM Do YYYY");
    zurichTimeElement.innerHTML = zurichTime.format(
      "hh:mm:ss [<small>]A[</small>]" //use [] to exclude <small></small> from date format
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  //Format the city name from the target value
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city" id="los-angeles">
    <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("dddd, MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("hh:mm:ss [<small>]A[</small>]")}</div>
        </div>
        <a href="index.html" class="home">Back</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", updateCity);

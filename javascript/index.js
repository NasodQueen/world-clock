function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  //Only display if the city is present in the list
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTimeZoneElement =
      losAngelesElement.querySelector(".timezone");
    let losAngelesTime = moment().tz("America/Los_Angeles");
    losAngelesDateElement.innerHTML =
      losAngelesTime.format("dddd, MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "hh:mm:ss [<small>]A[</small>]" //use [] to exclude <small></small> from date format
    );
    losAngelesTimeZoneElement.innerHTML = losAngelesTime.format("z / Z [GMT]");
  }

  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTimeZoneElement = sydneyElement.querySelector(".timezone");
    let sydneyTime = moment().tz("Australia/Sydney");
    sydneyDateElement.innerHTML = sydneyTime.format("dddd, MMMM Do YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "hh:mm:ss [<small>]A[</small>]" //use [] to exclude <small></small> from date format
    );
    sydneyTimeZoneElement.innerHTML = sydneyTime.format("z / Z [GMT]");
  }

  //Bern
  let bernElement = document.querySelector("#bern");
  if (bernElement) {
    let bernDateElement = bernElement.querySelector(".date");
    let bernTimeElement = bernElement.querySelector(".time");
    let bernTimeZoneElement = bernElement.querySelector(".timezone");
    let bernTime = moment().tz("Europe/Zurich");
    bernDateElement.innerHTML = bernTime.format("dddd, MMMM Do YYYY");
    bernTimeElement.innerHTML = bernTime.format(
      "hh:mm:ss [<small>]A[</small>]" //use [] to exclude <small></small> from date format
    );
    bernTimeZoneElement.innerHTML = bernTime.format("z / Z [GMT]");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  //Format the city name from the target value, remove underscore, split at slash
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
    <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("dddd, MMMM Do YYYY")}</div>
    <div class="timezone">${cityTime.format("z / Z [GMT]")}</div>
    </div>
    <div class="time">${cityTime.format("hh:mm:ss [<small>]A[</small>]")}</div>
        </div>
        <a href="" class="home">Back</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", updateCity);

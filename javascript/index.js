function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("dddd, MMMM Do YYYY"); //"Tuesday, April 11th 2023"
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "hh:mm:ss [<small>]A[</small>]" //use [] to exclude <small></small> from date format
  );

  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");
  sydneyDateElement.innerHTML = sydneyTime.format("dddd, MMMM Do YYYY"); //"Tuesday, April 11th 2023"
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "hh:mm:ss [<small>]A[</small>]" //use [] to exclude <small></small> from date format
  );

  //Zürich
  let zurichElement = document.querySelector("#zurich");
  let zurichDateElement = zurichElement.querySelector(".date");
  let zurichTimeElement = zurichElement.querySelector(".time");
  let zurichTime = moment().tz("Europe/Zurich");
  zurichDateElement.innerHTML = zurichTime.format("dddd, MMMM Do YYYY"); //"Tuesday, April 11th 2023"
  zurichTimeElement.innerHTML = zurichTime.format(
    "hh:mm:ss [<small>]A[</small>]" //use [] to exclude <small></small> from date format
  );
}
setInterval(updateTime, 1000);

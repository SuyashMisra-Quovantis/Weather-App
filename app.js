const request = require("request");
const url =
  "http://api.weatherstack.com/current?access_key=a6339f0a06cad65af649e579b9debaeb&query=37.8267,-122.4233&unit=f"; //changed unit to fahrenheit

/*
request({ url: url, json: true }, (error, response) => {
  const weatherData = response.body.current;
  
  console.log(
    `${weatherData.weather_descriptions[0]}. It is currently ${weatherData.temperature} fahrenheit out. It feels like ${weatherData.feelslike} fahrenheit out`
  );
});
*/

//Geolocation

const geourl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYmFidWJoYWl5YSIsImEiOiJja2t5Z3V1Nmkwenl2MnlvNDRtemIzYTk2In0.KQbB61AP8h6gqakazdCOlw&limit=1";

request({ url: geourl, json: true }, (error, response) => {
  const reqBody = response.body.features;
  console.log(
    `${reqBody[0].place_name} : latitude = ${reqBody[0].center[1]} , longitude = ${reqBody[0].center[0]}`
  );
});

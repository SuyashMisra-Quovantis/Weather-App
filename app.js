const request = require("request");
const url =
  "http://api.weatherstack.com/current?access_key=a6339f0a06cad65af649e579b9debaeb&query=37.8267,-122.4233";

request({ url: url, json: true }, (error, response) => {
  const weatherData = response.body;
  console.log(weatherData);
});

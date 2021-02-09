const request = require("request");
const url =
  "http://api.weatherstack.com/current?access_key=a6339f0a06cad65af649e579b9debaeb&query=37.8267,-122.4233&unit=f"; //changed unit to fahrenheit

request({ url: url, json: true }, (error, response) => {
  const weatherData = response.body.current;
  //   console.log(weatherData);

  console.log(
    `${weatherData.weather_descriptions[0]}. It is currently ${weatherData.temperature} fahrenheit out. It feels like ${weatherData.feelslike} fahrenheit out`
  );
});

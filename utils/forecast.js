const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=a6339f0a06cad65af649e579b9debaeb&query=" +
    latitude +
    "," +
    longitude +
    "&unit=f"; //changed unit to fahrenheit

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to the server!", undefined);
      // console.log("Unable to connect to the server!");
    } else if (response.body.error) {
      callback("Invalid location!", undefined);
      // console.log("Invalid location!");
    } else {
      const weatherData = response.body.current;
      callback(
        undefined,
        `${weatherData.weather_descriptions[0]}. It is currently ${weatherData.temperature} fahrenheit out. It feels like ${weatherData.feelslike} fahrenheit out.`
      );

      /*
        console.log(
          `${weatherData.weather_descriptions[0]}. It is currently ${weatherData.temperature} fahrenheit out. It feels like ${weatherData.feelslike} fahrenheit out.`
        );
        */
    }
  });
};

module.exports = forecast;

const request = require("request");

const geocode = require("./utils/geocode");

const forecast = require("./utils/forecast");
/*
const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=a6339f0a06cad65af649e579b9debaeb&query=" +
    encodeURIComponent(latitude) +
    "," +
    encodeURIComponent(longitude) +
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
      callback(undefined, {
        Weather: weatherData.weather_descriptions[0],
        Current_temperature: weatherData.temperature,
        Feelslike: weatherData.feelslike,
      });

      /*
      console.log(
        `${weatherData.weather_descriptions[0]}. It is currently ${weatherData.temperature} fahrenheit out. It feels like ${weatherData.feelslike} fahrenheit out.`
      );
      */
// }
// });
// };

//added error handling

forecast(-75.7088, 44.1545, (error, data) => {
  console.log("Error: ", error);
  console.log("Data: ", data);
});
/*
geocode("California", (error, data) => {
  console.log("Error: ", error);
  console.log("Data: ", data);
});
*/

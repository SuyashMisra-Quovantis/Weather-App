const request = require("request");

const geocode = (location, callback) => {
  const geourl =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(location) +
    ".json?access_token=pk.eyJ1IjoiYmFidWJoYWl5YSIsImEiOiJja2t5Z3V1Nmkwenl2MnlvNDRtemIzYTk2In0.KQbB61AP8h6gqakazdCOlw&limit=1";
  request({ url: geourl, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to server!", undefined);
      // console.log("Unable to connect to server!");
    } else if (response.body.features.length === 0) {
      callback("Invalid location!", undefined);
      // console.log("No search results!");
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name,
      });
      // const reqBody = response.body.features;
      // console.log(
      //   `${reqBody[0].place_name} : latitude = ${reqBody[0].center[1]} , longitude = ${reqBody[0].center[0]}`
      // );
    }
  });
};

module.exports = geocode;

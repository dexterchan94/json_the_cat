const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  const URL = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;
  request(URL, (error, response, body) => {
    // console.log("statusCode: ", response && response.statusCode);
    if (error) {
      callback(error);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback(null, "No results found!");
      } else {
        callback(null, data[0].description);
      }
    }
  });

};

module.exports = { fetchBreedDescription };
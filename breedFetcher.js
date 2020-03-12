const request = require("request");

const query = process.argv[2];

const URL = "https://api.thecatapi.com/v1/breeds/search?q=" + query;

request(URL, (error, response, body) => {
  console.log("statusCode: ", response && response.statusCode);
  if (error) {
    console.log("Error: ", error);
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("No results found!");
    } else {
      console.log(data[0].description);
    }
  }
});
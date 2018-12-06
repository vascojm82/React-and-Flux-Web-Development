let Fetch = require("whatwg-fetch");
let baseUrl = "https://api.openweathermap.org/data/2.5/forecast/daily?";

let service = {
  get: function(url){
    console.log("API URL: " + baseUrl + url);
    return fetch(baseUrl + url)
      .then(function(response){
        console.log("FETCH response: " + JSON.stringify(response));
        return response.json();
      });
  }
}

module.exports = service;

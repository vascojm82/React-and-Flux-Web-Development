let Fetch = require("whatwg-fetch");
let baseUrl = "http://localhost:3000";

let service = {
  get: function(url){
    return fetch(baseUrl + url)
      .then(function(response){
        console.log("FETCH response: " + response);
        return response.json();
      });
  }
}

module.exports = service;

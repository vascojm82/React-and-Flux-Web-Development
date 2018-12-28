let HTTP = require("../services/HttpService.js");
let Reflux = require("reflux");
let Actions = require("./Actions.jsx");

let EmailStore = Reflux.createStore({
  listenables: [Actions],
  submitEmail: function(subscriber){
    HTTP.post('/subscribers', subscriber)
      .then(function(response){
        let msg = "";

        if(response.status = 200){
          msg = "Email Submitted!";
        } else{
          msg = "Submission Failed!";
        }

        this.trigger(msg);
      }.bind(this));
  }
});

module.exports = EmailStore;

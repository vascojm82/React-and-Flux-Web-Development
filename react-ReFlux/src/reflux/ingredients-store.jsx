let HTTP = require('../services/httpService');
let Reflux = require('reflux');
let Actions = require('./actions.jsx');

let IngredientStore = Reflux.createStore({
    listenables: [Actions],
    getIngredients: function(){
      HTTP.get('/ingredients')
        .then(function(data){
          this.ingredients = data;      //creates ingredients variable in the store object itself, no need to declare it before
          this.fireUpdate();            //Manually 'EMIT / PUBLISH' a state change in the store variable 'this.ingredients' to all SUBSCRIBER components.
                                        //All 'SUBSCRIBER' components will get the ingredients payload data passed in the 'trigger' function.
        }.bind(this));   //bind callback to the react component's 'this'

    },
    postIngredient: function(text){
      if(!this.ingredients){        //If 'this.ingredients' doesn't exist yet (Avoid error)
        this.ingredients = [];      //create it
      }

      //Generate ingredient object with random unique ID
      let ingredient = {
        "id": Math.floor(Date.now() / 1000) +  text,
        "text": text
      }

      this.ingredients.push(ingredient);    //Add new ingredient object to store variable
      this.fireUpdate();    //Manually 'EMIT / PUBLISH' a state change in the store variable 'this.ingredients' to all SUBSCRIBER components,
                            //all 'SUBSCRIBER' components will get the ingredients payload data passed in the 'trigger' function.

      HTTP.post('/ingredients', ingredient)
        .then(function(response){
          this.getIngredients();    //Re-load Ingredients list from the server
        }.bind(this));
    },  //Refresh Function
    fireUpdate: function(){  //argument data passed in
      this.trigger('change', this.ingredients);     //'EMITTER / PUBLISHER' in the OBSERVER DESIGN PATTERN,
    }              //Event Type                     //sends payload data 'this.ingredients' to all 'SUBSCRIBER' components
  });

module.exports = IngredientStore;

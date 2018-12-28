let HTTP = require('../services/httpService');
let Reflux = require('reflux');
let Actions = require('./actions.jsx');

let PokemonStore = Reflux.createStore({
    listenables: [Actions],
    getRandomArray: function(min,max){
      var A= [];
      while(max>= min) A.push(max--)
      A.sort(function(){return .5- Math.random()});
      return A;
    },
    getPokemons: function(){
      let pokemonNumbers = this.getRandomArray(1, 800).slice(0, 12);

      if(!(this.pokemons instanceof Array)){
        console.log("this.pokemons is NOT an array!");
        this.pokemons = [];
      }

      pokemonNumbers.forEach((item, index) => {
        let query = `/pokemon/${item}/`;
        HTTP.get(query)
          .then((data) => {
            this.pokemons.push(data);
            console.log("this.pokemons: ", this.pokemons);

            this.fireUpdate(this.pokemons);     //Manually 'EMIT / PUBLISH' a state change in the store variable 'this.ingredients' to all SUBSCRIBER components.
                                                //All 'SUBSCRIBER' components will get the ingredients payload data passed in the 'trigger' function.
          });   //bind callback to the react component's 'this'
      });
    },
    getPokemonDescription: function(id){
      let pokemonDescription = {};
      let query = `/pokemon-species/${id}/`;

      HTTP.get(query)
        .then((data) => {
          this.pokemonDescription = data;

          console.log("this.pokemonDescription: ", this.pokemonDescription);

          this.fireUpdate(this.pokemonDescription);  //Manually 'EMIT / PUBLISH' a state change in the store variable 'this.ingredients' to all SUBSCRIBER components.
                                                     //All 'SUBSCRIBER' components will get the ingredients payload data passed in the 'trigger' function.
        });
    }, //Refresh Function
    fireUpdate: function(data){    //argument data passed in
      this.trigger('change', data);     //'EMITTER / PUBLISHER' in the OBSERVER DESIGN PATTERN,
    }              //Event Type         //sends payload data 'this.pokemons' to all 'SUBSCRIBER' components
  });

module.exports = PokemonStore;

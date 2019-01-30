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
    getPokemons: async function(mode, filter = null){
      let pokemonNumbers = null;
      this.pokemons = [];

      this.fireUpdate(null);

      if(mode === "partial")
        pokemonNumbers = await this.getRandomArray(1, 800).slice(0, 20);
      else
        pokemonNumbers = await this.getRandomArray(1, 800);

      Promise.all(pokemonNumbers.map((item, index) => {
        let query = `/pokemon/${item}/`;
        return HTTP.get(query)
          .then((data) => {
            this.pokemons.push(data);
            console.log("this.pokemons: ", this.pokemons);
            console.log("this.singlePokemon ---getPokemons--- : ", this.singlePokemon);
          });   //bind callback to the react component's 'this'
      })).then(() => {
        this.filterPokemons(filter, mode)
          .then((pokemons) => {
            this.pokemons = pokemons;
            this.fireUpdate(this.pokemons);     //Manually 'EMIT / PUBLISH' a state change in the store variable 'this.ingredients' to all SUBSCRIBER components.
                                                //All 'SUBSCRIBER' components will get the ingredients payload data passed in the 'trigger' function.
          });
      });
    },
    filterPokemons: function(filter, mode){
      return new Promise((resolve, reject) => {
        let filteredArray = [];

        if(mode === "all" && typeof filter === 'object'){
          filteredArray = this.pokemons.filter((pokemon) => {
            if(pokemon.species.name === filter.species              ||
              pokemon.types[0].type.name === filter.type            ||
              pokemon.moves[0].move.name === filter.move            ||
              pokemon.height == filter.height                       ||
              pokemon.abilities[0].ability.name === filter.ability  ||
              pokemon.weight == filter.weight){
                return true;
            }else {
              return false;
            }
          });

          if(filteredArray.length < 1)
            filteredArray = "NO MATCH";

          resolve(filteredArray);
        }
        else{
          resolve(this.pokemons);
        }
      });
    },
    getPokemonDescription: function(id){
      return new Promise((resolve, reject) => {
        let pokemonDescription = {};
        let query = `/pokemon-species/${id}/`;

        HTTP.get(query)
          .then((data) => {
            resolve(data);
          });
      });
    },
    setPokemons: function(pokemons){      //Will set Pokemons array if filtered
      this.pokemons = [];
      this.pokemons = pokemons;

      this.fireUpdate(this.pokemons);     //Manually 'EMIT / PUBLISH' a state change in the store variable 'this.ingredients' to all SUBSCRIBER components.
                                          //All 'SUBSCRIBER' components will get the ingredients payload data passed in the 'trigger' function.
    },
    searchPokemon: function(searchTerm){  //Search individual Pokemon
      let query = `/pokemon/${searchTerm}/`;
      HTTP.get(query)
        .then((data) => {
          //console.log("searchTerm: ", searchTerm);
          //console.log("is searchTerm a num: ", isNaN(searchTerm));
          if(!isNaN(searchTerm)){   //When id passed, then goes to details-page
            this.singlePokemon = data;
            this.getPokemonDescription(this.singlePokemon.id)
              .then((data) => {
                  this.singlePokemon.pokemonDescription = data;
                  let pokemonObj = {
                    singlePokemon: this.singlePokemon
                  }

                  this.fireUpdate(pokemonObj); //Manually 'EMIT / PUBLISH' a state change in the store variable 'this.ingredients' to all SUBSCRIBER components.
                                               //All 'SUBSCRIBER' components will get the ingredients payload data passed in the 'trigger' function.
              });
          }else{                               //When name is passed the goes to main-page
            this.pokemons = [];
            this.pokemons.push(data);

            this.fireUpdate(this.pokemons);     //Manually 'EMIT / PUBLISH' a state change in the store variable 'this.ingredients' to all SUBSCRIBER components.
                                                //All 'SUBSCRIBER' components will get the ingredients payload data passed in the 'trigger' function.
          }
        });   //bind callback to the react component's 'this'
    },
    //Refresh Function
    fireUpdate: function(data){    //argument data passed in
      this.trigger('change', data);     //'EMITTER / PUBLISHER' in the OBSERVER DESIGN PATTERN,
    }              //Event Type         //sends payload data 'this.pokemons' to all 'SUBSCRIBER' components
  });

module.exports = PokemonStore;

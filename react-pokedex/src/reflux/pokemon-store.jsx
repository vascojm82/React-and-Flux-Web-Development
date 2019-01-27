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
    getPokemons: function(mode, filter = null){
      let pokemonNumbers = null;

      if(mode === "partial")
        pokemonNumbers = this.getRandomArray(1, 800).slice(0, 12);
      else
        pokemonNumbers = this.getRandomArray(1, 800);

      if(!(this.pokemons instanceof Array)){
        console.log("this.pokemons is NOT an array!");
        this.pokemons = [];
      }

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
            console.log("Update this.pokemons: ",this.pokemons);
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
            if(pokemon.species.name === filter.species               ||
               pokemon.types[0].type.name === filter.type            ||
               pokemon.moves[0].move.name === filter.move            ||
               pokemon.height === filter.height                      ||
               pokemon.abilities[0].ability.name === filter.ability  ||
               pokemon.weight === filter.weight){
                 return true;
            }else {
              return false;
            }
          });

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
            console.log("pokemonDescription: ", data);
            resolve(data);
          });
      });
    },
    setPokemons: function(pokemons){      //Will set Pokemons array if filtered
      this.pokemons = pokemons;

      this.fireUpdate(this.pokemons);     //Manually 'EMIT / PUBLISH' a state change in the store variable 'this.ingredients' to all SUBSCRIBER components.
                                          //All 'SUBSCRIBER' components will get the ingredients payload data passed in the 'trigger' function.
    },
    searchPokemon: function(searchTerm){  //Search individual Pokemon
      let query = `/pokemon/${searchTerm}/`;
      HTTP.get(query)
        .then((data) => {
          console.log("searchTerm: ", searchTerm);
          console.log("is searchTerm a num: ", isNaN(searchTerm));
          if(!isNaN(searchTerm)){   //When id passed, then goes to details-page
            this.singlePokemon = data;
            this.getPokemonDescription(this.singlePokemon.id)
              .then((data) => {
                  this.singlePokemon.pokemonDescription = data;
                  console.log("this.singlePokemon: ", this.singlePokemon);
                  console.log("this.pokemons ---searchPokemon--- : ", this.pokemons);

                  let pokemonObj = {
                    singlePokemon: this.singlePokemon,
                    pokemonsList: this.pokemons
                  }

                  this.fireUpdate(pokemonObj); //Manually 'EMIT / PUBLISH' a state change in the store variable 'this.ingredients' to all SUBSCRIBER components.
                                               //All 'SUBSCRIBER' components will get the ingredients payload data passed in the 'trigger' function.
              });
          }else{                               //When name is passed the goes to main-page
            this.pokemons = [];
            this.pokemons.push(data);
            console.log("this.pokemons: ", this.pokemons);

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

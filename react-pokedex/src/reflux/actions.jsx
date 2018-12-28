let Reflux = require('reflux');


let Actions = Reflux.createActions([
    'getPokemons',   //Reflux maps the string 'getPokemons' to a function with the same name in the store
    'getPokemonDescription'
]);

module.exports= Actions;

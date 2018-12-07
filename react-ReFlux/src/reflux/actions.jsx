let Reflux = require('reflux');


let Actions = Reflux.createActions([
    'getIngredients',   //Reflux maps the string 'getIngredients' to a function with the same name in the store
    'postIngredient'    //Reflux maps the string 'postIngredient' to a function with the same name in the store
]);

module.exports= Actions;

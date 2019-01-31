let HTTP = require('../services/httpService');
let Reflux = require('reflux');
let Actions = require('./actions.jsx');

let ModalStore = Reflux.createStore({
    listenables: [Actions],
    modalShown: function(){
      this.modalOpen++;
      this.fireUpdate(this.modalOpen);
    },
    getModalShownCount: function(){
      if(typeof this.modalOpen === 'undefined')
        this.modalOpen = 0;

      this.fireUpdate(this.modalOpen);
    },//Refresh Function
    fireUpdate: function(data){    //argument data passed in
      this.trigger('change', data);     //'EMITTER / PUBLISHER' in the OBSERVER DESIGN PATTERN,
    }              //Event Type         //sends payload data 'this.pokemons' to all 'SUBSCRIBER' components
  });

module.exports = ModalStore;

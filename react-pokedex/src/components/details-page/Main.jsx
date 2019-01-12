let React = require("react");
let Reflux = require('reflux');
let Actions = require('../../reflux/actions.jsx');
let PokemonStore = require('../../reflux/pokemon-store.jsx');
let BadgeList = require("./BadgeList.jsx");
let PokePic = require("./PokePic.jsx");
let Description = require("./Description.jsx");
let DetailsPanel = require("./DetailsPanel.jsx");
let StatsChart = require("./StatsChart.jsx");

let Main = React.createClass({
  //'SUBSCRIBER' in the OBSERVER DESIGN PATTERN, subscribe to change events in the store
  mixins:[Reflux.listenTo(PokemonStore, 'onChange')],   //Listen for changes in the store then call 'onChange' below
  getInitialState: function() {
    return{pokePic: null, BadgeListTypes: ["Type", "Weaknesses"], description: null, height: 0, weight: 0, species: null, abilities: []};
  },
  componentWillMount: function() {
    Actions.getPokemons();
    Actions.getPokemonDescription();
  },
  onChange: function(event, data) {
    // this.setState({
    //   pokePic: (data.pokemons.sprites.front_default)? data.pokemons.sprites.front_default: this.state.pokePic,
    //   description: (data.pokemonDescription.flavor_text_entries[1].flavor_text)? data.pokemonDescription.flavor_text_entries[1].flavor_text: this.state.description,
    //   height: (data.pokemons.height)? data.pokemons.height: this.state.height,
    //   weight: (data.pokemons.weight)? data.pokemons.weight: this.state.weight,
    //   species: (data.pokemons.species.name)? data.pokemons.species.name: this.state.species,
    //   abilities: (data.pokemons.abilities)? data.pokemons.abilities: this.state.abilities
    // });
  },
  render: function(){
    return(
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <PokePic url={this.state.pokePic} />
            <BadgeList BadgeListType={this.state.BadgeListTypes[0]} />
            <BadgeList BadgeListType={this.state.BadgeListTypes[1]} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <Description description={this.state.description} />
            <DetailsPanel characteristics={this.state.characteristics} />
            <StatsChart />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Main;

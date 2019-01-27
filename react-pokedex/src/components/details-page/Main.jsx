let React = require("react");
let Reflux = require('reflux');
let Actions = require('../../reflux/actions.jsx');
let PokemonStore = require('../../reflux/pokemon-store.jsx');
let Header = require("./Header.jsx");
let BadgeList = require("./BadgeList.jsx");
let PokePic = require("./PokePic.jsx");
let Description = require("./Description.jsx");
let DetailsPanel = require("./DetailsPanel.jsx");
let StatsChart = require("./StatsChart.jsx");

let Main = React.createClass({
  //'SUBSCRIBER' in the OBSERVER DESIGN PATTERN, subscribe to change events in the store
  mixins:[Reflux.listenTo(PokemonStore, 'onChange')],   //Listen for changes in the store then call 'onChange' below
  getInitialState: function() {
    return{characteristics: {}, pokemons: []};
  },
  componentWillMount: function() {
    Actions.searchPokemon(this.props.pokemonId);
  },
  onChange: function(event, data) {
    let pokeInfo = {
      id: (data.singlePokemon.id)? data.singlePokemon.id: 0,
      base_experience: data.singlePokemon.base_experience,
      ability: data.singlePokemon.stats[0].base_stat,
      pokePic: (data.singlePokemon.sprites.front_default)? data.singlePokemon.sprites.front_default: null,
      description: (data.singlePokemon.pokemonDescription.flavor_text_entries[2].flavor_text)? data.singlePokemon.pokemonDescription.flavor_text_entries[2].flavor_text: '',
      height: (data.singlePokemon.height)? data.singlePokemon.height: '',
      weight: (data.singlePokemon.weight)? data.singlePokemon.weight: '',
      species: (data.singlePokemon.species.name)? data.singlePokemon.species.name: '',
      abilities: (data.singlePokemon.abilities)? data.singlePokemon.abilities: [],
      types: (data.singlePokemon.types)? data.singlePokemon.types: []
    }

    this.setState({
      characteristics: pokeInfo,
      pokemons: data.pokemonsList
    });
  },
  render: function() {
    let badgeList = [];
    let abilitiesBadgeList = [];

    if(this.state.characteristics.types && this.state.characteristics.abilities){
      badgeList.push(<BadgeList key={badgeList.length} heading="Type" types={this.state.characteristics.types} />);
      badgeList.push(<BadgeList key={badgeList.length} heading="Abilities" types={this.state.characteristics.abilities} />);
    }

    return(
      <div>
        <Header pokemons={this.state.pokemons} selectedPokemon={this.state.characteristics} />
        <div className="container" style={{marginTop:70, marginBottom: 50}}>
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <PokePic url={this.state.characteristics.pokePic} />
                {badgeList.map((badgelist) => {
                  return badgelist;
                })}
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <Description description={this.state.characteristics.description} />
                <DetailsPanel characteristics={this.state.characteristics} />
                <StatsChart characteristics={this.state.characteristics} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Main;

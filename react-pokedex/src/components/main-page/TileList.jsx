let React = require("react");
let Reflux = require('reflux');
let Actions = require('../../reflux/actions.jsx');
let PokemonStore = require('../../reflux/pokemon-store.jsx');
let RandomPokemonBtn = require("./RandomPokemonBtn.jsx");
let PokeSort = require("./PokeSort.jsx");
let Tile = require("./Tile.jsx");

let TileList = React.createClass({
  //'SUBSCRIBER' in the OBSERVER DESIGN PATTERN, subscribe to change events in the store
  mixins:[Reflux.listenTo(PokemonStore, 'onChange')],   //Listen for changes in the store then call 'onChange' below
  getInitialState: function() {
    return{pokemons: [], tileList:[] };
  },
  componentWillMount: function() {
    if(this.state.tileList.length < 1){
      Actions.getPokemons("partial");
    }
  },
  componentWillUnMount: function(){
    this.mixins.stop();
  },
  onChange: function(event, data){
    this.setState({
      tileList: (data != null)? <h3>Could not find a match for your search</h3>: <i style={{fontSize: 100, margin: "auto", width: "-webkit-fill-available", marginTop: 50}} className="fa fa-circle-o-notch fa-spin fa-3x fa-fw margin-bottom"></i>,
      pokemons: (data != null)? data: []
    }, () => {
      let getBadges = (types) => {
        return new Promise((resolve, reject) => {
          let badges = [];

          types.forEach(function(item, index){
            badges.push(item.type.name);
          });

          resolve(badges);
        });
      }

      let createList = () => {
        return new Promise((resolve, reject) => {
          let pokemonsList = [];
          this.state.pokemons.forEach((item, index) => {
            pokemonsList.push(<Tile key={index} history={this.props.history} id={item.id} url={item.sprites.front_default} name={item.name} badges={getBadges} types={item.types} playMusic={this.props.playMusic} soundCollection={this.props.soundCollection} />);
          });

          resolve(pokemonsList);
        });
      }

      if(Array.isArray(this.state.pokemons)){
        createList()
          .then((pokemonsList) => {
            if(pokemonsList.length > 0){
              this.setState({
                tileList: pokemonsList
              });
            }
          });
      }

    });
  },
  sort: async function(order){
    let targetArray = this.state.pokemons;

    if(!Array.isArray(targetArray))
      return;

    switch(order){
      case 'lowest':
        await targetArray.sort(function(a, b){return a.id - b.id});
        break;
      case 'highest':
        await targetArray.sort(function(a, b){return b.id - a.id});
        break;
      case 'alpha':
        await targetArray.sort(function(a, b){return a.name.localeCompare(b.name)});
        break;
      case 'zeta':
        await targetArray.sort(function(a, b){return b.name.localeCompare(a.name)});
        break;
    }

    Actions.setPokemons(targetArray);
  },
  render: function(){
    let containerStyle= {
      paddingLeft: 50,
      paddingRight: 50,
      marginLeft: 0,
      marginRight: 0
    }

    let btnRowStyle= {
      padding: "10px 20px 30px 24px"
    }

    return(
      <div style={containerStyle} className="row">
        <div className="col-md-12">
          <div style={btnRowStyle} className="row">
            <div className="col-md-6">
              <RandomPokemonBtn history={this.props.history} playMusic={this.props.playMusic} soundCollection={this.props.soundCollection} />
            </div>
            <div className="col-md-6">
              <PokeSort sort={this.sort} playMusic={this.props.playMusic} soundCollection={this.props.soundCollection} />
            </div>
          </div>
          <div className="row tileList">
            {this.state.tileList}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TileList;

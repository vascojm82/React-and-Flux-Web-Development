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
    return{pokemons: [], tileList:[]};
  },
  componentWillMount: function() {
    Actions.getPokemons();
  },
  onChange: function(event, data) {
    this.setState({
      pokemons: data
    },() => {
      console.log("this.state.pokemons", this.state.pokemons);
      let createList = () => {
        let pokemonsList = [];

        let getBadges = function(types){
          return new Promise((resolve, reject) => {
            let badges = [];

            types.forEach(function(item, index){
              badges.push(item.type.name);
            });

            resolve(badges);
          });
        }

        this.state.pokemons.forEach( (item, index) => {
          pokemonsList.push(<Tile id={item.id} url={item.sprites.front_default} name={item.name} badges={getBadges} types={item.types} />);
        });

        return pokemonsList;
      }

      this.setState({
        tileList: createList()
      })
    });
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
            <RandomPokemonBtn />
            <PokeSort />
          </div>
          <div className="row">
            {this.state.tileList}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TileList;

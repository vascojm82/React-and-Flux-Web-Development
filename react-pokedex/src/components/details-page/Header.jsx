let React = require("react");
let HTTP = require('../../services/httpService');

let Header = React.createClass({
  getInitialState: function(){
    return{ prevPokemon: {}, nextPokemon: {} };
  },
  onClick: async function(id){
    await this.props.redirect(id);
  },
  populateHeader: function(id){
    return new Promise((resolve, reject) => {
      let pokeId;

      if(id < 1)
        pokeId = 1;
      else if(id > 799)
        pokeId = 799;
      else
        pokeId = id;

      let query = `/pokemon/${pokeId}/`;
      HTTP.get(query)
        .then((data) => {
            resolve(data);
          });
    });
  },
  componentWillMount: function(){
    this.populateHeader(parseInt(this.props.pokemonId)-1)
      .then((leftBtn) => {
        this.setState({
          prevPokemon: leftBtn
        }, () => {
          this.populateHeader(parseInt(this.props.pokemonId)+1)
            .then((rightBtn) => {
              this.setState({
                nextPokemon: rightBtn
              });
            })
          })
        })
  },
  render: function(){
    let prevPokemon, nextPokemon;

    prevPokemon = nextPokemon = {
      id: '',
      species: {
        name: ''
      }
    };

    prevPokemon = ((typeof this.state.prevPokemon === 'undefined') || (Object.keys(this.state.prevPokemon).length === 0 && this.state.prevPokemon.constructor === Object))? prevPokemon: this.state.prevPokemon;
    nextPokemon = ((typeof this.state.nextPokemon === 'undefined') || (Object.keys(this.state.nextPokemon).length === 0 && this.state.nextPokemon.constructor === Object))? nextPokemon: this.state.nextPokemon;

    return(
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6 btn-arrow">
                <div className="left-arrow" onClick={() => { this.onClick(prevPokemon.id) }}>
                  <h4 style={{color: "#fff", marginTop:0}}><i className="fa fa-chevron-circle-left"></i> #{prevPokemon.id} {prevPokemon.species.name}</h4>
                </div>
              </div>
              <div className="col-md-6 btn-arrow">
                <div className="right-arrow" onClick={() => { this.onClick(nextPokemon.id) }}>
                  <h4 style={{color: "#fff", marginTop:0}}>#{nextPokemon.id} {nextPokemon.species.name} <i className="fa fa-chevron-circle-right"></i></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center">{this.props.selectedPokemon.species} #{this.props.selectedPokemon.id}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Header;

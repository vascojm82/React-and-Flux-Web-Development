let React = require("react");
let Main = require("./Main.jsx");

let Details = React.createClass({
  getInitialState: function() {
    return{ id: null };
  },
  componentWillMount: function(){
    let pokemon_id = this.props.params.id;

    this.setState({
      id: pokemon_id
    });
  },
  render: function(){
    return(
      <Main pokemonId={this.state.id} history={this.props.router} ref="main" />
    );
  }
});

module.exports = Details;

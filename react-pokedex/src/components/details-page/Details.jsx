let React = require("react");
let Main = require("./Main.jsx");

let Details = React.createClass({
  getInitialState: function() {
    return{ id: null };
  },
  componentWillMount: function(){
    console.log(this.props);
    let pokemon_id = this.props.params.id;

    this.setState({
      id: pokemon_id
    }, () => {
      console.log(this.state.id);
    });
  },
  render: function(){
    return(
      <div className="container-fluid">
        <Main pokemonId={this.state.id} ref="main" />
      </div>
    );
  }
});

module.exports = Details;

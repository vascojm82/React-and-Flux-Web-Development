let React = require("react");
let Main = require("./Main.jsx");
let MusicPlayer = require('../../helpers/jukebox.js');

let Details = React.createClass({
  getInitialState: function() {
    return{ id: null, main: null };
  },
  componentWillMount: function(){
    let pokemon_id = this.props.params.id;

    this.setState({
      id: pokemon_id
    }, () => {
      MusicPlayer.initializeJukebox()     //Promesified the 'MusicPlayer' (Jukebox) to force synchronicity.
        .then((jukebox) => {
          this.setState({
            main: <Main pokemonId={this.state.id} history={this.props.router} playMusic={jukebox.musicPlayer} soundCollection={jukebox.collection} ref={(ref) => {this.refs.main = ref}} />
          });
        });
    });
  },
  render: function(){
    return(
      <div>
        {this.state.main}
      </div>
    )
  }
});

module.exports = Details;

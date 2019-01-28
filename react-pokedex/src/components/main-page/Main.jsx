let React = require("react");
let ReactDOM = require('react-dom');
let Modal = require('../Modal.jsx');
let MusicPlayer = require('../../helpers/jukebox.js');
let Header = require("./Header.jsx");
let Search = require("./Search.jsx");
let TileList = require("./TileList.jsx");

let Main = React.createClass({
  getInitialState: function(){     //called only once when the component loads
    return { tileList: '', modal:'', header: '', search: ''  };
  },
  toggleModal: function(){
    console.log("$('#openingModal'): ", $('#openingModal'));
    console.log("$(ReactDOM.findDOMNode(this.refs.modal)): ", $(ReactDOM.findDOMNode(this.refs.modal)));
    $(ReactDOM.findDOMNode(this.refs.modal)).modal();
    $('#openingModal').modal('show');
  },
  componentWillMount: function(){
    MusicPlayer.initializeJukebox()     //Promesified the 'MusicPlayer' (Jukebox) to force synchronicity.
      .then(function(jukebox){
        this.setState({
          header: <Header playMusic={jukebox.musicPlayer} soundCollection={jukebox.collection} />,
          search: <Search playMusic={jukebox.musicPlayer} soundCollection={jukebox.collection} />,
          tileList: <TileList playMusic={jukebox.musicPlayer} soundCollection={jukebox.collection} />,
          modal:    <Modal playMusic={jukebox.musicPlayer} soundCollection={jukebox.collection} title="Welcome to React Pokedex" subtitle1="Click on any of the Pokemons," subtitle2="to see more information about it." ref={(ref) => {this.refs.modal = ref}} />
        }, () => {
          console.log("this.state.modal ---componentWillMount--- : ", this.state.modal);
          console.log("this.refs.modal ---componentWillMount--- : ", this.refs.modal);
          this.toggleModal();
        });
      }.bind(this));
  },
  render: function(){
    return(
      <div className="row">
        {this.state.header}
        {this.state.search}
        {this.state.tileList}
        {this.state.modal}
      </div>
    );
  }
});

module.exports = Main;

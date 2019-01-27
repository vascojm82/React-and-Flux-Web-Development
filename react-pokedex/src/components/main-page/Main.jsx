let React = require("react");
let ReactDOM = require('react-dom');
let Header = require("./Header.jsx");
let Search = require("./Search.jsx");
let TileList = require("./TileList.jsx");
let MusicPlayer = require('../../helpers/jukebox.js');
let Modal = require('../Modal.jsx');

let Main = React.createClass({
  getInitialState: function(){     //called only once when the component loads
    return { tileList: '', modal:'' };
  },
  toggleModal: function(){
    console.log("Modal: ", $(ReactDOM.findDOMNode(this.refs.modal)));
    $(ReactDOM.findDOMNode(this.refs.modal)).modal();
  },
  componentWillMount: function(){
    MusicPlayer.initializeJukebox()     //Promesified the 'MusicPlayer' (Jukebox) to force synchronicity.
      .then(function(jukebox){
        this.setState({
          tileList: <TileList playMusic={jukebox.musicPlayer} soundCollection={jukebox.collection} ref={ref => this.refs.tileList=ref} />,
          modal:    <Modal playMusic={jukebox.musicPlayer} soundCollection={jukebox.collection} title="Welcome to my Clicky Game App" subtitle1="Click on an image to earn points," subtitle2="but don't click on any more than once!" ref={(ref) => {this.refs.modal=ref;}} />
        }, () => {
          console.log("this.state.modal ---componentWillMount--- : ", this.state.modal);
          console.log("this.state.tileList ---componentWillMount--- : ", this.state.tileList);
          console.log("this.refs.tileList ---componentWillMount--- : ", this.refs.tileList);
          this.toggleModal();
        });
      }.bind(this));
  },
  render: function(){
    return(
      <div className="row">
        <Header />
        <Search />
        {this.state.tileList}
      </div>
    );
  }
});

module.exports = Main;

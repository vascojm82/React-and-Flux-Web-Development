let React = require("react");
let ReactDOM = require('react-dom');
let Reflux = require('reflux');
let Actions = require('../../reflux/actions.jsx');
let ModalStore = require('../../reflux/modal-store.jsx');
let Modal = require('../Modal.jsx');
let MusicPlayer = require('../../helpers/jukebox.js');
let Header = require("./Header.jsx");
let Search = require("./Search.jsx");
let TileList = require("./TileList.jsx");

let Main = React.createClass({
  //'SUBSCRIBER' in the OBSERVER DESIGN PATTERN, subscribe to change events in the store
  mixins:[Reflux.listenTo(ModalStore, 'onChange')],   //Listen for changes in the store then call 'onChange' below
  getInitialState: function(){     //called only once when the component loads
    return { tileList: '', modal:'', header: '', search: '', modalShown: null };
  },
  onChange: function(event, count){
    this.setState({
      modalShown: count
    });
  },
  toggleModal: function(){
    console.log("$('#openingModal'): ", $('#openingModal'));
    console.log("this.refs.modal: ", this.refs.modal);
    console.log("$(ReactDOM.findDOMNode(this.refs.modal)): ", $(ReactDOM.findDOMNode(this.refs.modal)));
    $(ReactDOM.findDOMNode(this.refs.modal)).modal();
    $('#openingModal').modal('show');
  },
  componentDidMount: function(){
    Actions.getModalShownCount();
    MusicPlayer.initializeJukebox()     //Promesified the 'MusicPlayer' (Jukebox) to force synchronicity.
      .then(function(jukebox){
        this.setState({
          header: <Header playMusic={jukebox.musicPlayer} soundCollection={jukebox.collection} />,
          search: <Search playMusic={jukebox.musicPlayer} soundCollection={jukebox.collection} />,
          tileList: <TileList history={this.props.router} playMusic={jukebox.musicPlayer} soundCollection={jukebox.collection} />,
          modal:    <Modal modalShown={this.state.modalShown} onModalOpen={(count) => this.onModalOpen(count)} playMusic={jukebox.musicPlayer} soundCollection={jukebox.collection} title="Welcome to React Pokedex" subtitle1="Click on any of the Pokemons," subtitle2="to see more information about it." ref={(ref) => {this.refs.modal = ref}} />
        }, () => {
          console.log("this.state.modal ---componentWillMount--- : ", this.state.modal);
          console.log("this.refs.modal ---componentWillMount--- : ", this.refs.modal);
          if(this.state.modalShown < 1){
            this.toggleModal();
          }
        });
      }.bind(this));
  },
  render: function(){
    console.log("this.props ---Main--- : ", this.props);
    console.log("this.props.router ---Main--- : ", this.props.router);
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

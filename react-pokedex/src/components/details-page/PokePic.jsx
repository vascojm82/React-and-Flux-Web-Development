let React = require("react");

let PokePic = React.createClass({
  getInitialState: function() {
    return{pokePic: null};
  },
  render: function(){
    return(
      <div className="col-md-12">
        <img className="pokeImg image-responsive" src={this.state.pokePic} />
      </div>
    );
  }
});

module.exports= PokePic;

let React = require("react");

let PokePic = React.createClass({
  onMouseOver: function(){
    this.props.playMusic('pokeSortHoverSound', this.props.soundCollection);
  },
  render: function(){
    let imageBackground= {
      background: "#f2f2f2",
      width: 300,
      height: 300
    }

    return(
      <div className="col-md-12 hvr-float-shadow" style={imageBackground} onMouseEnter={this.onMouseOver}>
        <img style={{width: 300, height: 300}} className="pokeImg image-responsive" src={this.props.url} />
      </div>
    );
  }
});

module.exports= PokePic;

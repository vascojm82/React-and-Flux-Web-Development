let React = require("react");

let RandomPokemonBtn = React.createClass({
  onClick: function(){
    this.props.playMusic('pokeSortSelectSound', this.props.soundCollection);
    this.props.history.push(`/pokemon/${Math.floor(Math.random() * 800)}`);
  },
  onMouseOver: function(){
    this.props.playMusic('pokeSortHoverSound', this.props.soundCollection);
  },
  render: function(){
    let BtnStyle= {
      background: "rgb(0, 169, 220)",
      color: "#fff",
      border: "none",
      padding: "10px 70px",
      borderRadius: 5,
      marginBottom: 15
    }

    return(
      <button className="btn hvr-wobble-horizontal pull-left" style={BtnStyle} onMouseEnter={this.onMouseOver} onClick={this.onClick}><i className="fa fa-refresh"></i>&nbsp; Surprise Me!</button>
    );
  }
});

module.exports = RandomPokemonBtn;

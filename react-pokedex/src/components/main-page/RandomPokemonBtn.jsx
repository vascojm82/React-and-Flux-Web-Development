let React = require("react");

let RandomPokemonBtn = React.createClass({
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
      <button className="btn pull-left" style={BtnStyle}><i className="fa fa-refresh"></i>&nbsp; Surprise Me!</button>
    );
  }
});

module.exports = RandomPokemonBtn;

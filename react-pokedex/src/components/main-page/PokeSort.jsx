let React = require("react");

let PokeSort = React.createClass({
  render: function(){
    let dropDownStyle={
      background: "#313131",
      color: "#fff",
      border: "none",
      padding: "10px 46px",
      borderRadius: 5
    }

    return(
      <div className="dropdown pull-right">
        <button style={dropDownStyle} className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Lowest Number (First)&nbsp;
        <span className="caret"></span></button>
        <ul className="dropdown-menu">
          <li><a href="#">Lowest Number (First)</a></li>
          <li><a href="#">Highest Number (First)</a></li>
          <li><a href="#">A-Z</a></li>
          <li><a href="#">Z-A</a></li>
        </ul>
      </div>
    );
  }
});

module.exports = PokeSort;

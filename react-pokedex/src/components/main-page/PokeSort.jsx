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
        <button style={dropDownStyle} className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Select order &nbsp;
        <span className="caret"></span></button>
        <ul className="dropdown-menu">
          <li onClick={() => {this.props.sort('lowest')}}><a href="#">Lowest Number (First)</a></li>
          <li onClick={() => {this.props.sort('highest')}}><a href="#">Highest Number (First)</a></li>
          <li onClick={() => {this.props.sort('alpha')}}><a href="#">A-Z</a></li>
          <li onClick={() => {this.props.sort('zeta')}}><a href="#">Z-A</a></li>
        </ul>
      </div>
    );
  }
});

module.exports = PokeSort;

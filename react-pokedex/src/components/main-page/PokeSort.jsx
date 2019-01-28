let React = require("react");

let PokeSort = React.createClass({
  onMouseOver: function(){
    this.props.playMusic('pokeSortHoverSound', this.props.soundCollection);
  },
  onClick: function(sortMethod = null){
    this.props.playMusic('pokeSortSelectSound', this.props.soundCollection);
    if(sortMethod != null)
      this.props.sort(sortMethod);
  },
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
        <button style={dropDownStyle} onClick={() => this.onClick()} className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Select order &nbsp;
        <span className="caret"></span></button>
        <ul className="dropdown-menu">
          <li onMouseEnter={this.onMouseOver} onClick={() => this.onClick('lowest')}><a href="#">Lowest Number (First)</a></li>
          <li onMouseEnter={this.onMouseOver} onClick={() => this.onClick('highest')}><a href="#">Highest Number (First)</a></li>
          <li onMouseEnter={this.onMouseOver} onClick={() => this.onClick('alpha')}><a href="#">A-Z</a></li>
          <li onMouseEnter={this.onMouseOver} onClick={() => this.onClick('zeta')}><a href="#">Z-A</a></li>
        </ul>
      </div>
    );
  }
});

module.exports = PokeSort;

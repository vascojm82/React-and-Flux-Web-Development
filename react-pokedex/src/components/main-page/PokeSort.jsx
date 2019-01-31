let React = require("react");
let ReactDOM = require('react-dom');

let PokeSort = React.createClass({
  onMouseOver: function(){
    this.props.playMusic('pokeSortHoverSound', this.props.soundCollection);
  },
  onMouseEnter: function(){
    this.props.playMusic('pokeSortHoverSound', this.props.soundCollection);
    $(ReactDOM.findDOMNode(this.refs.dropdownMenu)).show();
  },
  onMouseLeave: function(){
    let t = setTimeout(() => {
        $(ReactDOM.findDOMNode(this.refs.dropdownMenu)).hide();
    }, 100);

    $(ReactDOM.findDOMNode(this.refs.dropdownMenu)).on('mouseenter', () => {
        $(ReactDOM.findDOMNode(this.refs.dropdownMenu)).show();
        clearTimeout(t);
    }).on('mouseleave', () => {
        $(ReactDOM.findDOMNode(this.refs.dropdownMenu)).hide();
    });
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
        <button style={dropDownStyle} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Select order &nbsp;
        <span className="caret"></span></button>
        <ul className="dropdown-menu" ref="dropdownMenu">
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

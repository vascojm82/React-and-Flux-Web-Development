let React = require("react");
let Link = require('react-router').Link;

let NavItem = React.createClass({
  getInitialState: function(){
    return{hover: false};
  },
  mouseOver: function(e){
    this.setState({
      hover: true
    });
  },
  mouseOut: function(e){
    this.setState({
      hover: false
    });
  },
  render: function(){
    let activePage = "",
        hover_li = {},
        hover_a  = {};

    //Active Page State
    if(this.props.currentPage === this.props.title){     //If the state for the currentPage(from NavBar component) and the name of the link are equal,
      activePage = "active";                             //then that's the active page/link that was clicked
    }
    //*********************

    //Hover State
    if(this.state.hover){     //If this.state.hover === true
      hover_li = {
        background: "#000",
        opacity: .5
      }

      hover_a = {
        color: "#fff"
      }

      activePage = "";        //So 'hover' effect will apply instead of the CSS in the bootstrap 'active' class
    }else{  //if this.state.hover === false
      hover_li = {
        background: "inherit"
      }

      hover_a = this.props.aStyle;

      //If the link happens to be the current 'active' page
      if(this.props.currentPage === this.props.title){     //If the state for the currentPage(from NavBar component) and the name of the link are equal,
        activePage = "active";                             //then that's the active page/link that was clicked
      }
    }
    //*********************

    return(
      <li className={activePage} style={hover_li} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} onClick={() => {this.props.onClick(this.props.title)}}>
        <Link style={hover_a} to={this.props.href}>{this.props.title}</Link>
      </li>
    );
  }
});

module.exports = NavItem;

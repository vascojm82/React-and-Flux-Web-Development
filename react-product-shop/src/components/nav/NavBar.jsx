let React = require("react");
let NavItem = require("./NavItem.jsx");
let Link = require('react-router').Link;

let NavBar = React.createClass({
  render: function(){
    let navStyle = {
      WebKitBoxShadow: "0 0 4px rgba(0,0,0,0.4)",
      MozBoxShadow: "0 0 4px rgba(0,0,0,0.4)",
      boxShadow: "0 0 4px rgba(0,0,0,0.4)",
      borderRadius: 0
    };

    let titleStyle = {};
    let linkStyle = {};

    if(this.props.bgColor)
      navStyle.background = this.props.bgColor;

    if(this.props.titleColor)
      titleStyle.color = this.props.titleColor;

    if(this.props.linkColor)
      linkStyle.color = this.props.linkColor;

    let createLinkItem = (item, index) => {
      return <NavItem currentPage={this.props.currentPage} key={index} href={item.href} title={item.title} aStyle={linkStyle} onClick={this.props.onClick} />;
    };

    return(
      <div>
        <nav style={navStyle} className="navbar navbar-default">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link style={titleStyle} className="navbar-brand" to="/">Product Shop</Link>
          </div>
          <div className="collapse navbar-collapse" id="nav-collapse">
            <ul className="nav navbar-nav">
              {this.props.navData.map(createLinkItem)}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
});

module.exports = NavBar;

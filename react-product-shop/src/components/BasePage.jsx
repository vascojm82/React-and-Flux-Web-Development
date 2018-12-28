let React = require("react");
let NavBar = require('./nav/NavBar.jsx');
let LeadCapture = require("./forms/LeadCapture.jsx");
let Favicon = require('react-favicon');

let BasePage = React.createClass({
  render: function(){    
    let navLinks = [
      {
        title: "Home",
        href: "/"
      },
      {
        title: "iOS Course",
        href: "/product/55"
      },
      {
        title: "React Course",
        href: "/product/67"
      }
    ];

    return(
      <div className="container-fluid">
        <Favicon url="../img/favicon.ico" />
        <NavBar bgColor="#FFF" titleColor="#3097d1" navData={navLinks} />
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              {this.props.children}
            </div>
            <div className="col-sm-3">
              <LeadCapture />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = BasePage;

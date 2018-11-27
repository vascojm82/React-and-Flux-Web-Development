let React = require('react');
let Header = require('./Header.jsx');
let Body = require('./Body.jsx');

let ContainerGradient = React.createClass({
  render: function(){
    let gradient = {
      height: "100%",
      backgroundImage:
        `linear-gradient(
          to bottom,
          ${this.props.initialColor},
          ${this.props.initialColor} 300px,
          ${this.props.endingColor} 300px,
          ${this.props.endingColor} 100%
        )`
    }

    let rowPadding = {
      padding: "0 40px"
    }

    return(
      <div style={gradient}>
        <div className="container">
          <div style={rowPadding} className="row">
            <Header type="Country"/>
            <Body routeFollow={this.props.routeFollow}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ContainerGradient;

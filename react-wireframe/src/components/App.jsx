let React = require('react');
let LeftPane = require('./LeftPane.jsx');
let RightPane = require('./RightPane.jsx');

let MainContainer = React.createClass({
  render: function() {
    let backgroundColor = {
      background: "#F5F7FA"
    }

    return(
      <div style={backgroundColor} className="row">
        <LeftPane />
        <RightPane />
      </div>
    )
  }
});

module.exports = MainContainer;

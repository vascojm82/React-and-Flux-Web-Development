let React = require('react');
let Header = require('./Header.jsx');
let Body = require('./Body.jsx');

let CalcApp = React.createClass({
  render: function(){
    return(
      <div className="row">
        <Header bgdColor="#3d51b5" type="ReactJS"/>
        <Body bgdColor="#e9e9ed" />
      </div>
    );
  }
});


module.exports = CalcApp;

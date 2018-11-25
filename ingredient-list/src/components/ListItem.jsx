let React = require('react');

let ListItem = React.createClass({      //Defining React component object
  render: function() {
    return (
      <li>
        <h4>{this.props.text}</h4>
      </li> );
  }
});

module.exports = ListItem;

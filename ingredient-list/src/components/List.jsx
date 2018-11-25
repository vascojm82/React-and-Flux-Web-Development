let React = require('react');
let ListItem = require('./ListItem.jsx');

let List = React.createClass({    //Defining React component object
    render: function() {
      let createItem = function(text, index) {
        return <ListItem key={index + text} text={text} />;
      };

      return(<ul>{this.props.items.map(createItem)}</ul>);
    }
});

module.exports = List;

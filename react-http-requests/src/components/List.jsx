let React = require('react');
let ListItem = require('./ListItem.jsx');
let HTTP = require('../services/httpservice');

let List = React.createClass({    //Defining React component object
    getInitialState: function() {
      return{ingredients: []};
    },
    componentWillMount: function(){
      HTTP.get('/ingredients')
        .then(function(data){
          console.log("data: " + data);
          this.setState({
            ingredients: data
          });
        }.bind(this));  //bind callback to the react component's 'this'
    },
    render: function() {
      console.log("state.ingredients: " + this.state.ingredients);
      let listItems = this.state.ingredients.map(function(item) {
          return <ListItem key={item.id} text={item.text} />;
      });

      return(<ul>{listItems}</ul>);
    }
});

module.exports = List;

let React = require('react');
let ListItem = require('./ListItem.jsx');
let Reflux = require('reflux');
let Actions = require('../reflux/actions.jsx');
let IngredientStore = require('../reflux/ingredients-store.jsx');

//Defining React component object
let List = React.createClass({
            //'SUBSCRIBER' in the OBSERVER DESIGN PATTERN, subscribe to change events in the store
    mixins:[Reflux.listenTo(IngredientStore, 'onChange')],   //Listen for changes in the store then call 'onChange' below
    getInitialState: function() {
      return{ingredients: [], newText: ""};
    },
    componentWillMount: function(){
      Actions.getIngredients();
    },
    onChange: function(event, data) {
      this.setState({
        ingredients: data
      });
    },
    onInputChange: function(e){
      this.setState({
        newText: e.target.value
      });
    },
    onClick: function(e){
      if(this.state.newText){
        Actions.postIngredient(this.state.newText);
      }

      this.setState({
        newText: ""
      });
    },
    render: function() {
      let listItems = this.state.ingredients.map(function(item, key) {
          return <ListItem key={item.id} text={item.text} />;
      });

      return(
        <div>
          <input placeholder="Add Item" value={this.state.newText} onChange={this.onInputChange} />
          <button onClick={this.onClick}>Add Item</button>
          <ul>{listItems}</ul>
        </div>
      );
    }
});

module.exports = List;

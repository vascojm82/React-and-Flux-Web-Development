let React = require("react");

let ProductPage = React.createClass({
  getInitialState: function(){
    return{
      pid: ""
    };
  },
  componentDidMount: function(){    //Will only be called once, so the state gets set ONLY 1 time, so if the navBar opens the same ProductPage component
    this.setState({                 //again, it has already been mounted(loaded) and the 'this.state.pid' value will remain the same, it won't change.
      pid: this.props.params.productId
    });
  },
  componentWillReceiveProps: function(newProps){   //Will be called every time another React component(navBar) changes the props on the ProductPage component
    this.setState({                               //setting the 'this.state.pid' value to the new value every time this happens.
      pid: newProps.params.productId
    });
  },
  render: function(){
    return(
      <h1>Hi, I'm product number {this.state.pid}</h1>
    );
  }
});

module.exports = ProductPage;

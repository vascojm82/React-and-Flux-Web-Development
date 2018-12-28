let React = require("react");

let App = React.createClass({
  render: function(){

    //Could add a NavBar and Footer in this component and all routed components will be rendered with the navBar and Footer, avoids code repetition
    return(
        <div className="container-fluid">
          {this.props.children}
        </div>
    );
  }
});

module.exports = App;

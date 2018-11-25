let React = require('react');

//'{this.props.children}' will insert child routes, whichever is chosen (page1 or page2)
let Base = React.createClass({
  render: function(){
    return(
      <div>
        <h1>Header</h1>
        {this.props.children}
        <h1>Footer</h1>
      </div>
    );
  }
});

module.exports = Base;

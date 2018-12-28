let React = require("react");

let Description = React.createClass({
  getInitialState: function() {
    return{description: null, versions: []};
  },
  render: function(){
    return(
      <div className="col-md-12">
        <p className="poke-description">{this.state.description}</p>
      </div>
    );
  }
});

module.exports = Description;

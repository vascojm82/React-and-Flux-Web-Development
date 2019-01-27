let React = require("react");

let Description = React.createClass({
  render: function(){
    return(
      <div className="col-md-12" style={{padding: 0}}>
        <h4 style={{fontWeight: "normal"}} className="poke-description">{this.props.description}</h4>
      </div>
    );
  }
});

module.exports = Description;

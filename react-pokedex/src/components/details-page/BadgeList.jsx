let React = require("react");
let Badge = require("./Badge.jsx");

let BadgeList = React.createClass({
  getInitialState: function() {
    return{type: null, badges: []};
  },
  render: function(){
    return(
      <div className="col-md-12">
        <h4>{this.state.type}</h4>
        <Badge text={this.state.badges[i].text} color={this.state.badges[i].color} />
      </div>
    );
  }
});

module.exports = BadgeList;

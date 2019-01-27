let React = require("react");

let Badge = React.createClass({
  render: function(){
    let badgeStyle= {
      background: this.props.color,
      padding: "7px 40px",
      marginRight: 10,
      borderRadius: 5
    }

    return(
      <span style={badgeStyle} className="label label-default badges">{this.props.text}</span>
    );
  }
});

module.exports = Badge;

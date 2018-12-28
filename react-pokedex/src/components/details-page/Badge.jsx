let React = require("react");

let Badge = React.createClass({
  getInitialState: function() {
    return{text: this.props.text, color: this.props.color};
  },
  render: function(){
    let badgeStyle= {
      background: this.state.color,
      padding: "5px 40px",
      marginRight: 10,
      borderRadius: 5
    }

    return(
      <span style={badgeStyle} class="label label-default">{this.state.text}</span>
    );
  }
});

module.exports = Badge;

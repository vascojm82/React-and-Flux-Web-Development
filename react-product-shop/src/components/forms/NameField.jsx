let React = require('react');

let NameField = React.createClass({
  getInitialState: function() {
    return {
      value: ""
    };
  },
  onChange: function(e) {
    this.setState({
      value: e.target.value
    });
  },
  clear: function() {
    this.setState({
      value: ""
    });
  },
  render: function() {
    let nameFieldStyle = {
      marginBottom: 15
    }

    return(
      <input style={nameFieldStyle} className="form-control" placeholder={this.props.type + " Name"} onChange={this.onChange} value={this.state.value} />
    );
  }
});

module.exports = NameField;

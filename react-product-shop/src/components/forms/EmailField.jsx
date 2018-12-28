let React = require('react');
let validator = require('email-validator');

let EmailField = React.createClass({
  getInitialState: function() {
    return {valid: true, value: ""};
  },
  onChange: function(e) {
    let val = e.target.value;

    if(!validator.validate(val)){
      this.setState({
        valid: false,
        value: val
      });
    }else{
      this.setState({
        valid: true,
        value: val
      });
    }
  },
  clear: function() {
    this.setState({
      valid: true,
      value: ""
    });
  },
  render: function() {
    let formClass = this.state.valid ? "form-group" : "form-group has-error";
    return(
      <div className={formClass}>
        <input className="form-control" onChange={this.onChange} placeholder="Email" value={this.state.value} />
      </div>
    );
  }
});

module.exports = EmailField;

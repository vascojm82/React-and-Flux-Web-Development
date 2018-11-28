let React = require('react');
let EmailField = require('./EmailField.jsx');
let NameField = require('./NameField.jsx');

let LeadCapture = React.createClass({
  onSubmit: function(e) {
    if(!this.refs.fieldEmail.state.valid){        /* all references('ref') to all child components are stored in 'this.refs' on the parent component */
      alert("Invalid Email");
    }else{
      let httpRequestBody = {
        email: this.refs.fieldEmail.state.value,
        firstName: this.refs.fieldName.state.value
      };

      //Submit request to server
      alert("Request sent!");

      this.refs.fieldEmail.clear();
      this.refs.fieldName.clear();
    }
  },
  render: function(){
    return(
      <div className="col-sm-3">
        <div className="panel panel-default">
          <div className="panel-body">
            <NameField type="First" ref="fieldName" />  {/* 'ref' gives the parent component access to a child component's 'state' variables */}
            <EmailField ref="fieldEmail" />             {/* all references('ref') to all child components are stored in 'this.refs' on the parent component */}
            <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LeadCapture;

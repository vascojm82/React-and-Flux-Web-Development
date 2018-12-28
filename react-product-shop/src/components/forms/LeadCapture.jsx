let React = require('react');
let EmailField = require('./EmailField.jsx');
let NameField = require('./NameField.jsx');
let Reflux = require('reflux');
let Actions = require('../../ReFlux/Actions.jsx');
let EmailStore = require('../../ReFlux/EmailStore.jsx');

let LeadCapture = React.createClass({
  mixins: [Reflux.listenTo(EmailStore, 'onChange')],
  getInitialState: function(){
    return {
      submitted: false
    }
  },
  onSubmit: function(e) {
    if(!this.refs.fieldEmail.state.valid){        /* all references('ref') to all child components are stored in 'this.refs' on the parent component */
      alert("Invalid Email");
    }else{
      let subscriber = {
        email: this.refs.fieldEmail.state.value,
        firstName: this.refs.fieldName.state.value
      };

      //Submit request to server
      console.log("Request sent!");

      this.refs.fieldEmail.clear();
      this.refs.fieldName.clear();

      Actions.submitEmail(subscriber);
    }
  },
  onChange: function(msg){
    console.log(msg);
    this.setState({
      submitted: true
    });
  },
  render: function(){
    let successStyle= {
        color: "green",
        visibility: (this.state.submitted)? "visible": "hidden"
    }

    return(
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4>Get Free E-Book</h4>
        </div>
        <div className="panel-body">
          <NameField type="First" ref="fieldName" />  {/* 'ref' gives the parent component access to a child component's 'state' variables */}
          <EmailField ref="fieldEmail" />             {/* all references('ref') to all child components are stored in 'this.refs' on the parent component */}
          <div className="row">
            <div className="col-sm-6">
              <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
            </div>
            <div className="col-sm-2">
              <h5 style={successStyle}>Success!</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LeadCapture;

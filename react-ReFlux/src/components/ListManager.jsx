let React = require('react');
let List = require('./List.jsx');

let ListManager = React.createClass({   //This returns a component directive
  render: function(){

    let divStyle = {
      marginTop: 10    //It knows it's px
    }

    let headingStyle = {
      background: "#337ab7"
    }

    let headingBorder = {
      borderColor: "#337ab7"
    }

    return (
      <div style={divStyle} className="col-sm-4">
        <div style={headingBorder} className="panel panel-primary">
          <div style={headingStyle} className="panel-heading">
            <h3>{this.props.title}</h3>
          </div>
          <div className="panel-body">
            <List />
          </div>
        </div>
      </div>
    )
  }
});

module.exports = ListManager;

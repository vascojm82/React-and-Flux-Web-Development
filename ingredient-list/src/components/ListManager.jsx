let React = require('react');
let List = require('./List.jsx');

let ListManager = React.createClass({   //This returns a component directive
  getInitialState: function(){     //called only once when the component loads
    return {items: [], newItemText:''};   //'newItemText' is a buffer variable
  },
  onChange: function(e){
    this.setState({newItemText: e.target.value});
  },
  handleSubmit: function(e){
    e.preventDefault();
                                            //*** this.props is READ-ONLY ***
    let currentItems = this.state.items;    //*** this.state has data that CAN BE CHANGED ***
    currentItems.push(this.state.newItemText);

    this.setState({items: currentItems, newItemText: ''});    //Used to change state of Object's (Component) properties
  },
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

    if(this.props.headingColor){
      headingStyle.background = this.props.headingColor;
      headingStyle.borderColor = this.props.headingColor;
      headingBorder.borderColor = this.props.headingColor;
    }

    return (
      <div style={divStyle} className="col-sm-4">
        <div style={headingBorder} className="panel panel-primary">
          <div style={headingStyle} className="panel-heading">
            <h3>{this.props.title}</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-sm-9">
                  <input className="form-control" onChange={this.onChange} value={this.state.newItemText} />
                </div>
                <div className="col-sm-3">
                  <button className="btn btn-primary">Add</button>
                </div>
              </div>
            </form>
          </div>
          <List items={this.state.items} />
        </div>
      </div>
    )
  }
});

module.exports = ListManager;

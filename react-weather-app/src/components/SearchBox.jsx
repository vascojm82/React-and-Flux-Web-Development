let React = require('react');

let SearchBox = React.createClass({    //Defining React component object
  getInitialState: function(){     //called only once when the component loads
    return {newSearchText:''};
  },
  onChange: function(e){
    this.setState({newSearchText: e.target.value});
    this.props.searchOnChange(e);
  },
  render: function() {
    let inputStyle = {
      width: "90%",
      display: "inline-block",
      border: "none",
      background: this.props.backgroundColor,
      color: "#FFF"
    }

    let searchStyle = {
      width: "10%",
      textAlign: "center"
    }

    let todaysDate = {
      fontSize: "small",
      paddingLeft: 15
    }

    return(
      <div className="form-group">
        <input style={inputStyle} type="text" className="form-control" id="usr" onChange={this.onChange} placeholder={this.props.location} value={this.state.newSearchText} /><i style={searchStyle} onClick={this.props.searchClick} className="fa fa-search" aria-hidden="true"></i>
        <p style={todaysDate}>{this.props.date}</p>
      </div>
    );
  }
});

module.exports = SearchBox;

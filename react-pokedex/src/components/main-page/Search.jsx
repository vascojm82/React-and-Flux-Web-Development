let React = require("react");

let Search = React.createClass({
  getInitialState: function() {
    return{chevron: `fa fa-chevron-circle-down`, searchDropdown: `col-md-12`};
  },
  onClick: function(){
    if(this.state.chevron === `fa fa-chevron-circle-down`){
      this.setState({
        chevron: `fa fa-chevron-circle-up`,
        searchDropdown: `col-md-12 dropdown-menu-animate`
      });
    }else{
      this.setState({
        chevron: `fa fa-chevron-circle-down`,
        searchDropdown: `col-md-12 dropdown-menu-remove`
      });
    }

  },
  render: function(){
    let advancedSearchStyle = {
      background: "#616161",
      minHeight: 41
    }

    let trapezoidLeft= {
      width: 30,
	    minHeight: 10,
      display: "inline-block",
	    transform: "skew(30deg)",
	    background: "#616161",
      borderBottomLeftRadius: 5,
      zIndex: 9
    }

    let trapezoidRight= {
      width: 30,
	    minHeight: 10,
      display: "inline-block",
	    transform: "skew(-30deg)",
	    background: "#616161",
      borderBottomRightRadius: 5,
      zIndex: 9
    }

    let advancedSearchLegendStyle = {
      display: "inline-block",
      background: "#616161",
      color: "#fff",
      zIndex: 1,
      width: "92.5%",
      position: "absolute",
      marginLeft: "-18px"
    }

    let legendH5Style= {
      marginTop: 1
    }

    let trapezoidH5Style = {
      marginBottom: 0
    }

    return(
      <div className="row">
        <div className={this.state.searchDropdown} style={advancedSearchStyle}></div>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div style={trapezoidLeft}><h5 style={trapezoidH5Style}>&nbsp;</h5></div>
              <div style={advancedSearchLegendStyle}>
                <h5 style={legendH5Style} className="text-center">Show Advanced Search &nbsp;<i onClick={this.onClick} className={this.state.chevron}></i></h5>
              </div>
              <div style={trapezoidRight} className="pull-right"><h5 style={trapezoidH5Style}>&nbsp;</h5></div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Search;

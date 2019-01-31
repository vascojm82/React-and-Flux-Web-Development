let React = require("react");
let Actions = require('../../reflux/actions.jsx');

let Search = React.createClass({
  getInitialState: function() {
    return{chevron: `fa fa-chevron-circle-down`, searchDropdown: `col-md-12`, revealAdvanceSearch:'row hideAdvancedSearch', advancedSearch: {}};
  },
  onMouseOver: function(){
    this.props.playMusic('pokeSortHoverSound', this.props.soundCollection);
  },
  onClick: function(){
    this.props.playMusic('pokeSortSelectSound', this.props.soundCollection);

    if(this.state.chevron === `fa fa-chevron-circle-down`){
      this.setState({
        chevron: `fa fa-chevron-circle-up`,
        searchDropdown: `col-md-12 dropdown-menu-animate`
      }, () => {
        setTimeout(() => {
          this.setState({
            revealAdvanceSearch: `row showAdvancedSearch`
          })
        }, 300);
      });
    }else{
      this.setState({
        chevron: `fa fa-chevron-circle-down`,
        searchDropdown: `col-md-12 dropdown-menu-remove`,
        revealAdvanceSearch: `row hideAdvancedSearch`
      });
    }

  },
  advancedSearchGo: function() {
    this.props.playMusic('pokeSortSelectSound', this.props.soundCollection);

    let obj ={
      species: this.refs.species.value,
      type: this.refs.type.value,
      move: this.refs.move.value,
      height: this.refs.height.value,
      ability: this.refs.ability.value,
      weight: this.refs.weight.value
    }

    this.setState({
      advancedSearch: obj
    }, () => {
      console.log("Advanced Search: ", this.state.advancedSearch);
      Actions.getPokemons("all", this.state.advancedSearch);
    });
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

    let searchBtn = {
      background: "rgb(255, 97, 9)",
      borderColor: "rgb(255, 97, 9)",
      color: "rgb(255, 255, 255)",
      marginBottom: 20
    }

    let labelWidth = {
      width: 40
    }

    return(
      <div className="row">
        <div className={this.state.searchDropdown} style={advancedSearchStyle}>
          <div className={this.state.revealAdvanceSearch}>
            <div className="col-md-3">
            </div>
            <div className="col-md-6">
              <div className="row" style={{marginTop: 20}}>
                <div className="form-horizontal col-md-6" style={{padding: "0 15px"}}>
                  <div className="form-group text-center">
                    <label style={labelWidth}>Species</label>
                    <input ref="species" type="text" className="form-control text-box" id="species" placeholder="" />
                  </div>
                  <div className="form-group text-center">
                    <label style={labelWidth}>Type</label>
                    <input ref="type" type="text" className="form-control text-box" id="type" placeholder="" />
                  </div>
                  <div className="form-group text-center">
                    <label style={labelWidth}>Move</label>
                    <input ref="move" type="text" className="form-control text-box" id="move" placeholder="" />
                  </div>
                </div>
                <div className="form-horizontal col-md-6" style={{padding: "0 15px"}}>
                  <div className="form-group text-center">
                    <label style={labelWidth}>Height</label>
                    <input ref="height" type="text" className="form-control text-box" id="height" placeholder="" />
                  </div>
                  <div className="form-group text-center">
                    <label style={labelWidth}>Ability</label>
                    <input ref="ability" type="text" className="form-control text-box" id="ability" placeholder="" />
                  </div>
                  <div className="form-group text-center">
                    <label style={labelWidth}>Weight</label>
                    <input ref="weight" type="text" className="form-control text-box" id="weight" placeholder="" />
                  </div>
                  <button type="submit" className="btn btn-default hvr-grow pull-right" style={searchBtn} onMouseEnter={this.onMouseOver} onClick={this.advancedSearchGo}>Search</button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
            </div>
          </div>
        </div>
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

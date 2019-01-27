let React = require("react");

let DetailsPanel = React.createClass({
  render: function(){
    let abilities = [];

    if(this.props.characteristics.abilities){
      this.props.characteristics.abilities.map((item) => {
        abilities.push(<h4 key={abilities.length}>{item.ability.name}</h4>);
      })
    }

    return(
      <div className="col-md-12">
        <div className="row" style={{backgroundColor: "#00a9dc", padding:20, borderRadius:5, marginTop:20, marginBottom:10}}>
          <div className="col-md-6" style={{paddingRight: 0}}>
            <div style={{width:"fit-content", margin:"auto"}}>
              <h4 className="detailsHeading">Height:</h4>
              <h4>{this.props.characteristics.height}</h4>
              <h4 className="detailsHeading">Weight:</h4>
              <h4>{this.props.characteristics.weight}</h4>
              <h4 className="detailsHeading">Stats:</h4>
              <h4>{this.props.characteristics.ability}</h4>
            </div>
          </div>
          <div className="col-md-6" style={{paddingLeft: 0}}>
            <div style={{width:"fit-content", margin:"auto"}}>
              <h4 className="detailsHeading">Species</h4>
              <h4>{this.props.characteristics.species}</h4>
              <h4 className="detailsHeading">Abilities</h4>
              {abilities}
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = DetailsPanel;

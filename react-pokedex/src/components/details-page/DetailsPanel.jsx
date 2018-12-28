let React = require("react");

let DetailsPanel = React.createClass({
  getInitialState: function() {
    return{characteristics: {}};
  },
  render: function(){
    return(
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-6">
            <h5>Height:</h5>
            <h4>{this.characteristics.height}</h4>
            <h5>Weight:</h5>
            <h4>{this.characteristics.weight}</h4>
            <h5>Gender</h5>
            <h4><i class="fa fa-mars"></i>&nbsp;<i class="fa fa-venus"></i></h4>
          </div>
          <div className="col-md-6">
            <h5>Species</h5>
            <h4>{this.characteristics.species}</h4>
            <h5>Abilities</h5>
            <h4>{this.characteristics.abilities}</h4>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = DetailsPanel;

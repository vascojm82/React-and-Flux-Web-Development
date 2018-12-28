let React = require("react");

let Header = React.createClass({
  render: function(){
    return(
      <div className="row">
        <div className="col-md-12">
          <div className="left-arrow">
            <h4><i class="fa fa-chevron-circle-left"></i> #001 Bulbasaur</h4>
          </div>
          <div className="right-arrow">
            <h4><i class="fa fa-chevron-circle-right"></i> Venasaur #003</h4>
          </div>
        </div>
        <div className="col-md-12">
          <h2 className="text-center">Ivysaur #002</h2>
        </div>
      </div>
    );
  }
});

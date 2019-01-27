let React = require("react");
let EasyChart = require("react-easy-chart");
let BarChart = EasyChart.BarChart;

let StatsChart = React.createClass({
  render: function(){
    let types = (Array.isArray(this.props.characteristics.types))? this.props.characteristics.types.length: 1;

    console.log("Types: ", types);
    return(
      <div className="col-md-12" style={{backgroundColor: "#a4a4a4", borderRadius:5}}>
        <div className="barchart" style={{margin:"auto", width: "fit-content", paddingTop:10}}>
          <h4>Details</h4>
          <BarChart
            colorBars
            axes
            data={[
              {x: 'Height', y: this.props.characteristics.height, color: '#1f77b4'},
              {x: 'Weight', y: this.props.characteristics.weight, color: '#8cd033'},
              {x: 'Base Experience', y: this.props.characteristics.base_experience, color: '#c37ace'},
              {x: 'Ability', y: this.props.characteristics.ability, color: '#ff7400'},
              {x: 'Types', y: types},
              {x: 'Weaknesses', y: 40, color: '#00a9dc'}
            ]}
          />
        </div>
      </div>
    );
  }
});

module.exports = StatsChart;

let React = require("react");
let EasyChart = require("react-easy-chart");
let BarChart = EasyChart.BarChart;
// import {BarChart} from 'react-easy-chart';

let StatsChart = React.createClass({
  render: function(){
    return(
      <BarChart
        axes
        data={[
          {x: 'A', y: 20},
          {x: 'B', y: 30},
          {x: 'C', y: 40},
          {x: 'D', y: 20},
          {x: 'E', y: 40},
          {x: 'F', y: 25},
          {x: 'G', y: 5}
        ]}
      />
    );
  }
});

module.exports = StatsChart;

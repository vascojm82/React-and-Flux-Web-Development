let React = require('react');
let Tile = require('./Tile.jsx');
let helpers = require('../helpers/helpers');

let List = React.createClass({    //Defining React component object
    getInitialState: function(){          //called only once when the component loads
      return{searchStr:'Madrid, Spain', weatherData: {}, tileList: []};
    },
    createTileList: function(){
      let list = [];
      let tileHeaderColors = ['#ec4444', '#79b7ae', '#e68e4f', '#a6a43b', '#f27e7f', '#817871', '#367db5', '#357cb4', '#9770a7', '#ce4571', '#3f3f3f'];

      for(i=0; i<10; i++){
        list.push(<Tile location={this.state.searchStr} weatherData={this.state.weatherData} index={i} headerColor={tileHeaderColors[Math.floor(Math.random() * 10) + 1]} />);
      }

      return list;
    },
    componentWillMount: function(){
      helpers.getWeatherData(this.state.searchStr)
        .then((weatherObject) => {
          this.setState({
            weatherData: weatherObject
          }, function(){
              this.setState({
                tileList: this.createTileList()
              });
              console.log(`tileList --- componentWillMount: ${this.state.tileList}`);
          });

          console.log(`weatherObj --- componentWillMount: ${JSON.stringify(this.state.weatherData)}`);
        });
    },
    render: function() {
      let rowWidth = {
        width: "95%",
        margin: "auto"
      }

      let colMarginBottom = {
        marginBottom: 80
      }

      return(
        <div className="col-md-12">
          <div style={rowWidth} className="row">
            <div className="col-md-12 top-line">
              <div className="row">
                {this.state.tileList}
              </div>
            </div>
          </div>
        </div>
      );
    }
});

module.exports = List;

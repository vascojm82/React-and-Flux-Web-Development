let React = require('react');
let SearchBox = require('./SearchBox.jsx');
let Json = require('circular-json');
let helpers = require('../helpers/helpers');

let Tile = React.createClass({      //Defining React component object
  getInitialState: function(){      //called only once when the component loads
    return{searchStr:'', weatherData: {}};
  },
  searchOnChange: function(e) {
    this.setState({
      searchStr: e.target.value
    });
  },
  searchClick: function() {
    console.log("searchClick --- " + this.state.searchStr);
    helpers.getWeatherData(this.state.searchStr)
      .then((weatherObject) => {
        this.setState({
          weatherData: weatherObject
        });
      });
  },
  componentWillMount: function(){
    this.setState({
      searchStr: this.props.location,
      weatherData: this.props.weatherData
    });
  },
  render: function() {
    let panelIndex = `panel-${this.props.index}`;

    let colHeight = {
      maxHeight: 470
    }

    let panelMargin = {
      margin: "10px 0",
      borderRadius: "4px"
    }

    let panelHeaderStyle = {
      background: this.props.headerColor,
      border: `1px solid ${this.props.headerColor}`,
      borderRadius: "4px",
      color: "#FFF"
    }

    let panelBodyRowColor1 = {
      background: "#EBEBEB"
    }

    let panelBodyRowColor2 = {
      background: "#f5f5f5"
    }

    let paddingTop10 = {
      paddingTop: 10
    }

    let paddingTop15 = {
      paddingTop: 15
    }

    console.log("Tile --- render --- " + JSON.stringify(this.state.weatherData.formattedTime));

    return (
      <div style={colHeight} className="col-sm-15 col-md-15 col-lg-15">
          <div id={panelIndex} style={panelMargin} className="panel">
            <div style={panelHeaderStyle} className="panel-header">
              <div className="row">
                <div className="col-xs-12 col-md-12">
                  <SearchBox date={this.state.weatherData.formattedTime[0]} location={this.state.searchStr} backgroundColor={panelHeaderStyle.background} searchOnChange={this.searchOnChange} searchClick={this.searchClick} />
                </div>
                <div className="col-xs-6 col-md-6 weather-icon">
                  <h1 className="text-center"><i className={helpers.checkIconCode(this.state.weatherData.icons[0])}></i></h1>
                </div>
                <div className="col-xs-6 col-md-6 temperature">
                  <h1 className="text-center">{this.state.weatherData.temperature_day[0]}<sup>&#176;</sup></h1>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-6 col-md-7 wind-speed-humidity">
                  <h4 className="text-center" className="text-center"><i className="wi wi-wind-beaufort-1"> 7mph NE</i></h4>
                </div>
                <div className="col-xs-6 col-md-5 wind-speed-humidity">
                  <h4 className="text-center" className="text-center"><i className="wi wi-humidity"> {this.state.weatherData.humidity[0]}%</i></h4>
                </div>
              </div>
            </div>
            <div className="panel-body">
              <div className="row">
                <div className="col-md-12">
                  <div style={panelBodyRowColor1} className="row">
                    <div className="col-xs-6 col-md-6">
                      <p className="text-center" style={paddingTop10}>{this.state.weatherData.longDate[1]}</p>
                    </div>
                    <div className="col-xs-2 col-md-2">
                      <i style={paddingTop15} className={helpers.checkIconCode(this.state.weatherData.icons[1])} aria-hidden="true"></i>
                    </div>
                    <div className="col-xs-4 col-md-4">
                      <p className="text-center" style={paddingTop10}>{this.state.weatherData.temperature_min[1]}<sup>&#176;</sup> / {this.state.weatherData.temperature_max[1]}<sup>&#176;</sup></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div style={panelBodyRowColor2} className="row">
                    <div className="col-xs-6 col-md-6">
                      <p className="text-center" style={paddingTop10}>{this.state.weatherData.longDate[2]}</p>
                    </div>
                    <div className="col-xs-2 col-md-2">
                      <i style={paddingTop15} className={helpers.checkIconCode(this.state.weatherData.icons[2])} aria-hidden="true"></i>
                    </div>
                    <div className="col-xs-4 col-md-4">
                      <p className="text-center" style={paddingTop10}>{this.state.weatherData.temperature_min[2]}<sup>&#176;</sup> / {this.state.weatherData.temperature_min[2]}<sup>&#176;</sup></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div style={panelBodyRowColor1} className="row">
                    <div className="col-xs-6 col-md-6">
                      <p className="text-center" style={paddingTop10}>{this.state.weatherData.longDate[3]}</p>
                    </div>
                    <div className="col-xs-2 col-md-2">
                      <i style={paddingTop15} className={helpers.checkIconCode(this.state.weatherData.icons[3])} aria-hidden="true"></i>
                    </div>
                    <div className="col-xs-4 col-md-4">
                      <p className="text-center" style={paddingTop10}>{this.state.weatherData.temperature_min[3]}<sup>&#176;</sup> / {this.state.weatherData.temperature_min[3]}<sup>&#176;</sup></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div style={panelBodyRowColor2} className="row">
                    <div className="col-xs-6 col-md-6">
                      <p className="text-center" style={paddingTop10}>{this.state.weatherData.longDate[4]}</p>
                    </div>
                    <div className="col-xs-2 col-md-2">
                      <i style={paddingTop15} className={helpers.checkIconCode(this.state.weatherData.icons[4])} aria-hidden="true"></i>
                    </div>
                    <div className="col-xs-4 col-md-4">
                      <p className="text-center" style={paddingTop10}>{this.state.weatherData.temperature_min[4]}<sup>&#176;</sup> / {this.state.weatherData.temperature_min[4]}<sup>&#176;</sup></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      );
  }
});

module.exports = Tile;

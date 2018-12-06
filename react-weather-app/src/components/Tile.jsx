let React = require('react');
let HTTP = require('../services/httpservice');
let SearchBox = require('./SearchBox.jsx');
let Json = require('circular-json');

let ListItem = React.createClass({      //Defining React component object
  getInitialState: function(){          //called only once when the component loads
    return{searchStr:'Madrid, Spain', formattedTime:[], longDate: [], temperature_day:[],
           temperature_min: [], temperature_max: [], icons:[], humidity:[]};
  },
  calculateTime: function(unixTime){
    let date = new Date(unixTime*1000);
    // Date format: MM/DD/YYYY
    let tDate = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();
    // Hours part from the timestamp
    let hours = date.getHours();
    // Minutes part from the timestamp
    let minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    let seconds = "0" + date.getSeconds();
    let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    let longDate = date.toLocaleString('en-GB', { day: 'numeric', month: 'long' });

    let timeObject = {
      unixTime: unixTime,
      date: date,
      tDate: tDate,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      formattedTime: formattedTime,
      longDate: longDate
    }

    return timeObject;
  },
  getWeatherData: function(location){
    HTTP.get(`q=${location}&cnt=5&units=imperial&appid=3ff527abfa8edebc287dd4bcf540c174`)
      .then(function(data){
        let _formattedTime = [];
        let _longDate = [];
        let tDay  = [];
        let tMin  = [];
        let tMax  = [];
        let _icons = [];
        let _humidity = [];

        for(i=0; i<data.list.length; i++){
          let dt = this.calculateTime(data.list[i].dt);
          let formatted_time = dt.tDate + " " + dt.formattedTime;
          let long_date = dt.longDate;

          _formattedTime[i] = formatted_time;
          _longDate[i] = long_date;
          tDay[i] = parseInt(data.list[i].temp.day);
          tMin[i] = parseInt(data.list[i].temp.min);
          tMax[i] = parseInt(data.list[i].temp.max);
          _icons[i] = data.list[i].weather[0].icon;
          _humidity[i] = parseInt(data.list[i].humidity);
        }

        this.setState({
          formattedTime: _formattedTime,
          longDate: _longDate,
          temperature_day: tDay,
          temperature_min: tMin,
          temperature_max: tMax,
          icons: _icons,
          humidity: _humidity
        }, function(){

        });
      }.bind(this));  //bind callback to the react component's 'this'
  },
  searchOnChange: function(e) {
    this.setState({searchStr: e.target.value});
  },
  searchClick: function() {
    console.log("searchClick --- " + this.state.searchStr);
    this.getWeatherData(this.state.searchStr);
  },
  componentWillMount: function() {
    this.getWeatherData(this.state.searchStr);
  },
  checkIconCode: function(code){
    let wiClass= "";

    if(code === "01d"){
      wiClass="wi wi-day-sunny";
    }if(code === "02d"){
      wiClass="wi wi-day-cloudy";
    }if(code === "03d"){
      wiClass="wi wi-cloud";
    }if(code === "04d"){
      wiClass="wi wi-cloudy";
    }if(code === "09d"){
      wiClass="wi wi-day-showers";
    }if(code === "10d"){
      wiClass="wi wi-day-rain";
    }if(code === "11d"){
      wiClass="wi wi-day-thunderstorm";
    }if(code === "13d"){
      wiClass="wi wi-day-snow";
    }if(code === "50d"){
      wiClass="wi wi-day-fog";
    }if(code === "01n"){
      wiClass="wi wi-night-clear";
    }if(code === "02n"){
      wiClass="wi wi-night-partly-cloudy";
    }if(code === "03n"){
      wiClass="wi wi-night-cloudy";
    }if(code === "04n"){
      wiClass="wi wi wi-cloudy";
    }if(code === "09n"){
      wiClass="wi wi-night-showers";
    }if(code === "10n"){
      wiClass="wi wi-night-rain";
    }if(code === "11n"){
      wiClass="wi wi-night-thunderstorm";
    }if(code === "13n"){
      wiClass="wi wi-night-snow";
    }if(code === "50n"){
      wiClass="wi wi-night-fog";
    }

    return wiClass;
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

    return (
      <div style={colHeight} className="col-md-15">
          <div id={panelIndex} style={panelMargin} className="panel">
            <div style={panelHeaderStyle} className="panel-header">
              <div className="row">
                <div className="col-xs-12 col-md-12">
                  <SearchBox date={this.state.formattedTime[0]} location={this.state.searchStr} backgroundColor={panelHeaderStyle.background} searchOnChange={this.searchOnChange} searchClick={this.searchClick} />
                </div>
                <div className="col-xs-6 col-md-6 weather-icon">
                  <h1 className="text-center"><i className={this.checkIconCode(this.state.icons[0])}></i></h1>
                </div>
                <div className="col-xs-6 col-md-6 temperature">
                  <h1 className="text-center">{this.state.temperature_day[0]}<sup>&#176;</sup></h1>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-6 col-md-7 wind-speed-humidity">
                  <h4 className="text-center" className="text-center"><i className="wi wi-wind-beaufort-1"> 7mph NE</i></h4>
                </div>
                <div className="col-xs-6 col-md-5 wind-speed-humidity">
                  <h4 className="text-center" className="text-center"><i className="wi wi-humidity"> {this.state.humidity[0]}%</i></h4>
                </div>
              </div>
            </div>
            <div className="panel-body">
              <div className="row">
                <div className="col-md-12">
                  <div style={panelBodyRowColor1} className="row">
                    <div className="col-xs-6 col-md-6">
                      <p className="text-center" style={paddingTop10}>{this.state.longDate[1]}</p>
                    </div>
                    <div className="col-xs-2 col-md-2">
                      <i style={paddingTop15} className={this.checkIconCode(this.state.icons[1])} aria-hidden="true"></i>
                    </div>
                    <div className="col-xs-4 col-md-4">
                      <p className="text-center" style={paddingTop10}>{this.state.temperature_min[1]}<sup>&#176;</sup> / {this.state.temperature_max[1]}<sup>&#176;</sup></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div style={panelBodyRowColor2} className="row">
                    <div className="col-xs-6 col-md-6">
                      <p className="text-center" style={paddingTop10}>{this.state.longDate[2]}</p>
                    </div>
                    <div className="col-xs-2 col-md-2">
                      <i style={paddingTop15} className={this.checkIconCode(this.state.icons[2])} aria-hidden="true"></i>
                    </div>
                    <div className="col-xs-4 col-md-4">
                      <p className="text-center" style={paddingTop10}>{this.state.temperature_min[2]}<sup>&#176;</sup> / {this.state.temperature_min[2]}<sup>&#176;</sup></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div style={panelBodyRowColor1} className="row">
                    <div className="col-xs-6 col-md-6">
                      <p className="text-center" style={paddingTop10}>{this.state.longDate[3]}</p>
                    </div>
                    <div className="col-xs-2 col-md-2">
                      <i style={paddingTop15} className={this.checkIconCode(this.state.icons[3])} aria-hidden="true"></i>
                    </div>
                    <div className="col-xs-4 col-md-4">
                      <p className="text-center" style={paddingTop10}>{this.state.temperature_min[3]}<sup>&#176;</sup> / {this.state.temperature_min[3]}<sup>&#176;</sup></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div style={panelBodyRowColor2} className="row">
                    <div className="col-xs-6 col-md-6">
                      <p className="text-center" style={paddingTop10}>{this.state.longDate[4]}</p>
                    </div>
                    <div className="col-xs-2 col-md-2">
                      <i style={paddingTop15} className={this.checkIconCode(this.state.icons[4])} aria-hidden="true"></i>
                    </div>
                    <div className="col-xs-4 col-md-4">
                      <p className="text-center" style={paddingTop10}>{this.state.temperature_min[4]}<sup>&#176;</sup> / {this.state.temperature_min[4]}<sup>&#176;</sup></p>
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

module.exports = ListItem;

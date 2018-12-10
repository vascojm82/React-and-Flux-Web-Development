let HTTP = require('../services/httpservice');

let calculateTime = (unixTime) => {
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
}

let checkIconCode = (code) => {
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
}

let getWeatherData = (location) => {
  return new Promise((resolve, reject) => {
    HTTP.get(`q=${location}&cnt=5&units=imperial&appid=3ff527abfa8edebc287dd4bcf540c174`)
      .then( function(data){
        let _formattedTime = [];
        let _longDate = [];
        let tDay  = [];
        let tMin  = [];
        let tMax  = [];
        let _icons = [];
        let _humidity = [];
        let weatherObject = {};

        for(i=0; i<data.list.length; i++){
          let dt = calculateTime(data.list[i].dt);
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

        weatherObject = {
          formattedTime: _formattedTime,
          longDate: _longDate,
          temperature_day: tDay,
          temperature_min: tMin,
          temperature_max: tMax,
          icons: _icons,
          humidity: _humidity
        };

        console.log(`Weather Object --- helpers ---: ${JSON.stringify(weatherObject)}`);

        resolve(weatherObject);
    }).catch((error) => {
        reject(error);
    });
  });
}

// let getWeatherData = (location) => {
//   HTTP.get(`q=${location}&cnt=5&units=imperial&appid=3ff527abfa8edebc287dd4bcf540c174`)
//     .then( function(data){
//       let _formattedTime = [];
//       let _longDate = [];
//       let tDay  = [];
//       let tMin  = [];
//       let tMax  = [];
//       let _icons = [];
//       let _humidity = [];
//       let weatherObject = {};
//
//       for(i=0; i<data.list.length; i++){
//         let dt = calculateTime(data.list[i].dt);
//         let formatted_time = dt.tDate + " " + dt.formattedTime;
//         let long_date = dt.longDate;
//
//         _formattedTime[i] = formatted_time;
//         _longDate[i] = long_date;
//         tDay[i] = parseInt(data.list[i].temp.day);
//         tMin[i] = parseInt(data.list[i].temp.min);
//         tMax[i] = parseInt(data.list[i].temp.max);
//         _icons[i] = data.list[i].weather[0].icon;
//         _humidity[i] = parseInt(data.list[i].humidity);
//       }
//
//       weatherObject = {
//         formattedTime: _formattedTime,
//         longDate: _longDate,
//         temperature_day: tDay,
//         temperature_min: tMin,
//         temperature_max: tMax,
//         icons: _icons,
//         humidity: _humidity
//       };
//
//       console.log(`Weather Object --- helpers ---: ${JSON.stringify(weatherObject)}`);
//
//       return weatherObject;
//   });
// }

module.exports = {
  calculateTime,
  checkIconCode,
  getWeatherData
};

let React = require('react');
let TileList = require('./TileList.jsx');

let WeatherApp = React.createClass({    //Defining React component object
    render: function() {
      return(
        <div>
            <TileList />
        </div>
      );
    }
});

module.exports = WeatherApp;

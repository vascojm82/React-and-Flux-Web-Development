let React = require('react');
let Tile = require('./Tile.jsx');

let List = React.createClass({    //Defining React component object
    render: function() {
      let rowWidth = {
        width: "95%",
        margin: "auto"
      }

      let colMarginBottom = {
        marginBottom: 80
      }

      let tileList = [];
      let tileHeaderColors = ['#ec4444', '#79b7ae', '#e68e4f', '#a6a43b', '#f27e7f', '#817871', '#367db5', '#357cb4', '#9770a7', '#ce4571', '#3f3f3f'];

      for(i=0; i<10; i++){
        tileList.push(<Tile index={i} headerColor={tileHeaderColors[Math.floor(Math.random() * 10) + 1]} />);
      }

      return(
        <div className="col-md-12">
          <div style={rowWidth} className="row">
            <div className="col-md-12 top-line">
              <div className="row">
                {tileList}
              </div>
            </div>
          </div>
        </div>
      );
    }
});

module.exports = List;

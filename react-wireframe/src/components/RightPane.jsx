let React = require('react');
let Card = require('./Card.jsx');
let Label = require('./Label.jsx');

let RightPane = React.createClass({
  render: function(){
    let topMargin = {
      marginTop: 20
    }

    return(
      <div className="col-md-2">
        <div style={topMargin} className="row">
          <Card cardValue="18°" cardDescription="Paris" mode="temp"/>
          <Label labelDescription="New Visitors" labelValue="1.5k" headingColor="#0096d0" textColor="#FFF" />
          <Label labelDescription="Bounce Rate" labelValue="50%" headingColor="#b28ad6" textColor="#FFF" />
          <Label labelDescription="Searchs" labelValue="28%" headingColor="#ff4826" textColor="#FFF" />
          <Label labelDescription="Traffic" labelValue="140.5kb" headingColor="#63c254" textColor="#FFF" />
        </div>
      </div>
    )
  }
});

module.exports = RightPane;

let React = require('react');
let Card = require('./Card.jsx');
let Panel = require('./Panel.jsx');

let LeftPane = React.createClass({
  render: function(){
    let panelArray = {
      panelCol1 : {
        c1Value: "15080",
        c1Desc: "Short Views"
      },
      panelCol2 : {
        c2Value: "12000",
        c2Desc: "Likes"
      },
      panelCol3 : {
        c3Value: "5100",
        c3Desc: "Comments"
      }
    }

    let topMargin = {
      marginTop: 20
    }

    return(
      <div className="col-md-10">
        <div style={topMargin} className="row">
          <Card cardValue="20" cardDescription="New Followers added this month" mode="plain"/>
          <Card cardValue="$1250" cardDescription="Average Monthly Income" mode="plain"/>
          <Card cardValue="$13865" cardDescription="Yearly Income Goal" mode="plain"/>
        </div>

        <div className="row">
          <Panel panelValue={panelArray} backgroundColor="#0096d0" />
        </div>

        <div className="row">
          <Panel panelValue={panelArray} backgroundColor="#cd59ae" />
        </div>
      </div>
    )
  }
});

module.exports = LeftPane;

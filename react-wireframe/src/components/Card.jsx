let React = require('react');

let Card = React.createClass({
  render: function(){
    let cardColor = {
      background: "#ffffff",
      color: "#000",
      padding: "20px 40px 44px 40px",
      marginBottom: 20,
      border: "1px solid #E8EAEB"
    }

    let textStyle = {
      textAlign: "left",
      marginBottom: 10
    }

    let pColor = {
      color: "#C8C9C9"
    }

    let colSize = `col-md-4`;

    if(this.props.mode === "temp"){
      cardColor.background = "#ff8a00";
      cardColor.color = "#FFF";
      pColor.color = "#FFF";
      cardColor.padding = "10px 40px 40px 40px";
      colSize = `col-md-12`;
      textStyle.textAlign = "center";
      pColor.textAlign = "center";
      textStyle.marginBottom = 0
    }

    return(
      <div className={colSize}>
        <div style={cardColor} className="card">
          <div className="card-body">
            { this.props.mode === "plain"
              ? <h4 style={textStyle}><strong>{this.props.cardValue}</strong></h4>
              : <h2 style={textStyle}>{this.props.cardValue}</h2>
            }
            <p style={textStyle,pColor}>{this.props.cardDescription}</p>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Card;

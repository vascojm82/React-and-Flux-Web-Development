let React = require('react');

let Panel = React.createClass({
  render: function(){
    let panelSize = {
      height: 300
    }

    let panelBody = {
      height: 220,
      background: this.props.backgroundColor
    }

    let panelFooter = {
      background: "#484d4d",
      color: "#FFF",
      height: 80,
      textAlign: "center"
    }

    let panelFooterDescColor = {
      color: "#ACAEAE"
    }

    let marginBottomReset = {
      marginBottom: 5
    }

    return(
      <div className="col-md-12">
        <div style={panelSize} className="panel">
          <div style={panelBody} className="panel-body">
          </div>
          <div style={panelFooter} className="panel-footer">
            <div className="row">
              <div className="col-xs-4 col-md-4">
                <h4 style={marginBottomReset}>{this.props.panelValue.panelCol1.c1Value}</h4>
                <p style={panelFooterDescColor}>{this.props.panelValue.panelCol1.c1Desc}</p>
              </div>
              <div className="col-xs-4 col-md-4">
                <h4 style={marginBottomReset}>{this.props.panelValue.panelCol2.c2Value}</h4>
                <p style={panelFooterDescColor}>{this.props.panelValue.panelCol2.c2Desc}</p>
              </div>
              <div className="col-xs-4 col-md-4">
                <h4 style={marginBottomReset}>{this.props.panelValue.panelCol3.c3Value}</h4>
                <p style={panelFooterDescColor}>{this.props.panelValue.panelCol3.c3Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Panel;

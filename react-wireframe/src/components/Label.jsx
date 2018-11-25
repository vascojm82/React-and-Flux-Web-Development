let React = require('react');

let Label = React.createClass({
  render: function(){
    let cardBorder = {
      border: "1px solid #E8EAEB",
      marginBottom: 20
    }

    let headingProps = {
      background: this.props.headingColor,
      color: this.props.textColor,
      padding: 15
    }

    let bodyProps = {
      height: 70,     //It knows it's px
      background: "#ffffff"
    }

    let textMargin = {
      margin: 0
    }

    return(
      <div className="col-md-12">
        <div style={cardBorder} className="card">
          <div style={headingProps} className="card-header">
            <p style={textMargin}>{this.props.labelDescription}</p>
            <h4 style={textMargin}><strong>{this.props.labelValue}</strong></h4>
          </div>
          <div style={bodyProps} class="card-body">
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Label;

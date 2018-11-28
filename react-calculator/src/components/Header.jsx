let React = require('react');

let Header = React.createClass({
  render: function(){
    let style = {
      background: this.props.bgdColor,
      color: "#FFF",
      textAlign: "center"
    }

    let innerDiv = {
      padding:40
    }

    let fontStyle = {
      fontFamily: "Metamorphous"
    }

    let cursive = {
      fontStyle: "italic"
    }

    return(
      <div style={style} className="col-md-12">
        <div style={innerDiv}>
          <h1 style={fontStyle}>{this.props.type} Calculator</h1>
          <h2 style={cursive}>Perform basic mathematic operations using {this.props.type}</h2>
        </div>
      </div>
    );
  }
});

module.exports = Header;

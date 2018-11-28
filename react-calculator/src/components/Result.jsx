let React = require('react');

let Result = React.createClass({
  render: function(){
    let panelStyle= {
      background: "#fefefe",
      borderColor: "2px solid #DDDDE0"
    }

    return(
      <div className="col-md-7 col-md-offset-1">
        <div className="card">
          <h3 className="card-header">Result</h3>
            <div className="card-body">
              <h1 id="first-number">{this.props.num1}</h1>
              <h1 id="operator">{this.props.op}</h1>
              <h1 id="second-number">{this.props.num2}</h1>
              <hr />
              <h1 id="result">{this.props.result}</h1>
            </div>
        </div>
      </div>
    )
  }
});

module.exports = Result;

let React = require('react');
let Calculator = require('./Calculator.jsx');
let Result = require('./Result.jsx');

let Body = React.createClass({
  getInitialState: function() {
    return {result: "", num1: "", num2: "", op: ""};
  },
  getValues: function(){
    this.setState({
      result: this.refs.calc.state.result,
      num1: this.refs.calc.state.num1,
      num2: this.refs.calc.state.num2,
      op: this.refs.calc.state.prevOp
    });
  },
  render: function(){
    let colStyle= {
      background: this.props.bgdColor
    }

    let innerDiv = {
      padding:40
    }

    return(
      <div style={colStyle} className="col-md-12">
        <div style={innerDiv} className="row">
          <Calculator getValues={this.getValues} ref="calc"/>
          <Result num1={this.state.num1} num2={this.state.num2} op={this.state.op} result={this.state.result} />
        </div>
      </div>
    );
  }
});

module.exports = Body;

let React = require('react');
let Button = require('./Button.jsx');

let Calculator = React.createClass({
  getInitialState: function() {
    return {result: '', num1: '', num2: '', prevOp: '', op:'', opRequested: false};
  },
  getButtonValue: async function(value) {
    if(isNaN(value)){
      await this.setState({
        opRequested: true,
        prevOp: this.state.op,
        op: value
      });

      if(this.state.op.localeCompare("=") === 0){
        await this.setState({
          result: await this.calculate(this.state.num1, this.state.num2, this.state.prevOp)
        });
        this.props.getValues();

        //Not necessary to 'await' below
        this.setState({
          result: '',
          num1: '',
          num2: '',
          op:'',
          prevOp: '',
          opRequested: false
        });
      }else if(this.state.op.localeCompare("clear") === 0){
        this.setState({
          result: '',
          num1: '',
          num2: '',
          op:'',
          prevOp: '',
          opRequested: false
        });

        this.props.getValues();
      }else{
        //If 'op' is a mathematical operation (Either: '+', '-', '*', '/', '^', NOT '=' || 'clear')
        //Make sure the 'op' symbol is displayed
        await this.setState({
          prevOp: this.state.op,
        });
        this.props.getValues();
      }

      return;
    }

    if(this.state.opRequested === false){
      await this.setState({
        num1: this.state.num1 + value
      });
      this.props.getValues();
    }else if(this.state.opRequested === true){
      await this.setState({
        num2: this.state.num2 + value
      });
      this.props.getValues();
    }

    return;
  },
  calculate: function(a, b, op){
    let result = 0;

    if(op === "+")
      result = parseInt(a) + parseInt(b);
    else if(op === "-")
      result = parseInt(a) - parseInt(b);
    else if(op === "*")
      result = parseInt(a) * parseInt(b);
    else if(op === "/")
      result = parseInt(a) / parseInt(b);
    else if(op === "^")
      result = Math.pow(parseInt(a), parseInt(b));

    return result;
  },
  render: function(){
    let panelStyle= {
      background: "#fefefe",
      borderColor: "2px solid #DDDDE0"
    }

    let centerCalcBtns = {
      width: "fitContent",
      margin: "auto"
    }

    let centerTitle = {
      textAlign: "center"
    }

    let marginBottom = {
      marginBottom: 30
    }

    return(
      <div style={marginBottom} className="col-md-4">
        <div className="card">
          <h3 style={centerTitle} className="card-header">Calculator</h3>
          <div style={centerCalcBtns} className="card-body">
            <Button type="number" value="1" getBtnValue={this.getButtonValue} />
            <Button type="number" value="2" getBtnValue={this.getButtonValue} />
            <Button type="number" value="3" getBtnValue={this.getButtonValue} />
            <Button type="operator" value="plus" getBtnValue={this.getButtonValue} />
            <br /><br />
            <Button type="number" value="4" getBtnValue={this.getButtonValue} />
            <Button type="number" value="5" getBtnValue={this.getButtonValue} />
            <Button type="number" value="6" getBtnValue={this.getButtonValue} />
            <Button type="operator" value="minus" getBtnValue={this.getButtonValue} />
            <br /><br />
            <Button type="number" value="7" getBtnValue={this.getButtonValue} />
            <Button type="number" value="8" getBtnValue={this.getButtonValue} />
            <Button type="number" value="9" getBtnValue={this.getButtonValue} />
            <Button type="operator" value="times" getBtnValue={this.getButtonValue} />
            <br /><br />
            <Button type="number" value="0" getBtnValue={this.getButtonValue} />
            <Button type="operator" value="divide" getBtnValue={this.getButtonValue} />
            <Button type="operator" value="power" getBtnValue={this.getButtonValue} />
            <Button type="equal" value="equals" getBtnValue={this.getButtonValue} />
            <br /><br />
            <Button type="clear" value="clear" getBtnValue={this.getButtonValue} />
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Calculator;

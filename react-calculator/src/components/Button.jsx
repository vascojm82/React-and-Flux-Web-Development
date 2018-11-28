let React = require('react');

let Button = React.createClass({
  onClick: function(e){
    let value = e.currentTarget.dataset.tag;
    console.log("Button Component --- BtnValue: " + value);
    this.props.getBtnValue(value);
  },
  render: function(){
    let btnClass = '',
        btnValue = '';

    let btnStyle = {
      width: 60,
      margin: 2
    }

    let clearH1 = {
      marginTop: 10
    }

    if(this.props.type === "number"){
      btnClass = "btn btn-primary number";
      btnValue = this.props.value;
    }else if(this.props.type === "operator"){
      btnClass = "btn btn-danger operator";

      if(this.props.value === "plus"){
        btnValue = `+`;
      }else if(this.props.value === "minus"){
        btnValue = `-`;
      }else if(this.props.value === "times"){
        btnValue = `*`;
      }else if(this.props.value === "divide"){
        btnValue = `/`;
      }else if(this.props.value === "power"){
        btnValue = `^`;
      }

    }else if(this.props.type === "equal"){
      btnClass = "btn btn-success equal";
      btnValue = '=';
    }else if(this.props.type === "clear"){
      btnClass = "btn btn-dark clear";
      btnValue = 'clear';
      btnStyle.width = 150
    }

    return(
      <button style={btnStyle} className={btnClass} onClick={this.onClick} data-tag={btnValue}><h1 style={clearH1}>{btnValue}</h1></button>
    )
  }
});

module.exports = Button;

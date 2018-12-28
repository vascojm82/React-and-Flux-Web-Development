let React = require('react');

let Header = React.createClass({
  render: function(){
    let headerStyle ={
      minHeight: 100,
      background:  "#313131",
      color: "#fff",
      padding: "20px 0 15px 35px"
    }

    let inputStyle={
      padding: "5px 0",
      marginRight: 10,
      marginBottom: 10,
      border: "2px solid #616161",
      borderRadius: 4,
      width: "80%"
    }

    let btnStyle={
      background:  "#ff6109",
      borderColor: "#ff6109",
      color: "#fff"
    }

    return(
      <div className="row" style={headerStyle}>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4">
              <div class="form-group">
                <h4>Name or Number</h4>
                <input style={inputStyle} type="text" class="form-control" id="pokemon" /><button type="button" style={btnStyle} className="btn btn-warning"><i className="fa fa-search"></i></button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <p>Use the Advanced Search to explore Pokemon by type, weakness, Ability, and more!</p>
        </div>
      </div>
    );
  }
});

module.exports = Header;

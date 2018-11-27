let React = require('react');

let Header = React.createClass({
  render: function(){
    let style = {
      color: "#FFF",
      padding: "20px 0 40px 0"
    }

    let colPadding = {
      padding: "10px 10px 10px 0"
    }

    let icons ={
      fontSize: 25,
      paddingRight: 20
    }

    return(
      <div style={style} className="col-md-12">
        <div className="row">
          <div className="col-md-9">
            <h1>{this.props.type} News</h1>
            <p>Top stories in my {this.props.type.toLowerCase()}</p>
          </div>
          <div style={colPadding} className="col-md-3">
            <div className="pull-right">
              <i style={icons} className="fa fa-twitter fa-md"></i>
              <i style={icons} className="fa fa-facebook fa-md"></i>
              <i style={icons} className="fa fa-linkedin fa-md"></i>
              <i style={icons} className="fa fa-github fa-md"></i>
              <i style={icons} className="fa fa-envelope fa-md"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Header;

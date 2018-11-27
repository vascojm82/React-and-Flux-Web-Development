let React = require('react');

let Card = React.createClass({
  render: function(){
    let panelStyle= {
      background: "#fefefe",
      borderColor: "2px solid #DDDDE0"
    }

    let contentStyle = {
       paddingBottom: 20
    }

    let icons ={
      width: 70,
      fontSize: 70,
      color: "#003680",
      display: "block",
      margin: "auto",
      paddingTop: 20
    }

    let img = {
      width: "60%",
      height: 320,
      paddingBottom: 10
    }

    let imgDesc = {
      paddingBottom: 25
    }

    return(
      <div className="col-md-12">
        <div style={panelStyle} className="panel panel-default">
          <div className="panel-body">
            <div className="row">
              <div className="col-md-2">
                <i style={icons} className="fa fa-behance-square fa-md"></i>
              </div>
              <div className="col-md-10">
                <div style={contentStyle}>
                  <h2>{this.props.title}</h2>
                  <h4>{this.props.subtitle}</h4>
                  <p>{this.props.description}</p>
                </div>
                <div>
                  <img style={img} className="img-responsive" src={this.props.url} />
                  <p style={imgDesc}>{this.props.imgDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Card;

let React = require("react");
let Badge = require("../details-page/Badge.jsx");

let Tile = React.createClass({
  getInitialState: function() {
    return{pokePic: this.props.url, name: this.props.name, badges: [], badgesList: []};
  },
  componentWillMount: function(){
    let createBadgesList = () => {
      return new Promise((resolve, reject) => {
        let badgesList = [];
        let colors = ["#8cd033","#c37ace","#ff7400"];

        this.props.badges(this.props.types)
          .then(async (data) => {
            let i = 0;
            await data.forEach( (item, index) => {
              badgesList.push(<Badge key={index} text={item} color={colors[i]} />);
              (i<3)? i++: i=0;
            });

            resolve(badgesList);
          });
      });
    }

    createBadgesList()
      .then((data) => {
        this.setState({
          badgesList: data
        });
      });
  },
  render: function(){
    let imageBackground= {
      background: "#f2f2f2",
      width: "100.1%"
    }

    let img= {
      width: "100%",
      height: 230
    }

    let textStyle= {
      marginLeft: 10
    }

    let h4Style= {
      paddingTop: 10,
      paddingBottom: 5,
      marginLeft: 10,
      marginTop: 0
    }

    let h6Style= {
      marginLeft: 10,
      paddingBottom: 0,
      marginBottom:0
    }

    return(
      <div className="col-xs-12 col-sm-5 col-sm-offset-1 col-md-5 col-md-offset-1 col-lg-3 col-lg-offset-0">
        <div id={this.props.cardNum} className="card character hvr-bounce-in" onMouseEnter={this.onMouseOver} onClick={this.onClick}>
          <div style={imageBackground}>
            <img style={img} className="tile-img image-responsive" src={this.state.pokePic} />
          </div>
          <h6 style={h6Style} className="text-left">#{this.props.id}</h6>
          <h4 style={h4Style} className="text-left">{this.state.name}</h4>
          <div style={textStyle} className="pull-left">
            {this.state.badgesList}
          </div>
        </div>
      </div>
    );
  }
});

module.exports= Tile;

let React = require("react");
let Badge = require("./Badge.jsx");

let BadgeList = React.createClass({
  getInitialState: function() {
    return{type: null, badges: []};
  },
  getBadges: function(types){
    return new Promise((resolve, reject) => {
      let badges = [];
      let buffer = null;

      types.forEach(function(item, index){
        if(item.type)
          buffer = item.type.name;
        else
          buffer = item.ability.name;

        badges.push(buffer);
      });

      resolve(badges);
    });
  },
  componentWillMount: function(){
    let createBadgesList = (badgeTypes) => {
      return new Promise((resolve, reject) => {
        let badgesList = [];
        let colors = ["#8cd033","#c37ace","#ff7400"];

        console.log("Types array: ", badgeTypes);
        this.getBadges(badgeTypes)
          .then(async (data) => {
            let i = 0;
            await data.forEach((item, index) => {
              badgesList.push(<Badge key={index} text={item} color={colors[i]} />);
              (i<3)? i++: i=0;
            });

            resolve(badgesList);
          });
      });
    }

    console.log("this.props.types", this.props.types);
    let types = this.props.types;

    createBadgesList(types)
      .then((data) => {
        this.setState({
          badges: data
        });
      });
  },
  render: function(){
    return(
      <div className="col-md-12">
        <h4 style={{marginTop: 30, marginBottom: 10}}>{this.props.heading}</h4>
        {this.state.badges}
      </div>
    );
  }
});

module.exports = BadgeList;

let React = require('react');
let Nav = require('./Nav.jsx');
let CardList = require('./CardList.jsx');

let Body = React.createClass({
  render: function(){
    let colStyle= {
      paddingLeft: 5,
      paddingRight: 5
    }

    return(
      <div style={colStyle} className="col-md-12">
        <div className="row">
          <Nav linkTitle1="NEWS" linkUrl1="/news" linkTitle2="PHOTOS" linkUrl2="/photos" />
          {this.props.routeFollow}
        </div>
      </div>
    );
  }
});

module.exports = Body;

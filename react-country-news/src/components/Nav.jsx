let React = require('react');
let ReactRouter = require('react-router');
let Link = ReactRouter.Link;

let Nav = React.createClass({
  render: function() {
    let listStyle = {
      listStyle: "none"
    }

    let listItemStyle = {
      display: "inline-block",
      paddingRight: 20
    }

    let listItemHref = {
      color: "#FFF"
    }

    return (
      <div className="col-md-12">
        <ul style={listStyle} className="text-right">
          <li style={listItemStyle}><Link style={listItemHref} to={this.props.linkUrl1}>{this.props.linkTitle1}</Link></li>
          <li style={listItemStyle}><Link style={listItemHref} to={this.props.linkUrl2}>{this.props.linkTitle2}</Link></li>
        </ul>
      </div>
       );
  }
});

module.exports = Nav;

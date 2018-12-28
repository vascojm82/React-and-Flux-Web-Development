let React = require("react");
let ReactRouter = require("react-router");
let Link = ReactRouter.Link;

let HomePage = React.createClass({
  render: function(){
    return(
      <div>
        <h1>Home</h1>
        <ul>
          <li><Link to="/product/55">iOS Course</Link></li>
          <li><Link to="/product/67">React Course</Link></li>
        </ul>
      </div>
    );
  }
});

module.exports = HomePage;

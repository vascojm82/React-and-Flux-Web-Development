let React = require("react");
let Header = require("./Header.jsx");
let Search = require("./Search.jsx");
let TileList = require("./TileList.jsx");

let Main = React.createClass({
  render: function(){
    return(
      <div className="row">
        <Header />
        <Search />
        <TileList />
      </div>
    );
  }
});

module.exports = Main;

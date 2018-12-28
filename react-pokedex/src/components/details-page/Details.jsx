let React = require("react");
let Header = require("./Header.jsx");
let Main = require("./Main.jsx");

let Details = React.createClass({
  render: function(){
    return(
      <div className="container-fluid">
        <Header />
        <Main />
      </div>
    );
  }
});

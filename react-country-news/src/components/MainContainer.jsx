let React = require('react');
let ContainerGradient = require('./ContainerGradient.jsx');

let MainContainer = React.createClass({
  render: function(){
    return(
      <div className="row">
        <ContainerGradient initialColor="#3d51b5" endingColor="#e9e9ed" routeFollow={this.props.children}/>
      </div>
    );
  }
});


module.exports = MainContainer;

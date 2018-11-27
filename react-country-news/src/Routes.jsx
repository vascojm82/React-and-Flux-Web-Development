let React = require('react');
let ReactRouter = require('react-router');
let Router = ReactRouter.Router;
let Route = ReactRouter.Route;
let hashHistory = ReactRouter.hashHistory;
let Favicon = require('react-favicon');
let MainContainer = require('./components/MainContainer.jsx');
let CardList = require('./components/CardList.jsx');
let PhotoGallery = require('./components/PhotoGallery.jsx');

//Below only a JSX object is being returned not the result of calling React.createClass({}) which returns a component directive
//<Router> is the component which will take care of rendering everything
let Routes = (
  <div>
    <Favicon url="/img/favicon.ico" />
    <Router history={hashHistory}>
      <Route component={MainContainer}>
        <Route path="/" component={CardList} />
        <Route path="/news" component={CardList}/>
        <Route path="/photos" component={PhotoGallery}/>
      </Route>
    </Router>
  </div>
);

module.exports = Routes;

let React = require('react');
let ReactRouter = require('react-router');
let Router = ReactRouter.Router;
let Route = ReactRouter.Route;
let IndexRoute = ReactRouter.IndexRoute;
let hashHistory = ReactRouter.hashHistory;
let Favicon = require('react-favicon');
let App = require("./components/App.jsx");
let HomePage = require("./components/main-page/Main.jsx");
let Details = require("./components/details-page/Details.jsx");

//Below only a JSX object is being returned not the result of calling React.createClass({}) which returns a component directive
//<Router> is the component which will take care of rendering everything
let Routes = (
  <div>
    <Favicon url="./img/favicon.ico" />
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="pokemon/:id" component={Details} />
      </Route>
    </Router>
  </div>
);

module.exports = Routes;

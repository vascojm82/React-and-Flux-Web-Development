let React = require("react");
let ReactRouter = require("react-router");
let useRouterHistory = ReactRouter.useRouterHistory;
let Router = ReactRouter.Router;
let Route = ReactRouter.Route;
let IndexRoute = ReactRouter.IndexRoute;
let createHistory = require("history").createHistory;

let History = useRouterHistory(createHistory)(
  { queryKey: false }   //Toggle off dashes in the URL
);

let BasePage = require("./components/BasePage.jsx");
let HomePage = require("./components/HomePage.jsx");
let ProductPage = require("./components/ProductPage.jsx");

let Routes = (
    <Router history={History}>
      <Route path="/" component={BasePage}>
        <IndexRoute render={ () => {<HomePage onClick={BasePage.onClick} />} } />
        <Route path="/product/:productId" component={ProductPage} />
      </Route>
    </Router>
);

module.exports = Routes;

let React = require('react');
let ReactDOM = require('react-dom');
let ListManager = require('./components/ListManager.jsx');

ReactDOM.render(<ListManager title="Ingredients" />, document.getElementById('ingredients'));     //this.prop.title in ListManager component

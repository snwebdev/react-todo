var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log("New state", store.getState());
});

store.dispatch(actions.addTodo('Walk the doggy'));
store.dispatch(actions.setSearchText('dog'));
store.dispatch(actions.toggleShowCompleted());

//load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');



ReactDOM.render(
  <TodoApp/>,
  document.getElementById("app")
);

var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Put out the cat'
        },
        {
          id: 3,
          text: 'Tote that barge'
        },
        {
          id: 4,
          text: 'Lift that bale'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
  alert('new todo ' + text)
  },
  render: function() {
    var {todos} = this.state;
    return(
    <div>
      <TodoList todos={todos}/>
      <AddTodo onAddTodo={this.handleAddTodo}/>
    </div>
    )
  }
});

module.exports = TodoApp;

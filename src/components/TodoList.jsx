var React = require('react');

var Todo = require('Todo');

var TodoList = React.createClass({
    render: function() {
        var todoList = this.props.todos.map(todo => <Todo key={todo.id} {...todo}/>)
        return (
            <div>
                {todoList}
            </div>
        )
    }
});

module.exports = TodoList;
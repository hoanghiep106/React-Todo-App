var React = require('react');

var Todo = require('Todo');

var TodoList = React.createClass({
    render: function() {
        var todoList = this.props.todos.map(todo => <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>)
        return (
            <div>
                {todoList}
            </div>
        )
    }
});

module.exports = TodoList;
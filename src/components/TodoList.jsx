var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';

export var TodoList = React.createClass({
    render: function() {
        var todoList;
        if(this.props.todos.length === 0) {
            todoList = <div className="container__message"><p>Nothing todo</p></div>
        } else {
            todoList = this.props.todos.map(todo => <Todo key={todo.id} {...todo}/>)
        }
        return (
            <div>
                {todoList}
            </div>
        )
    }
});

export default connect(
    (state) => {
        return {
            todos: state.todos
        };
    }
)(TodoList);
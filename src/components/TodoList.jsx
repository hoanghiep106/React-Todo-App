var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
    render: function() {
        var todoList;
        if(this.props.todos.length === 0) {
            todoList = <div className="container__message"><p>Nothing todo</p></div>
        } else {
            todoList = TodoAPI.filteredTodos(this.props.todos, this.props.showCompleted, this.props.searchText).map(todo => <Todo key={todo.id} {...todo}/>)
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
        return state;
    }
)(TodoList);
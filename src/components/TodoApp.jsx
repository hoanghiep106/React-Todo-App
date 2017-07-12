var React = require('react');
var uuid = require('node-uuid')

var TodoList = require('TodoList');
var TodoForm = require('TodoForm');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
    getInitialState: function() {
        return {
            showCompleted: false,
            searchText: '',
            todos: TodoAPI.getTodos()
        };
    },
    componentDidUpdate: function() {
        TodoAPI.setTodos(this.state.todos);
    },
    addNewTodo: function(newTodoText) {
        var todos = this.state.todos;
        var newTodo = {
            id: uuid(),
            text: newTodoText
        }
        todos.push(newTodo);
        this.setState({
            todos
        })
    },
    handleSearch: function(showCompleted, searchText) {
        this.setState({
            showCompleted,
            searchText: searchText.toLowerCase(),
            completed: false
        })
    },
    handleToggle: function(id) {
        var todos = this.state.todos.map( todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.setState({todos});
    },
    render: function() {
        var {todos, showCompleted, searchText} = this.state;
        var filteredTodos = TodoAPI.filteredTodos(todos, showCompleted, searchText);
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                <TodoForm addNewTodo={this.addNewTodo}/>
            </div>
        )
    }
});

module.exports = TodoApp;
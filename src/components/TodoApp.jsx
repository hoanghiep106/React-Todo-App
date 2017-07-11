var React = require('react');
var uuid = require('node-uuid')

var TodoList = require('TodoList');
var TodoForm = require('TodoForm');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
    getInitialState: function() {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: uuid(),
                    text: 'Walk the dog',
                    completed: false
                },
                {
                    id: uuid(),
                    text: 'Clean the yard',
                    completed: true
                },
                {
                    id: uuid(),
                    text: 'Leave mail on porch',
                    completed: false
                },
                {
                    id: uuid(),
                    text: 'Play video games',
                    completed: false
                }
            ]
        };
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
            searchText,
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
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={this.state.todos} onToggle={this.handleToggle}/>
                <TodoForm addNewTodo={this.addNewTodo}/>
            </div>
        )
    }
});

module.exports = TodoApp;
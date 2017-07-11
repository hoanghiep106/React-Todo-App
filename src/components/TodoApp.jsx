var React = require('react');

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
                    id: 1,
                    text: 'Walk the dog'
                },
                {
                    id: 2,
                    text: 'Clean the yard'
                },
                {
                    id: 3,
                    text: 'Leave mail on porch'
                },
                {
                    id: 4,
                    text: 'Play video games'
                }
            ]
        };
    },
    addNewTodo: function(newTodoText) {
        var todos = this.state.todos;
        var newTodo = {
            id: this.state.todos.length + 1,
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
            searchText
        })
    },
    render: function() {
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={this.state.todos}/>
                <TodoForm addNewTodo={this.addNewTodo}/>
            </div>
        )
    }
});

module.exports = TodoApp;
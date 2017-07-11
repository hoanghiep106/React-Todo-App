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
                    text: 'Walk the dog'
                },
                {
                    id: uuid(),
                    text: 'Clean the yard'
                },
                {
                    id: uuid(),
                    text: 'Leave mail on porch'
                },
                {
                    id: uuid(),
                    text: 'Play video games'
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
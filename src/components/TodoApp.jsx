var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import TodoList from 'TodoList';
import TodoForm from 'TodoForm';
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
            text: newTodoText,
            createdAt: moment().unix(),
            completedAt: undefined
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
    render: function() {
        var {todos, showCompleted, searchText} = this.state;
        var filteredTodos = TodoAPI.filteredTodos(todos, showCompleted, searchText);
        return (
            <div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch onSearch={this.handleSearch}/>
                            <TodoList/>
                            <TodoForm addNewTodo={this.addNewTodo}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = TodoApp;
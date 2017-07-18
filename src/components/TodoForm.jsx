var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var TodoForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        if(this.refs.todo.value.length > 0) {
            this.props.dispatch(actions.addTodo(this.refs.todo.value));
        }
        this.refs.todo.value = '';
    },
    render: function() {
        return (
            <div className="container__footer">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="todo" placeholder="What do you need to do?"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        )
    }
});

export default connect()(TodoForm);
var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

export var Todo = React.createClass({
    render: function() {
        var todoClassName = this.props.completed ? 'todo todo-completed' : 'todo';
        var renderDate = () => {
            var message = this.props.completed ? 'Completed ' : 'Created ';
            var timestamp = this.props.completed ? this.props.completedAt : this.props.createdAt;
            return message + moment.unix(timestamp).format('MMMM Do YYYY @ h:mm a');
        };
        return (
            <div className={todoClassName} onClick={() => {
                this.props.dispatch(actions.toggleTodo(this.props.id));
                }}>
                <div>
                    <input type="checkbox" checked={this.props.completed}/>
                </div>
                <div>
                    <p>{this.props.text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>
            </div>
        )
    }
});

export default connect()(Todo);
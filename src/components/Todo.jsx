var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
    render: function() {
        var todoClassName = this.props.completed ? 'todo todo-completed' : 'todo';
        var renderDate = () => {
            var message = this.props.completed ? 'Completed ' : 'Created ';
            var timestamp = this.props.completed ? this.props.completedAt : this.props.createdAt;
            return message + moment.unix(timestamp).format('MMMM Do YYYY @ h:mm a');
        };
        return (
            <div className={todoClassName} onClick={() => {
                this.props.onToggle(this.props.id);
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

module.exports = Todo;
var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
    render: function() {
        var renderDate = () => {
            var message = this.props.completed ? 'Completed ' : 'Created ';
            var timestamp = this.props.completed ? this.props.completedAt : this.props.createdAt;
            return message + moment.unix(timestamp).format('MMMM Do YYYY @ h:mm a');
        };
        return (
            <div onClick={() => {
                this.props.onToggle(this.props.id);
                }}>
                <input type="checkbox" checked={this.props.completed}/>
                <p>{this.props.text}</p>
                <p>{renderDate()}</p>
            </div>
        )
    }
});

module.exports = Todo;
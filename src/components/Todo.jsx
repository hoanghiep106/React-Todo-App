var React = require('react');

var Todo = React.createClass({
    render: function() {
        return (
            <div onClick={() => {
                this.props.onToggle(this.props.id);
                }}>
                <input type="checkbox" checked={this.props.completed}/>
                {this.props.text}
            </div>
        )
    }
});

module.exports = Todo;
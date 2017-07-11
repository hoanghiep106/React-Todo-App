var React = require('react');

var TodoSearch = React.createClass({
    handleChange: function() {
        this.props.onSearch(this.refs.showCompleted.checked, this.refs.search.value)
    },
    render: function(){
        return (
            <div>
                <div>
                    <input type="search" ref="search" placeholder="Search todos" onChange={this.handleChange}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" onChange={this.handleChange} />
                        Show completed todos
                    </label>
                </div>
            </div>
        )
    }
});

module.exports = TodoSearch;
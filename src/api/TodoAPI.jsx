module.exports = {
    setTodos: function(todos) {
        if(todos && todos.length) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function() {
        var todos = localStorage.getItem('todos');
        return todos ? JSON.parse(todos) : [];
    },
    filteredTodos: function(todos, showCompleted, searchText) {
        var filterTodos = todos;
        filterTodos = filterTodos.filter( todo => {
            return !todo.completed || showCompleted;
        });

        filterTodos = filterTodos.filter( todo => {
            var text = todo.text.toLowerCase();
            return searchText.length === 0 || text.indexOf(searchText) > -1;
        });

        filterTodos = filterTodos.sort((a, b) => {
            if(a.completed && !b.completed) {
                return 1;
            } else {
                return 0;
            }
        });
        return filterTodos;
    }
};
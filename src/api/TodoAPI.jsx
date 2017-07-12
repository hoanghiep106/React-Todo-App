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
    }
};
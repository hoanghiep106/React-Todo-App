var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(TodoAPI).toExist();
    });

    describe('setTodos', () => {
        it('should set valid todos array', () => {
            var todos = [{
                id: 11,
                text: 'test',
                completed: false
            }];
            TodoAPI.setTodos(todos);
            expect(JSON.parse(localStorage.getItem('todos'))).toEqual(todos);
        });

        it('should not invalid todos array', () => {
            var todos = {a: 'b'};
            TodoAPI.setTodos(todos);
            expect(localStorage.getItem('todos')).toBe(null);
        });
    });

    describe('getTodos', () => {
        it('should return empty array for bad localstorage data', () => {
            var actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual([])
        });

        it('should return todos if valid array in localstorage', () => {
            var todos = [{
                id: 11,
                text: 'test',
                completed: false
            }];
            localStorage.setItem('todos', JSON.stringify(todos));
            var actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual(todos);
        })
    });

    describe('filterTodos', () => {
        var todos = [{
            id: 1,
            text: 'test1',
            completed: true
        },{
            id: 2,
            text: 'test2',
            completed: false
        },{
            id: 3,
            text: 'test3',
            completed: true
        }];
        it('should return all items if showCompleted is true', () => {
            var filteredTodos = TodoAPI.filteredTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });
        it('should return only non-completed items if showCompleted is false', () => {
            var filteredTodos = TodoAPI.filteredTodos(todos, false, '');
            expect(filteredTodos.length).toBe(1);
        });
        it('should sort by completed status', () => {
            var filteredTodos = TodoAPI.filteredTodos(todos, true, '');
            expect(filteredTodos[0].completed).toBe(false);
        });

        it('should filter todos by searchText', () => {
            var filteredTodos = TodoAPI.filteredTodos(todos, true, '2');
            expect(filteredTodos.length).toBe(1);
        });

        it('should return all todos if searchText is empty', () => {
            var filteredTodos = TodoAPI.filteredTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });
    });
});
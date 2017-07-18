var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set searchText', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'test'
            };
            var res = reducers.searchTextReducer(df(''), df(action));
            expect(res).toEqual(action.searchText);
        })
    });
    describe('showCompletedReducer', () => {
        it('should toggle showCompleted', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };
            var res = reducers.showCompletedReducer(df(false), df(action));
            expect(res).toEqual(true);
        })
    });
    describe('todoReducer', () => {
        it('should add new todo', () => {
            var action = {
                type: 'ADD_TODO',
                text: 'Test'
            };
            var res = reducers.todoReducer(df([]),df(action));
            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.text);
        });
        it('should toggle todo', () => {
            var todos = [{
                id: 1,
                text: 'test1',
                completed: false,
                createdAt: 'some date',
                completedAt: undefined
            }];
            var action = {
                type: 'TOGGLE_TODO',
                id: 1
            };
            var res = reducers.todoReducer(df(todos),df(action));
            expect(res[0].completed).toEqual(true);
            expect(res[0].completedAt).toBeA('number');
        });
    });
});
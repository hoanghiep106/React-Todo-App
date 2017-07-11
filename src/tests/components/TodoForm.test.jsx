var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoForm = require('TodoForm');

describe('TodoForm', () => {
    it('should exist', () => {
        expect(TodoForm).toExist();
    });

    it('should call addNewTodo prop with valid data', () => {
        var spy = expect.createSpy();
        var todoForm = TestUtils.renderIntoDocument(<TodoForm addNewTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todoForm));

        todoForm.refs.todo.value = 'Learn React';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith('Learn React');
    });

    it('should not call addNewTodo prop with invalid data', () => {
        var spy = expect.createSpy();
        var todoForm = TestUtils.renderIntoDocument(<TodoForm addNewTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todoForm));

        todoForm.refs.todo.value = '';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});
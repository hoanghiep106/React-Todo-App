var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var {TodoForm} = require('TodoForm');

describe('TodoForm', () => {
    it('should exist', () => {
        expect(TodoForm).toExist();
    });

    it('should call dispatch ADD_TODO when valid todo text', () => {
        var action = {
            type: 'ADD_TODO',
            text: 'Check mail'
        }
        var spy = expect.createSpy();
        var todoForm = TestUtils.renderIntoDocument(<TodoForm dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todoForm));

        todoForm.refs.todo.value = 'Check mail';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should not dispatch ADD_TODO when invalid todo text', () => {
        var spy = expect.createSpy();
        var todoForm = TestUtils.renderIntoDocument(<TodoForm dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todoForm));

        todoForm.refs.todo.value = '';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});
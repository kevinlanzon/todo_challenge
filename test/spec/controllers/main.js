'use strict';

describe('Controller: MainCtrl', function () {

  beforeEach(module('todoChallengeApp'));

  var MainCtrl,
    scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have no items to start', function () {
    expect(scope.todos.length).toBe(0);
  });

  it('should add items to the list', function () {
    scope.todo = 'Testing';
    scope.addTodo();
    expect(scope.todos.length).toBe(1);
  });

  it('should add then remove an item from the list', function () {
    scope.todo = 'Testing';
    scope.addTodo();
    scope.removeTodo(0);
    expect(scope.todos.length).toBe(0);
  });
});
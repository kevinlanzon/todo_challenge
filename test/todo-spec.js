describe('angularjs homepage todo list', function() {

  it('should have a title', function() {
    browser.get('http://localhost:9000/#/');
    expect(browser.getTitle()).toEqual('My Todo List');
  });


  it('should add a todo', function() {
    browser.get('http://localhost:9000/#/');
    element(by.model('todo')).sendKeys('write a protractor test');
    element(by.css('[value="Add"]')).click();

    var todoList = element.all(by.repeater('todo in todos'));
    expect(todoList.count()).toEqual(1);
    expect(todoList.get(0).$('input[type="text"]').getAttribute('value')).toEqual('write a protractor test');
  });

});
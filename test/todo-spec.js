describe('angularjs homepage todo list', function() {

  beforeEach(function() {
     browser.get('http://localhost:9000/#/');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('My Todo List');
  });


  it('should add a todo', function() {
    element(by.model('todo')).sendKeys('write a protractor test');
    element(by.css('[value="Add"]')).click();

    var todoList = element.all(by.repeater('todo in todos'));
    expect(todoList.count()).toEqual(1);
    expect(todoList.get(0).$('input[type="text"]').getAttribute('value')).toEqual('write a protractor test');
  });

  it('should remove a todo', function() {
    element(by.model('todo')).sendKeys('delete me!');
    element(by.css('[value="Add"]')).click();

    var todoList = element.all(by.repeater('todo in todos'));
    expect(todoList.count()).toEqual(2);
    element(by.css('[aria-label="Remove"]')).click();
    expect(todoList.count()).toEqual(1);
  });

});
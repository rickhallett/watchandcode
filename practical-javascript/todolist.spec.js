const expect = chai.expect;
const assert = chai.assert;

const fail = () => {
  throw new Error('Test not implemented');
};

describe('v1', () => {
  beforeEach(() => {
    todos = ['item1', 'item2', 'item3'];
  });

  it('should have a place to store todos', () => {
    expect(todos).to.be.a('array');
  });

  it('it should have a way to display todos', () => {
    // console.log output not realistically testable in browser
  });

  it('it should have a way to add a todo', () => {
    todos.push('item4');
    expect(todos.length).to.equal(4);
  });

  it('it should have a way to edit a todo', () => {
    todos[0] = 'item1 updated';
    expect(todos[0]).to.equal('item1 updated');
  });

  it('it should have a way to remove a todo', () => {
    todos.splice(2, 1);
    expect(todos.length).to.equal(2);
  });
});

describe('v2', () => {
  beforeEach(() => {
    todos = ['item1', 'item2', 'item3'];
  });

  it('should have a function to add a todo', () => {
    addTodo('item4');
    expect(todos.length).to.equal(4);
  });

  it('should have a function to edit a todo', () => {
    editTodo(0, 'item1 edited');
    expect(todos).to.eql(['item1 edited', 'item2', 'item3']);
  });

  it('should have a function to remove a todo', () => {
    removeTodo(2);
    expect(todos).to.eql(['item1', 'item2']);
  });
});

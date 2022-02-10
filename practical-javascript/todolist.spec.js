const expect = chai.expect;
const assert = chai.assert;

const fail = () => {
  throw new Error('Test not implemented');
};

describe('v1', () => {
  it('should have a place to store todos', () => {
    expect(todos).to.be.a('array');
  });

  it('it should have a way to display todos', () => {
    // console.log output not testable in browser without mocks
  });

  it('it should have a way to add a todo', () => {
    todos.push('item 4');
    expect(todos.length).to.equal(4);
  });

  it('it should have a way to edit a todo', () => {
    todos[0] = 'item 1 updated';
    expect(todos[0]).to.equal('item 1 updated');
  });

  it('it should have a way to remove a todo', () => {
    expect(todos.length).to.equal(4);
    todos.splice(3, 1);
    expect(todos.length).to.equal(3);
  });
});

describe('v2', () => {
  it('should have a function to add a todo', () => {
    expect(todos.length).to.equal(3);
    addTodo('item4');
    expect(todos.length).to.equal(4);
  });

  it('should have a function to edit a todo', () => {
    expect(todos).to.equal(['item 1 updated', 'item2', 'item3', 'item4']);
  });

  it('should have a function to remove a todo', () => {
    fail();
  });
});

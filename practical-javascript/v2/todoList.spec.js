const expect = chai.expect;
const assert = chai.assert;

const fail = () => {
  throw new Error("Test not implemented");
};

describe("v2", () => {
  it("should have a function to add a todo", () => {
    expect(todos.length).to.equal(3);
    addTodo("item4");
    expect(todos.length).to.equal(4);
  });

  it("should have a function to edit a todo", () => {
    fail();
  });

  it("should have a function to remove a todo", () => {
    fail();
  });
});

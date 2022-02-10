// import { todos } from "./todoList.js";
const expect = chai.expect;

const fail = () => {
  throw new Error("Test not implemented");
};

describe("v1", () => {
  it("should have a place to store todos", () => {
    expect(todos).to.be.a("array");
  });

  it("it should have a way to display todos", () => {
    throw new Error("Test not implemented");
  });

  it("it should have a way to add a todo", () => {
    throw new Error("Test not implemented");
  });

  it("it should have a way to edit a todo", () => {
    throw new Error("Test not implemented");
  });

  it("it should have a way to remove a todo", () => {
    throw new Error("Test not implemented");
  });
});

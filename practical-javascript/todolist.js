/**
 * ======
 *   v1
 * ======
 */

var todos = ['item1', 'item2', 'item3'];

todos.push('item 4');

todos[0] = 'item1 updated';

todos.splice(3, 1);

console.log(todos);
console.clear();

/**
 * ======
 *   v2
 * ======
 */

function addTodo(todo) {
  todos.push(todo);
  console.log(todos);
}

function editTodo(position, newTodo) {
  todos[position] = newTodo;
  console.log(todos);
}

function removeTodo(position) {
  todos.splice(position, 1);
  console.log(todos);
}

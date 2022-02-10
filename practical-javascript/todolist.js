/**
 * ======
 *   v1
 * ======
 */

var todos = ['item 1', 'item 2', 'item 3'];

todos.push('item 4');

todos[0] = 'item 1 updated';

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
}

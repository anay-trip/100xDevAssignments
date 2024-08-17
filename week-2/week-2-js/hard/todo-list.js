/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  todo = [];

  add(todo) {
    this.todo.push(todo);
  }

  remove(index) {
    //splice - starting from given index, remove 1 element.
    if (index < 0 || index >= this.todo.length) {
      return;
    }
    this.todo.splice(index, 1);
  }

  update(index, updatedTodo) {
    if (index < 0 || index >= this.todo.length) {
      return;
    }
    this.todo[index] = updatedTodo;
  }

  getAll() {
    return this.todo;
  }

  get(index) {
    if (index < 0 || index >= this.todo.length) {
      return null;
    }
    return this.todo[index];
  }

  clear() {
    this.todo = [];
  }
}

// Tests

module.exports = Todo;

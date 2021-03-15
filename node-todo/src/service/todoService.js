const todoRepository = require("../repository/todoRepository");

exports.getAll = () => {
  const todos = todoRepository.getAll();
  return todos;
};

exports.create = (todo) => {
  let newTodo = {
    text: String(todo.text),
    priority: Number.parseInt(todo.priority) || 3,
    done: Boolean(todo.done),
  };

  newTodo = todoRepository.create(newTodo);

  return newTodo;
};

exports.getById = (id) => {
  const todo = todoRepository.getById(id);
  return todo;
};

exports.update = (id, todo) => {
  const existingTodo = todoRepository.getById(id);

  todo = {
    id: existingTodo.id,
    text: String(todo.text) || existingTodo.text,
    priority: Number.parseInt(todo.priority) || existingTodo.priority,
    done: Boolean(todo.done) || existingTodo.done,
  };
  
  const updatedTodo = todoRepository.update(todo);
  //TO-DO: Remove todos that is done for 5 minutes

  return updatedTodo;
};

exports.delete = (id) => {
  const idString = String(id);

  const todo = todoRepository.getById(idString);

  todoRepository.delete(todo.id);
};

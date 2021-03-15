const uniqid = require("uniqid");
const todoRepository = require("../data/database");

exports.getAll = () => {
  const todos = todoRepository.read();
  return todos;
};

exports.create = (todo) => {
  let newTodo = {
    id: uniqid(),
    text: String(todo.text),
    priority: Number.parseInt(todo.priority) || 3,
    done: Boolean(todo.done),
  };

  let todos = todoRepository.read();
  todos.push(newTodo);
  todoRepository.write(todos);

  return newTodo;
};

exports.getById = (id) => {
  const todos = todoRepository.read();

  const todo = todos.find((todo) => todo.id === id);

  return todo;
};

exports.update = (id, todo) => {
  let todos = todoRepository.read();

  const todoIndex = todos.findIndex((todo) => todo.id === id);

  let updatedTodo = (todos[todoIndex] = {
    ...todos[todoIndex],
    text: String(todo.text),
    priority: Number.parseInt(todo.priority),
    done: Boolean(todo.done),
  });

  todoRepository.write(todos);
  //TO-DO: Remove todos that is done for 5 minutes

  return updatedTodo;
};

exports.delete = (id) => {
  const idString = String(id);

  let todos = todoRepository.read();

  todos = todos.filter((todo) => todo.id !== idString);

  todoRepository.write(todos);
};

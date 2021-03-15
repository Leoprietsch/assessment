const db = require("../data/database");
const uniqid = require("uniqid");
const error = require("http-errors");

exports.getAll = () => {
  const todos = db.read();
  return todos;
};

exports.create = (todo) => {
  todo = {
    id: uniqid(),
    ...todo,
  };

  let todos = db.read();
  todos.push(todo);
  db.write(todos);

  return todo;
};

exports.getById = (id) => {
  const todos = db.read();

  const todo = todos.find((todo) => todo.id === id);

  if (!todo) throw error(404, `TODO with id '${id}' not found`);

  return todo;
};

exports.update = (todo) => {
  let todos = this.getAll();

  const todoIndex = todos.findIndex((t) => t.id === todo.id);

  todos[todoIndex] = todo;

  db.write(todos);
  //TO-DO: Remove todos that is done for 5 minutes

  return todo;
};

exports.delete = (id) => {
  let todos = db.read();

  todos = todos.filter((todo) => todo.id !== id);

  db.write(todos);
};

const todoRepository = require("../repository/todoRepository");
const validations = require("../utils/validations");

let trash = {};

exports.getAll = () => {
  const todos = todoRepository.getAll();
  return todos;
};

exports.create = (body) => {
  validations.body(body);
  const { text, priority, done } = body;

  let newTodo = {
    text: validations.text(text),
    priority: body.hasOwnProperty("priority")
      ? validations.priority(priority)
      : 3,
    done: body.hasOwnProperty("done") ? validations.done(done) : false,
  };

  newTodo = todoRepository.create(newTodo);

  return newTodo;
};

exports.getById = (id) => {
  const todo = todoRepository.getById(id);
  return todo;
};

exports.update = (id, body) => {
  let existingTodo = todoRepository.getById(id);

  validations.body(body);
  const { text, priority, done } = body;

  existingTodo = {
    id: existingTodo.id,
    text: body.hasOwnProperty("text")
      ? validations.text(text)
      : existingTodo.text,
    priority: body.hasOwnProperty("priority")
      ? validations.priority(priority)
      : existingTodo.priority,
    done: body.hasOwnProperty("done")
      ? validations.done(done)
      : existingTodo.done,
  };

  const updatedTodo = todoRepository.update(existingTodo);

  if (updatedTodo.done) scheduleDeletion(updatedTodo.id, 5 * 1000 * 60);
  else cancelDeletion(updatedTodo.id);

  return updatedTodo;
};

exports.delete = (id) => {
  const idString = String(id);

  const todo = todoRepository.getById(idString);

  todoRepository.delete(todo.id);
};

const scheduleDeletion = (id, time) => {
  trash[id] = setTimeout(() => {
    this.delete(id);
    delete trash[id];
  }, time);
};

const cancelDeletion = (id) => {
  clearTimeout(trash[id]);
  delete trash[id];
};

const todoService = require("../../service/todoService");

exports.getAll = (request, response) => {
  const todos = todoService.getAll();
  response.json(todos);
};

exports.post = (request, response) => {
  const body = request.body;

  const todo = todoService.create(body);

  response.status(201).json(todo);
};

exports.get = (request, response) => {
  const id = request.params.id;

  const todo = todoService.getById(id);

  response.status(200).json(todo);
};

exports.put = (request, response) => {
  const { body, params } = request;

  const todo = todoService.update(params.id, body);

  response.status(200).json(todo);
};

exports.delete = (request, response) => {
  const id = request.params.id;

  todoService.delete(id);

  response.status(204).end();
};

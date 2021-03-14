var db = [];
var id = 1;

exports.getAll = (request, response) => {
  const todos = db;
  response.json(todos);
};

exports.post = (request, response) => {
  const body = request.body;

  let todo = {
    id: String(id++),
    text: String(body.text),
    priority: Number.parseInt(body.priority) || 3,
    done: Boolean(body.done),
  };

  db.push(todo);

  response.status(201).json(todo);
};

exports.get = (request, response) => {
  const id = request.params.id;
  const todo = db.find((todo) => todo.id === id);

  response.status(200).json(todo);
};

exports.put = (request, response) => {
  const id = request.params.id;
  const body = request.body;

  const todoIndex = db.findIndex((todo) => todo.id === id);

  let todo = (db[todoIndex] = {
    ...db[todoIndex],
    text: String(body.text),
    priority: Number.parseInt(body.priority),
    done: Boolean(body.done),
  });

  //TO-DO: Remove todos that is done for 5 minutes

  response.status(200).json(todo);
};

exports.delete = (request, response) => {
  const id = String(request.params.id);

  db = db.filter((todo) => todo.id !== id);

  response.status(204).end();
};

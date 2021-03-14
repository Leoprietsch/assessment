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
  response.send("PUT TODO");
};

exports.delete = (request, response) => {
  response.send("DELETE TODO");
};

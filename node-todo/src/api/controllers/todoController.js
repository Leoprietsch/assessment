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
  response.send("GET TODO");
};

exports.put = (request, response) => {
  response.send("PUT TODO");
};

exports.delete = (request, response) => {
  response.send("DELETE TODO");
};

var db = [];

exports.getAll = (request, response) => {
  const todos = db;
  response.json(todos);
};

exports.post = (request, response) => {
  response.send("POST TODO");
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

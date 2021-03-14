exports.getAll = (request, response) => {
  response.send("GET TODOS");
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

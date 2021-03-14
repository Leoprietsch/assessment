var todoRoutes = require("express").Router();

todoRoutes.get("/", (request, response) => {
  response.send("Hello World!");
});

module.exports = todoRoutes;

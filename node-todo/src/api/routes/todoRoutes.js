var todoRoutes = require("express").Router();

todoRoutes.get("/", (request, response) => {
  response.send("GET TODOS");
});

todoRoutes.post("/", (request, response) => {
  response.send("POST TODO");
});

todoRoutes.get("/:id", (request, response) => {
  response.send("GET TODO");
});

todoRoutes.put("/:id", (request, response) => {
  response.send("PUT TODO");
});

todoRoutes.delete("/:id", (request, response) => {
  response.send("DELETE TODO");
});

module.exports = todoRoutes;

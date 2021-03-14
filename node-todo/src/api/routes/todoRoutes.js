const todoRoutes = require("express").Router();
const todoController = require("../controllers/todoController");

todoRoutes.get("/", todoController.getAll);

todoRoutes.post("/", todoController.post);

todoRoutes.get("/:id", todoController.get);

todoRoutes.put("/:id", todoController.put);

todoRoutes.delete("/:id", todoController.delete);

module.exports = todoRoutes;

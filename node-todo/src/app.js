const express = require("express");
const app = express();
const todoRoutes = require("./api/routes/todoRoutes");

app.use(express.json());

app.use("/todos", todoRoutes);

app.use((error, request, response, next) => {
  console.log(error);

  response.status(error.status);
  response.json({ error: error.message });
});

module.exports = app;

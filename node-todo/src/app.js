const express = require("express");
const app = express();
const todoRoutes = require("./api/routes/todoRoutes");

app.use(express.json());

app.use("/todos", todoRoutes);

module.exports = app;

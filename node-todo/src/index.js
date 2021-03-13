const express = require("express");
const app = express();
const port = 5000;

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.listen(port, () => {
  console.log(`To-Do API listening at http://localhost:${port}`);
});

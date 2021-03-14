const port = 5000;
const app = require("./app");

app.listen(port, () => {
  console.log(`To-Do API listening at http://localhost:${port}`);
});

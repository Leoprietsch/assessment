const fs = require("fs");
const path = require("path");
const fileName = path.resolve(__dirname, "database.json");

exports.read = () => {
  if (!fs.existsSync(fileName)) {
    fs.writeFileSync(fileName, JSON.stringify([]));
  }

  const data = fs.readFileSync(fileName, (err, data) => {
    if (err) throw err;
    console.log(err);
  });

  const todos = JSON.parse(data.toString() || "[]");

  return todos;
};

exports.write = (todos) => {
  const data = JSON.stringify(todos, null, 2);

  fs.writeFileSync(fileName, data, (err) => {
    if (err) throw err;
  });
};

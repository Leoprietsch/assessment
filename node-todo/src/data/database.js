const fs = require("fs");
const path = require("path");
const fileName = path.resolve(__dirname, "database.json");

exports.read = () => {
  if (!fs.existsSync(fileName)) {
    fs.writeFileSync(fileName, JSON.stringify([]));
  }

  const data = fs.readFileSync(fileName, (error, data) => {
    if (error) throw error;
  });

  const todos = JSON.parse(data.toString() || "[]");

  return todos;
};

exports.write = (todos) => {
  const data = JSON.stringify(todos, null, 2);

  fs.writeFileSync(fileName, data, (error) => {
    if (error) throw error;
  });
};

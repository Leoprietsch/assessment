var db = [];
var id = 1;

exports.getAll = () => {
  const todos = db;
  return todos;
};

exports.create = (todo) => {
  let newTodo = {
    id: String(id++),
    text: String(todo.text),
    priority: Number.parseInt(todo.priority) || 3,
    done: Boolean(todo.done),
  };

  db.push(newTodo);

  return newTodo;
};

exports.getById = (id) => {
  const todo = db.find((todo) => todo.id === id);

  return todo;
};

exports.update = (id, todo) => {
  const todoIndex = db.findIndex((todo) => todo.id === id);

  let updatedTodo = (db[todoIndex] = {
    ...db[todoIndex],
    text: String(todo.text),
    priority: Number.parseInt(todo.priority),
    done: Boolean(todo.done),
  });

  //TO-DO: Remove todos that is done for 5 minutes

  return updatedTodo;
};

exports.delete = (id) => {
  const idString = String(id);

  db = db.filter((todo) => todo.id !== idString);
};

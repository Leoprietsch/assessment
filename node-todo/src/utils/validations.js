const error = require("http-errors");

exports.body = (body) => {
  if (Object.keys(body).length === 0) throw error(400, "Body is required.");
};

exports.text = (value) => {
  if (typeof value === "string" && value.length > 0) return value;
  else throw error(422, "Text is required and must not be an empty string");
};

exports.priority = (value) => {
  if (Number.isInteger(value) && 1 <= value && value <= 5) return value;
  else throw error(422, "Priority must be a integer from 1 to 5");
};

exports.done = (value) => {
  if (typeof value === "boolean") return value;
  else throw error(422, "Done must be a boolean");
};

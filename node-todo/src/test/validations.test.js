const validations = require("../utils/validations");

describe("body validation", () => {
  test("empty body object throw error", () => {
    const body = {};

    expect(() => validations.body(body)).toThrow("Body is required.");
  });

  test("body object having property do not throw error", () => {
    const bodyNotEmpty = { property: 0 };

    expect(() => validations.body(bodyNotEmpty)).not.toThrow(
      "Body is required."
    );
  });
});

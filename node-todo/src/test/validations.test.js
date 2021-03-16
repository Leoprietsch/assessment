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

describe("text validation", () => {
  test("text of type number throw error", () => {
    const text = 0;

    expect(() => validations.text(text)).toThrow(
      "Text is required and must not be an empty string"
    );
  });

  test("text of type boolean throw error", () => {
    const text = false;

    expect(() => validations.text(text)).toThrow(
      "Text is required and must not be an empty string"
    );
  });

  test("empty string text throw error", () => {
    const text = "";

    expect(() => validations.text(text)).toThrow(
      "Text is required and must not be an empty string"
    );
  });

  test("string text not empty returns own value", () => {
    const text = "Text";

    const result = validations.text(text);

    expect(() => validations.text(text)).not.toThrow();
    expect(result).toEqual(expect.stringMatching(text));
  });
});

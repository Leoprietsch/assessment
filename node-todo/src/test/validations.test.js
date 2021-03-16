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

describe("priority validation", () => {
  test("priority of type string to throw error", () => {
    const priority = "";

    expect(() => validations.priority(priority)).toThrow(
      "Priority must be a integer from 1 to 5"
    );
  });

  test("priority of type boolean to throw error", () => {
    const priority = false;

    expect(() => validations.priority(priority)).toThrow(
      "Priority must be a integer from 1 to 5"
    );
  });

  test("priority to throw error when is not integer", () => {
    const priority = 3.5;

    expect(() => validations.priority(priority)).toThrow(
      "Priority must be a integer from 1 to 5"
    );
  });

  test("priority to throw error when smaller than 1", () => {
    const priority = 0;

    expect(() => validations.priority(priority)).toThrow(
      "Priority must be a integer from 1 to 5"
    );
  });

  test("priority to throw error when larger than 5", () => {
    const priority = 6;

    expect(() => validations.priority(priority)).toThrow(
      "Priority must be a integer from 1 to 5"
    );
  });

  test("priority of type number, and in the range 1 to 5, to return own value", () => {
    const priority = 3;

    const result = validations.priority(priority);

    expect(() => validations.priority(priority)).not.toThrow();
    expect(result).toBe(priority);
  });
});

describe("done validation", () => {
  test("done of type number throw error", () => {
    const done = 0;

    expect(() => validations.done(done)).toThrow("Done must be a boolean");
  });

  test("done of type string throw error", () => {
    const done = "";

    expect(() => validations.done(done)).toThrow("Done must be a boolean");
  });

  test("done of type boolean returns own value", () => {
    const done = false;

    const result = validations.done(done);

    expect(() => validations.done(done)).not.toThrow();
    expect(result).toBe(done);
  });
});

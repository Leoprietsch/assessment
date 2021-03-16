jest.mock("../repository/todoRepository");
const todoRepository = require("../repository/todoRepository");
const todoService = require("../service/todoService");

describe("getAll", () => {
  test("returns empty todos array returned from repository", () => {
    const expected = [];
    const mock = jest.fn().mockReturnValueOnce(expected);

    todoRepository.getAll = mock;

    const result = todoService.getAll();

    expect(result).toEqual(expected);
  });

  test("returns todos array returned from repository", () => {
    const expected = [{ id: "fakeId", text: "text", priority: 3, done: false }];
    const mock = jest.fn().mockReturnValueOnce(expected);

    todoRepository.getAll = mock;

    const result = todoService.getAll();

    expect(result).toEqual(expected);
  });
});

describe("getById", () => {
  test("returns todos returned from repository", () => {
    const expected = { id: "fakeId", text: "text", priority: 3, done: false };
    const mock = jest.fn().mockReturnValueOnce(expected);

    todoRepository.getById = mock;

    const result = todoService.getById("fakeId");

    expect(result).toEqual(expected);
  });
});

describe("create", () => {
  test("create todo with valid body and returns created todo", () => {
    const body = {
      text: "text",
      priority: 3,
      done: false,
    };

    const expected = { id: "fakeId", ...body };

    const mock = jest.fn().mockReturnValueOnce(expected);

    todoRepository.create = mock;

    const result = todoService.create(body);

    expect(result).toEqual(expected);
  });

  test("create todo with empty body throws error", () => {
    const body = {};
    const expected = "Body is required.";

    expect(() => todoService.create(body)).toThrow();
  });

  test("create todo missing text throws error", () => {
    const body = {
      priority: 3,
      done: false,
    };

    const expected = "Text is required and must not be an empty string";

    expect(() => todoService.create(body)).toThrow(expected);
  });

  test("create todo with empty text throws error", () => {
    const body = {
      text: "",
      priority: 3,
      done: false,
    };

    const expected = "Text is required and must not be an empty string";

    expect(() => todoService.create(body)).toThrow(expected);
  });

  test("create todo with priority smaller than 1 throws error", () => {
    const body = {
      text: "text",
      priority: 0,
      done: false,
    };

    const expected = "Priority must be a integer from 1 to 5";

    expect(() => todoService.create(body)).toThrow(expected);
  });

  test("create todo with priority larger than 5 throws error", () => {
    const body = {
      text: "text",
      priority: 6,
      done: false,
    };

    const expected = "Priority must be a integer from 1 to 5";

    expect(() => todoService.create(body)).toThrow(expected);
  });

  test("create todo with priority type not number throws error", () => {
    const body = {
      text: "text",
      priority: "3",
      done: false,
    };

    const expected = "Priority must be a integer from 1 to 5";

    expect(() => todoService.create(body)).toThrow(expected);
  });

  test("create todo with priority type not integer throws error", () => {
    const body = {
      text: "text",
      priority: 3.5,
      done: false,
    };

    const expected = "Priority must be a integer from 1 to 5";

    expect(() => todoService.create(body)).toThrow(expected);
  });

  test("create todo with done type not boolean throws error", () => {
    const body = {
      text: "text",
      priority: 3,
      done: "false",
    };

    const expected = "Done must be a boolean";

    expect(() => todoService.create(body)).toThrow(expected);
  });

  test("create todo missing priority and done sets default values", () => {
    const body = {
      text: "text",
    };

    const expectedValues = {
      id: "fakeId",
      text: "text",
      priority: 3,
      done: false,
    };

    todoRepository.create.mockImplementation((param) => {
      return { id: "fakeId", ...param };
    });

    const result = todoService.create(body);

    expect(result).toEqual(expectedValues);
  });

  test("create todo with defined text, priority and done", () => {
    const body = {
      text: "text",
      priority: 5,
      done: true,
    };

    const expectedValues = {
      id: "fakeId",
      text: "text",
      priority: 5,
      done: true,
    };

    todoRepository.create.mockImplementation((param) => {
      return { id: "fakeId", ...param };
    });

    const result = todoService.create(body);

    expect(result).toEqual(expectedValues);
  });
});

describe("update", () => {
  test("update todo with valid body and returns updated todo", () => {
    const existingTodo = {
      id: "fakeId",
      text: "text",
      priority: 3,
      done: true,
    };

    todoRepository.getById.mockReturnValueOnce(existingTodo);

    let body = {
      text: "UPDATED TODO",
      priority: 5,
      done: false,
    };

    const expected = { id: "fakeId", ...body };

    todoRepository.update.mockImplementation((param) => param);

    const result = todoService.update("fakeId", body);

    expect(result).toEqual(expected);
  });

  test("update todo with empty body throws error", () => {
    const body = {};

    const existingTodo = {
      id: "fakeId",
      text: "text",
      priority: 5,
      done: true,
    };

    todoRepository.getById.mockReturnValueOnce(existingTodo);

    const expected = "Body is required.";

    expect(() => todoService.update("fakeId", body)).toThrow(expected);
  });

  test("update todo update only body parameters priority and done", () => {
    const existingTodo = {
      id: "fakeId",
      text: "text",
      priority: 5,
      done: true,
    };

    todoRepository.getById.mockReturnValueOnce(existingTodo);

    const body = {
      priority: 3,
      done: false,
    };

    let expected = { ...existingTodo, ...body };

    let result = todoService.update("fakeId", body);

    expect(result).toEqual(expected);
  });

  test("update todo update only body parameter priority ", () => {
    const existingTodo = {
      id: "fakeId",
      text: "text",
      priority: 5,
      done: true,
    };

    todoRepository.getById.mockReturnValueOnce(existingTodo);

    const body = {
      priority: 3,
    };

    let expected = { ...existingTodo, ...body };

    let result = todoService.update("fakeId", body);

    expect(result).toEqual(expected);
  });

  test("update todo update only body parameter done ", () => {
    const existingTodo = {
      id: "fakeId",
      text: "text",
      priority: 5,
      done: true,
    };

    todoRepository.getById.mockReturnValueOnce(existingTodo);

    const body = {
      done: false,
    };

    let expected = { ...existingTodo, ...body };

    let result = todoService.update("fakeId", body);

    expect(result).toEqual(expected);
  });

  test("update todo with empty text throws error", () => {
    const existingTodo = {
      id: "fakeId",
      text: "text",
      priority: 5,
      done: true,
    };

    todoRepository.getById.mockReturnValueOnce(existingTodo);

    const body = {
      text: "",
      priority: 3,
      done: false,
    };

    const expected = "Text is required and must not be an empty string";

    expect(() => todoService.update("fakeId", body)).toThrow(expected);
  });

  test("update todo with priority smaller than 1 throws error", () => {
    const existingTodo = {
      id: "fakeId",
      text: "text",
      priority: 5,
      done: true,
    };

    todoRepository.getById.mockReturnValueOnce(existingTodo);

    const body = {
      text: "text",
      priority: 0,
      done: false,
    };

    const expected = "Priority must be a integer from 1 to 5";

    expect(() => todoService.update("fakeId", body)).toThrow(expected);
  });

  test("update todo with priority larger than 5 throws error", () => {
    const existingTodo = {
      id: "fakeId",
      text: "text",
      priority: 5,
      done: true,
    };

    todoRepository.getById.mockReturnValueOnce(existingTodo);

    const body = {
      text: "text",
      priority: 6,
      done: false,
    };

    const expected = "Priority must be a integer from 1 to 5";

    expect(() => todoService.update("fakeId", body)).toThrow(expected);
  });

  test("update todo with priority type not number throws error", () => {
    const existingTodo = {
      id: "fakeId",
      text: "text",
      priority: 5,
      done: true,
    };

    todoRepository.getById.mockReturnValueOnce(existingTodo);

    const body = {
      text: "text",
      priority: "3",
      done: false,
    };

    const expected = "Priority must be a integer from 1 to 5";

    expect(() => todoService.update("fakeId", body)).toThrow(expected);
  });

  test("update todo with priority type not integer throws error", () => {
    const existingTodo = {
      id: "fakeId",
      text: "text",
      priority: 5,
      done: true,
    };

    todoRepository.getById.mockReturnValueOnce(existingTodo);

    const body = {
      text: "text",
      priority: 3.5,
      done: false,
    };

    const expected = "Priority must be a integer from 1 to 5";

    expect(() => todoService.update("fakeId", body)).toThrow(expected);
  });

  test("update todo with done type not boolean throws error", () => {
    const existingTodo = {
      id: "fakeId",
      text: "text",
      priority: 5,
      done: true,
    };

    todoRepository.getById.mockReturnValueOnce(existingTodo);

    const body = {
      text: "text",
      priority: 3,
      done: "false",
    };

    const expected = "Done must be a boolean";

    expect(() => todoService.update("fakeId", body)).toThrow(expected);
  });

  test("update todo missing priority and done use current todo properties values", () => {
    const existingTodo = {
      id: "fakeId",
      text: "text",
      priority: 5,
      done: true,
    };

    todoRepository.getById.mockReturnValueOnce(existingTodo);

    const body = {
      text: "EDITED TEXT",
    };

    const expectedValues = {
      id: "fakeId",
      text: "EDITED TEXT",
      priority: 5,
      done: true,
    };

    todoRepository.create.mockImplementation((param) => {
      return { id: "fakeId", ...param };
    });

    const result = todoService.update("fakeId", body);

    expect(result).toEqual(expectedValues);
  });

  test("update todo to done schedule deletion", () => {
    const existingTodo = {
      id: "fakeId",
      text: "text",
      priority: 3,
      done: false,
    };

    todoRepository.getById.mockReturnValueOnce(existingTodo);

    const body = {
      done: true,
    };

    const expectedValues = {
      id: "fakeId",
      text: "text",
      priority: 3,
      done: true,
    };

    todoRepository.create.mockImplementation((param) => {
      return { id: "fakeId", ...param };
    });

    const result = todoService.update("fakeId", body);

    expect(result).toEqual(expectedValues);
  });
});

describe("delete", () => {
  test("delete todo", () => {
    const deleteMock = jest.fn();

    todoRepository.delete = deleteMock;

    const mockGet = { id: "fakeId", text: "text", priority: 3, done: false };
    const mock = jest.fn().mockReturnValueOnce(mockGet);

    todoRepository.getById = mock;

    const id = "fakeId";
    todoService.delete(id);

    expect(todoRepository.delete).toBeCalledWith(id);
  });
});

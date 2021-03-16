jest.mock("../data/database");
const db = require("../data/database");
jest.mock("uniqid");
const uniqid = require("uniqid");

const todoRepository = require("../repository/todoRepository");

describe("getAll", () => {
  test("returns empty todos array returned from db", () => {
    const expected = [];
    const mock = jest.fn().mockReturnValueOnce(expected);

    db.read = mock;

    const result = todoRepository.getAll();

    expect(result).toEqual(expected);
  });

  test("returns todos array returned from repository", () => {
    const expected = [{ id: "fakeId", text: "text", priority: 3, done: false }];
    const mock = jest.fn().mockReturnValueOnce(expected);

    db.read = mock;

    const result = todoRepository.getAll();

    expect(result).toEqual(expected);
  });
});

describe("getById", () => {
  test("return todo by id", () => {
    const id = "fakeId";
    const expected = { id, text: "text", priority: 3, done: false };

    const mockValue = [expected];
    const mock = jest.fn().mockReturnValueOnce(mockValue);

    db.read = mock;

    const result = todoRepository.getById(id);

    expect(result).toEqual(expected);
  });

  test("return todo by id", () => {
    const id = "fakeId";
    const expected = `TODO with id '${id}' not found`;

    const mockValue = [
      { id: "diferentId", text: "text", priority: 3, done: false },
    ];

    const mock = jest.fn().mockReturnValueOnce(mockValue);

    db.read = mock;

    expect(() => todoRepository.getById(id)).toThrow(expected);
  });
});

describe("create", () => {
  test("create todo returns created todo with generated uniqid", () => {
    const id = "fakeId";

    const todo = {
      text: "text",
      priority: 3,
      done: false,
    };

    const expected = {
      id,
      ...todo,
    };

    uniqid.mockReturnValueOnce(id);

    const dbMock = jest.fn().mockReturnValueOnce([]);
    db.read = dbMock;

    const result = todoRepository.create(todo);

    expect(result).toEqual(expected);
  });
});

describe("update", () => {
  test("update todo returns updated todo", () => {
    const mockValue = [
      { id: "fakeId", text: "text", priority: 3, done: false },
    ];
    const mock = jest.fn().mockReturnValueOnce(mockValue);

    todoRepository.getAll = mock;

    const todo = {
      id: "fakeId",
      text: "EDITED text",
      priority: 5,
      done: true,
    };

    const dbMock = jest.fn().mockReturnValueOnce([]);
    db.read = dbMock;

    const result = todoRepository.update(todo);

    expect(result).toEqual(todo);
  });
});

describe("delete", () => {
  test("delete todo", () => {
    const id = "fakeId";

    const expected = [{ id, text: "text", priority: 3, done: false }];
    const mock = jest.fn().mockReturnValueOnce(expected);

    db.read = mock;

    db.write = jest.fn();

    todoRepository.delete(id);

    expect(db.write).toBeCalledWith([]);
  });
});

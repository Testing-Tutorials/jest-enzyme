import { toggleDone, deleteTodo } from "../app/state-functions";

test("tooggleDone completes an incomplete todo", () => {
  const startState = [{ id: 1, done: false, text: "Buy Milk" }];

  const finState = toggleDone(startState, 1);

  expect(finState).toEqual([{ id: 1, done: true, text: "Buy Milk" }]);
});

test("deleteTodo deletes the todo it is given", () => {
  const startState = [{ id: 1, done: false, text: "Buy Milk" }];

  const finState = deleteTodo(startState, 1);

  expect(finState).toEqual([]);
});

test("adds a todo to the list of todos", () => {
  const addTodo = (todos, todo) => {
    const newTodo = Object.assign({}, todo, {
      id: 3,
      done: false,
    });

    return todos.concat([newTodo]);
  };
  const todos = [
    {
      id: 1,
      name: "Write a blog post for Sitepoint",
      done: false,
    },
    { id: 2, name: "Walk the dog", done: false },
  ];

  const todo = { name: "Blog about Jest" };

  const newTodos = addTodo(todos, todo);

  expect(newTodos).toEqual([
    {
      id: 1,
      name: "Write a blog post for Sitepoint",
      done: false,
    },
    { id: 2, name: "Walk the dog", done: false },
    { id: 3, name: "Blog about Jest", done: false },
  ]);
});

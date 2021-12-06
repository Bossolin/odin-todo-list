const Todo = (() => {
  const createTodo = (title, dueDate, priority, folder) => {
    const id = Math.random();

    const editTodo = "inherit edit module";
    const { deleteTodo } = "inherit delete module";

    return { title, dueDate, priority, folder, id, editTodo, deleteTodo };
  };

  const todoArr = [];

  const dummyTodo = createTodo(
    "Finish Todo List",
    "04-12-2021",
    "urgent",
    "main"
  );

  const dummyTodo2 = createTodo(
    "Finish Todo List 2",
    "04-12-2021",
    "urgent",
    "main"
  );

  todoArr.push(dummyTodo);
  todoArr.push(dummyTodo2);

  return { createTodo, todoArr };
})();

export default Todo;

const Todo = (() => {
  const createTodo = (title, dueDate, priority, folder) => {
    const editTodo = "inherit edit module";
    const { deleteTodo } = "inherit delete module";

    return { title, dueDate, priority, folder, editTodo, deleteTodo };
  };

  const todoArr = [];

  const dummyTodo = createTodo(
    "Finish Todo List",
    "04-12-2021",
    "urgent",
    "main"
  );

  todoArr.push(dummyTodo);

  return { createTodo, todoArr };
})();

export default Todo;

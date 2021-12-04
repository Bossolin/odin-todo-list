const Todo = (() => {
  const createTodo = (title, dueDate, priority, folder) => {
    const editTodo = "inherit edit module";
    const { deleteTodo } = "inherit delete module";

    return { title, dueDate, priority, folder, editTodo, deleteTodo };
  };

  const todoArr = [];

  return { createTodo, todoArr };
})();

export default Todo;

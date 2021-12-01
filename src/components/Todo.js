const Todo = (title, date, priority, folder) => {
  const editTodo = "inherit edit module";
  const { deleteTodo } = "inherit delete module";

  return { title, date, priority, folder, editTodo, deleteTodo };
};

export default Todo;

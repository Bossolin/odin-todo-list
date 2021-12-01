const Todo = (title, date, priority, notes) => {
  const editTodo = "inherit edit module";
  const { deleteTodo } = "inherit delete module";

  return { title, date, priority, notes, editTodo, deleteTodo };
};

export default Todo;

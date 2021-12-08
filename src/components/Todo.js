const Todo = (() => {
  const createTodo = (title, dueDate, priority, folder) => {
    const id = Math.random();

    const editTodo = "inherit edit module";
    const { deleteTodo } = "inherit delete module";

    return { title, dueDate, priority, folder, id, editTodo, deleteTodo };
  };

  const todoArr = [];

  // const lists = ["All", "Folder 1", "Folder 2"];
  const lists = [
    {
      text: "All",
      value: "All",
      selected: true,
    },
    {
      text: "Folder 1",
      value: "Folder 1",
    },
    {
      text: "Folder 2",
      value: "Folder 2",
    },
  ];

  const dummyTodo = createTodo(
    "Finish Todo List",
    "04-12-2021",
    "urgent",
    "Folder 1"
  );

  const dummyTodo2 = createTodo(
    "Finish Todo List 2",
    "04-12-2021",
    "urgent",
    "Folder 2"
  );

  todoArr.push(dummyTodo);
  todoArr.push(dummyTodo2);

  return { createTodo, todoArr, lists };
})();

export default Todo;

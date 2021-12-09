import { isToday } from "date-fns";

const Todo = (() => {
  const createTodo = (title, dueDate, priority, folder) => {
    const id = Math.random();

    const today = isToday(dueDate);

    const formattedDate = dueDate.toDateString();

    return { title, dueDate: formattedDate, priority, folder, id, today };
  };

  const todoArr = [];

  const lists = [
    {
      text: "All",
      selected: true,
    },
    {
      text: "Today",
    },
    {
      text: "Folder 1",
    },
  ];

  const dummyTodo = createTodo(
    "Finish Todo List",
    new Date("04-12-2021"),
    "urgent",
    "Folder 1"
  );

  const dummyTodo2 = createTodo(
    "Finish Todo List 2",
    new Date("04-12-2021"),
    "urgent",
    "Folder 2"
  );

  todoArr.push(dummyTodo);
  todoArr.push(dummyTodo2);

  return { createTodo, todoArr, lists };
})();

export default Todo;

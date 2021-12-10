import { isToday } from "date-fns";

const Todo = (() => {
  const createTodo = (title, dueDate, priority, folder) => {
    const id = Math.random();

    const today = isToday(dueDate);

    const formattedDate = dueDate.toDateString();

    return { title, dueDate: formattedDate, priority, folder, id, today };
  };

  let todoArr = [];

  let lists = [
    {
      text: "All",
      selected: true,
    },
    {
      text: "Today",
    },
  ];

  const setLocalData = () => {
    localStorage.setItem("todoArr", JSON.stringify(todoArr));
    localStorage.setItem("folders", JSON.stringify(lists));
  };

  const getLocalData = () => {
    if (
      !JSON.parse(localStorage.getItem("todoArr")) ||
      !JSON.parse(localStorage.getItem("folders"))
    ) {
      return console.log("false");
    }
    todoArr = JSON.parse(localStorage.getItem("todoArr"));
    lists = JSON.parse(localStorage.getItem("folders"));
  };

  const deleteLocalData = () => {
    localStorage.removeItem("todoArr");
  };

  getLocalData();

  return {
    createTodo,
    todoArr,
    lists,
    setLocalData,
    getLocalData,
    deleteLocalData,
  };
})();

export default Todo;

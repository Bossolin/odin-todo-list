import Dom from "./Dom";
import Todo from "./Todo";

const Logic = (() => {
  const displayTodo = (todo) => {
    const todoUl = document.querySelector(".todos-ul");

    const todoItem = document.createElement("li");
    todoItem.setAttribute("id", todo.id);
    todo.priority === "urgent"
      ? todoItem.classList.add("urgent")
      : todoItem.classList.add("normal");

    const title = document.createElement("div");
    title.classList.add("todo-title");
    title.innerText = todo.title;
    todoItem.appendChild(title);

    const dueDate = document.createElement("div");
    dueDate.classList.add("todo-date");
    dueDate.innerText = todo.dueDate;
    todoItem.appendChild(dueDate);

    const deleteTodo = document.createElement("button");
    deleteTodo.classList.add("todo-delete");
    deleteTodo.innerText = `×`;
    deleteTodo.addEventListener("click", Dom.deleteTodo);
    todoItem.appendChild(deleteTodo);

    todoUl.appendChild(todoItem);
  };

  const displayLists = (list) => {
    const listsUl = document.querySelector(".todos-lists");
    const listItem = document.createElement("li");

    listItem.innerText = list;

    listItem.innerText === "All" ? listItem.classList.add("active") : "";

    listsUl.appendChild(listItem);
  };

  const clearTodos = () => {
    const children = document.querySelectorAll(".todos-ul li");
    children.forEach((child) => child.remove());
  };

  const filterTodos = (list) => {
    clearTodos();

    if (list.target.innerText === "All") {
      return Todo.todoArr.forEach(displayTodo);
    }

    const filtered = Todo.todoArr.filter(
      (todo) => todo.folder === list.target.innerText
    );

    filtered.forEach(displayTodo);
  };

  return { displayTodo, displayLists, filterTodos, clearTodos };
})();

export default Logic;

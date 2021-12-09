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

  const clearLists = () => {
    const children = document.querySelectorAll(".todos-lists li");
    children.forEach((child) => child.remove());
  };

  const displayLists = (list) => {
    const listsUl = document.querySelector(".todos-lists");
    const listItem = document.createElement("li");

    listItem.innerText = list.text;

    listItem.innerText === "All" ? listItem.classList.add("active") : "";

    listsUl.appendChild(listItem);
  };

  const clearTodos = () => {
    const children = document.querySelectorAll(".todos-ul li");
    children.forEach((child) => child.remove());
  };

  const clearBaldness = () => {
    const listItems = document.querySelectorAll(".todos-lists li");
    listItems.forEach((item) => item.classList.remove("active"));
  };

  const filterTodos = (list) => {
    clearTodos();
    clearBaldness();

    list.target.classList.add("active");
    if (list.target.innerText === "All") {
      return Todo.todoArr.forEach(displayTodo);
    }

    if (list.target.innerText === "Today") {
      const todayTodos = Todo.todoArr.filter((todo) => todo.today);
      return todayTodos.forEach(displayTodo);
    }

    const filtered = Todo.todoArr.filter(
      (todo) => todo.folder === list.target.innerText
    );

    filtered.forEach(displayTodo);
  };

  const updateLists = () => {
    const formDiv = document.querySelector(".modal-form");
    const selectDiv = document.querySelector("#folders");

    if (selectDiv.firstChild) {
      selectDiv.innerHTML = "";
    }

    Todo.lists.forEach((option) =>
      selectDiv.add(new Option(option.text, option.value, option.selected))
    );
    formDiv.insertBefore(selectDiv, formDiv.children[8]);
  };

  return {
    displayTodo,
    displayLists,
    filterTodos,
    clearTodos,
    clearLists,
    updateLists,
  };
})();

export default Logic;

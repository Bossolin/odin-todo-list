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
    const p = document.createElement("p");

    p.innerText = list.text;

    p.innerText === "All" ? p.classList.add("active") : "";

    listItem.appendChild(p);

    if (list.text !== "All" && list.text !== "Today") {
      const btn = document.createElement("button");
      btn.classList.add("delete-folder");
      btn.innerText = `×`;
      btn.addEventListener("click", Dom.deleteFolder);
      listItem.appendChild(btn);
    }
    listsUl.appendChild(listItem);
  };

  const clearTodos = () => {
    const children = document.querySelectorAll(".todos-ul li");
    children.forEach((child) => child.remove());
  };

  const clearBaldness = () => {
    const listItems = document.querySelectorAll(".active");
    listItems.forEach((item) => item.classList.remove("active"));
  };

  const filterTodos = (list) => {
    clearTodos();
    clearBaldness();

    if (list.target.innerText === "All") {
      list.target.classList.add("active");
      return Todo.todoArr.forEach(displayTodo);
    }

    if (list.target.innerText === "Today") {
      list.target.classList.add("active");
      const todayTodos = Todo.todoArr.filter((todo) => todo.today);
      return todayTodos.forEach(displayTodo);
    }

    list.target.classList.add("active");
    list.target.nextSibling.classList.add("active");

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

    Todo.lists.forEach((option) => {
      if (option.text === "Today") return;
      return selectDiv.add(
        new Option(option.text, option.value, option.selected)
      );
    });

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

import Dom from "./Dom";
import Todo from "./Todo";
import Logic from "./Logic";
import { Modals } from "./Modals";

const UI = (() => {
  const generateUI = () => {
    const body = document.querySelector("body");
    const content = document.createElement("div");
    content.classList.add("content");

    const header = (() => {
      const header = document.createElement("div");
      header.classList.add("header");

      const logo = document.createElement("h1");
      logo.classList.add("logo");
      logo.innerText = "Todo List";

      const addTodoBtn = document.createElement("button");
      addTodoBtn.classList.add("add-todo");
      addTodoBtn.innerText = "+";

      header.appendChild(logo);
      header.appendChild(addTodoBtn);

      return header;
    })();

    const main = (() => {
      const main = document.createElement("div");
      main.classList.add("main");

      const list = document.createElement("div");
      list.classList.add("list");

      const todos = document.createElement("div");
      todos.classList.add("todos");

      const todosUl = document.createElement("ul");
      todosUl.classList.add("todos-ul");

      const listsUl = document.createElement("ul");
      listsUl.classList.add("todos-lists");

      const btn = document.createElement("button");
      btn.classList.add("add-folder");
      btn.innerHTML = "Add Folder <b>+</b>";

      const folderForm = document.createElement("form");
      folderForm.setAttribute("type", "submit");
      const field = document.createElement("input");
      field.classList.add("add-folder-input");
      folderForm.appendChild(field);

      list.appendChild(btn);
      list.appendChild(listsUl);
      list.appendChild(folderForm);
      todos.appendChild(todosUl);
      main.appendChild(list);
      main.appendChild(todos);

      return main;
    })();

    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(Modals.addTodoModal());
    body.appendChild(content);
    Dom.modalBtns();
    Todo.todoArr.forEach(Logic.displayTodo);
    Todo.lists.forEach(Logic.displayLists);
    Dom.filterTodos();
  };

  return { generateUI };
})();

export default UI;

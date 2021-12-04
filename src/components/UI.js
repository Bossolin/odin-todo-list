import Dom from "./Dom";

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

      main.appendChild(list);
      main.appendChild(todos);

      return main;
    })();

    const modal = (() => {
      const modalBG = document.createElement("div");
      modalBG.classList.add("modal-bg");

      const modalDiv = document.createElement("div");
      modalDiv.classList.add("modal-div");
      modalDiv.innerHTML = `<form action="">
      <div class="form-header">
        <h2>Add Todo</h2>
        <button id="close-btn">&times;</button>
      </div>
      <label for="title">Task:</label>
      <input type="text" name="title" id="title" />
      <label for="date">Due date:</label>
      <input type="date" name="date" id="date" />
      <label for="prio">Priority:</label>
      <div class="priority">
        <input
          type="radio"
          id="normal"
          name="prio"
          value="normal"
          checked="checked"
        />
        <label for="">Normal</label>
        <input type="radio" id="urgent" name="prio" value="urgent" />
        <label for="">Urgent</label>
      </div>
      <label for="cars">Folder:</label>
      <select name="folders" id="folders">
        <option value="main">Main</option>
        <option value="folder1">Folder 1</option>
        <option value="folder2">Folder 2</option>
        <option value="folder3">Fodler 3</option>
      </select>
      <div class="btns">
        <button type="reset" id="reset-btn">Reset</button>
        <button type="submit" id="submit-btn">Add</button>
      </div>
    </form>`;

      modalBG.appendChild(modalDiv);

      return modalBG;
    })();

    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(modal);
    body.appendChild(content);
    Dom.modalBtns();
  };

  return { generateUI };
})();

export default UI;

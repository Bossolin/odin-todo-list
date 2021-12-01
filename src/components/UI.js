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

      const addTodo = document.createElement("button");
      addTodo.classList.add("add-todo");
      addTodo.innerText = "+";

      header.appendChild(logo);
      header.appendChild(addTodo);

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

    content.appendChild(header);
    content.appendChild(main);
    body.appendChild(content);
  };

  return { generateUI };
})();

export default UI;

import Dom from "./Dom";

const Logic = (() => {
  const displayTodo = (todo) => {
    const todoUl = document.querySelector(".todos-ul");
    const todoItem = document.createElement("li");
    todoItem.setAttribute("id", todo.id);

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

  return { displayTodo };
})();

export default Logic;

const Logic = (() => {
  const displayTodo = (todo) => {
    const todoUl = document.querySelector(".todos-ul");
    const todoItem = document.createElement("li");

    todoItem.innerText = todo.title;

    todoUl.appendChild(todoItem);
  };

  return { displayTodo };
})();

export default Logic;

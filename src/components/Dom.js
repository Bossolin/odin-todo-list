import Logic from "./Logic";
import Todo from "./Todo";

const Dom = (() => {
  const modalBtns = () => {
    const openModalBtn = (() => {
      const btn = document.querySelector(".add-todo");
      btn.addEventListener("click", () => {
        const modal = document.querySelector(".modal-bg");
        modal.classList.add("modal-bg-active");
      });
    })();

    const closeModalBtn = (() => {
      const btn = document.querySelector("#close-btn");
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const modal = document.querySelector(".modal-bg");
        modal.classList.remove("modal-bg-active");
      });
    })();

    const submitTodoBtn = (() => {
      const btn = document.querySelector("#submit-btn");

      const submitTodo = (e) => {
        e.preventDefault();

        const title = document.querySelector("#title").value;
        const dueDate = document.querySelector("#date").value;
        const prio = document.querySelector('input[name="prio"]:checked').value;
        const folder = document.querySelector("#folders").value;

        const newTodo = Todo.createTodo(title, dueDate, prio, folder);
        Todo.todoArr.push(newTodo);

        const form = document.querySelector("form");
        form.reset();

        const modal = document.querySelector(".modal-bg");
        modal.classList.remove("modal-bg-active");

        Logic.displayTodo(newTodo);
      };

      btn.addEventListener("click", submitTodo);
    })();
  };

  const filterTodos = () => {
    const listItems = document.querySelectorAll(".todos-lists li");

    listItems.forEach((item) => {
      item.addEventListener("click", Logic.filterTodos);
    });
  };

  const deleteTodo = (todo) => {
    const todoLi = document.getElementById(todo.path[1].id);
    todoLi.remove();

    Todo.todoArr = Todo.todoArr.filter((task) => +task.id !== +todo.path[1].id);
  };

  return { modalBtns, deleteTodo, filterTodos };
})();

export default Dom;

import Logic from "./Logic";
import Todo from "./Todo";

const Dom = (() => {
  const modalBtns = () => {
    const openModalBtn = (() => {
      const btn = document.querySelector(".add-todo");
      btn.addEventListener("click", () => {
        const modal = document.querySelector(".modal-bg");
        modal.classList.add("modal-bg-active");

        const title = document.querySelector("#title").focus();
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

        const newTodo = Todo.createTodo(title, new Date(dueDate), prio, folder);
        Todo.todoArr.push(newTodo);
        Todo.setLocalData();

        const form = document.querySelector(".modal-form");
        form.reset();

        const modal = document.querySelector(".modal-bg");
        modal.classList.remove("modal-bg-active");

        Logic.displayTodo(newTodo);
      };

      btn.addEventListener("click", submitTodo);
    })();

    const addFolderBtn = (() => {
      const btn = document.querySelector(".add-folder");

      btn.addEventListener("click", () => {
        const field = document.querySelector(".add-folder-input");
        field.classList.toggle("active");
        field.setAttribute("required", "");
        field.focus();

        field.onkeydown = function (e) {
          if (e.keyCode == 13) {
            if (e.target.value === "") return;
            e.preventDefault();
            Todo.lists.push({ text: e.target.value });
            Todo.setLocalData();

            Logic.clearLists();
            Todo.lists.forEach(Logic.displayLists);
            filterTodos();
            Logic.updateLists();

            field.value = "";
            field.classList.toggle("active");
          }
        };
      });
    })();
  };

  const filterTodos = () => {
    const listItems = document.querySelectorAll(".todos-lists li p");

    listItems.forEach((item) => {
      item.addEventListener("click", Logic.filterTodos);
    });
  };

  const deleteTodo = (todo) => {
    const todoLi = document.getElementById(todo.path[1].id);
    todoLi.remove();

    Todo.todoArr = Todo.todoArr.filter((task) => +task.id !== +todo.path[1].id);
    Todo.deleteLocalData();
    localStorage.setItem("todoArr", JSON.stringify(Todo.todoArr));
  };

  const deleteFolder = (folder) => {
    const folderLi = document.querySelector(`.active`);
    folderLi.parentElement.remove();

    Todo.lists = Todo.lists.filter(
      (item) => item.text !== folder.path[1].firstChild.innerText
    );

    Todo.deleteLocalList();
    localStorage.setItem("folders", JSON.stringify(Todo.lists));

    Logic.clearTodos();
    Todo.todoArr.forEach(Logic.displayTodo);
  };

  return { modalBtns, deleteTodo, filterTodos, deleteFolder };
})();

export default Dom;

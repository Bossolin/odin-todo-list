import "./style.css";
import Todo from "./components/Todo";

const body = document.querySelector("body");
const btn = document.createElement("button");

btn.innerText = "Button";

btn.addEventListener("click", () => {
  const newTodo = Todo("title", "date", "priority", "notes");
  console.log(newTodo);
});

body.appendChild(btn);

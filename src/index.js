import "./style.css";
import UI from "./components/UI";
import Todo from "./components/Todo";

window.onload = UI.generateUI();

// const Todo = () => {
//   const todoFactory = (title, date, prio, folder, description) => {
//     //delete method composed
//     //edit method inherited

//     return { title, date, prio, folder, description };
//   };

//   const todoArr = [...todos];

//   const grabTodo = () => {
//     //grab data from modal to make todo from todoFactory

//     const pushTodo = (todo) => {
//       todoArr.push(todo);
//     };
//   };

//   const displayTodo = () => {
//     //display all todos for now
//     //later display todos based on folder
//   };
// };

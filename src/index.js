import "./styles/main.css";
import TodoController from "./modules/TodoController.js";


document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const list = document.querySelector("ul");
  new TodoController(form, list);
})


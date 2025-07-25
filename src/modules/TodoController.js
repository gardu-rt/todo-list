import Todo from "./TodoModel.js";
import TodoRenderer from "./TodoRenderer.js";
import StorageService from "./StorageService.js";

export default class TodoController {
  constructor(formElement, listElement) {
    this.todos = StorageService.load();
    this.form = formElement;
    this.renderer = new TodoRenderer(
      listElement,
      this.toggleTodo.bind(this),
      this.deleteTodo.bind(this)
    );
    this.form.addEventListener("submit", this.addTodo.bind(this));
    this.renderer.render(this.todos);
  }

  addTodo(e) {
    e.preventDefault();
    const title = this.form.querySelector("#title").value.trim();
    const dueDate = this.form.querySelector("#dueDate").value;
    const priority = this.form.querySelector("#priority").value;

    this.todos.push(new Todo(title, dueDate, priority));
    this._update();
    this.form.reset();
  }

  toggleTodo(index) {
    this.todos[index].toggleDone();
    this._update();
  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
    this._update();
  }

  _update() {
    StorageService.save(this.todos);
    this.renderer.render(this.todos);
  }
}

export default class Todo {
  constructor(title, dueDate = null, priority = "normal", done = false) {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.done = done;
  };

  toggleDone() {
    this.done = !this.done;
  }
}

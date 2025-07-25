import StorageService from "./StorageService.js";

export default class TodoController {
  constructor(formElement, listElement) {
    this.todos = StorageService.load();
    this.form = formElement;
  }
}

import Todo from "./TodoModel.js";

// this function is reintanciate obj from localStorage 
// making sure method in that obj can be use
export default class TodoFactory {
  static fromPlainObject(obj) {
    const todo = new Todo(
      obj.title,
      obj.dueDate,
      obj.priority,
      obj.done
    );

    return todo;
  }

  static fromArray(array) {
    return array.map(obj => this.fromPlainObject(obj));
  }
}

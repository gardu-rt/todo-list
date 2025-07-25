import TodoFactory from "./TodoFactory.js";

export default class StorageService {
  static save(dataTodo) {
    localStorage.setItem("todos", JSON.stringify(dataTodo));
  }

  static load() {
    const json = localStorage.getItem("todos");
    if (!json) return [];
    try {
      const plain = JSON.parse(json);
      return TodoFactory.fromArray(plain);
    } catch (err) {
      console.error("Fail to parse data from localStorage", err);
      return [];
    }
  }
}

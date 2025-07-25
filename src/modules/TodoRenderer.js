export default class TodoRenderer {
  constructor(container, onToggle, onDelete) {
    this.container = container;
    this.onToggle = onToggle;
    this.onDelete = onDelete;
  };

  render(todos) {
    this.container.innerHTML = "";
    todos.forEach((todo, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span>
          <strong>${todo.title}</strong> (Due: ${todo.dueDate})
        </span>
        <div>
          <button data-index="${index}" class="toggleBtn">${todo.done ? "✔️" : "⬜"}</button>
          <button data-index="${index}" class="deleteBtn">🗑️</button>
        </div>
      `;

      if (todo.done) li.style.textDecoration = "line-through";
      this.container.appendChild(li);

      this.container.querySelectorAll(".toggleBtn").forEach(btn =>
        btn.addEventListener("click", () => this.onToggle(btn.dataset.index))
      );

      this.container.querySelectorAll(".deleteBtn").forEach(btn =>
        btn.addEventListener("click", () => this.onDelete(btn.dataset.index))
      );
    });
  }
}

export default class TodoRenderer {
  constructor(container, onToggle, onDelete) {
    this.container = container;
    this.onToggle = onToggle;
    this.onDelete = onDelete;

    this.container.addEventListener("click", e => {
      const btn = e.target.closest("button");
      if (!btn) return;

      const index = Number(btn.dataset.index);
      if (btn.classList.contains("toggleBtn")) this.onToggle(index);
      if (btn.classList.contains("deleteBtn")) this.onDelete(index);
    });
  };

  render(todos) {
    this.container.innerHTML = "";
    todos.forEach((todo, index) => {
      const li = document.createElement("li");
      li.classList.add(todo.priority);
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
    });
  }
}

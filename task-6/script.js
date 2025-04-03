const list = document.getElementById("draggableList");
let draggedItem = null;

document.querySelectorAll(".draggable-item").forEach((item) => {
  item.addEventListener("dragstart", function () {
    draggedItem = this;
    setTimeout(() => this.classList.add("dragging"), 0);
  });

  item.addEventListener("dragend", function () {
    this.classList.remove("dragging");
    draggedItem = null;
  });

  item.addEventListener("dragover", function (event) {
    event.preventDefault(); // Allow dropping
  });

  item.addEventListener("dragenter", function () {
    if (this !== draggedItem) {
      this.classList.add("over");
    }
  });

  item.addEventListener("dragleave", function () {
    this.classList.remove("over");
  });

  item.addEventListener("drop", function () {
    if (this !== draggedItem) {
      const items = [...list.children];
      const draggedIndex = items.indexOf(draggedItem);
      const targetIndex = items.indexOf(this);

      if (draggedIndex < targetIndex) {
        this.after(draggedItem);
      } else {
        this.before(draggedItem);
      }
    }
    this.classList.remove("over");
  });
});

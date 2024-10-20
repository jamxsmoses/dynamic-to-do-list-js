document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function addTask() {
    const taskText = taskInput.value.trim();
    console.log(taskText);
    if (taskText === "") {
      alert("Input field cannot be empty. Enter a text");
    } else {
      const newElement = document.createElement("li");
      newElement.textContent = taskText;
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.classList.add("remove-btn");
      removeBtn.addEventListener("click", () => {
        newElement.remove();
      });
      newElement.appendChild(removeBtn);
      taskList.appendChild(newElement);
      taskInput.value = "";
    }
  }

  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  });
});

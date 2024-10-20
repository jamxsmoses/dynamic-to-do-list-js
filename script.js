document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Initialize tasks array from Local Storage
  let tasks = loadTasksFromStorage();

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
        tasks = tasks.filter((task) => task !== taskText);
        saveTasksToStorage(tasks);
      });
      newElement.appendChild(removeBtn);
      taskList.appendChild(newElement);
      taskInput.value = "";
    }
  }

  // Load tasks from Local Storage and populate task list
  function loadTasksFromStorage() {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  }

  // Save tasks to Local Storage
  function saveTasksToStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Populate task list with tasks from Local Storage
  tasks.forEach((task) => {
    const taskItem = document.createElement("li");
    taskItem.textContent = task;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";
    removeButton.onclick = () => {
      taskItem.remove();
      tasks = tasks.filter((t) => t !== task);
      saveTasksToStorage(tasks);
    };

    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);
  });

  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
});

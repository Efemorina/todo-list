document.getElementById("addTaskButton").addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const taskValue = taskInput.value.trim();

  if (taskValue) {
    const taskList = document.getElementById("taskList");
    const listItem = document.createElement("li");
    const taskText = document.createElement("span");
    taskText.textContent = taskValue;
    listItem.appendChild(taskText);

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function () {
      const newTaskValue = prompt("Enter the new task value:", taskValue);
      if (newTaskValue !== null && newTaskValue.trim() !== "") {
        taskText.textContent = newTaskValue.trim();
      }
    });
    listItem.appendChild(editButton);

    listItem.addEventListener("click", function () {
      listItem.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      taskList.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
    taskInput.value = "";
  }
});

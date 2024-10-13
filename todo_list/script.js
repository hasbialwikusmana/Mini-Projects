document.getElementById("add-btn").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("todo-input").value;
  if (taskInput === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskInput;

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", deleteTask);

  // Mark task as completed on click
  li.addEventListener("click", toggleComplete);

  li.appendChild(deleteBtn);
  document.getElementById("todo-list").appendChild(li);
  document.getElementById("todo-input").value = "";
}

function deleteTask(e) {
  const task = e.target.parentElement;
  task.remove();
}

function toggleComplete(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("completed");
  }
}

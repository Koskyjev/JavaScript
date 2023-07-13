const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
let taskArray = JSON.parse(localStorage.getItem("tasks")) || [];

addTaskButton.addEventListener("click", function(){addItem()});

function addItem () {
    let taskInput = taskInput.value.trim()
    taskArray.push(taskInput)
    localStorage.setItem("tasks", JSON.stringify(taskArray));
}

function getTaskFromLocalStorage() {
    return taskArray
}


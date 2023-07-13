const inputEl = document.getElementById("taskInput");
const inputBtnEl = document.getElementById("addTaskButton");
const taskList = document.getElementById("ul-el");
const errorMsg = document.getElementById("error-msg");
let taskArray = getTaskFromLocalStorage();

inputEl.focus() // <input type="..." id="..." placeholder="..." autofocus>

function getTaskFromLocalStorage() {
    return JSON.parse(localStorage.getItem("taskArray")) || [];
}

function updateTaskInLocalStorage() {
    localStorage.setItem("taskArray", JSON.stringify(taskArray))
}

function createTask(taskText) {
    return {text: taskText, completed: false}   //???
}

function deleteTask(index) {
    taskArray.splice(index, 1); // what is 1?
    updateTaskInLocalStorage()
}

function createTaskElement(taskObj) {

const taskItem = document.createElement("li");//<li class="taskItem">
taskItem.classList.add("taskItem");

const checkbox = document.createElement("checkbox"); // <input type="checkbox" class="checkbox">
checkbox.type = "checkbox";
checkbox.classList.add("checkbox");
checkbox.checked = taskObj.complited;
checkbox.addEventListener("change", function() {
    taskObj.completed = checkbox.checked;
    taskTextElement.classList.toggle("completed", taskObj.completed);
updateTaskLocalStorage();
})

const taskTextElement = document.createElement("span") //better than <p> because holds like a one element and will not move/separate if changing size of the page
taskTextElement.classList.add("taskText");
taskTextElement.textContent = taskObj.text;
taskTextElement.classList.toggle("completed", taskObj.completed);

const removeButton = document.createElement("button");
removeButton.classList.add ("removeButton");
removeButton.textContent = "X";
removeButton.addEventListener("click", function() {
    deleteTask(taskObj);
    renderTask();
})

taskItem.appendChild(checkbox);
taskItem.appendChild(taskTextElement);
taskItem.appendChild(removeButton);

return taskItem;
}

function renderTasks(){
    taskList.innerHTML = "";
    for (let i = 0; i<taskArray.length; i++) {
        const taskElement = createTaskElement(taskArray[i]);
        taskList.appendChild(taskElement)
    }
}

addTaskButton.addEventListener("click", function() {
const taskText = taskInput.value;
if (taskText === "") return;

const newTask = createTask(taskText);
taskArray.push(newTask);
updateTaskInLocalStorage();

taskInput.value = "";
renderTasks()
})

renderTasks()
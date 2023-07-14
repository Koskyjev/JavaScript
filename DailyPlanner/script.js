const taskInput = document.getElementById("textInput");
const inputBtn = document.getElementById("addTaskButton");
const taskList = document.getElementById("ul-el");
let taskArray = getTaskFromLocalStorage();
const errorMsg = document.getElementById("error-msg");

 taskInput.focus() // <input type="..." id="..." placeholder="..." autofocus>

function createTask(taskText) {
    return {text: taskText, completed: false};    //taskText??? where comes from? why false?
}   

function getTaskFromLocalStorage() {
    return JSON.parse(localStorage.getItem("tasks")) || [];     // did we just invented "tasks"?
}

function updateTaskInLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(taskArray))
}

function deleteTask(index) {
    taskArray.splice(index, 1); // 1 is how many items after index we want to delete
    updateTaskInLocalStorage();
}

function createTaskElement(taskObj, index) {
    console.log(taskObj)
const taskItem = document.createElement("li");//<li class="taskItem">
taskItem.classList.add("taskItem");

const checkbox = document.createElement("input"); // <input type="checkbox" class="input">
checkbox.type = "checkbox";
checkbox.classList.add("input");
checkbox.checked = taskObj.completed;   // setting checked to be true or false based on a completed state
checkbox.addEventListener("change", function() { // every time checkbox is updated function is executed
    taskObj.completed = checkbox.checked; 
    taskTextElement.classList.toggle("completed", taskObj.completed); // we create a class "completed" that changes based on taskObj completed state
updateTaskInLocalStorage();
});

const taskTextElement = document.createElement("span") //better than <p> because holds like a one element and will not move/separate if changing size of the page
taskTextElement.classList.add("taskText");
taskTextElement.textContent = taskObj.text; // 
taskTextElement.classList.toggle("completed", taskObj.completed); //

const removeButton = document.createElement("button");
removeButton.classList.add ("removeButton");
removeButton.textContent = "X";
removeButton.addEventListener("click", function() {
    deleteTask(index); //we are index and not taskObj?
    renderTasks();
});

taskItem.appendChild(checkbox);
taskItem.appendChild(taskTextElement);  //we´re putting together 3 elements that we created just now
taskItem.appendChild(removeButton);

return taskItem;
}

function renderTasks(){
    taskList.innerHTML = "";   //Clear the current list of tasks
    for (let i = 0; i<taskArray.length; i++) {
        const taskElement = createTaskElement(taskArray[i], i); //why do we need to create this element? to make code look cleaner
        taskList.appendChild(taskElement); //why do we need to put it as a child element if it´s the only child of it? every time we loop it creates ANOTEHR CHILD
    }
}

inputBtn.addEventListener("click", function() {
    errorMsg.textContent = "";  //clears error msg after reloading elements
const taskText = taskInput.value; 
if (taskText === "") {errorMsg.textContent = "Add a task"
return};

const newTask = createTask(taskText); 
taskArray.push(newTask);
updateTaskInLocalStorage(); 

taskInput.value = ""; 
renderTasks() // updates task when we press button 
});

renderTasks() // updates tasks when the page loads
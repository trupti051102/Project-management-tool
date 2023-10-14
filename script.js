const taskList = document.getElementById("taskList");
const taskNameInput = document.getElementById("taskName");
const assignedToInput = document.getElementById("assignedTo");

let tasks = [];

function createTask() {
    const taskName = taskNameInput.value;
    const assignedTo = assignedToInput.value;
    if (taskName && assignedTo) {
        const task = {
            id: tasks.length + 1,
            name: taskName,
            assignedTo: assignedTo,
        };
        tasks.push(task);
        displayTasks();
        taskNameInput.value = "";
        assignedToInput.value = "";
    }
}

function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task) => {
        const taskItem = document.createElement("div");
        taskItem.innerHTML = `<p>${task.name}</p>`;
        taskItem.innerHTML += `<p>Assigned to: ${task.assignedTo}</p>`;
        taskList.appendChild(taskItem);
    });
}

displayTasks();

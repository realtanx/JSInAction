window.onload = loadTasks;

function localTasks() {
    return JSON.parse(localStorage.getItem("to_do_app_tasks"));
}

function innerString(task) {
    return `<input type="checkbox" onclick="completeTask(this)" class="check" ${task.completed ? 'checked' : ''}>
            <input type="text" value="${task.content}" class="task ${task.completed ? 'completed' : ''}" onfocus="getCurrentTask(this)"
    onblur="editTask(this)">
            <i class="trash" onclick="removeTask(this)"></i>`;
}

function insertNewTask(task) {
    const list = document.querySelector("ul");
    const li = document.createElement("li");
    li.innerHTML = innerString(task);
    list.insertBefore(li, list.children[0]);
}


function loadTasks() {
    let cachedTasks = localTasks();
    if (Array.isArray(cachedTasks)) {
        let tasks = Array.from(cachedTasks);
        tasks.forEach(task => {
            insertNewTask(task);
        });
    }
}

function addTask() {
    const input = document.querySelector('form input');
    const ul = document.querySelector('ul');

    if (input.value === '') {
        alert('Cannot not be empty.');
        return;
    }

    let cachedTasks = localTasks();
    if (!Array.isArray(cachedTasks)) {
        cachedTasks = [];
    }

    let newTask = {
        content: input.value,
        completed: false
    };
    cachedTasks.push(newTask);

    localStorage.setItem('to_do_app_tasks', JSON.stringify(cachedTasks));

    // add task to list
    insertNewTask(newTask);

    input.value = "";
}

function completeTask(task) {

}

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    addTask();
});
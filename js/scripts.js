const newTaskForm = document.querySelector("#new-task-form");
const newTaskInput = document.querySelector("#task-input");
const editForm = document.querySelector("#edit-task-form");
const editTaskInput = document.querySelector("#edit-input");
const editSubmitBtn = document.querySelector("#editSubmit");
const editCancelBtn = document.querySelector("#edit-cancel-btn");
const todoList = document.querySelector("#todo-list");
const addTaskbtn = document.querySelector("#addTaskBtn");

//Save task function
const saveNewTask = (input) => {

    const todo = document.createElement("div");
    todo.classList.add("todo");

    const task = document.createElement("p");
    task.innerText = input
    todo.appendChild(task);

    const todoOptions = document.createElement("div");
    todoOptions.classList.add("todo-list-options");
    todo.appendChild(todoOptions);

    const finishTask = document.createElement("div");
    finishTask.classList.add("finish-task");
    todoOptions.appendChild(finishTask);
    const finishBtn = document.createElement("button");
    finishBtn.classList.add("green-button");
    finishTask.appendChild(finishBtn);
    const finishIcon = document.createElement("i");
    finishIcon.classList.add("fa-solid");
    finishIcon.classList.add("fa-check");
    finishBtn.appendChild(finishIcon);

    const editButtonDiv = document.createElement("div");
    editButtonDiv.classList.add("edit-button");
    todoOptions.appendChild(editButtonDiv);
    const editBtn = document.createElement("button");
    editBtn.classList.add("blue-button");
    editButtonDiv.appendChild(editBtn);
    const editIcon = document.createElement("i");
    editIcon.classList.add("fa-solid");
    editIcon.classList.add("fa-pen");
    editBtn.appendChild(editIcon);

    const removeTask = document.createElement("div");
    removeTask.classList.add("remove-task");
    todoOptions.appendChild(removeTask);
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("red-button");
    removeTask.appendChild(removeBtn);
    const removeIcon = document.createElement("i");
    removeIcon.classList.add("fa-solid");
    removeIcon.classList.add("fa-xmark");
    removeBtn.appendChild(removeIcon);

    todoList.appendChild(todo);

    newTaskInput.value="";
    newTaskInput.focus();
}

//Change forms edit function
const editTaskForm = () => {
    newTaskForm.classList.toggle("hide");
    editForm.classList.toggle("hide");
    console.log("oi");
    editTaskInput.focus();
}

//Change task function
const changeTask = () => {

    const allTodo = document.querySelectorAll(".todo");

    allTodo.forEach((todo) => {
        let todoTitle = todo.querySelector("p");

        if(todoTitle.innerText === taskTitle){
            todoTitle.innerText = editTaskInput.value;
            editForm.classList.toggle("hide");
            newTaskForm.classList.toggle("hide");
        }
    })
}

//Save task event
addTaskbtn.addEventListener("click", (element) => {
    element.preventDefault(); 

    const inputValue = newTaskInput.value;

    if(inputValue){
        saveNewTask(inputValue);
    }
});


//Buttons task events
document.addEventListener("click", (element) => {
    element.preventDefault();

    const targetElement = element.target;
    const firstParentDiv = targetElement.closest("div");
    const todoDiv = firstParentDiv.parentNode.parentNode;

    if(firstParentDiv.classList.contains("finish-task")){
        firstParentDiv.parentNode.parentNode.classList.add("done");
    }

    if(firstParentDiv.classList.contains("edit-button")){
        editTaskForm();
        taskTitle = todoDiv.querySelector("p").innerText;
        editTaskInput.value = taskTitle;
    }

    if(firstParentDiv.classList.contains("remove-task")){
        todoDiv.parentNode.removeChild(todoDiv);
    }
});


//Submit edition event
editSubmitBtn.addEventListener("click", (element) => {
    element.preventDefault();

    if(editTaskInput.value){
        changeTask();
    }
})

//Cancel edition event
editCancelBtn.addEventListener("click", (element) => {
    element.preventDefault();

    editTaskForm();
});
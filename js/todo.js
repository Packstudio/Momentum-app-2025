const ToDoForm = document.querySelector("#todo-form");
const ToDoInput = ToDoForm.querySelector("#todo-form input");
const ToDoList = document.querySelector("#todo-list");

function handleTodoSubmit(event) {
    event.preventDefault();
    // console.log(ToDoInput.value);
    const newTodo = ToDoInput.value;
    ToDoInput.value = "";
    paintTodo(newTodo);
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    button.innerText = "Delete";
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo;
    ToDoList.appendChild(li);
}

ToDoForm.addEventListener("submit", handleTodoSubmit);
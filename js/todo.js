const ToDoForm = document.querySelector("#todo-form");
const ToDoInput = ToDoForm.querySelector("#todo-form input");
const ToDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleTodoSubmit(event) {
    event.preventDefault();
    // console.log(ToDoInput.value);
    const newTodo = ToDoInput.value;
    ToDoInput.value = "";
    
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    }

    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    console.log(toDos.id);
    li.remove();
    saveToDos();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    button.innerText = "Delete";
    li.id = newTodo.id;
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text;
    ToDoList.appendChild(li);

    button.addEventListener("click", deleteTodo);


}

ToDoForm.addEventListener("submit", handleTodoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

function sayHello(item) {
    console.log("hello!", item);
}

if(savedToDos !== null) {
    const parsedTodos = JSON.parse(savedToDos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo);

}
    // (item) => console.log("this is the turn of", item)
    // 위 와 아래는 같다.
    // funtion sayHello(item) {
    //  console.log("this is the turn of", item)
    //}

    //filter는 true를 반환해야 한다? (item을 유지하고 싶으면)
    //false를 반환하면 새로운 array에서는 해당 부분을 제외하고 array를 만든다?

    function sexyFilter(item) {
        return item !==3;
    }

    [1,2,3,4].filter(sexyFilter);

    // const newArr = Array.filter(item => item>2)는
    
    // function filter(item) {
    //     return item <= 2;
    // } 와 같다.

    
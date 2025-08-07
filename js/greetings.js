// const loginForm = document.querySelector("#login-form");
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

const savedUserName = localStorage.getItem(USERNAME_KEY);

function LoginSubmit(event) {
    event.preventDefault();

    loginForm.classList.add(HIDDEN_CLASSNAME);
    // const username = loginInput.value; //필요가 없음
    // greeting.innerText = "Hello " + username; //아래 줄과 같은 기능
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintGreeting(); //savedUserName을 넘기면 null이 표시되는 문제가 발생?

    // console.log(loginInput.value);

    // const username = loginInput.value;
    // console.log(username);
}

function paintGreeting() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}



if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", LoginSubmit);
} else {
    paintGreeting();
}

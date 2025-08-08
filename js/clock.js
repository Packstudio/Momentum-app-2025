const clock = document.querySelector("#clock");

// clock.innerText = "lala";

function getClock() {
    const date = new Date();
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);

    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// setInterval(sayHello, 1000);

getClock();
setInterval(getClock, 1000);
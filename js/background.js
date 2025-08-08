const images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg",];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgimg = document.createElement("img");

bgimg.src = `img/${chosenImage}`;

document.body.appendChild(bgimg);
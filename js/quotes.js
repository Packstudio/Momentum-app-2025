const quotes = [
    { quote: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
    { quote: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
    { quote: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { quote: "Happiness depends upon ourselves.", author: "Aristotle" },
    { quote: "Not all those who wander are lost.", author: "J.R.R. Tolkien" },
    { quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { quote: "Believe you can and you’re halfway there.", author: "Theodore Roosevelt" },
    { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { quote: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
    { quote: "The best way to predict your future is to create it.", author: "Abraham Lincoln" },
    { quote: "Life is what happens when you’re busy making other plans.", author: "John Lennon" },
    { quote: "Don’t count the days, make the days count.", author: "Muhammad Ali" },
    { quote: "If you tell the truth, you don’t have to remember anything.", author: "Mark Twain" },
    { quote: "Courage is grace under pressure.", author: "Ernest Hemingway" },
    { quote: "The journey of a thousand miles begins with a single step.", author: "Lao Tzu" },
    { quote: "Knowledge is power.", author: "Francis Bacon" },
    { quote: "Time is money.", author: "Benjamin Franklin" }
];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// floor(Math.random()*10)   <---- round(반올림), ceil(버림), floor(올림)
// console.log(quotes[Math.floor(Math.random() * 10)]); //마지막 숫자는 Array의 갯수에 맞춰서 작성?(hard cording)

const TodaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = TodaysQuote.quote;
author.innerText = TodaysQuote.author;
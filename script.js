/* function greet() {
  console.log("HI I LOVE YOU!!!");
}
function diss() {
  console.log("you are the worst :(");
}

let funcs = [greet, diss];

const myFunc = function add(x, y) {
  return x + y;
};

function giveBirth() {
  console.log("GIVING BIRTH!!!");
  return function cry() {
    return "WAAAAHHHH";
  };
} */

/* function makeMultiplyFunc(num) {
  return function mult(x) {
    return num * x;
  };
}

function repeatThreeTimes(func) {
  func();
  func();
  func();
}

function repeat(num, func) {
  for (let i = 0; i < num; i++) {
    func();
  }
} */

// SINGLE THREADED!!!

/* greet();
alert("I am alert");
diss(); */

/* greet();
setTimeout(function () {
  diss();
  diss();
  diss();
}, 3000);
greet(); */

/* setTimeout(function () {
  console.log("MEOW");
  console.log("WOOF");
  console.log("OINK");
}, 3000); */

/* const id = setInterval(diss, 2000);
clearInterval(id); */

// Set up an interval that executes a function every 1000 milliseconds (1 second)
// Decrement the 'time' variable by 1
// Check if 'time' has reached or gone below 0
// If 'time' is 0 or negative, clear the interval to stop the countdown
// Log 'DONE!' to the console
// If 'time' is still greater than 0, log the current value of 'time' to the console
// Interval set to 1000 milliseconds (1 second)

let x = prompt("input a number");
let time = parseInt(x);

function countDown(time) {
  const timer = setInterval(function () {
    time--;
    if (time <= 0) {
      clearInterval(timer);
      console.log("DONE!");
    } else {
      console.log(time);
    }
  }, 1000);
}
countDown(time);

function randomGame() {
  let num;
  let times = 0;
  let timer = setInterval(function () {
    num = Math.random();
    times++;
    console.log(num);
    if (num >= 0.75) {
      clearInterval(timer);
      console.log("It took " + times + " try/tries.");
    }
  }, 1000);
}

randomGame();

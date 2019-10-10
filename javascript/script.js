// var secondsEl = document.querySelector("seconds");
// var secondsLeft = 5;

// var timer = setInterval(myTimer, 1000);

// function myTimer() {
//   secondsLeft--;
//   console.log(secondsLeft);
//   //   secondsEl.textContent = secondsLeft;
//   if (secondsLeft === 0) {
//     console.log("Game over");
//     clearInterval(timer);
//   }
// }

// myTimer();

var secondsEl = document.getElementById("seconds");
var secondsLeft = 5;

function setTime() {
  var timerInterval = setInterval(timeFn, 1000);
  function timeFn() {
    secondsLeft--;
    secondsEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }
}

setTime();

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

function startQuestions() {
  var question = document.getElementById("question");
  var answerEl1 = document.getElementById("answer1");
  var answerEl2 = document.getElementById("answer2");
  var answerEl3 = document.getElementById("answer3");
  var answerEl4 = document.getElementById("answer4");
  question.textContent = questions[0].title;
  answerEl1.textContent = "1. " + questions[0].choices[1];
  answerEl2.textContent = "2. " + questions[0].choices[2];
  answerEl3.textContent = "3. " + questions[0].choices[3];
  answerEl4.textContent = "4. " + questions[0].choices[4];
}

startQuestions();

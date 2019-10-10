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

  for (i = 0; i < 4; i++) {
    question.textContent = questions[i].title;
    answerEl1.textContent = "1. " + questions[i].choices[0];
    answerEl2.textContent = "2. " + questions[i].choices[1];
    answerEl3.textContent = "3. " + questions[i].choices[2];
    answerEl4.textContent = "4. " + questions[i].choices[3];
  }
}

startQuestions();

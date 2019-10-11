var startButton = document.querySelector("#startquiz");
var nhsButton = document.querySelector("#highscores");
var secondsEl = document.querySelector("#seconds");

// document.querySelector(".alldone").textContent = null;
startButton.addEventListener("click", startQuestions);

nhsButton.addEventListener("click", simple);

function simple() {
  console.log("helo");
}

function countdown() {
  var secondsLeft = 5;
  var timer = setInterval(myTimer, 1000);

  function myTimer() {
    secondsLeft--;
    secondsEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
      console.log("Game over");
      clearInterval(timer);
    }
  }
}

function startQuestions() {
  countdown();
  document.querySelector(".start").textContent = null;

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

// function saveHighscore() {
//   var newHighscore = document.querySelector("#highscores");

//   var initialsInput = document.querySelector("#initials");
//   var emailInput = document.querySelector("#score");

//   initialsInput = newHighscore.value;
//   localStorage.setItem("name", initialsInput);
//   console.log(initialsInput);
//   console.log(emailInput.textContent);
//   //    or seconds left?
// }

// saveHighscore();

// // Showing the questions and answering

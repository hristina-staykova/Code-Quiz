var startButton = document.querySelector("#startquiz");
var nhsButton = document.querySelector("#highscores");
var secondsEl = document.querySelector("#seconds");
var question = document.getElementById("question");
var answerEl1 = document.getElementById("answer1");
var answerEl2 = document.getElementById("answer2");
var answerEl3 = document.getElementById("answer3");
var answerEl4 = document.getElementById("answer4");
var choices = document.querySelectorAll(".choices");

// to hide these elements, which to be showed later when needed, below in the code
document.querySelector(".dispq").style.display = "none";
document.querySelector(".alldone").style.display = "none";

startButton.addEventListener("click", startQuestions);

// document.querySelector(".list").textContent = null;

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
  document.querySelector(".dispq").style.display = "inherit";
  countdown();
  document.querySelector(".start").textContent = null;
  var i = 0;
  var correct = questions[i].answer;
  question.textContent = questions[i].title;
  answerEl1.textContent = questions[i].choices[0];
  answerEl2.textContent = questions[i].choices[1];
  answerEl3.textContent = questions[i].choices[2];
  answerEl4.textContent = questions[i].choices[3];

  console.log(answerEl1.textContent, correct);

  // event listeners works (listening):
  answerEl1.addEventListener("click", checkFunction);
  answerEl2.addEventListener("click", checkFunction);
  answerEl3.addEventListener("click", checkFunction);
  answerEl4.addEventListener("click", checkFunction);

  // how to check the answer? how to change to the next question?
  function checkFunction() {
    if (answerEl3.textContent === correct) {
      console.log("yes");
      i++;
    } else {
      // secondsLeft = secondsLeft - 10;
      console.log("no");
      i++;
    }
  }

  // displaying the object - question - choices, answer and text content of the html file - works
  // for (i = 0; i < questions[0].choices.length; i++) {
  //   console.log(questions[0].choices[i]);
  //   console.log(questions[0].answer);
  //   console.log(choices[0].textContent);
  // }
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

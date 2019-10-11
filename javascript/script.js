var startButton = document.getElementById("startquiz");
var nhsButton = document.getElementById("highscores");
var secondsEl = document.getElementById("seconds");
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
}

function countdown() {
  var secondsLeft = 5;
  var timer = setInterval(myTimer, 1000);

  function myTimer() {
    secondsLeft--;
    secondsEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
      document.querySelector(".dispq").style.display = "none";
      document.querySelector(".alldone").style.display = "inherit";
      console.log("Game over");
      clearInterval(timer);
    }
  }
}

// submit new highscore and save it to localStorage
nhsButton.addEventListener("click", function(event) {
  event.preventDefault();
  var score = document.getElementById("score").textContent;
  var initials = document.getElementById("initials").value;
  localStorage.setItem("name", initials);
  localStorage.setItem("score", score);
});

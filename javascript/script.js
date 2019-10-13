var startButton = document.getElementById("startquiz");
var nhsButton = document.getElementById("highscores");
var secondsEl = document.getElementById("seconds");
var question = document.getElementById("question");
var answerEl1 = document.getElementById("answer1");
var answerEl2 = document.getElementById("answer2");
var answerEl3 = document.getElementById("answer3");
var answerEl4 = document.getElementById("answer4");
var container = document.querySelector(".dispq");
var message = document.createElement("p");
var secondsLeft = 75;
var timer;
var i = 0;

// to hide these elements, which to be showed later when needed, below in the code
document.querySelector(".dispq").style.display = "none";
document.querySelector(".alldone").style.display = "none";

startButton.addEventListener("click", startQuestions);

function startQuestions() {
  document.querySelector(".dispq").style.display = "inherit";
  countdown();
  document.querySelector(".start").textContent = null;
  answerEl1.addEventListener("click", function() {
    checkAnswer(answerEl1);
  });
  answerEl2.addEventListener("click", function() {
    checkAnswer(answerEl2);
  });
  answerEl3.addEventListener("click", function() {
    checkAnswer(answerEl3);
  });
  answerEl4.addEventListener("click", function() {
    checkAnswer(answerEl4);
  });
  dispQuestions(0);
}

function dispQuestions(i) {
  question.textContent = questions[i].title;
  answerEl1.textContent = questions[i].choices[0];
  answerEl2.textContent = questions[i].choices[1];
  answerEl3.textContent = questions[i].choices[2];
  answerEl4.textContent = questions[i].choices[3];
}

function checkAnswer(element) {
  correct = questions[i].answer;
  if (element.textContent === correct) {
    displayMsg("Right");
  } else {
    secondsLeft = secondsLeft - 10;
    displayMsg("Wrong");
  }
  i++;
  if (i === questions.length) {
    endQuiz();
  } else {
    dispQuestions(i);
  }
}

function displayMsg(messageContent) {
  message.style.fontStyle = "italic";
  message.textContent = messageContent;
  container.appendChild(message);
}

function countdown() {
  secondsEl.textContent = secondsLeft;
  timer = setInterval(myTimer, 1000);
  function myTimer() {
    secondsLeft--;
    secondsEl.textContent = secondsLeft;
    if (secondsLeft <= 0) {
      secondsEl.textContent = 0;
      endQuiz();
    }
  }
}

function endQuiz() {
  clearInterval(timer);
  document.querySelector(".dispq").style.display = "none";
  document.querySelector(".alldone").style.display = "inherit";
  console.log(secondsLeft);
}

// submit new highscore and save it to localStorage
nhsButton.addEventListener("click", function(event) {
  event.preventDefault();
  var score = document.getElementById("score").textContent;
  var initials = document.getElementById("initials").value.trim();
  var newscore = {
    name: initials,
    score: score
  };
  console.log(newscore);
  localStorage.setItem("newscore", JSON.stringify(newscore));

  // localStorage.setItem("name", initials);
  // localStorage.setItem("score", score);
});

var resetButton = document.getElementById("reset");
var displScores = document.getElementById("display");

// resets the values in localStorage & page display
resetButton.addEventListener("click", resetFn);
function resetFn() {
  localStorage.clear();
  $("#display").text(null);
}

// displaying the values from the localStorage
function dispHighscores() {
  var newscore = JSON.parse(localStorage.getItem("newscore"));
  if (name && score === null) {
    return;
  }

  for (i = 1; i <= newscore.length; i++) {
    var displayrow = document.createElement("li");
    displScores.appendChild(displayrow);
    displayrow.textContent = newscore[i - 1].name + " " + newscore[i - 1].score;
  }
}

dispHighscores();

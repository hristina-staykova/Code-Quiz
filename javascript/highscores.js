var resetButton = document.getElementById("reset");
var displScores = document.getElementById("newscore");

resetButton.addEventListener("click", resetFn);
function resetFn() {
  localStorage.clear();
}

// array of objects for the localStorage? every new entry to be pushed in the array and then displayed element by element
displScores = {
  Name: localStorage.getItem("name"),
  Score: localStorage.getItem("score")
};

console.log(displScores);

// working, displaying the values from the localStorage
function dispHighscores() {
  var name = localStorage.getItem("name");
  var score = localStorage.getItem("score");

  if (name && score === null) {
    return;
  }

  document.getElementById("name").textContent = name;
  document.getElementById("score").textContent = score;
}
// but the reset button doesn't clear the page.... only the localStorage

dispHighscores();

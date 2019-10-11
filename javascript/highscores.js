var resetButton = document.getElementById("reset");
var displScores = document.getElementById("newscore");

resetButton.addEventListener("click", resetFn);
function resetFn() {
  event.preventDefault();
  localStorage.clear();
}

displScores = {
  Name: localStorage.getItem("name"),
  Score: localStorage.getItem("score")
};

console.log(displScores);

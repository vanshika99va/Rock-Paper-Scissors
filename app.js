const userScore = 0;
const compScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.querySelector("r");
const paper_div = document.querySelector("p");
const scissors_div = document.querySelector("s");

main();

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });
  paper_div.addEventListener("click", function () {
    game("r");
  });
  scissors_div.addEventListener("click", function () {
    game("r");
  });
}

let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
getComputerChoice();

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  else return "Scissors";
}

function win(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = compScore;
  //   const smallUserWord = "user".fontsize(3).sub();
  //   const smallCompWord = "comp".fontsize(3).sub();

  result_p.innerHTML = ` ${convertToWord(userChoice)} beats ${convertToWord(
    computerChoice
  )}. You Win!!`;
  userChoice_div.classList.add("green-glow");
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 1000);
}

function lose(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);

  compScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = compScore;
  result_p.innerHTML = ` ${convertToWord(computerChoice)} beats ${convertToWord(
    userChoice
  )}. You Lose!!`;
  userChoice_div.classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 1000);
}

function draw(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = "Its a Draw!!";
  userChoice_div.classList.add("gray-glow");
  setTimeout(() => userChoice_div.classList.remove("gray-glow"), 1000);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    //all cases when user wins
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    //when computer wins
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    //draw
    case "rr":
    case "ss":
    case "pp":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", () => game("r"));
  paper_div.addEventListener("click", () => game("p"));
  scissors_div.addEventListener("click", () => game("s"));
}

main();

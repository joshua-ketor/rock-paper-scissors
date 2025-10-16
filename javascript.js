console.log("Hello World");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const result = document.querySelector("div");
const scoreboard = document.querySelector("#scoreboard");

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 10) % 3];
}

function getHumanChoice() {
  const userChoice = prompt(
    "Input your choice from the following:\n1.Rock\n2.Paper\n3.Scissor"
  );
  return userChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice == "rock") {
    switch (computerChoice) {
      case "rock":
        result.textContent = "It's a tie. You both selected Rock.";
        updateScoreBoard();
        break;
      case "paper":
        result.textContent = "You lose. Paper beats Rock.";
        computerScore++;
        updateScoreBoard();
        break;
      case "scissors":
        result.textContent = "You win! Rock beats scissors";
        humanScore++;
        updateScoreBoard();
        break;
    }
  } else if (humanChoice == "paper") {
    switch (computerChoice) {
      case "rock":
        result.textContent = "You win! Paper beats Rock.";
        humanScore++;
        updateScoreBoard();
        break;
      case "paper":
        result.textContent = "It's a tie. You both selected Paper.";
        updateScoreBoard();
        break;
      case "scissors":
        result.textContent = "You Lose! Scissor beats Paper";
        computerScore++;
        updateScoreBoard();
        break;
    }
  } else if (humanChoice == "scissor") {
    switch (computerChoice) {
      case "rock":
        result.textContent = "You Lose! Rock beats Scissor.";
        computerScore++;
        updateScoreBoard();
        break;
      case "paper":
        result.textContent = "You Win!. Scissor beats Paper.";
        humanScore++;
        updateScoreBoard();
        break;
      case "scissors":
        result.textContent = "It's a tie. You both selected Scissor";
        updateScoreBoard();
        break;
    }
  }
}

function getWinner(hScore, cScore) {
  if (hScore >= 5) {
    result.textContent = "You've won the game";
    cScore = 0;
  }
  if (cScore >= 5) {
    result.textContent = "You've lost the game";
    hScore = 0;
  }
}

function updateScoreBoard() {
  scoreboard.textContent = `Scores:
    Human: ${humanScore}
    Computer: ${computerScore}
    `;
}

rock.addEventListener("click", (e) => {
  const id = e.target.id;
  playRound(id, getComputerChoice());
  getWinner(humanScore, computerScore);
});

paper.addEventListener("click", (e) => {
  const id = e.target.id;
  playRound(id, getComputerChoice());
  getWinner(humanScore, computerScore);
});

scissor.addEventListener("click", (e) => {
  const id = e.target.id;
  playRound(id, getComputerChoice());
  getWinner(humanScore, computerScore);
});

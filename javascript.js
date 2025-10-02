console.log("Hello World");

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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == "rock") {
      switch (computerChoice) {
        case "rock":
          console.log("It's a tie. You both selected Rock.");
          break;
        case "paper":
          console.log("You lose. Paper beats Rock.");
          computerScore++;
          break;
        case "scissors":
          console.log("You win! Rock beats scissors");
          humanScore++;
          break;
      }
    } else if (humanChoice == "paper") {
      switch (computerChoice) {
        case "rock":
          console.log("You win! Paper beats Rock.");
          humanScore++;
          break;
        case "paper":
          console.log("It's a tie. You both selected Paper.");
          break;
        case "scissors":
          console.log("You Lose! Scissor beats Paper");
          computerScore++;
          break;
      }
    } else if (humanChoice == "scissor") {
      switch (computerChoice) {
        case "rock":
          console.log("You Lose! Rock beats Scissor.");
          computerScore++;
          break;
        case "paper":
          console.log("You Win!. Scissor beats Paper.");
          humanScore++;
          break;
        case "scissors":
          console.log("It's a tie. You both selected Scissor");
          break;
      }
    }
  }
}

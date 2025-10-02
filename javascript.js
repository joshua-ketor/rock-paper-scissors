console.log("Hello World");

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return options[Math.floor(Math.random() * 10) % 3];
}

function getHumanChoice() {
  const userChoice = prompt(
    "Input your choice from the following:\n1.Rock\n2.Paper\n3.Scissors"
  );
  return userChoice;
}
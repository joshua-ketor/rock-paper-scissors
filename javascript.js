console.log("Hello World");

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return options[Math.floor(Math.random() * 10) % 3];
}
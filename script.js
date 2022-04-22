// create a function named computerPlay
function computerPlay() {
    // create an array of strings called options that contains 'Rock', 'Paper', 'Scissors'
    const options = ['Rock', 'Paper', 'Scissors'];
    // create an integer variable named choice
    let choice;
    // create a random number between 0 and 2 inclusive and put it in choice
    choice = Math.floor(Math.random() * options.length);
    choice = options[choice]
    // return choice
    return choice;

}
// create a function named playRound with parameters playerSelection and computerSelection
function playRound(playerSelection, computerSelection) {
    //prompt the user with message to select between rock, paper and scissors and put in playerSelection
    playerSelection = prompt("Input your choice\n-Rock\n-Paper\n-Scissors");
    // put computerPlay() in computerSelection
    computerSelection = computerPlay();
    // switch cases with playerSelection in lower case as argument
    switch (playerSelection.toLowerCase()) {
        // when case is 'rock'
        case 'rock':
            // switch case with computerSelection as argument
            switch (computerSelection) {
                // when case is 'Rock'
                case 'Rock':
                    // output "It's a tie"
                    console.log("It's a tie");
                    // return 'Tie'
                    return 'Tie';
                    // break
                    break;
                // when case is 'Paper'
                case 'Paper':
                    // output "You lose this round! Paper beats Rock"
                    console.log("You lose this round! Paper beats Rock");
                    // return 'Computer'
                    return 'Computer';
                    // break
                    break;
                // when case is 'Scissors'
                case 'Scissors':
                    // output "You win this round! Rock beats Scissors"
                    console.log("You win this round! Rock beats Scissors");
                    // return 'Player'
                    return 'Player';
                    // break
                    break;
            }
            // break
            break;
        
        // when case is 'paper'
        case 'paper':
            // switch case with computerSelection as argument
            switch (computerSelection) {
                // when case is 'Rock'
                case 'Rock':
                    // output "You win this round! Paper beats Rock"
                    console.log("You win this round! Paper beats Rock");
                    // return 'Player'
                    return 'Player';
                    // break
                    break;
                // when case is 'Paper'
                case 'Paper':
                    // output "It's a tie"
                    console.log("It's a tie");
                    // return 'Tie'
                    return 'Tie';
                    // break
                    break;
                // when case is 'Scissors'
                case 'Scissors':
                    // output "You lose this round! Scissors beats Paper"
                    console.log("You lose this round! Scissors beats Paper");
                    // return 'Computer'
                    return 'Computer';
                    // break
                    break;
            }
        //break;
        break;

        // when case is 'scissors'
        case 'scissors':
            // switch case with computerSelection as argument
            switch (computerSelection) {
                // when case is 'Rock'
                case 'Rock':
                    // output "You lose this round! Rock beats Scissors"
                    console.log("You lose this round! Rock beats Scissors");
                    // return 'Computer'
                    return 'Computer';
                    // break
                    break;
                // when case is 'Paper'
                case 'Paper':
                    // output "You win this round! Scissors beats Paper"
                    console.log("You win this round! Scissors beats Paper");
                    // return 'Player'
                    return 'Player';
                    // break
                    break;
                // when case is 'Scissors'
                case 'Scissors':
                    // output "It's a tie"
                    console.log("It's a tie");
                    // return 'Tie'
                    return 'Tie';
                    // break
                    break;
            }
        // break;
        break;
    }
}

// create a function named game with parameters roundWinner, playerScore and computerScore
function game(roundWinner, playerScore, computerScore) {
    // assign 0 to playerScore
    playerScore = 0;
    // assign 0 to computerScore
    computerScore = 0;
    // create a function named showScore to display scores
    function showScore() {
        // output "Player score: " + playerScore
        console.log("Player score: " + playerScore);
        // output "Computer score: " + computerScore
        console.log("Computer score: " + computerScore);
    }
    // create a boolean variable named winner and assign false to it
    let winner = false;
    // while there is no winner
    while (!winner) {
        // assign playRound to roundWinner
        roundWinner = playRound();
        // if roundWinner's value is 'Player'
        if (roundWinner === 'Player') {
            // add 1 to playerScore
            playerScore++;
            // run showScore()
            showScore();
        }
        // else if roundWinner's value is 'Computer'
        else if (roundWinner === 'Computer') {
            // add 1 to computerScore
            computerScore++;
            // run showScore()
            showScore();
        }
        // else
        else {
            // run showScore()
            showScore();
        }
        // if playerScore or computerScore has value of 5
        if (playerScore === 5 || computerScore === 5) {
            // assign true to winner
            winner = true;
        }
    }
}

game();
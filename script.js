const choices = ['rock', 'paper', 'scissors']

function getComputerChoice(choices){
    /**
     * Returns a random choice from the choices array
     * @param {array} choices - an array of choices
     * @returns {string} - a random choice from the choices array
     * @example
     * getComputerChoice(['rock', 'paper', 'scissors']);
     * //=> 'rock'
     */
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playSingleRound(playerSelection, computerSelection){
    /**
     * Plays a single round of rock, paper, scissors
     * @param {string} playerSelection - the player's choice
     * @param {string} computerSelection - the computer's choice
     * @returns {string} - the result of the round
     * @example
     * playSingleRound('rock', 'scissors');
     * //=> 'You Win! rock beats scissors'
     */
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function playGame(){
    /**
     * Plays a 5-round game of rock, paper, scissors
     * @example
     * playGame();
     */
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice (rock, paper, or scissors):");
        const computerSelection = getComputerChoice();
        const result = playSingleRound(playerSelection, computerSelection);
        console.log(result);
        if (result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (playerScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("It's a tie!");
    }
}
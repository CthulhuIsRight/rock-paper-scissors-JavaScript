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
    const choicesButtons = document.querySelectorAll('.choice-button');
    const resultText = document.querySelector('.result-text');
    const playerScoreText = document.querySelector('.player-score');
    const computerScoreText = document.querySelector('.computer-score');
    const restartButton = document.createElement('button');
    restartButton.textContent = 'Try Again?';
    restartButton.addEventListener('click', function() {
        playerScore = 0;
        computerScore = 0;
        resultText.textContent = '';
        playerScoreText.textContent = 'Player Score: 0';
        computerScoreText.textContent = 'Computer Score: 0';
        choicesButtons.forEach(button => {
            button.disabled = false;
        });
        restartButton.remove();
    });

    choicesButtons.forEach(button => {
        button.addEventListener('click', function() {
            const playerSelection = button.dataset.choice;
            const computerSelection = getComputerChoice(choices);
            const result = playSingleRound(playerSelection, computerSelection);
            resultText.textContent = result;
            if (result.includes("Win")) {
                playerScore++;
            } else if (result.includes("Lose")) {
                computerScore++;
            }
            playerScoreText.textContent = `Player Score: ${playerScore}`;
            computerScoreText.textContent = `Computer Score: ${computerScore}`;

            if (playerScore === 5 || computerScore === 5) {
                endGame(playerScore, computerScore);
                document.body.appendChild(restartButton);
            }
        });
    });
    function endGame(playerScore, computerScore) {
        choicesButtons.forEach(button => {
            button.disabled = true;
        });

        if (playerScore > computerScore) {
            resultText.textContent = "You win the game!";
        } else if (playerScore < computerScore) {
            resultText.textContent = "You lose the game!";
        } else {
            resultText.textContent = "It's a tie!";
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    playGame();
});
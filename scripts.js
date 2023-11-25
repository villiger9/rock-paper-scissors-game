// scripts.js
// Rock, Paper, Scissors Game

// Example JavaScript using Font Awesome icons
const myElement = document.getElementById('myElement');
myElement.innerHTML = '<i class="fas fa-check"></i> Task completed!';

// Function to play the game when a button is clicked
function playGame(userChoice) {
    // Array of possible choices
    const choices = ['rock', 'paper', 'scissors'];
    // Generate a random computer choice
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    // Determine the winner
    const result = determineWinner(userChoice, computerChoice);
    // Display the result
    document.getElementById('result').innerHTML = `You chose ${userChoice}. Computer chose ${computerChoice}. Result: ${result}`;
}

// Function to determine the winner of the game
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}

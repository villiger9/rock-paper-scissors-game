// scripts.js
// Example JavaScript using Font Awesome icons
const myElement = document.getElementById('myElement');
myElement.innerHTML = '<i class="fas fa-check"></i> Task completed!';

function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const result = determineWinner(userChoice, computerChoice);

    document.getElementById('result').innerHTML = `You chose ${userChoice}. Computer chose ${computerChoice}. Result: ${result}`;
}

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

function generateRandomNumber() {
  return Math.floor(Math.random() * 20) + 1;
}

let secretNum = generateRandomNumber();
let playerGuess;

function playGame() {
  while (secretNum !== playerGuess) {
    playerGuess = parseInt(prompt("Please guess the secret number (1 - 20)"));

    if (playerGuess === secretNum) {
      alert("Correct Guess!");
      break;
    } else if (playerGuess < secretNum) {
      alert("Incorrect, too low!");
    } else {
      alert("Incorrect, too high!");
    }
  }
};

playGame();

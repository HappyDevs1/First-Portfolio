let words = ["javascript", "monkey", "amazing", "pancake", "dog", "cat", "donkey"];
let word = words[Math.floor(Math.random() * words.length)];//to select the random array

let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

let remainingLetters = word.length;
let guess;
let lives = 3;
//main loop
while (remainingLetters > 0 && lives > 0) {
  //show player progress
  alert(answerArray.join(" "));
  guess = prompt(`Guess a single letter or click 'cancel' to exit\n you have ${lives}`);
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Please enter a single letter.");
  } else {
      guess = guess.toLowerCase();
      let correctGuess = 0;
      for (let j = 0; j < word.length; j++) {
      if(guess === word[j]) {
        if (answerArray[j] !== "_") {
          alert("you have already guessed the letter " + guess);
          correctGuess++;
          break;
        } else {
          answerArray[j] = guess;
          correctGuess++;
          remainingLetters--;
        }
      }
    }
    if (correctGuess === 0) {
      lives--;
    }
  }
}
//after the while loop
if (guess === null) {
  alert("sorry for seeing you leaving.\nThe answer was " + word);
} else {
  alert("Congratulations!");
} 

//end of main loop


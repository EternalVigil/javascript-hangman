// JavaScript Document
var userInput = "";
var wrongGuessNum = 0;
var wordBank = ["blueberry"];
var correctGuesses = [];
var wrongGuesses = [];
var hiddenWord = [];
var guessRight = false;
var wrongCount = 0;
var playAgain = false;

//after word selection, create equal length string of dashes for document output.
for (var i = 0; i < wordBank[0].length; i++) {
	hiddenWord[i] = "-";
}
console.log(wordBank[0]);
console.log(hiddenWord);


document.onkeyup = function (event) {
	userInput = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("User chose the letter: " + userInput);
	for (i = 0; i < correctGuesses.length; i++) {
		if (correctGuesses[i] === userInput) {
			alert("You already guessed that letter; Try again");
		} else {
			for (i = 0; i < wordBank[0].length; i++) {
				if (userInput === wordBank[0].charAt(i)) {
					hiddenWord[i] = userInput;
					console.log(hiddenWord);
					guessRight = true;
					console.log("You guessed right. There is a(n) " + userInput + " at location " + i);
					correctGuesses.push(userInput);
				} else {
					wrongCount += 1;
				}
			}
			if (wrongCount === hiddenWord.length) {
				wrongGuesses.push = userInput;
				wrongGuessNum += 1;
			}
		}
	}


	if (correctGuesses.length === hiddenWord.length) {
		playAgain = confirm("You guessed right! Play again?");
	}
	if (wrongGuessNum === 7) {
		playAgain = confirm("You have lost.  Play again?");
	}

};
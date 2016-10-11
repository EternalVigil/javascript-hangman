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
	for (var j = 0; j < correctGuesses.length; j++) {
		if (correctGuesses[j] === userInput) {
			alert("You already guessed that letter; Try again");
		} else {
			for (var k = 0; k < wordBank[0].length; k++) {
				if (userInput === wordBank[0].charAt(k)) {
					hiddenWord[k] = userInput;
					console.log(hiddenWord);
					guessRight = true;
					console.log("You guessed right. There is a(n) " + userInput + " at location " + k);
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
// JavaScript Document
var letterGuessed = "";
var guessLeft = 7;
var wordBank = ["blueberry", "cherry", "orange", "apple", "grape", "watermelon", "dragonfruit", "papaya"];
var correctGuesses = [];
var wrongGuesses = [];
var hiddenWord = [];
var playAgain = false;
var randomNum = 0;
var theWord = [];
var rightGuess = 0;

function getRandom(arrLength) {
	return Math.floor((Math.random() * arrLength) + 1);
}

randomNum = getRandom(wordBank.length);

theWord = wordBank[randomNum];
console.log("The word you're getting now is at index: " + randomNum);

console.log(theWord);

for (var x = 0; x < theWord.length; x++) {
	hiddenWord[x] = "_";
	document.getElementById("wordBox").innerHTML += hiddenWord[x];
}

console.log("hiddenWord:" + hiddenWord);




document.onkeyup = function (event) {
	letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	rightGuess = 0;


	for (var i = 0; i < theWord.length; i++) {

		if (letterGuessed === theWord[i]) {
			hiddenWord[i] = letterGuessed;
			rightGuess += 1;
			console.log("hiddenWord:" + hiddenWord);
			console.log("There is a(n) " + letterGuessed + " at position " + i);
		} else {
			console.log("Sorry, no " + letterGuessed + " at position " + i);
		}
	}
	document.getElementById("wordBox").innerHTML = hiddenWord;
	document.getElementById("numAttempts").innerHTML = guessLeft;

	if (rightGuess === 0) {
		wrongGuesses.push(letterGuessed);
		guessLeft -= 1;
		document.getElementById("wrongLetters").innerHTML = wrongGuesses;
		console.log("Wrong Guesses: " + wrongGuesses);
		console.log("You have " + guessLeft + " guesses left.");
	} else {
		correctGuesses.push(letterGuessed);
		console.log(correctGuesses);
	}
	if (hiddenWord === theWord) {
		playAgain = confirm("You guessed right! Play again?");
	}
	if (guessLeft === -1) {
		playAgain = confirm("You have lost.  Play again?");
	}
};

// JavaScript Document
var letterGuessed = "";
var guessLeft = 7;
var wordBank = ["blueberry", "cherry", "orange", "apple", "grape", "watermelon", "dragonfruit", "papaya"];
var correctGuesses = [""];
var wrongGuesses = [];
var hiddenWord = [];
var guessRight = false;
var wrongCount = 0;
var playAgain = false;
var randomNum = 0;
var theWord = [];

function getRandom(arrLength) {
	return Math.floor((Math.random() * arrLength) + 1);
}

function fillArray(arr) {
	for (var i = 0; i < arr.length; i++) {
		arr[i] = "-";
		document.getElementById("wordBox").innerHTML += hiddenWord[i];
	}
}

function getUserInput(){
	document.onkeyup = function (event){
		var input = String.fromCharCode(event.keyCode).toLowerCase();
		return input;
	}
	
}

function rightLetter() {
	console.log("You guessed a right letter.");
}

function wrongLetter() {
	console.log("Sorry, not part of the word I'm thinking of.")
}

function restartGame(){
	return true;
}

function quitGame(){
	return false;
}

randomNum = getRandom(wordBank.length);


letterGuessed = getUserInput();


theWord = wordBank[randomNum];
console.log("The word you're getting now is at index: " + randomNum);

console.log(theWord);
console.log(hiddenWord);

//after word selection, create equal length string of dashes for document output.
fillArray(theWord);

document.getElementById("wordBox").innerHTML = hiddenWord;
document.getElementById("wrongLetters").innerHTML = wrongGuesses;
document.getElementById("numAttempts").innerHTML = guessLeft;

document.onkeyup = function (event) {
	userInput = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("User chose the letter: " + userInput);

	for (var j = 0; j < correctGuesses.length; j++) {
		//check against letters you have already guessed
		if (userInput === correctGuesses[j]) {
			console.log("You already guessed that letter; Try again");
		} else {

			console.log("You haven't guessed " + userInput + " yet.");

			for (var k = 0; k < theWord.length; k++) {
				//compare userInput to every index of the chosen word
				if (userInput === theWord.charAt(k)) {
					hiddenWord[k] = userInput;
					console.log(hiddenWord);
					guessRight = true;
					console.log("You guessed right. There is a(n) " + userInput + " at location " + k);
					document.getElementById("wordBox").innerHTML = hiddenWord;
					correctGuesses.push(userInput);
				} else {
					//if the index doesn't contain the guessed letter, count up
					wrongCount += 1;
				}
			}
			if (wrongCount === hiddenWord.length) {
				//the userInput letter wasn't found in the chosen word
				console.log("Sorry, there isn't a " + userInput + " in this word.");
				wrongGuesses.push = userInput;
				guessLeft -= 1;
			}
		}
	}


	if (hiddenWord === theWord) {
		playAgain = confirm("You guessed right! Play again?");
	}
	if (guessLeft === 0) {
		playAgain = confirm("You have lost.  Play again?");
	}

};

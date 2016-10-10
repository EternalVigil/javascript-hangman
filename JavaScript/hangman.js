// JavaScript Document
var userInput = "";
var wrongGuessNum = 0;
var wordBank = ["monkeys"];
var correctGuesses = [];
var wrongGuesses = [];
var hiddenWord = [];
var guessRight = false;

//after word selection, create equal length string of dashes for document output.
for (var i = 0; i < wordBank[0].length; i++){
hiddenWord[i] = "-";
}
console.log(wordBank[0]);
console.log(hiddenWord);


document.onkeyup = function(event){
	userInput = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("User chose the letter: " + userInput);
	for (i = 0; i < wordBank[0].length; i++){
		if (userInput === wordBank[0].charAt(i)){
			hiddenWord[i] = userInput;
			guessRight = true;
			console.log("You guessed right. There is a(n) " + userInput + "at location " + hiddenWord[i]);
			correctGuesses.push(userInput);
		
			}
		else{
			guessRight = false;
		}
	}
	if (guessRight === false){
		wrongGuesses.push = userInput;
		console.log("Sorry, there isn't a(n) " + userInput);
		wrongGuessNum += 1;
	}
};

// JavaScript Document
var userInput = "";
var wordBank = ["monkeys"];

document.onkeyup = function(event){
	userInput = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("User chose the letter: " + userInput);
};

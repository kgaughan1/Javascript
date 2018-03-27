var guessNumber = prompt("Guess a number between 1 and 10");
var guess = Number(guessNumber); // Make explicit.

if (guess > 5) {
	console.log("Too high!")
}
else if (guess === 5) {
	console.log("You guessed it!")
}
else{
	console.log("Too low!")
}

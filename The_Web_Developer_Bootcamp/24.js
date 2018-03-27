var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var reset = document.getElementById("reset");

var p1Score = 0;
var p2Score = 0;

var gameLimitDisplay = document.getElementById("gameLimit");
var winningScore = parseInt(gameLimitDisplay.textContent);
var numInput = document.querySelector("input");


var gameOver = false;

p1Button.addEventListener("click", function() {
	
	if(!gameOver)
	{
		p1Score ++;
		p1Display.textContent = p1Score;

		if(p1Score === winningScore)
		{
			console.log("GAME OVER")
			gameOver = true;
			p1Display.style.color = "Green";
		}
	}
	
});

p2Button.addEventListener("click", function() {
	
	if(!gameOver)
	{
		p2Score ++;
		p2Display.textContent = p2Score;

		if (p2Score === winningScore)
		{
			gameOver = true;
			p2Display.style.color = "Green";
		}
	}
});

reset.addEventListener("click", function() {
	p1Display.textContent = 0;
	p1Display.style.color = "Black";
	p1Score = 0;

	p2Display.textContent = 0;
	p2Display.style.color = "Black";
	p2Score = 0;

	gameOver = false;
})


numInput.addEventListener("change", function() {
	console.log("Worked");
	winningScore = Number(this.value);
	gameLimitDisplay.textContent = this.value;

});
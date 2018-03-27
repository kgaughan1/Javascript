var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay")
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");

easybtn.addEventListener("click", function() {
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";

	// Change h1 background back to black
	h1.style.backgroundColor = "steelblue"; 

	// Reset "Play again" to "New Color"
	resetButton.textContent = "New Colors";


	//update background-color blocks display for top 3 blocks

	for (var i = 0; i < 3; i++)
	{
		squares[i].style.background = colors[i];
	}

	// hide the bottom 3 blocks.
	for (var i = 3; i < squares.length; i++)
	{
		squares[i].style.display = "none";
	}
})

hardbtn.addEventListener("click", function() {
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";

	// Change h1 background back to black
	h1.style.backgroundColor = "steelblue";

	// Reset "Play again" to "New Color"
	resetButton.textContent = "New Colors";

	//update background-color blocks display for top 3 blocks

	for (var i = 0; i < squares.length; i++)
	{
		squares[i].style.background = colors[i];
	}

	// Show the bottom 3 blocks.
	for (var i = 3; i < squares.length; i++)
	{
		squares[i].style.display = "block";
	}
})

resetButton.addEventListener("click", function() {
	// Generate all new colors
	colors = generateRandomColors(numSquares);
	
	// Pick a new picked color
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	// Change h1 background back to black
	h1.style.backgroundColor = "steelblue";

	// Change colorDisplay to match new colors.
	initializeSquares();

	// Remove messageDisplay
	messageDisplay.textContent = "";

	// Reset "Play again" to "New Color"
	resetButton.textContent = "New Colors";

})

colorDisplay.textContent = pickedColor;

initializeSquares();

function initializeSquares() {
	for(var i = 0; i < squares.length; i++ )
	{
		//add initial colors to squares
		squares[i].style.backgroundColor = colors[i];

		//add click listeners to squares
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;

			if (clickedColor === pickedColor)
			{
				// Display correct in the messageDisplay.
				messageDisplay.textContent = "Correct!";
				// Display all squares with winning background color.
				changeColors(pickedColor);
				// Display header with winning background color.
				h1.style.backgroundColor = clickedColor;
				// update "New Colors" button to "Play Again?"
				resetButton.textContent = "Play Again?";
			}
			else
			{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function changeColors(color) {
// Loop through all squares.
	for (var i = 0; i < squares.length ; i++)
	{
		// Change color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// make an array
	var arr = [];
	// add num random numbers to array
	for(var i = 0; i < num; i++)
	{
		// Get Random color and push into array.
		arr.push(randomColor());
	}

	// return that array
	return arr;
};

function randomColor() {
	// pick a red from 0-255
	var red = Math.floor(Math.random() * 256);
	// pick a green from 0-255
	var green = Math.floor(Math.random() * 256);
	// pick a blue from 0-255
	var blue = Math.floor(Math.random() * 256);

	return generateColorString(red, green, blue);
};

function generateColorString(r, g, b) {
	var string = "rgb(";
	string += r;
	string += ", ";
	string += g;
	string += ", ";
	string += b;
	string += ")";
	return string;
};
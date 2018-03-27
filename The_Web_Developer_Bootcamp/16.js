var age = prompt("How old are you");

if (age < 0 ) {
	console.log("Error! Enter in an age greater than 0.");
}

if (age == 21 ) {
	console.log("Happy 21 birthday.");
}

if ( age % 2 == 1) {
	console.log("Your age is odd");
}

if ( age / 2 == 2 ) {
	console.log("Your age is a perfect square!")
}
else if ( age / 3 == 3 ) {
	console.log("Your age is a perfect square!")
}
else if ( age / 4 == 4 ) {
	console.log("Your age is a perfect square!")
}
else if ( age / 5 == 5 ) {
	console.log("Your age is a perfect square!")
}
else if ( age / 6 == 6 ) {
	console.log("Your age is a perfect square!")
}
else if ( age / 7 == 7 ) {
	console.log("Your age is a perfect square!")
}
else if ( age / 8 == 8 ) {
	console.log("Your age is a perfect square!")
}
else if ( age / 9 == 9 ) {
	console.log("Your age is a perfect square!")
}
else if ( age / 10 == 10 ) {
	console.log("Your age is a perfect square!")
}
else if ( age / 11 == 11 ) {
	console.log("Your age is a perfect square!")
}

console.log(age*365);

function testFunction(input) {
	console.log(input)
}

var colors = ["red", "yellow", "green", "purple"];

colors.forEach(testFunction);

for ( var i = 0; i < 50; i++ )
{
	if (i % 3 == 0)
	{
		console.log(i);
	}
}
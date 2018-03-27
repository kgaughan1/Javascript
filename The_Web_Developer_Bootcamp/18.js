var number = -10;

while ( number < 19 )
{
	console.log(number);
	number++;
}

console.log("NUMBER 2");

number = 10;

while (number < 40 )
{
	if (number % 2 == 0)
	{
		console.log(number);
	}
	number++;
}

number = 300;

while (number < 333)
{
	if (number % 2 == 1)
	{
		console.log(number);
	}
	number++;
}

number = 5;

while (number < 50)
{
	if ( number % 5 == 0 )
	{
		console.log(number);
	}
	else if (number % 3 == 0)
	{
		console.log(number);
	}
	number++;
}

var answer = "";

while (answer != "yes")
{
	answer = prompt("Are we there yet?")
}

console.log("Yay we made it!")

function isEven(input)
{
	return input % 2 == 0
}

isEven(5);
isEven(4);
isEven(10);

function factorial(input)
{
	var output = 1;

	for (var i = input; i > 0; i--)
	{
		if ( i == input){output = input;}
		else {output = output * i;}
	}
	
	console.log(output);
}

factorial(5);
factorial(3);

function kebabToSnake(input)
{
	var output = input.replace(/-/g,"_");
	console.log(output);
}

kebabToSnake("Hello-World");
kebabToSnake("dogs-are-awesome");

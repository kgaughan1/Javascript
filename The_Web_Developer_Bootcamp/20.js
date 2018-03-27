function printReverse(input)
{
	var reverseString = ["a", "b", "c"];

	for (var i = input.length-1; i >= 0; i--)
	{
		reverseString.unshift(input[i]);
		console.log(input[i]);
	}	
}

printReverse("Hello World!");

function isUniform(input)
{
	var boolValue2 = true;
	var previousItem = 0;

	input.forEach(function(item, i)
	{
		if ( i == 0 ) {
			previousItem = item;
		}
		else {
			if (item != previousItem) {boolValue2 = false;}
		}
	});

	console.log(boolValue2);
};

isUniform([1,1,1,1,1]);
isUniform([1,2,3]);

function sumArray(input) {
	var sum = 0;

	input.forEach(function(value) {
		sum += value;
	});

	console.log(sum);
};

sumArray([1,2,3]);
sumArray([5,10]);

function max(input) {
	var maxValue = 0;

	function maxCalculate(value)
	{
		if ( value > maxValue)
		{
			maxValue = value;
		}
	};

	input.forEach(maxCalculate);

	console.log(maxValue);
};


max([1,2,3,4,5]);

max([10,3,10,4]);

max([-5,100]);


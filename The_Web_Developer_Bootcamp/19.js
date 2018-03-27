window.setTimeout(function() {


var input = "";
var list = [];


while (input != "quit")
{
	
	 if (input == "new" )
	 {
	 	newToDo();
	 }
	 else if (input == "list")
	 {
	 	listToDo();
	 }
	 else if (input === "delete")
	 {
	 	deleteToDo();
	 }

	 var input = prompt("What do you want to do?");
	 // else if (input == "quit")
	 // {
	 // 	console.log("Goodbye!");
	 // 	break;
	 // }
	 // else {
	 // 	alert("That is not an appropriate answer.")
	 // }
}

function newToDo()
{
	var newItem = prompt("What new item do you wish to add?")
 	list.push(newItem);
 	console.log("Added ToDo");
}

function listToDo() {
	console.log("**********")
 	list.forEach(function(item, i) {
 		console.log(i + ":" + item);
 	})

 	console.log("**********")
 	//console.log(list);
}

function deleteToDo() {
	var iValue = prompt("Enter in the index of the value you wish to delete.")
	 	list.splice(iValue, 1);
	 	console.log("Removed ToDo");
}

console.log("Goodbye!");

}, 500);

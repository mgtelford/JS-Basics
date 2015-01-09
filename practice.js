//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

var isTyler = function () {
	if (name === "Tyler") {
		return true;
	} else {
		return false;
	}
};


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

var getName = function () {
	return prompt("Enter Name");
};

//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

 var welcome = function () {
 	getName();
 	alert("Welcome, " + getName());
 };


//Next problem



//Write a function called adder that uses the 'arguments' keyword that comes with every function to
//loop over all the arguments the function received, add them all together, then return the result.
//Save the result of the return value from your adder function, then alert "The Total Number was " + the number that was
//returned from adder.

var adder = function () {
	var totalSum = 0;
	for (var i = 0; i < arguments.length; i++) {
		totalSum += arguments[i];
	} 
	return	totalSum;
	alert("The Total Number was " + totalSum);	
};


//Next Problem



//What is the difference between arguments and parameters?

Argument are used to invoke a function. Whereas, parameters are not.


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


Generally anything with no value is falsy. One way to check if something is falsy is through an if statement. For example,
if (!variable) {
	alert("_");
};


//Next Problem



//Create a function called myName that returns your name

var myName = function () {
    myName = "Michael Telford";
	return myName;
};

//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName();

//Now alert the result of invoking newMyName

alert(newMyName);

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

var outerFn = function () {
	return function() {
	  return "Michael Telford";
	}

}

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.
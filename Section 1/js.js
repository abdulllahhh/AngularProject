// Some ES5 code

// declaration and initialization
var firstName;
firstName = 'Ali';
var age = 28;

// type coercion (conversion) = javascript automatically converts types from one to another as it's needed
console.log(firstName + ' ' + age);


//basic operators
var year = 2020;
var yearAhmed = year - 28;
console.log(yearAhmed);

var x = 2;
x += 1;
x++;
++x;

console.log(typeof yearAhmed);

// if / else statement

var age = 30;
if (age >= 20)
{
	// if block
	console.log('age is larger than or equals 20');
}
else if (age === 15)
{
	console.log('age equals 15');
}
else 
{
	console.log('otherwise');
}


var isMarried = true;
if(isMarried)
{
	console.log('this line will be executed');
}

// ternary operator = if / else statement all in one line
var ageAhmed = age > 20 ? 'yes' : 'no';


// function statement
function calculateAge(birthYear)
{
	return 2018 - birthYear;
}
calculateAge(1990);


// function expressions
var calcAge = function(birthYear) {
	return 2018 - birthYear;
}
calcAge(1990);


// Array declaration

//var years = new Array(1990, 1975, 1996);
var names = ['Ahmed', 'Ali', 1996, true]; 

console.log(names[0]);
console.log(names.length);
names[1] = 'Ben';

// push()
// pop()
// shift()
// unshift()
// indexOf()



// object declaration
var Hossam = {
	firstName: 'Hossam',
	lastName: 'Saad',
	birthYear: 1996,
	job: 'teacher',
    isMarried: false,
    calcAge: function() {
		// "this" refers to hossam object
        return 2022 - this.birthYear;
    }
}
console.log(Hossam.calcAge());


// loops
for (var i = 0; i < 10; i++) {
    if(i == 2) {
        break;
    }
	console.log(i);
}


/* 

All javascript code needs to run in an environment and these environments are called (execution contexts)

Execution Context is where a piece of code is executed

Default execution context is the Global context
Global context is for variable and functions that are not inside of any function

For each function a new execution context is generated which will contain the declarations of local variables and functions in this function

The global execution context is attached (associated) with the global object (window object in browser)
any thing declared in the global context automatically attached to the window object 

Example for attaching any declared variable (Global variable) in the global object (window object)
*/

var lastName = 'ali';

if(lastName === window.lastName){
    console.log('yes');
}


// -----------------------------------------------

/*
Three important points:
1- 
functions and variables are hoisted which means 
they are available before the execution phase actually starts

- function are already defined
- variables is undefined
*/

calculateAge(1965);

function calculateAge(year) {
	console.log(year);
}

/*
2- 
lexical scoping: 
a function which is in another function which means: 
function is written in another function and gets access to the scope of the outer function (parent function)

Example in Slides
*/



/*
3- 
"this" variable is a variable that each and every execution context gets
*/


console.log(this);

calculateAge(1965);

function calculateAge(year) {
	console.log(year);
	console.log(this);
}


var ahmed = {
	name: 'john',
	yearOfBirth: 1990,
	calculateAge: function() {
		console.log(this);

		inner();

		function inner() {
			console.log(this.ahmed.name);
		}
	}
}

ahmed.calculateAge();

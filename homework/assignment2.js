//get user input for name
var name = (window.prompt("Let's play the sum game." + "\nPlease enter your name"));
console.log(name);

//get user input for two numbers
var num1 = Number.parseInt(window.prompt("Enter first number"));
console.log(num1);

var num2 = Number.parseInt(window.prompt("Enter second number"));
console.log(num2);

var total = num1 + num2

//initialize
document.write("Hi, " + name + "! " + "The sum of " + num1 + " + " + num2 + " is " + total);
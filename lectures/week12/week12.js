// Week 12 - Functions and event handling basics
console.log("Week 12: JavaScript functions and event handling basics");

//Until now whatever code we wrote executed immediately when the page loaded, 
// but now we will write code that executes when the user does something, 
// such as clicks a button or moves the mouse over an element

//to do so let's get basics of functions first, and then we will look at event handling
//so how about a function that prints a greeting to the console, and then we will call that function when the user clicks a button

function greet() {
    console.log("Hello, welcome to week 12 from a function!");
    console.log("This is a function that prints a greeting to the console");
}
//we used curly braces to define the function body, and we used the function keyword to define the function, and we gave it a name, greet, and then we can call the function by using its name followed by parentheses

//once I have defined a function, 
// I can call it as many times as I want, 
// and it will execute the code inside the function body each time I call it

// greet(); //this will call the function and execute the code inside the function body
// greet(); //this will call the function and execute the code inside the function body
// greet(); //this will call the function and execute the code inside the function body

//let's greet ourselves 10 times with a loop
// for (let i = 0; i < 10; i++) {
//     greet(); //this will call the function and execute the code inside the function body
// }

//let's make a function that takes an number of times to greet as a parameter, and then we will call that function when the user clicks a button
function greetTimes(times) {
    console.log("Greeting " + times + " times");
    for (let i = 0; i < times; i++) {
        greet(); //this will call the function and execute the code inside the function body
    }
}

//let's 4 times
greetTimes(4); //this will call the function and execute the code inside the function body

//our functions become even more powerful when they return a value, so let's make a function that takes two numbers as parameters, and returns the sum of those two numbers
function addNumbers(num1, num2) {
    return num1 + num2; //this will return the sum of num1 and num2
}

//so how do you use such a function? you can call it and store the return value in a variable, and then use that variable later
let sum = addNumbers(5, 10); //you store the result of the function call in a variable, and then you can use that variable later
console.log("The sum is: " + sum);

//let's do an area of circle
function areaOfCircle(radius, debug=false) {
    //it is very typical to store results in a variable, and then return that variable at the end of the function, rather than returning the result directly, because it allows you to debug the function more easily, and also allows you to add more code to the function later without having to change the return statement
    const result = Math.PI * radius * radius; //this will return the area of a circle with the given radius
    if (debug) {
        console.log("Calculating area of circle with radius: " + radius);
        //value of pi
        console.log("Value of pi: " + Math.PI);
        //result
        console.log("Area of circle: " + result);
    }
    return result; //this will return the area of a circle with the given radius
}

//cruciall result ceases to exist by its name after the function ends,
//  so you cannot access result outside of the function, but you can access the return value of the function, which is the area of the circle

const area = areaOfCircle(5); //this will call the function and execute the code inside the function body
console.log("The area of the circle is: " + area);
//let's round the result a bit
const roundedArea = Math.round(area); //this will round the area of the circle to the nearest integer
console.log("The rounded area of the circle is: " + roundedArea);

//if we want to round to specific digits we will make our own function to do that,
//  because Math.round() only rounds to the nearest integer, 
// but we can use Math.round() to round to specific digits by multiplying and dividing by powers of 10
function roundToDigits(num, digits) {
    const factor = Math.pow(10, digits); //this will calculate 10 to the power of digits
    return Math.round(num * factor) / factor; //this will round the number to the specified number of digits
}

//now that we have this function we can round the area of the circle to 2 decimal places
const roundedArea2 = roundToDigits(area, 2);
console.log("The area of the circle rounded to 2 decimal places is: " + roundedArea2);

//so now let's use the debug flag (true) to see the debug output of the areaOfCircle function
const areaDebug = areaOfCircle(10, true); //what dont I like about this call? Think :)
//we should see the debug output in the console, and then we can see the area of the circle with radius 10
//let's print the area of the circle with radius 10
console.log("The area of the circle with radius 10 is: " + areaDebug);
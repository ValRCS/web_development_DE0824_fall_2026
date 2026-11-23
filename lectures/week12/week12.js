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

//I could change the message area by hand
//first I find the message element in the DOM, and then I change its text content to something else
// const message = document.querySelector("#message");
// message.textContent = "Archive is ready!";

//instead let's make a function that changes the message, and then we can call that function when the user clicks a button
function changeMessage(newMessage, elementId="message") {
    //this means that if the user does not provide an elementId, it will default to "message", but if the user provides an elementId, it will use that instead
    // const message = document.querySelector(`#${elementId}`);
    //alternative would be
    const message = document.getElementById(elementId);
    message.textContent = newMessage; //this will change the text content of the message element to the new message
}

// changeMessage("Archive is REALLY REALLY ready!"); //this will change the text content of the message element to "Archive is ready!"
// changeMessage("Archive is corrupted!!"); //this will change the text content of the message element to "Archive is ready!"

//to have the function be called upon some click we find the button element in the DOM, and then we add an event listener to that button element, so that when the user clicks the button, the function is called
const button = document.querySelector("#change-button");

//let's create a wrapper function that calls changeMessage with the new message, so that we can pass that wrapper function to the event listener, because we cannot pass arguments to the event listener directly
function handleButtonClick() {
    changeMessage("Archive is REALLY REALLY ready!");
}
//now add handler
button.addEventListener("click", handleButtonClick); //this will add an event listener to the button element, so that when the user clicks the button, the handleButtonClick function is called, which in turn calls the changeMessage function with the new message

//let's add some global state to count clicks in another button
let clickCount = 0; //so this is so called global state, because it is defined outside of any function, and can be accessed by any function in this file, so we can use this variable to keep track of how many times the user has clicked the button, and then we can use that variable to update the output element with the new count
//generally you define global state at the top of the file, so that it is easy to find and understand, and then you can use that global state in your functions, so that you can keep track of the state of your application, and then you can use that state to update the DOM, or to make decisions in your code
const output = document.querySelector("#count-output");
const countButton = document.querySelector("#count-button");

function handleCountButtonClick() {
    clickCount++;
    output.textContent = `Button clicked ${clickCount} times`; //this will change the text content of the output element to the new message
};

//so we use addEventListener to add an event listener to the count button element, so that when the user clicks the count button, the handleCountButtonClick function is called, which in turn increments the clickCount variable and updates the output element with the new count
countButton.addEventListener("click", handleCountButtonClick); //this will add an event listener to the count button element, so that when the user clicks the count button, the handleCountButtonClick function is called, which in turn increments the clickCount variable and updates the output element with the new count
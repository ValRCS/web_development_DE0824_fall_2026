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
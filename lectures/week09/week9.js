// This is the external JavaScript file for the week 9 lecture
console.log("Running week9.js");
document.body.style.backgroundColor = "#f0f0f0";
console.log("Background color changed to #f0f0f0");

//we use variables and constants to keep track of data in our program
//start with constants, which are values that do not change
const collectionName = "Historical Photographs of Riga";
//we can not change collectionName because it is a constant, but we can change recordCount because it is a variable
//if you need to change something later in your program, use a variable instead of a constant
let recordCount = 12;

//constants are great for remembering specific elements
const outputElement = document.querySelector("#output");
//i can now write output to the outputElement instead of the console
outputElement.textContent = "The " + collectionName + " collection has " + recordCount + " records.";

console.log(collectionName);
console.log(recordCount);

//i can manually change the value of a variable
//often this will be done in response to user input or other events
recordCount = 15;
console.log(recordCount); // 15

//I can also increase it by some amount
recordCount += 3; // recordCount = recordCount + 3
console.log(recordCount); // 18

//so I can refer to collectionName and recordCount later in my program
console.log("The " + collectionName + " collection has " + recordCount + " records.");

//you can not change collectionName because it is a constant, but you can change recordCount because it is a variable
// collectionName = "New Collection"; // this will cause an error


//let's add time of load and date to p in footer
// const footerElement = document.querySelector("footer p");
const footerElement = document.querySelector("#footer-output");
//so # for id and . for class, and no prefix for tag name
const currentDate = new Date();
footerElement.textContent = "Page loaded on " + currentDate.toLocaleString();
// footerElement.textContent += "Page loaded on " + currentDate.toLocaleString();
console.log("Welcome to Week 10!");
console.log("Today we will be learning about JavaScript branching and logic.");

console.log("Output container initialized.");

//let's get a constant reference to our output-container div element
const outputContainer = document.querySelector('.output-container');

//now we can access and modify various properties of the outputContainer element, such as its innerHTML, textContent, and style properties. For example, we can set the innerHTML of the outputContainer to display a message:
//inner HTML is a bit dangerous because it can allow for injection of malicious code if not used carefully, so be sure to sanitize any user input before inserting it into the DOM using innerHTML. In this case, we are just setting a static message, so it is safe to use innerHTML here.
outputContainer.innerHTML = "<p>Welcome to the JavaScript branching and logic lesson!</p>";
//the security issue is that if someone else (say a user) supplies content 
// that is inserted into the DOM using innerHTML, 
// they could potentially inject malicious code (like a script tag) that would run in the context of your page. This is known as cross-site scripting (XSS). To avoid this, you should sanitize any user input before inserting it into the DOM using innerHTML. 
// In this case, we are just setting a static message, so it is safe to use innerHTML here.

//if we just want to change or set some text better to use textContent instead of innerHTML, because it will not interpret any HTML tags in the string, and will just display them as plain text. For example:
outputContainer.textContent = "This is a plain text message, no HTML tags will be interpreted.";

//Let's talk about Boolean values. In JavaScript, a Boolean value is a data type that can only have one of two possible values: true or false. Boolean values are often used in conditional statements to control the flow of a program based on certain conditions. 
// For example, we can use a Boolean variable to determine whether a user is logged in or not, and then display different content based on that condition.
//so let's state some truth values about Riga and our course
//note how I name these variables in a way that makes it clear what they represent, and I use camelCase to separate words in the variable name. This is a common convention in JavaScript and helps make your code more readable.
const isRigaCapitalOfLatvia = true;
const isJavaScriptFun = true;
const isWebDevelopmentCourseChallenging = true;

//how about false
const isItSummer = false;
let isItSunny = false; //we will need to change this value later, so we use let instead of const. If we know that a variable will never change, we can use const to make it clear that it is a constant value. This can help prevent accidental changes to the variable later in the code.
//if we expect our variables to changes we use let instead of const
//start with const but when you realize you need change it to let, you can do that. But if you know it will never change, use const.
let isItRaining = false;

//let's print them out in our output container
//we will adjust our textContent to include the values of our Boolean variables. We can use template literals (backticks) to easily include variables in our string.
outputContainer.textContent = `Is Riga the capital of Latvia? ${isRigaCapitalOfLatvia}
Is JavaScript fun? ${isJavaScriptFun}
Is the web development course challenging? ${isWebDevelopmentCourseChallenging}
Is it summer? ${isItSummer}
Is it sunny? ${isItSunny}
Is it raining? ${isItRaining}
`;

//we can get Boolean variables from operations
let publicationYear = 1925;
console.log(`publicationYear: ${publicationYear}`); // 1925
console.log(`publicationYear > 1900: ${publicationYear > 1900}`);   // true
console.log(`publicationYear < 1900: ${publicationYear < 1900}`);   // false
console.log(`publicationYear >= 1925: ${publicationYear >= 1925}`);  // true
console.log(`publicationYear <= 1924: ${publicationYear <= 1924}`);  // false
console.log(`publicationYear === 1925: ${publicationYear === 1925}`); // true
console.log(`publicationYear !== 1925: ${publicationYear !== 1925}`); // false


//we can check if some attribute is present in an object using the in operator. 
//we have checkbox1 id and checkbox5 id let's check if they are checked or not. We can use the in operator to check if the checked property exists in the checkbox element. If it does, we can then check its value to see if it is true or false.
const checkbox1 = document.getElementById('checkbox1');
const checkbox5 = document.getElementById('checkbox5');

console.log(`checkbox1 has checked property: ${'checked' in checkbox1}`); // true
console.log(`checkbox5 has checked property: ${'checked' in checkbox5}`); // true

console.log(`checkbox1 checked value: ${checkbox1.checked}`); // true
console.log(`checkbox5 checked value: ${checkbox5.checked}`); // false

//how about outputContainer, does it have a checked property? Let's check
console.log(`outputContainer has checked property: ${'checked' in outputContainer}`); // false

//this means that outputting value of something that does not exist will return undefined, which is a falsy value. So if we check if outputContainer.checked is true or false, it will be false because it does not exist.
console.log(`outputContainer checked value: ${outputContainer.checked}`); // undefined

//now that we know Booleans we can use them in conditional statements to control the flow of our program. For example, we can use an if statement to check if a user is logged in or not, and then display different content based on that condition. We will cover this in more detail in the next section.
//so if year is over 1925 we will output "The book was published after 1925" otherwise we will output "The book was published in 1925 or earlier"

if (publicationYear > 1925) {
    outputContainer.textContent += "The book was published after 1925.";    
} else {
    outputContainer.textContent += "The book was published in 1925 or earlier.";
}

//how about if we need 3 choices
//we can use a chain of if-else statements to handle multiple conditions. For example, we can check if the publication year is before 1925, exactly 1925, or after 1925, and output different messages accordingly.
//imagine this is where I get update from some database or some source of the year
publicationYear = 1928;
if (publicationYear < 1925) {
    console.log("The book was published before 1925.");
    outputContainer.textContent += "The book was published before 1925.";
} else if (publicationYear === 1925) {
    console.log("The book was published in 1925.");
    outputContainer.textContent += "The book was published in 1925.";
} else {
    console.log("The book was published after 1925.");
    outputContainer.textContent += "The book was published after 1925.";
}

//equivalent way of above but different ordering of conditions
//usually I write this statement with > and < signs only
if (publicationYear < 1925) {
    console.log("The book was published before 1925.");
    outputContainer.textContent += "The book was published before 1925.";
} else if (publicationYear > 1925) {
    console.log("The book was published after 1925.");
    outputContainer.textContent += "The book was published after 1925.";
} else {
    console.log("The book was published in 1925.");
    outputContainer.textContent += "The book was published in 1925.";
}

//lets use if else on seconds and print first half of the minute or second half of the minute
const currentSecond = new Date().getSeconds();
//print seconds
console.log(`Current second: ${currentSecond}`);
if (currentSecond < 30) {
    console.log("We are in the first half of the minute.");
    outputContainer.textContent += "We are in the first half of the minute.";
} else {
    console.log("We are in the second half of the minute.");
    outputContainer.textContent += "We are in the second half of the minute.";
}

//finally some Boolean algebra we can combine multiple conditions using logical operators such as && (AND), || (OR), and ! (NOT). For example, we can check if a user is logged in and has admin privileges before allowing them to access certain content. We will cover this in more detail in the next section.

//let's start with negation
let isItWeekend = false;
if (!isItWeekend) {
    console.log("It's a weekday.");
    outputContainer.textContent += "It's a weekday.";
} else {
    console.log("It's the weekend.");
    outputContainer.textContent += "It's the weekend.";
}
//note it is still false
console.log(`isItWeekend: ${isItWeekend}`); // false
//we can flip it to true
isItWeekend = true;
console.log(`isItWeekend: ${isItWeekend}`); // true
//there is a trick to flip-flop the value no matter what it is
isItWeekend = !isItWeekend;
console.log(`isItWeekend: ${isItWeekend}`); // false
//lets do it again
isItWeekend = !isItWeekend;
console.log(`isItWeekend: ${isItWeekend}`); // true

//now conjunction
//lets print all 4 combinations of true and false 
console.log(`true && true: ${true && true}`); // true
console.log(`true && false: ${true && false}`); // false
console.log(`false && true: ${false && true}`); // false
console.log(`false && false: ${false && false}`); // false

//so we could use isItWeekend and isItRaining to determine if we should go outside or not
//lets pritn values first
console.log(`isItWeekend: ${isItWeekend}`); // true
console.log(`isItRaining: ${isItRaining}`); // false
if (isItWeekend && !isItRaining) {
    console.log("Let's go outside!");
    outputContainer.textContent += "Let's go outside!";
} else { //this covers 3 situations: weekday, weekend but raining, and weekday and raining
    console.log("Let's stay inside.");
    outputContainer.textContent += "Let's stay inside.";
}

//finally disjunction
//lets print all 4 combinations of true and false 
console.log(`true || true: ${true || true}`); // true
console.log(`true || false: ${true || false}`); // true
console.log(`false || true: ${false || true}`); // true
console.log(`false || false: ${false || false}`); // false

//lets have an example in action
isItSunny = true; //note we defined isItSunny earlier as false, but now we are changing it to true
let isItWarm = false;
if (isItSunny || isItWarm) {
    console.log("Let's go for a walk!");
    outputContainer.textContent += "Let's go for a walk!";
} else {
    console.log("Let's stay inside.");
    outputContainer.textContent += "Let's stay inside.";
}


//finally discussion about truthy and falsy values. 
// In JavaScript, a truthy value is a value that is considered true when evaluated in a Boolean context,
//  while a falsy value is a value that is considered false. 
// The following values are considered falsy in JavaScript: 
// false, 0, -0, 0n, "", null, undefined, and NaN. 
//MDN documentation: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
// All other values are considered truthy. 
// This means that if you use a truthy value in a conditional statement, it will be treated as true, while a falsy value will be treated as false. For example:

//let use truthy in action on some string
let someString = "Hello, World!";
if (someString) {
    console.log("The string is truthy.");
    outputContainer.textContent += "The string is truthy.";
} else {
    console.log("The string is falsy.");
    outputContainer.textContent += "The string is falsy.";
}

//number 0 is also false
// let someNumber = 10;
let someNumber = 0;
if (someNumber) {
    console.log(`The number ${someNumber} is Truthy`);
    outputContainer.textContent += "The number is truthy.";
} else { //similar as checking if someNumber === 0, but more general because it will also catch other falsy values like null, undefined, NaN, etc.
    console.log(`The number ${someNumber} is falsy.`);
    outputContainer.textContent += "The number is falsy.";
}

//try to be strict in what you check for, because if you just check for truthy or falsy, you might get unexpected results. For example, if you check if a variable is truthy, it will be true for any non-zero number, any non-empty string, any object, etc. So if you want to check for a specific value, be explicit about it.
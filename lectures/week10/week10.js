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
const isItSunny = false;
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

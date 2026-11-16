console.log("Week 11: JavaScript loops and control flow");
//let's get const element for our output
const outputElement = document.getElementById("output");
//alternative would be select the output element using querySelector
//then it would be const outputElement = document.querySelector("#output");
//note the difference between getElementById and querySelector, the first one is faster, but the second one is more flexible, because you can use any CSS selector, not just an id

//you could also use console.log to output to the console, but we will use the outputElement to output to the page
//first let's look at a switch case statement
//this is an alternative to if else statements
//whenever you have a long chain of if else statements, you can use a switch case statement instead
// const documentType = "letter"; //imagine this comes from some user selection, and we want to do different things based on the document type
const documentType = "book"; //imagine this comes from some user selection, and we want to do different things based on the document type
//the whole idea is that we do not know the document type, so we want to do different things based on the document type
switch (documentType) {
    case "letter":
        //you write whatever instructions you want to run for this case
        //could be multiple lines of code, but you have to remember to put a break statement at the end of each case, otherwise it will continue to run the next case
        console.log("Correspondence");
        break;
    case "newspaper":
        console.log("Periodical");
        break;
    case "book":
        console.log("Publication");
        break;
    default: //so this is essentially the else statement, if none of the above cases are true, then this will run
        console.log("Unknown document type");
}
console.log("Regular flow resumes here");
//so switch case works great for specific matches
//it does not work so great for greater than or less than comparisons, so if you need to do that, you will need to use if else statements instead


console.log("While loops");
//so let's start with while loops
//essential idea is that we keep doing something while a condition is true
// the condition is evaluated before each iteration
// let year = 1818;          // Starting value
// let year = 2026;          // Starting value
let year = 1926;          // Starting value
while (year <= 1933) {   // Continue while true
    console.log(year);
    outputElement.innerHTML += year + "<br>"; //so this will output the year to the page, and then add a line break, so that each year is on a new line
    //again kind of danegours if you are not controlling the value of year, because if you do not change the value of year, then the condition will always be true, and you will get an infinite loop
    //crucially we have some way of changing the value of year, otherwise we will get an infinite loop
    year++;              // Change the value ++ is same as year = year + 1
}
// Output: 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933
console.log("While loops has completed");
console.log("Regular flow resumes here");
//Do while Loops
//idea is to "shoot first, ask questions later" - the condition is evaluated after each iteration, so the loop will always run at least once
// let count = 1;
let count = 9000;
do {
    console.log(count); //so this will always happen at least once, even if the condition is false
    outputElement.innerHTML += count + "<br>"; //so this will output the count to the page, and then add a line break, so that each count is on a new line

    count++; //this also happens at least once, even if the condition is false
} while (count < 5);
// Output: 9000
//now show count again
console.log("Count after do while loop: " + count); //so this will show 9001, because the loop ran once and incremented count

//when you have definite number of iterations, you can use a for loop
console.log("For loops");
//for loops are great for when you know how many times you want to loop, or when you have a definite number of iterations
for (let year = 1918; year <= 1923; year++) {
    console.log(year);
    outputElement.innerHTML += year + "<br>";
}
//pop quiz what will be value of year here?
console.log("Year after for loop: " + year);
//so for loops have ability to shadow variables, so the year variable inside the for loop is different from the year variable outside the for loop, so the year variable outside the for loop is still 1926, because it was not changed by the for loop
//so year inside for loop has limited scope, it only exists inside the for loop, and is not accessible outside the for loop

//break and continue let's look at break and continue statements
console.log("Break and continue statements");
for (let year = 1918; year <= 1935; year++) {
    if (year === 1920) {
        console.log("SPECIAL CASE: Skipping 1920");
        continue; // Do not print 1920 go back to start of loop
    }
    //we could actually check for something else to break the loop, for example if we wanted to stop the loop at 1923, we could do that
    if (year === 1933) {
        break;    // Stop before printing 1923 //go PAST the loop, so it will not print 1923 or any years after that
    }
    //lets break on first year that divides by 10 with no reminder
    if (year % 10 === 0) {
        console.log("SPECIAL CASE: Breaking on year divisible by 10");
        break;    // Stop before printing year divisible by 10
    }
    console.log(year);
}
// Output: 1918, 1919, 1921, 1922


//lets print numbers to screen from say 10 to 20 in alternating colors
for (let i = 10; i <= 20; i++) {
    //so we can use the modulus operator to determine if the number is even or odd, and then use that to set the color of the text
    if (i % 2 === 0) {
        outputElement.innerHTML += `<span style="color: blue;">${i}</span><br>`;
    } else {
        outputElement.innerHTML += `<span style="color: red;">${i}</span><br>`;
    }
}

//again innerHTML is not the best way to do this, but it is a simple way to demonstrate the concept of loops and control flow, and how to output to the page. In a real application, you would probably want to use a more robust method of outputting to the page, such as creating elements and appending them to the DOM, rather than using innerHTML.

//so for final demonstration today 
//we will will keep track of total
let total = 0; //so we could start from any value
//we will iterate from 1 to 10 and add multiple of 100 to total
for (let i = 1; i <= 10; i++) {
    total += i * 100; //same as total = total + i * 100
    // outputElement.innerHTML += `Adding ${i * 100} to total, new total is ${total}<br>`;
    //let's put each of above output in a different color, so that we can see the progression of the total
    //we have classes in css red-box and blue-box, let's make a new div for each output, and give it a class of red-box or blue-box, alternating between the two
    //next we check for even or odd, and then set the class accordingly
    if (i % 2 === 0) { //so this is even, so we will use blue-box class
        outputElement.innerHTML += `<div class="blue-box">Adding ${i * 100} to total, new total is ${total}</div>`;
    } else { //so this is odd, so we will use red-box class
        outputElement.innerHTML += `<div class="red-box">Adding ${i * 100} to total, new total is ${total}</div>`;
    }
    //you can of course come up with more complex logic for determining the class, but this is just a simple example to demonstrate the concept of loops and control flow, and how to output to the page.
}
//show final total
outputElement.innerHTML += `Final total is ${total}<br>`;
console.log("Final total is " + total);

//so again innerHTML is easy but not considered the safest if you have user input, because it can lead to cross site scripting attacks, so in a real application you would want to use a more robust method of outputting to the page, such as creating elements and appending them to the DOM, rather than using innerHTML.
//in following lessons we will learn a proper way to do this, but for now this is a simple way to demonstrate the concept of loops and control flow, and how to output to the page.
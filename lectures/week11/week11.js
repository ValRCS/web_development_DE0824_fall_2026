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
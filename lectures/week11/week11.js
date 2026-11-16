console.log("Week 11: JavaScript loops and control flow");
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
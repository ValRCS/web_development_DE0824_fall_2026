"use strict";

// Week 14: structured records, search, DOM rendering, and JSON.
const books = [
    { id: 1, title: "Mērnieku laiki", author: "Reinis un Matīss Kaudzītes", year: 1879, language: "Latvian" },
    { id: 2, title: "Hamlet", author: "William Shakespeare", year: 1603, language: "English" },
    { id: 3, title: "Faust", author: "Johann Wolfgang von Goethe", year: 1808, language: "German" }
];

const searchInput = document.querySelector("#catalogue-search");
const cards = document.querySelector("#catalogue-cards");
const count = document.querySelector("#catalogue-count");

function findBooks(query) {
    const matches = [];
    const term = query.trim().toLowerCase();

    for (const book of books) {
        const title = book.title.toLowerCase();
        const author = book.author.toLowerCase();
        if (title.includes(term) || author.includes(term)) {
            matches.push(book);
        }
    }
    return matches;
}

function createBookCard(book) {
    const article = document.createElement("article");
    article.className = "record";

    const heading = document.createElement("h3");
    heading.textContent = book.title;
    const summary = document.createElement("p");
    summary.textContent = book.author + " · " + book.year;

    const details = document.createElement("p");
    details.textContent = "Language: " + book.language + " · Record ID: " + book.id;
    details.hidden = true;

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Details";
    button.setAttribute("aria-expanded", "false");
    button.addEventListener("click", function (event) {
        console.log("Clicked:", event.target);
        details.hidden = !details.hidden;
        button.textContent = details.hidden ? "Details" : "Hide details";
        button.setAttribute("aria-expanded", String(!details.hidden));
    });

    article.append(heading, summary, button, details);
    return article;
}

function renderBooks() {
    const matches = findBooks(searchInput.value);
    cards.replaceChildren();

    for (const book of matches) {
        cards.append(createBookCard(book));
    }
    count.textContent = matches.length + " record(s) found.";
    if (matches.length === 0) {
        const message = document.createElement("p");
        message.textContent = "No matching records.";
        cards.append(message);
    }
}

searchInput.addEventListener("input", renderBooks);
document.querySelector("#reset-search").addEventListener("click", function () {
    searchInput.value = "";
    renderBooks();
    searchInput.focus();
});

document.querySelector("#parse-json").addEventListener("click", function () {
    const source = document.querySelector("#json-input").value;
    const output = document.querySelector("#json-result");
    try {
        const value = JSON.parse(source);
        output.textContent = "Valid JSON. Parsed JavaScript value:\n" +
            JSON.stringify(value, null, 2);
    } catch (error) {
        output.textContent = "Invalid JSON: " + error.message;
    }
});

renderBooks();

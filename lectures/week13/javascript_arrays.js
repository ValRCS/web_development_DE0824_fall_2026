"use strict";

// Week 13 — arrays, DOM rendering, and browser input events.
// This file is loaded with defer, after the HTML has been parsed.
const startingBooks = ["Hamlet", "Faust", "Mērnieku laiki"];
const books = [...startingBooks];

const list = document.querySelector("#book-list");
const count = document.querySelector("#book-count");
const status = document.querySelector("#catalogue-status");
const form = document.querySelector("#book-form");
const titleInput = document.querySelector("#book-title");

function renderBooks() {
    list.replaceChildren();
    for (const book of books) {
        const item = document.createElement("li");
        item.textContent = book;
        list.append(item);
    }
    count.textContent = books.length;
    if (books.length === 0) {
        const emptyMessage = document.createElement("li");
        emptyMessage.textContent = "No titles yet. Add one above.";
        list.append(emptyMessage);
    }
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const title = titleInput.value.trim();
    if (title === "") {
        status.textContent = "Please enter a nonempty title.";
        return;
    }
    books.push(title);
    renderBooks();
    status.textContent = "Added: " + title;
    titleInput.value = "";
    titleInput.focus();
});

document.querySelector("#remove-last").addEventListener("click", function () {
    if (books.length === 0) {
        status.textContent = "The collection is already empty.";
        return;
    }
    const removed = books.pop();
    renderBooks();
    status.textContent = "Removed: " + removed;
});

document.querySelector("#clear-books").addEventListener("click", function () {
    books.length = 0;
    renderBooks();
    status.textContent = "Collection cleared.";
});

document.querySelector("#reset-books").addEventListener("click", function () {
    books.length = 0;
    for (const book of startingBooks) {
        books.push(book);
    }
    renderBooks();
    status.textContent = "Sample collection restored.";
});

const previewInput = document.querySelector("#preview-input");
const previewCount = document.querySelector("#preview-count");
previewInput.addEventListener("input", function () {
    previewCount.textContent = previewInput.value.length + " characters";
});

renderBooks();

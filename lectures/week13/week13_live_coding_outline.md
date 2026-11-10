# Week 13 — JavaScript Arrays, Collections, and DOM Input Events

Instructor-facing live-coding guide for DE0824 (Fall 2026).

## Place in the syllabus

- Week 11: loops and repeated processing.
- Week 12: functions, DOM selection and click events.
- **Week 13: arrays, input events, processing collections and updating the page.**
- Week 14: objects, JSON, event targets and integration.

Student lecture: [javascript_arrays.html](javascript_arrays.html).
Working demonstration script: [javascript_arrays.js](javascript_arrays.js).

## Outcomes

Students should explain zero-based indices, length, mutation with push/pop, iteration using for/for...of, DOM rendering, and submit/input events. They should be able to trace a user action from the form through an array change to a visible DOM update.

## Live coding (roughly 90–130 minutes, modular)

1. **Review (10 min):** Ask students to predict a short for-loop output and recall querySelector and addEventListener from Week 12.
2. **First array (15 min):** In the Console create `const books = ["Hamlet", "Faust", "Mērnieku laiki"]`. Inspect `books[0]`, `books[2]`, `books.length`. Predict `books[3]`. Demonstrate last index `length - 1`.
3. **Mutation (15 min):** Add with push, remove with pop, replace index 1. Explain const binding versus mutable array. Have students predict the state before running.
4. **Iteration (15 min):** Reuse Week 11's index-based for loop. Deliberately change `i < books.length` to `i <= books.length`. Compare with `for (const book of books)`. Avoid introducing array callbacks prematurely.
5. **DOM list (20 min):** Start from `<ul id="book-list"></ul>`. Write `renderBooks()` using replaceChildren, for...of, createElement, textContent and append. Change the array and show that the DOM does not update until renderBooks is called. Demonstrate duplicate items when clearing is omitted.
6. **Input and form (15 min):** Add a labelled input and form. Register submit, preventDefault, trim, reject whitespace, push, render, clear input. Show Enter submits naturally. Contrast with the live character-count input event.
7. **Collection operations (20 min):** Implement Remove Last, Clear All and a count. Prefer one rendering function to multiple independently synchronized DOM edits. Ask students to inspect Elements and Console.
8. **Debug and exercise (15–20 min):** Break an ID selector, omit preventDefault, and forget to rerender. Students identify each cause before correcting it.

## Required exercise

Modify the example with three different literary titles, add a fourth using the form, display the collection count, remove the last title, and reject empty/whitespace-only entries. Students must explain why changing an array alone does not change the DOM.

## Optional extensions

- Show an empty collection message (the reference demonstration includes one).
- Highlight alternate list items with CSS.
- Add case-insensitive filtering without modifying the underlying collection.
- Remove a selected title with indexOf/splice, only after core work is complete.

## Debugging checkpoints

- Off-by-one index: `books[books.length]` returns undefined.
- Missing `renderBooks()`: array changed, DOM stale.
- Missing `replaceChildren()`: duplicated list items after rerender.
- Missing `preventDefault()`: form navigates/reloads.
- Missing `trim()`: whitespace-only title accepted.
- Misspelled selector: querySelector returns null.
- Test keyboard Enter and pointer activation; check the Elements, Console and Sources panels.

## Pedagogical boundaries

Avoid map/filter/reduce, arrow functions, objects and JSON in the required live code. The Week 13 collection contains strings; Week 14 will evolve it into an array of structured objects. Avoid introducing framework or build tooling. Use textContent for user-provided strings rather than innerHTML.

## Exit question

Trace: HTML form input → submit event → handler → books.push() → renderBooks() → DOM list → browser display.

## Sources

- [MDN Indexed collections](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections)
- [MDN Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [JavaScript.info Arrays](https://javascript.info/array)
- [MDN submit event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event)

# Week 14 — JavaScript Objects, Structured Data, and JSON

Instructor-facing live-coding guide for DE0824 (Fall 2026).

Student lecture: [javascript_objects_json.html](javascript_objects_json.html). Working demonstration: [javascript_objects_json.js](javascript_objects_json.js).

## Position and outcomes

- Week 12: functions, DOM and events.
- Week 13: arrays of strings, loops, input/submit events and a mini catalogue.
- **Week 14:** objects, arrays of structured records, JSON, DOM rendering, search and a small record-level event.
- Later: JSON files, fetch, HTTP and asynchronous requests.

Students should be able to create and inspect object literals, read and update properties, distinguish an array from an object, iterate over arrays of objects, render structured records with safe DOM APIs, implement case-insensitive search using familiar loops, and explain stringify/parse.

## Live coding (90–120 minutes, modular)

1. **Recall (10 min):** Open Week 13 catalogue; ask what data is missing from a title string. Predict `books[0]` versus `books[0].title`.
2. **Object literal (15 min):** Create one book in the Console with title, author, year, language. Inspect dot and bracket access. Modify a property; demonstrate missing property `undefined`. Explain `const` and object mutation.
3. **Array of records (15 min):** Replace the array of strings with two objects. Iterate with `for...of`; print title and author. Explain array index versus object property.
4. **Render records (20 min):** Start with an empty container; create `article`, `h3`, `p`; use `textContent`, `append`, `replaceChildren`. Inspect Elements. Deliberately omit clearing and observe duplicates.
5. **Search (15 min):** Add labelled search input, input listener, `trim`, `toLowerCase`, `includes`, a loop with a condition, and result count. Test empty and unmatched terms.
6. **JSON (15 min):** Serialize an object with `JSON.stringify`, inspect string type, parse it back, and break a JSON example with an unquoted key or trailing comma. Explain that JSON is text, not an object.
7. **Record interaction (10–15 min):** Add a Details button to each card. Show the event object and `event.target`; toggle the details paragraph. Do not introduce delegation.
8. **Debug/exercise (10–20 min):** Students add a fourth record and search for it. Ask them to explain the entire input → processing → DOM flow.

## Required student exercise

Add a fourth bibliographic record with title, author, year and language. Confirm it renders, search by title and author, explain why data changes alone do not update the DOM, and demonstrate JSON stringify/parse plus one invalid JSON example.

## Optional challenges

- Filter by language.
- Add an empty-state message.
- Count matching records per language.
- Sort by year, provided students can explain the comparison and the original order implications.

## Debugging checkpoints

- `books.title` versus `books[0].title`.
- Misspelled property returns `undefined`.
- Calling `toLowerCase()` on missing property throws.
- Missing `replaceChildren()` duplicates cards.
- Forgetting `renderBooks()` leaves stale DOM.
- Malformed JSON throws `SyntaxError` in `JSON.parse()`.
- Search should work with uppercase/lowercase and zero matches.
- Test keyboard input, buttons and focus visibility; inspect Console and Elements.

## Pedagogical boundaries

Keep required examples to object literals, property access, arrays, loops, conditionals, functions, DOM APIs, input events and JSON. Avoid prototypes, classes, `this`, destructuring, map/filter/reduce, promises and fetch. Avoid presenting simplified historical dates as complete scholarly metadata. Use `textContent` rather than interpolating untrusted strings into `innerHTML`.

## Exit question

Trace: JavaScript array of objects → search input event → condition inside a loop → DOM card creation → visible browser update. Distinguish JavaScript values from JSON text.

## References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
- https://javascript.info/object
- https://javascript.info/json

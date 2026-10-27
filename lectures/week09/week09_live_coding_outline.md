# Week 9 Live Coding Outline — Introduction to JavaScript

This is an **instructor-facing working lesson plan** for RTU DE0824 Week 9. It accompanies the [Week 9 student lecture](javascript_intro.html) and is intended to guide instructor-led coding, not reproduce all 14 sections of the lecture page. The file is public, but the audience is the instructor. Allow time for students who have never programmed before to predict, execute, inspect, and correct small examples.

## Session goal and core message

**Weeks 1–8:** HTML described the content; CSS controlled presentation and layout. **Week 9:** JavaScript introduces *instructions, values, state, and computation*.

> **A JavaScript program executes statements. Expressions produce values. Variables let us refer to values. Types affect how operations behave. The Console lets us inspect both results and errors.**

The priority is a first sound mental model of programming, **not** a sophisticated or interactive webpage.

**Minimum successful outcome:** students can run a few lines in the browser Console, connect a `script.js` file to HTML, explain `const` versus `let`, distinguish numbers from strings, predict a simple calculation, and use an error message to fix a mistake.

### Required versus deferred content

**Prioritize:**

1. The role of JavaScript beside HTML and CSS.
2. Browser Console: evaluate an expression versus explicitly log a value.
3. A two-file HTML + JavaScript page using `<script src="script.js" defer></script>`.
4. Values, named bindings, assignment, `const` and `let`.
5. `number`, `string`, `boolean` and `typeof`.
6. Arithmetic, parentheses, operator precedence, string concatenation and `Number()`.
7. One or two intentional errors investigated with DevTools.
8. One small student variation using a digital collection.

**Keep as brief orientation only:** JavaScript history/ECMAScript, comments, `undefined` and `null`, template literals, and one **instructor demonstration** of a DOM text change.

**Defer:** comparisons and `if`/`else` (Week 10), loops (Week 11), functions and DOM/events (Week 12), arrays (Week 13), and objects/JSON (Week 14). Do not turn Week 9 into a tour of everything JavaScript can do.

---

## Pacing: approximately 90 minutes of instruction and practice

| Elapsed time | Checkpoint | Activity |
| --- | --- | --- |
| 0–8 min | 0. Why JavaScript? | Connect HTML/CSS knowledge to computation and behavior |
| 8–20 min | 1. Console | First values, expressions, and `console.log()` |
| 20–32 min | 2. Two files | Create `index.html` and `script.js`; demonstrate `defer` and reload |
| 32–45 min | 3. Variables | Named values, `let`, `const`, reassignment |
| 45–57 min | 4. Types | Numbers, strings, booleans, `typeof` |
| 57–70 min | 5. Operators | Arithmetic, precedence, `"10" + 5`, conversion |
| 70–78 min | 6. Debug | Read, locate, explain and repair intentional errors |
| 78–88 min | 7. Student variation | Small digital-archive calculation and inspection |
| 88–90 min | 8. Exit check | Recap and bridge to Week 10 |

This is **not 90 minutes of typing**. Keep explanations brief, pause for predictions, and make space for students to interpret visible results. Allocate 45–60 minutes across the coding checkpoints as students follow along.

**60-minute version:** context 5; Console 8; two-file project 10; variables 12; types/arithmetic 12; debugging 6; student variation 5; exit questions 2. Treat the full exercise as follow-up practice. If students are confused, **slow down** rather than advancing to DOM or conditions.

## Preparation and working environment

- Open [`javascript_intro.html`](javascript_intro.html) as the conceptual reference; do **not** live-edit that published lecture page.
- Prepare a **separate scratch folder** called `week09_live/` with an `index.html` and `script.js`. These are proposed in-class working files, **not** files already committed to this repository.
- Use VS Code and a modern browser; no framework, build tool, package manager, or server-side JavaScript is required.
- Keep DevTools **Console** and **Network** accessible. Use the browser Reload button after file edits.
- Prefer **typing short snippets** into the Console; browsers may restrict pasting untrusted code.
- For students already comfortable with programming, use prediction questions rather than accelerating the whole class.
- Use the same file and a few meaningful Digital Humanities values throughout; avoid changing contexts every two minutes.

---

## Checkpoint 0 — From describing a page to executing instructions (8 minutes)

Project the three-part diagram at the beginning of [the lecture](javascript_intro.html).

Ask:

- What does HTML give us? (**Content and semantic structure.**)
- What does CSS give us? (**Presentation, layout, state-dependent styling, motion.**)
- Can CSS change a card on `:hover`? (**Yes.**)
- What if a digital archive needs to calculate how many pages its records contain? (**We need computation; JavaScript is an appropriate choice.**)

Mention that JavaScript runs in browsers, while `document`/the DOM belongs to the browser environment rather than to the ECMAScript language itself. A sentence about the 1995 origin and ECMAScript standardization is enough.

**Boundary:** no frameworks, DOM event handlers, async operations, or comparisons yet.

## Checkpoint 1 — First expressions in the Console (12 minutes)

Open DevTools and enter **one line at a time**:

~~~js
2 + 3
10 * 4
"Riga"
"Digital" + " Humanities"
console.log("Hello, JavaScript!");
~~~

Stop after every line. Distinguish:

- **Value:** e.g. `5` or `"Riga"`.
- **Expression:** e.g. `2 + 3`, which evaluates to a value.
- **Statement:** e.g. a variable declaration (coming shortly).
- **`console.log()`:** explicitly writes information; the Console may separately display its return value, `undefined`.

**Predict before executing:**

~~~js
10 + 5 * 2
(10 + 5) * 2
~~~

Expected: `20` and `30`. Ask **why**, not merely *which output*.

Instructor note: avoid executing the same top-level `const` or `let` declaration repeatedly in the Console; redeclaration in the same Console scope may itself produce a `SyntaxError`. For the main program, switch to `script.js` and reload.

## Checkpoint 2 — Put JavaScript in a real webpage (12 minutes)

Create **two files**, in the same scratch folder.

`index.html`:

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>First JavaScript Program</title>
    <script src="script.js" defer></script>
</head>
<body>
    <main>
        <h1>Our Digital Collection</h1>
        <p>Open Developer Tools to see the program output.</p>
    </main>
</body>
</html>
~~~

`script.js`:

~~~js
// Week 9: our first external JavaScript program
console.log("JavaScript loaded successfully!");
~~~

Open the HTML page; observe the headline in the browser **and** the log in the Console. Change the message and reload.

Emphasize the execution chain:

> Browser loads HTML → sees the external script reference → downloads the script → executes it (with `defer`, after HTML has been parsed) → the log appears in Developer Tools.

**Deliberate bug A:** change `script.js` to `scripts.js` in the HTML, reload, inspect Console/Network, and fix the incorrect path. Connect this to relative URLs learned during the HTML weeks.

**Ask:** Why is the logged message not visible in the page itself? (**`console.log()` writes to developer diagnostics, not to document content.**)

## Checkpoint 3 — Values, variables, and reassignment (13 minutes)

Replace or extend `script.js` incrementally:

~~~js
const collectionName = "Historical Photographs";
let recordCount = 12;

console.log(collectionName);
console.log(recordCount);

recordCount = 15;
console.log(recordCount);
~~~

Have students predict the sequence `12` then `15`.

Explain:

- The names `collectionName` and `recordCount` let code refer to values.
- `const` prevents **reassignment of a binding**; `let` permits it.
- `=` assigns a value, rather than asking whether two values are equal.
- JavaScript is case-sensitive: `recordCount` and `recordcount` are distinct.
- Prefer descriptive, consistent camelCase identifiers.
- `var` exists historically, but we are not teaching it as the default.

**Experiment:** change `let recordCount` to `const recordCount` and reload. Ask students to read the error. Then restore `let`.

**Important conceptual check:** a `const` is not a dynamically recalculated formula. The assigned value remains the result of the expression *when that statement executes*.

## Checkpoint 4 — Three important data types (12 minutes)

Introduce different kinds of values in `script.js` (or briefly in the Console):

~~~js
const year = 1920;
const yearText = "1920";
const isDigitized = true;

console.log(typeof year);        // "number"
console.log(typeof yearText);    // "string"
console.log(typeof isDigitized); // "boolean"
~~~

**Prediction:** Why does the same visible sequence of digits have different types when quotation marks are present?

Say that JavaScript is dynamically typed: values have types, and a `let` binding may receive a value of a different type later. **Do not** imply that JavaScript never checks types or that type differences are unimportant.

Briefly recognize `undefined` and `null` from the reference page. Leave complex values (arrays/objects) for later weeks. Do not spend class time on `typeof null` unless a student specifically asks.

## Checkpoint 5 — Computation and the danger of string addition (13 minutes)

Build on the digital collection:

~~~js
const documentCount = 8;
const totalPages = 240;

const averagePages = totalPages / documentCount;

console.log("Average pages:", averagePages);
console.log("Remainder:", totalPages % 7);
~~~

Introduce arithmetic `+`, `-`, `*`, `/` and `%`; `**` is optional. Reuse the precedence example from Checkpoint 1.

Then show the most valuable type-related pitfall:

~~~js
console.log(10 + 5);           // 15
console.log("10" + 5);         // "105"
console.log(Number("10") + 5); // 15
~~~

Explain: `+` can concatenate strings. `Number()` attempts numeric conversion, but not every string represents a valid number. Students can use `typeof` to test their expectations.

**Snapshot-of-computation prediction:**

~~~js
let documents = 5;
const pages = documents * 10;
documents = 8;
console.log(pages); // What is printed?
~~~

Expected: **50**, because the earlier computed value is not automatically updated. Compare this cautiously with a spreadsheet: a JavaScript assignment is not a reactive cell formula.

If time remains, briefly show how to construct a message using string concatenation. Template literals are optional recognition, not another syntax item to drill today.

## Checkpoint 6 — Debugging is part of the lesson (8 minutes)

Use **one mistake at a time**, explain the observed error, then repair it. Work in `script.js` and reload so the problem is easy to reproduce.

| Mistake | Typical symptom | Diagnosis |
| --- | --- | --- |
| `console.log("Riga);` | `SyntaxError` | Unclosed string literal; inspect the indicated source location |
| `console.log(recordCountt);` | `ReferenceError` | Undeclared or misspelled identifier |
| `const count = 5; count = 6;` | `TypeError` | Attempt to reassign a constant binding |
| `"10" + 5` when the goal was 15 | Wrong result; no exception | Valid execution, wrong operand type for the intended calculation |
| `src="scripts.js"` instead of `script.js` | Missing script/log; resource load failure | Inspect path and Network response |

**Debugging routine:** observe → read the full message → locate the line → hypothesize → make one change → rerun.

Do not demonstrate every bug if time is short. The minimum is a failed script path plus either a ReferenceError or a type-related wrong result. Teach students to inspect the message rather than merely copying the correction.

## Checkpoint 7 — Student variation: collection statistics (10 minutes)

Give students the same small scratch project. The [Week 9 lecture exercise](javascript_intro.html#practice) includes a fuller version.

Start with:

~~~js
const collectionName = "Historical Newspapers";
let documentCount = 12;
const pagesPerDocument = 24;

const totalPages = documentCount * pagesPerDocument;

console.log(collectionName);
console.log("Documents:", documentCount);
console.log("Estimated pages:", totalPages);
~~~

**Required:**

1. Give the collection another descriptive name.
2. Change the numbers and predict the new total before reloading.
3. Add a second arithmetic result and print it.
4. Use `typeof` on `collectionName` and `documentCount`.
5. Increase `documentCount` **before** calculating `totalPages`, and confirm the updated result.
6. Introduce and repair one misspelled identifier using Developer Tools.

**Optional challenge:** use `"24"` for the pages-per-document value. Compare multiplication with addition and explain when `Number()` is useful.

**Success criterion:** students can explain each instruction, justify the selected operator, account for the type of each important value, and identify where to investigate incorrect output.

Do not add inputs, buttons, or functions to the required exercise. For first-time programmers, successfully predicting an expression and fixing one error is more valuable than an elaborate interface.

## Checkpoint 8 — Exit questions and a preview of the DOM (2 minutes)

Quick questions (answers in parentheses):

1. What does `console.log()` do? (**Writes to the developer Console.**)
2. How does `const` differ from `let`? (**Reassignment permitted versus prohibited.**)
3. What is the difference between `5` and `"5"`? (**Number versus string.**)
4. What is `10 + 5 * 2`? (**20.**)
5. Is `"10" + 5` an error? (**No: it results in `"105"`.**)
6. If an earlier `const` was calculated from a variable, does changing that variable update the `const`? (**No.**)

Point to the **small already-working DOM preview** in [the student lecture](javascript_intro.html): JavaScript changes a paragraph's visible text. Name it as **motivation only**; `document.querySelector()`, DOM selection, and events are Week 12 material and are not assessed now.

**Closing message:**

> We can now run instructions, store values, calculate expressions, and inspect results. In Week 10 we will learn to compare values and choose *which* instructions should execute.

---

## Instructor pitfalls and priorities

| Risk in a first programming lesson | Mitigation |
| --- | --- |
| Students copy code without understanding execution | Ask for predictions before every meaningful change |
| Too much new vocabulary at once | Define *value*, *expression*, *statement*, and *variable* in the context of one example |
| Confusing Console output with page content | Keep them visually separate; use the DOM only as a brief future preview |
| Confusing assignment with mathematical equality | Read `recordCount = 15` aloud as “assign 15 to recordCount” |
| Treating quoted digits as numbers | Compare `10` and `"10"` using `typeof` and addition |
| Expecting calculated variables to update automatically | Demonstrate the `pages` snapshot example |
| Existing `const` names conflict in interactive Console | Prefer external `script.js` for repeated declarations and reloads |
| One error prevents later output | Fix the earliest reported error before chasing downstream symptoms |
| Programming-experienced students dominate the pace | Give them optional predictions/conversion experiments; keep the required track basic |
| Lecture becomes a DOM/API introduction | Enforce the Week 10–14 boundaries above |

### If time runs short

Do **not** sacrifice `let`/`const`, number-versus-string reasoning, Console inspection, or a deliberate debugging checkpoint. Compress the history, skip template literals and `undefined`/`null` details, reduce operator variety, and move the optional exercise challenge to homework.

### Independent reading and reinforcement

- [MDN Learn: What is JavaScript?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript)
- [MDN Learn: Storing information with variables](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variables)
- [MDN Learn: Basic math in JavaScript](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Math)
- [JavaScript.info: JavaScript fundamentals](https://javascript.info/first-steps)
- [MDN: Browser developer tools](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)

The [2025 Day 9 lecture](https://github.com/ValRCS/web_development_DE0824_fall_2025/blob/main/day9.html) and [2025 JavaScript example](https://github.com/ValRCS/web_development_DE0824_fall_2025/blob/main/scripts/day9.js) remain useful historical references. They mixed early DOM manipulation with fundamentals. For 2026, keep DOM work as a motivational preview and spend the live-coding time on the language basics that make the later DOM material intelligible.

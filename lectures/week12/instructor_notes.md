# Week 12 — Instructor notes: JavaScript functions, DOM and events

**Course:** RTU DE0824 Web Development (Digital Humanities Master's)  
**Student lecture:** [javascript_functions_events.html](javascript_functions_events.html)  
**Previous:** [Week 11 loops](../week11/javascript_loops.html)  
**Next:** Week 13 arrays and input events

## Intent and boundaries

Students know variables, comparisons, branching, and loops, but may never have written a function or selected a DOM element. The central conceptual chain is **HTML → DOM → JavaScript selection → user event → function → visible change**. Start with console-only functions, then move to DOM changes, and finally to events. Do not introduce arrays, callbacks as a general abstraction, arrow functions, or complex form validation as prerequisites. Use named function declarations for handlers.

**Expected outcomes:** students can define/call functions, distinguish arguments from parameters, use `return`, explain local variables, select an element with `querySelector`, modify `textContent`, attach a click handler, and diagnose a broken interaction.

## Live coding — 60-minute path

### 0–10 min: Console functions
1. Ask students to predict the result of `classifyYear(1925)`.
2. Define `function classifyYear(year) { ... }` using Week 10 `if/else`.
3. Call with 1850, 1925, 2000; distinguish definition, call, parameter, argument, return.
4. Compare `return "Hello"` with `console.log("Hello")`. Show that a function with no explicit return produces `undefined` when used as an expression.
5. Introduce local scope with a short `const label` inside a function. Demonstrate the ReferenceError when attempting to read it outside.

**Prediction:** Does declaring a function print anything? Does `console.log` return the printed value?

### 10–20 min: HTML and DOM
Create a minimal `index.html` with `h2#message` and `button#change-button`. Inspect the elements using Developer Tools. In Console, run:

```js
const message = document.querySelector("#message");
message.textContent = "Archive is ready!";
```

Emphasize: DOM is the current in-memory representation, not the source file; `#message` is a familiar CSS ID selector. A nonmatching selector returns `null`.

### 20–35 min: Click event
Create `script.js`, linked in `head` using `defer`. Write:

```js
const message = document.querySelector("#message");
const button = document.querySelector("#change-button");

function changeMessage() {
    message.textContent = "Archive is ready!";
}

button.addEventListener("click", changeMessage);
```

Click and inspect the result. **Deliberately replace** `changeMessage` with `changeMessage()` in listener registration. Ask when the function executes and why the click no longer works; restore it.

### 35–45 min: Counter and reset
Add `p#count-output`, `button#count-button`, `button#reset-button`. Use:

```js
let clickCount = 0;
const output = document.querySelector("#count-output");

function renderCount() {
    output.textContent = "Clicks: " + clickCount;
}
function countClick() {
    clickCount++;
    renderCount();
}
function resetCount() {
    clickCount = 0;
    renderCount();
}

document.querySelector("#count-button").addEventListener("click", countClick);
document.querySelector("#reset-button").addEventListener("click", resetCount);
```

Connect to Week 11 counter variables. Discuss why the variable is outside the handler. The helper `renderCount` illustrates a useful separation without introducing an architecture.

### 45–55 min: Debugging
Break one thing at a time:
- Misspell `#count-output` and inspect the resulting `null` / TypeError.
- Remove `defer` while keeping the script in the head; explain the DOM-not-yet-parsed problem.
- Move `let clickCount = 0` inside the click handler; explain why it never accumulates.
- Use `changeMessage()` instead of `changeMessage` in listener registration.

For each: **predict → reproduce → read Console → inspect Elements → fix → retest**.

### 55–60 min: Student variation
Required: increment by 2, then show a special message after five clicks. Optional: use `classList.toggle("selected")` to highlight an archive record. Ask students to explain the code they wrote.

## Notes on student lecture demos

- **Change heading:** two buttons, change and restore; uses `textContent` and named handlers.
- **Counter:** increment/reset; visible state between clicks.
- **Archive record:** fixed year 1925 classified by a function; separate CSS class toggle. Avoid user input until Week 13.
- The page's own script is placed at the bottom of the body; live coding uses a deferred external script to show the alternative.
- The lecture includes an optional conditional-expression example in the scope section. Rewrite it as `if/else` if students are not ready for `?:`.

## Misconceptions to watch

| Misconception | Corrective demonstration |
|---|---|
| Defining a function executes it | Define first; call later |
| `console.log` is the same as `return` | Store the result and inspect `undefined` |
| A handler should be registered with parentheses | Compare `handler` and `handler()` |
| HTML source changes when JS updates text | Inspect DOM, reload the page, inspect source |
| A missing selector returns an empty element | Show `null` in Console |
| Counter state belongs inside the handler | Move initialization and observe reset |
| JavaScript must write CSS directly | Toggle a class; let CSS determine styling |

## Exercises and expected results

1. `classifyYear(1899)` → "Before 1900"; `classifyYear(2000)` → "21st century or later". Function with no return → `undefined` to its caller.
2. A named function changes heading `textContent` after a click; no inline `onclick` needed.
3. Increment and reset use two listeners and one shared counter.
4. Debug fixes: correct selector; remove parentheses in listener argument; use `defer` or move script after HTML.
5. Optional: second fixed-year button and class-based highlighting; avoid arrays and form handling.

## Follow-up and pacing

If the class is slower, complete only functions, first DOM change, and one click handler. The counter becomes a guided exercise. If faster, discuss `classList.toggle` and the archive viewer. Preserve the Week 13 progression to arrays and input events.

## References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
- https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
- https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
- https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
- https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events
- https://javascript.info/function-basics
- https://javascript.info/introduction-browser-events

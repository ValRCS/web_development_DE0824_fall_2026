# Week 10 Live Coding Outline — JavaScript Branching and Logic

This is an **instructor-facing working lesson plan** for RTU DE0824 Week 10. It accompanies the [Week 10 student lecture](javascript_branching.html) and follows the structure of the [Week 9 instructor outline](../week09/week09_live_coding_outline.md). The Markdown is public but is written as a practical guide for instructor-led coding, not a second student textbook.

## Session goal and core message

**Week 9:** expressions produced values; variables held values; the browser Console exposed results. **Week 10:** comparisons produce Boolean values and conditional statements choose which instructions execute.

> **A condition is an expression. An `if` statement uses its result to control execution. Compound conditions express precise rules, and boundary tests reveal whether those rules are correct.**

**Minimum successful outcome:** students can predict which branch runs, write a short `if / else if / else` chain, combine two comparisons with `&&` or `||`, and diagnose a boundary or assignment-versus-comparison mistake using the Console.

### Prioritize versus defer

**Required:** comparisons and strict equality; Boolean results; `if`; `else`; ordered `else if` branches; `&&`, `||`, `!`; a brief introduction to truthy/falsy; one deliberate debugging demonstration; a small archive-record classification exercise.

**Brief recognition only:** loose equality `==` (prefer `===`), short-circuiting, implicit Boolean conversion. The student lecture contains a small interactive DOM demonstration, but **do not make DOM event handling a required coding objective**.

**Defer:** `switch`, ternary operators as a writing requirement, loops (Week 11), functions and DOM/events (Week 12), arrays (Week 13), objects/JSON (Week 14). Avoid complex nested branches and clever coercion puzzles.

---

## Pacing — approximately 90 minutes

| Elapsed | Checkpoint | Activity |
| --- | --- | --- |
| 0–8 min | 0. Reconnect | Week 9 values, types, expressions and Console |
| 8–20 min | 1. Compare | Relational operators and strict equality |
| 20–30 min | 2. Boolean and `if` | First conditional statement; true versus false |
| 30–43 min | 3. Two branches | `if...else` and boundary tests |
| 43–57 min | 4. Multiple branches | `else if` ordering and classification |
| 57–70 min | 5. Compound logic | `&&`, `||`, `!` and short-circuit concept |
| 70–76 min | 6. Truthiness | Empty strings, `0`, and quoted `"false"` |
| 76–86 min | 7. Student practice/debug | Modify one archive classification program |
| 86–90 min | 8. Exit check | Predict and explain; bridge to loops |

**60-minute version:** recap 5; comparisons 8; `if/else` 12; `else if` 10; logical operators 10; debugging and student variation 12; exit 3. Mention truthiness in passing. Compress examples, not the prediction → execute → explain cycle.

## Setup and preparation

- Keep [`javascript_branching.html`](javascript_branching.html) open as the published reference; **do not edit the lecture page live**.
- Use the same simple two-file pattern from Week 9: a scratch folder `week10_live/` with `index.html` and `script.js`. These are **suggested live files**, not existing committed files.
- Use VS Code, a modern browser, DevTools **Console**, and Reload. No dependencies, build steps, frameworks or server required.
- Keep one recurring Digital Humanities context: a historical publication with a year, language and page count.
- Ask students to predict output *before* every execution. Give experienced students extra boundary cases, not a faster class pace.
- Prefer running declarations in `script.js` and reloading to avoid redeclaration errors from repeated top-level `let`/`const` in the Console.

## Checkpoint 0 — Reconnect to Week 9 (8 minutes)

Ask: What does `let year = 1925;` do? What is the type of `year`? What does `console.log(year + 5)` print? Explain that today's goal is to **decide whether** to print a message, rather than always printing it.

Start with:

~~~js
let year = 1925;
console.log(year);
console.log(typeof year);
~~~

**Prediction:** How could we recognize a publication from before 1940? Invite verbal rules before syntax.

## Checkpoint 1 — Comparisons return Boolean values (12 minutes)

Append one comparison at a time:

~~~js
console.log(year < 1940);    // true
console.log(year >= 1940);   // false
console.log(year === 1925);  // true
console.log(year !== 1925);  // false
console.log(year === "1925"); // false
~~~

- `<`, `>`, `<=`, `>=` compare ordered values; `===` and `!==` compare strictly.
- `true` and `false` are Boolean values, not strings.
- `=` is assignment, not equality. Mention `==` only to explain why we use `===` by default.
- Use `typeof (year < 1940)` to connect comparisons to Week 9 types.

**Predict:** `1940 < 1940` versus `1940 <= 1940`. Then test. Boundary inclusivity is the main conceptual issue.

## Checkpoint 2 — First `if` (10 minutes)

~~~js
if (year < 1940) {
    console.log("Historical publication");
}
console.log("Classification complete");
~~~

Run with 1925 and 1950. Trace the program top to bottom; emphasize that the final log runs in both cases.

**Questions:** Which lines belong to the conditional block? Does a false condition stop the entire program? (**No.**) Why do braces and indentation help code reading?

**Deliberate bug A:** use `if (year = 1940)` in a disposable example. Explain that this *assigns* 1940 and the nonzero number is truthy, so the branch runs; it also changes `year`. Fix with an intended comparison such as `year === 1940`. Note that `const year` would instead reject reassignment; do not rely on that to explain equality.

## Checkpoint 3 — `if...else`: exactly one branch (13 minutes)

~~~js
let pages = 80;

if (pages >= 100) {
    console.log("Long document");
} else {
    console.log("Shorter document");
}
~~~

Test 99, 100, 101. Ask for predictions first.

- `else` has no separate condition.
- One of the two alternatives executes, then execution continues.
- The condition must reflect the wording of the rule: “at least 100” means `>= 100`, not `> 100`.

**Debugging variation:** deliberately change `>=` to `>`; ask students to identify the first failing boundary case, rather than guessing at the operator.

## Checkpoint 4 — Ordered `else if` chain (14 minutes)

~~~js
let publicationYear = 1925;

if (publicationYear < 1900) {
    console.log("Before 1900");
} else if (publicationYear < 2000) {
    console.log("1900–1999");
} else {
    console.log("2000 or later");
}
~~~

This simplified example assumes a **valid positive integer CE year**; it is not a general historical calendar implementation.

Test 1899, 1900, 1999 and 2000. Explain the ordering: the second condition is evaluated only if the first failed.

**Deliberate bug B:** put `publicationYear < 2000` first and `publicationYear < 1900` second. Ask why 1850 receives the wrong classification. Use a trace, not just a corrected snippet.

**Prediction:** How many branches can execute in this chain? (**At most one; with `else`, exactly one.**)

## Checkpoint 5 — AND, OR and NOT (13 minutes)

~~~js
let year = 1925;
let language = "lv";

if (year >= 1900 && year < 1940) {
    console.log("Within date range");
}

if (language === "lv" || language === "en") {
    console.log("Supported language");
}

if (!(language === "lv")) {
    console.log("Not Latvian");
}
~~~

Explain `&&` as both criteria, `||` as at least one, and `!` as negation. Draw a small two-input truth table or use the table on the lecture page.

Then combine the real filter:

~~~js
if (year >= 1900 && year < 1940 && language === "lv") {
    console.log("Selected for the collection");
}
~~~

Test 1900/“lv”, 1939/“lv”, 1940/“lv”, 1925/“en”. Emphasize **half-open intervals**: `year >= 1900 && year < 1940` includes 1900–1939.

**Short-circuit note:** the right-hand expression may not be evaluated when the left side already determines the result. Avoid using side effects to demonstrate this at beginner level.

## Checkpoint 6 — Truthy/falsy (6 minutes)

~~~js
let title = "";

if (title) {
    console.log("Title provided");
} else {
    console.log("Missing title");
}
~~~

Try `""`, `"Riga"`, and `" "`. Explain that the space-only string is truthy. Show `title.trim()` if relevant.

Mention `false`, `0`, `""`, `null`, `undefined` and `NaN` as falsy; a nonempty `"false"` is truthy. Do **not** turn this into an exhaustive coercion lecture.

## Checkpoint 7 — Student variation and debugging (10 minutes)

Use the **same `script.js`**. Do not start a new project.

**Required:**

1. Define `publicationYear` and `language`.
2. Print `"Selected"` only when the year is 1900–1939 inclusive and the language is `"lv"`; otherwise print `"Not selected"`.
3. Test 1899, 1900, 1939, 1940 with Latvian, and 1925 with English.
4. Change one comparison operator intentionally; identify the incorrect result and fix it.
5. Explain each condition aloud, including why the upper bound uses `< 1940`.

**Optional:** add `pages >= 10` as a third criterion. Ask why one false criterion excludes the record.

**Success criterion:** the student can predict all five tests and justify the boundary values, rather than merely observing output.

The [interactive publication classifier](javascript_branching.html#demo) is an **instructor demonstration** showing that the same conditions can control visible page text. Its `querySelector`, `addEventListener`, and `textContent` are browser DOM APIs and should be identified as a preview of later material, not assessed in Week 10.

## Checkpoint 8 — Exit questions and bridge (4 minutes)

1. What does `1925 === "1925"` produce? (**false**: different types.)
2. What is the difference between `=` and `===`? (**Assignment versus strict comparison.**)
3. For `year = 1940`, does `year < 1940` hold? (**No.**)
4. Can both branches of an `if...else` execute? (**No.**)
5. What does `A && B` require? (**Both truthy.**)
6. Why does branch order matter in an `else if` chain? (**Only the first matching branch executes.**)

**Closing message:**

> JavaScript can now decide **whether** and **which** statements execute. Next, loops will let us repeat instructions, including decisions, over multiple values.

---

## Instructor pitfalls and teaching priorities

| Risk | Mitigation |
| --- | --- |
| Students treat `=` as mathematical equality | Read it aloud as “assign”; compare explicitly with `===` |
| Confusion between Boolean `true` and string `"true"` | Use `typeof` and predict output |
| Incorrect inclusion of range endpoints | Always test below, at and above each boundary |
| Mistaken assumption that all `else if` branches are evaluated | Trace top to bottom and stop at first match |
| Mixing `&&` and `||` without grouping | Start with separate comparisons; add parentheses for clarity |
| Too much implicit conversion | Teach only the practical falsy examples; defer tricky coercion |
| DOM code obscures branching | Keep the required live program Console-based |
| Copying without reasoning | Predict → run → inspect → explain → change one value |
| Debugging by random edits | Reproduce, inspect values and error messages, isolate the condition, rerun |

## Instructor readiness checklist

- [ ] Week 9 scratch two-file example works in the browser.
- [ ] Student lecture and its interactive classifier open correctly.
- [ ] Console and source file are visible during demonstration.
- [ ] Boundary tests 1899/1900/1939/1940 and 1999/2000 are prepared.
- [ ] One assignment-versus-equality bug and one branch-order bug are ready.
- [ ] Required student variation fits the available time.
- [ ] Optional challenge is available without introducing loops or functions.

## References

- [Week 10 student lecture](javascript_branching.html)
- [Week 9 lecture](../week09/javascript_intro.html)
- [Week 9 instructor outline](../week09/week09_live_coding_outline.md)
- [MDN: Control flow and error handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [MDN: Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators)
- [JavaScript.info: Conditional branching](https://javascript.info/ifelse)
- [JavaScript.info: Logical operators](https://javascript.info/logical-operators)

# Week 11 — Instructor notes: JavaScript loops and control flow

**Course:** RTU DE0824 Web Development (Digital Humanities Master's), Fall 2026  
**Student lecture:** [javascript_loops.html](javascript_loops.html)  
**Previous:** [Week 10 — branching and logic](../week10/javascript_branching.html)  
**Next:** [Week 12 — functions, DOM, and events](../week12/javascript_functions_events.html)

## Teaching intent and scope

Week 9 introduced values, variables, and expressions; Week 10 added comparisons, Boolean operators, and `if`. Week 11 adds **repetition** without assuming previous programming experience. The key invariant for students to understand is: **initialize → test condition → execute body → update → test again → terminate**.

Required: read and write a basic `switch`, `while`, and `for`; predict iteration counts; distinguish `break` and `continue`; identify a loop that cannot terminate; use the Console and Sources panel to debug. `do...while` is a short comparison, not a central coding task.

Defer arrays, functions, DOM, and events as concepts until Weeks 12–13. The lecture's built-in stepper and demonstration buttons contain JavaScript from later weeks; use them as **visual aids**, not code to reproduce yet.

## Preparation (before class)

1. Open [the Week 11 lecture](javascript_loops.html) and Developer Tools (Console and Sources). Have a plain `index.html` and an optional `script.js` ready for live coding.
2. Check that **Next iteration**, **Reset**, and **Show matching years** on the lecture page respond without Console errors.
3. Prepare two distinct examples: archive document type for `switch` and a newspaper-year timeline for loops. Avoid using arrays, advanced syntax, or framework tooling in required live code.
4. Be ready to explain `year++` as `year = year + 1` and `year % 4 === 0` as a divisibility test.
5. Remind students that running a genuinely infinite loop can freeze the tab. Demonstrate the *reason* for nontermination using code inspection or a bounded variant rather than an unbounded run.

## Core 60-minute live-coding path

### Checkpoint 0 — Recall last week's decisions (0–6 min)

Ask students what this prints, *before* running it:

```js
const year = 1925;
if (year < 1900) {
    console.log("19th century or earlier");
} else {
    console.log("20th century or later");
}
```

Expected: `20th century or later`. Then ask: how would we print every year from 1920 to 1925 without repeating six `console.log` statements?

### Checkpoint 1 — `switch` is another kind of choice (6–15 min)

Start from the lecture's document-type example. Type one case, then a second, then `default`. Ask for a prediction with `"letter"`, `"book"`, and `"map"`. Remove one `break` deliberately to show fall-through; restore it. Contrast with an `if...else if` chain.

Teaching points: `switch` compares one value against cases using strict equality; `break` ends the current `switch`; `default` handles unmatched values. Do not present `switch` as a replacement for inequalities such as `year < 1900`.

### Checkpoint 2 — `while`: make progress toward stopping (15–27 min)

Build the smallest loop in the Console or script file:

```js
let year = 1918;
while (year <= 1923) {
    console.log(year);
    year++;
}
```

Before executing, ask: What is the first year? The last? How many outputs? Expected: **1918 through 1923 inclusive, six iterations**.

Point out initialization, condition, body, and update separately. Try `year = 1925` as a new starting value and predict zero iterations. If reusing the Console, avoid re-declaring a previous top-level `let` / `const`; use another name, a block scope, or reload.

Deliberate debugging exercise: comment out `year++` on screen, ask whether the condition can ever become false, **but do not execute the unbounded loop**. Restore the increment.

### Checkpoint 3 — `for`: same logic, compact notation (27–39 min)

Write the equivalent:

```js
for (let year = 1918; year <= 1923; year++) {
    console.log(year);
}
```

Predict the output and map each of the three header expressions back to the `while` example. Open the student lecture's **Next iteration** stepper; step through six successful conditions and one failed test (1924). Explain that the stepper's underlying DOM/array code is not part of today's required material.

Change `<=` to `<` and predict five results (1918–1922). Discuss the difference between an off-by-one bug and a nonterminating loop. If time permits, compare the `do...while` example: it executes once even if its condition is initially false.

### Checkpoint 4 — `break`, `continue`, and conditional loops (39–47 min)

Use a `for` loop spanning 1918–1925. Skip 1920 using `continue`; stop before 1923 using `break`. Students predict **1918, 1919, 1921, 1922**. Explain that `break` exits the loop, whereas `continue` skips the rest of an iteration; `for` still performs its update after `continue`.

Ask why placing `continue` before a counter increment in a `while` loop can cause nontermination. Keep this a reasoning question, not a tab-freezing demonstration.

### Checkpoint 5 — One small cultural-data computation (47–55 min)

Count years divisible by four in 1900–1950 inclusive, combining Week 10 `if` with a `for` loop:

```js
let matchingYears = 0;
for (let year = 1900; year <= 1950; year++) {
    if (year % 4 === 0) {
        matchingYears++;
    }
}
console.log(matchingYears); // 13
```

Emphasize that this is **not** a complete leap-year calculation. Click the student page's **Show matching years** button to compare the visible results.

### Checkpoint 6 — Student variation and exit questions (55–60 min)

Students independently modify the timeline to print every fifth year from 1900 through 1950 inclusive, then predict the count. Expected: **1900, 1905, ..., 1950** (**11** years). Ask them to identify initialization, condition, update, and termination without looking at the code.

Exit question: why is `for (let i = 0; i <= 5; i++)` wrong if the intention is to print five values, 0–4? Answer: the inclusive upper bound prints six values; use `i < 5`.

## Extended practice (optional 20–30 minutes)

1. **Required reinforcement:** Predict `for (let i = 1; i < 5; i += 2) { console.log(i); }`. Answer: `1`, `3`.
2. **Required implementation:** Print 1900–1950 in increments of five using both `for` and `while`, explain which part changes between versions.
3. **Required debugging:** Given a loop missing its increment or with `<=` instead of `<`, explain the failure and fix it without trial-and-error.
4. **Optional challenge:** Print years beginning at 1900, skip years divisible by five, and stop before 1940. Correct result has no multiples of five and never reaches 1940.
5. **Optional comparison:** Convert a short `while` to `do...while` and predict what changes when the condition starts false.

## Debugging procedure for live demonstration

1. **Predict** number of iterations and final counter value.
2. **Inspect** `console.log` values, or set a breakpoint in Sources and step one iteration at a time.
3. **Locate** the first unexpected value (especially first and last iterations).
4. **Change one expression** (initialization, condition, or update).
5. **Rerun and explain** why termination now occurs.

Typical misconceptions: `switch` fall-through without `break`; reading `<=` as `<`; believing the `for` initializer runs each iteration; missing increments; misunderstanding that `continue` in a `for` still reaches its update; assuming `do...while` first tests its condition.

## Pacing and pedagogical boundaries

The core 60 minutes prioritize **`while` and `for`**, followed by prediction and debugging. If class time is short, treat `do...while` and the optional challenge as reading only; do not skip the termination discussion. For extra time, allow students to work on the practice variations rather than adding advanced language features.

Stay with Console output and simple JavaScript statements during live coding. Week 12 will make the connection **HTML → DOM → event → visible update** explicit. Week 13 will apply loops to arrays.

## Readiness and verification checklist

- [ ] [Lecture HTML](javascript_loops.html) loads with readable code examples and working section links.
- [ ] Stepper begins at **Not started**, displays 1918–1923, then the failed test at 1924; Reset returns it to the initial state.
- [ ] Show-matching-years result reports **13**.
- [ ] Console has no unexpected errors; code examples execute and outputs match predictions.
- [ ] Student exercise and anticipated answers are prepared.
- [ ] All intentional errors are safe to demonstrate without executing a nonterminating loop.

## References

- [MDN: Looping code](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Loops)
- [MDN: `switch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
- [MDN: `while`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
- [MDN: `for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- [JavaScript.info: Loops](https://javascript.info/while-for)
- [Week 10 instructor outline](../week10/week10_live_coding_outline.md)

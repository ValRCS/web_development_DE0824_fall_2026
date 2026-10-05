# Week 5 Live Coding Outline — CSS Layout Foundations

This is an instructor-facing working outline for the Week 5 live coding session. It supplements `css_layout.html`; it is not intended to duplicate the student reference page.

## Session goal

Move from Week 4's **styling of content** to reasoning about **the space occupied by elements**.

By the end of the live coding session, students should have seen and modified:

- normal document flow;
- block and inline behavior;
- the CSS box model: **content → padding → border → margin**;
- width and height;
- `box-sizing`;
- overflow;
- basic `position` values, without turning the session into a positioning/layout-system lecture;
- the browser DevTools box-model/computed-style view.

**Deliberate boundary:** no Flexbox and no Grid. Flexbox is Week 6 and Grid is Week 7.

## Core message for students

The single most important idea for Week 5 is:

> **A web page is already a layout of boxes. HTML elements generate boxes, normal flow arranges them, and CSS changes the size and spacing of those boxes.**

The box-model vocabulary gives us a way to reason about that geometry:

> **content → padding → border → margin**

Students do not need to memorize every property or shorthand shown today. They should leave able to reason about questions such as:

- What box is taking up this space?
- Is the unwanted space **inside** the border (`padding`) or **outside** it (`margin`)?
- What does the declared `width` actually measure?
- Why is content overflowing?
- What does normal flow do before we introduce a more advanced layout system?
- What does the browser say in DevTools about the element's actual computed size and spacing?

If students can inspect an element in DevTools, identify its **content, padding, border, and margin**, and explain why it occupies its current amount of space, the central Week 5 objective has been achieved.

## Readiness and priorities for the live session

The Week 5 student reference page and this live-coding outline are sufficient for the session. No additional prepared demonstration page is necessary; creating the page incrementally in class is pedagogically preferable.

### Must cover

These are the non-negotiable parts of the live session:

1. normal document flow;
2. block versus inline behavior at a practical level;
3. content → padding → border → margin;
4. the difference between padding and margin;
5. `width` and the default `content-box` model;
6. `box-sizing: border-box`;
7. inspecting and changing these values in DevTools.

### Cover if the core material is secure

- `max-width` and avoiding unnecessarily rigid fixed widths;
- a short overflow demonstration;
- a brief introduction to `position: relative` / `absolute`.

Do **not** rush the box model in order to reach positioning. Overflow and positioning are useful Week 5 topics, but they are secondary to students acquiring the correct mental model of boxes, spacing, sizing, and normal flow.

---

## Suggested live-coding page

Create a new, deliberately small HTML page during class rather than starting from a finished example.

A simple Digital Humanities context works well, for example a small collection of archive/library records:

```html
<main>
    <h1>Digital Collection</h1>

    <article class="record">
        <h2>The Castle</h2>
        <p>Franz Kafka · 1926</p>
        <p>A bibliographic record from a digital literature collection.</p>
    </article>
</main>
```

Keep the HTML small enough that students can concentrate on the geometry of the boxes rather than on document complexity.

---

## Checkpoint 1 — Start with normal flow

1. Create the smallest valid HTML document.
2. Add a heading, several paragraphs, and two or three `<article>` records.
3. Open it in the browser **before adding CSS**.
4. Ask students to predict where the next element will appear.
5. Use DevTools/Inspector to show that layout already exists even though we have not written layout CSS.

Points to emphasize:

- block elements normally follow one another vertically;
- inline content participates in lines of text;
- CSS layout does not begin with Flexbox or Grid;
- normal flow is the baseline from which later layout techniques work.

Small experiment:

- put a link or `<span>` inside a paragraph;
- compare its behavior with an `<article>` or `<p>`;
- optionally change `display: block`, `inline`, and `inline-block` and observe the result.

---

## Checkpoint 2 — Make the box visible

Give `.record` only a background color first:

```css
.record {
    background-color: lightyellow;
}
```

Prediction questions:

- Why does the background extend beyond the text?
- Where does the element begin and end?
- Why are the records underneath one another?

Inspect the element in DevTools.

This is the point to introduce the central Week 5 model:

> **content → padding → border → margin**

---

## Checkpoint 3 — Padding

Add padding gradually rather than all at once:

```css
.record {
    background-color: lightyellow;
    padding: 20px;
}
```

Then demonstrate individual sides:

```css
padding-top: 10px;
padding-right: 20px;
padding-bottom: 10px;
padding-left: 20px;
```

Then shorthand:

```css
padding: 10px 20px;
```

Useful student question:

- Is padding inside or outside the background?

Show the result both visually and in the DevTools box-model diagram.

---

## Checkpoint 4 — Border

Add a border so the physical boundary becomes obvious:

```css
.record {
    padding: 20px;
    border: 2px solid darkslategray;
}
```

Briefly decompose the shorthand into:

- `border-width`;
- `border-style`;
- `border-color`.

Optionally add a small `border-radius`, but keep the focus on geometry rather than decoration.

---

## Checkpoint 5 — Margin

Add several records and then add margin:

```css
.record {
    margin-bottom: 20px;
}
```

Contrast explicitly:

- **padding** = space inside the border;
- **margin** = space outside the border.

Good deliberate mistake:

- remove padding and increase margin;
- ask why the text is still touching the border;
- restore padding.

This gives students a concrete debugging distinction between the two concepts.

Mention vertical margin collapsing only if it naturally appears during the demonstration. Students should know that adjacent vertical margins can behave unexpectedly; detailed margin-collapsing rules are not a Week 5 learning objective.

---

## Checkpoint 6 — Width and the default box model

Give the record an explicit width:

```css
.record {
    width: 400px;
    padding: 20px;
    border: 5px solid darkslategray;
}
```

Before inspecting it, ask:

- Is the visible box actually 400 px wide?

Explain the default `content-box` model:

- declared `width` applies to the content box;
- padding and border are added to it.

Use DevTools to inspect the actual rendered dimensions.

Avoid turning this into arithmetic drills; the important concept is what the declared width refers to.

---

## Checkpoint 7 — `box-sizing: border-box`

Now add:

```css
.record {
    box-sizing: border-box;
    width: 400px;
}
```

Compare before/after in DevTools.

Then show the common page-level rule:

```css
* {
    box-sizing: border-box;
}
```

Main point:

- with `border-box`, the declared width includes content, padding, and border;
- this usually makes sizing easier to reason about.

At this point, the **minimum successful Week 5 lesson has been delivered**. If necessary, move directly to the DevTools debugging pass and closing recap rather than rushing the remaining topics.

---

## Checkpoint 8 — Fixed width versus responsive width

Use the explicit `400px` width to create a problem by narrowing the browser window.

Then improve it incrementally, for example:

```css
.record {
    width: 90%;
    max-width: 700px;
}
```

Optionally center the constrained block:

```css
.record {
    margin-left: auto;
    margin-right: auto;
}
```

Points to emphasize:

- fixed dimensions are sometimes useful but should not be the automatic default;
- `max-width` allows an element to grow only to a sensible limit;
- resize the browser to test assumptions.

This provides a natural bridge toward Week 6 responsive design without introducing Flexbox yet.

---

## Checkpoint 9 — Height and overflow

Create a deliberately constrained box:

```css
.record {
    height: 100px;
}
```

Add enough text that the content no longer fits.

Ask students to predict what the browser will do.

Then demonstrate:

```css
overflow: hidden;
```

and:

```css
overflow: auto;
```

Key point:

- content does not magically become smaller because a box has a fixed height;
- fixed heights are often fragile for text content.

Remove the artificial fixed height after the demonstration.

---

## Checkpoint 10 — Basic positioning

Keep this section short. The objective is recognition, not mastery.

Start from normal flow and explain:

```css
position: static;
```

Then demonstrate a small relative offset:

```css
.record {
    position: relative;
    left: 20px;
}
```

Observe that the element's original place in normal flow is still reserved.

If time permits, demonstrate one small absolutely positioned child inside a relatively positioned parent, such as a label/badge:

```css
.record {
    position: relative;
}

.record-label {
    position: absolute;
    top: 8px;
    right: 8px;
}
```

Explain the relationship between the positioned child and its containing block.

`position: fixed` and `position: sticky` can be shown briefly as recognizable browser behaviors, but they do not need substantial coding time.

Avoid using absolute positioning as a general page-layout technique.

---

## Checkpoint 11 — DevTools debugging pass

Before finishing, deliberately create one or two layout problems and diagnose them with students.

Good examples:

- unexpectedly large padding;
- margin used when padding was intended;
- a `width` that is larger than expected because of padding/border;
- overflowing text caused by a fixed height;
- a CSS declaration overridden by a later declaration.

For each problem, follow the same workflow:

1. inspect the element;
2. check which CSS rule applies;
3. inspect computed styles;
4. inspect the box-model diagram;
5. change a value live;
6. verify the visible result;
7. fix the source code.

This reinforces that DevTools is part of normal web-development work, not merely an emergency tool.

---

## Small student variation during class

After the main demonstration, give students a few minutes to modify their version.

Required:

- add a second or third `.record`;
- give records visible padding, border, and margin;
- constrain their width sensibly;
- use `box-sizing: border-box`;
- inspect one record in DevTools and identify content, padding, border, and margin.

Optional challenge:

- add a small positioned label to one record;
- deliberately create overflow, inspect it, and then repair it.

---

## End-of-session check

A useful final test is to select one visible element and ask a student to explain it using the browser's box-model diagram.

They should be able to answer, in ordinary language:

1. What is the element's content box?
2. How much padding is inside it?
3. Where is its border?
4. What margin separates it from other boxes?
5. What determines its width?
6. Where would the next normal-flow block element appear?

A student who can reason through those questions has acquired the Week 5 foundation needed for Flexbox and Grid later.

## Suggested closing recap

Ask students to explain, rather than merely recognize, these distinctions:

- normal flow versus explicit positioning;
- block versus inline behavior;
- padding versus margin;
- content box versus border box;
- `width` versus `max-width`;
- natural content height versus forced height;
- normal content versus overflowing content.

Final mental model:

> **HTML provides the structure. The browser turns that structure into boxes. Normal flow arranges the boxes. CSS changes their geometry. DevTools shows us what the browser actually calculated.**

If students remember only one sequence from today, it should be:

> **content → padding → border → margin**

## Bridge to Week 6

End by showing the limitation rather than solving it:

- several boxes are easy to stack vertically;
- arranging them cleanly in a row, distributing space, wrapping them, and adapting the arrangement to available width becomes awkward with only the techniques covered today;
- **Week 6 introduces Flexbox** specifically to solve that class of one-dimensional layout problems.

Do not implement the Flexbox solution yet.
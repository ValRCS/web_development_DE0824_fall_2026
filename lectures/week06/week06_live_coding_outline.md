# Week 6 Live Coding Outline — Flexbox and Responsive Design

This is an instructor-facing working outline for the Week 6 live coding session. It supplements `flexbox_responsive.html`; it is not intended to duplicate the student reference page.

## Session goal

Move from Week 5's understanding of **individual CSS boxes and normal flow** to arranging **groups of boxes as a flexible layout**.

By the end of the live coding session, students should have seen, predicted, modified, and debugged:

- the difference between normal flow and a flex formatting context;
- a **flex container** and its **direct-child flex items**;
- `display: flex`;
- `flex-direction`;
- the **main axis** and **cross axis**;
- `justify-content` and `align-items`;
- `gap`;
- `flex-wrap`;
- a practical use of the `flex` shorthand;
- one small example of nested Flexbox;
- responsive layout as adaptation to **available space**, not to named device categories;
- one simple mobile-first `@media (min-width: ...)` query;
- browser DevTools for inspecting Flexbox and testing viewport changes.

**Deliberate boundary:** do not turn this into a complete Flexbox-property survey. Do not introduce CSS Grid yet. Grid is Week 7 and should remain a visible next step.

---

## Relationship to Week 5

Begin by explicitly reusing Week 5 concepts rather than presenting Flexbox as an unrelated CSS feature.

Useful opening statement:

> Last week we learned what one CSS box is and how normal flow places boxes. Today we ask the browser to arrange several boxes together.

Reinforce:

- every flex item is still a CSS box;
- padding, border, margin, width, `max-width`, and `box-sizing` still apply;
- Flexbox changes how a **container lays out its direct children**;
- normal flow remains the baseline and should be shown before Flexbox is enabled.

A useful first prediction question:

- If three `<article>` elements are placed inside a `<section>`, where will they appear before any Flexbox CSS is added?

---

## Suggested live-coding page

Create a deliberately small page during class. A simple Digital Humanities collection/gallery works well because it naturally provides several sibling items that can become cards.

Start with HTML approximately like this:

```html
<main>
    <h1>Digital Collections</h1>

    <section class="collections">
        <article class="collection">
            <h2>Manuscripts</h2>
            <p>Digitized handwritten documents.</p>
        </article>

        <article class="collection">
            <h2>Newspapers</h2>
            <p>Historical newspapers and periodicals.</p>
        </article>

        <article class="collection">
            <h2>Photographs</h2>
            <p>Historical photographic collections.</p>
        </article>
    </section>
</main>
```

Keep the page small. The purpose is to make each layout change visually obvious.

Use simple Week 5 styling for the cards before introducing Flexbox:

```css
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.6;
}

main {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
}

.collection {
    padding: 20px;
    border: 1px solid #999;
    background-color: #f5f5f5;
}
```

At this point the cards should still appear one below another.

---

## Checkpoint 1 — Observe normal flow first

Before writing any Flexbox rule:

1. Load the page.
2. Inspect the `.collections` parent and one `.collection` child.
3. Ask students why the articles stack vertically.
4. Resize the browser and note that the page already has some responsive behavior because ordinary block boxes use available width.

Core idea:

> Responsive behavior does not begin with media queries, and layout does not begin with Flexbox.

This reconnects directly to Week 5.

---

## Checkpoint 2 — The smallest possible Flexbox change

Add only:

```css
.collections {
    display: flex;
}
```

Then stop and inspect the result.

Questions to ask:

- What changed?
- Which element became the flex container?
- Which elements became flex items?
- Why did we put `display: flex` on `.collections`, not on `.collection`?
- Are grandchildren automatically arranged by the outer Flexbox?

Main takeaway:

> Put `display: flex` on the **parent of the things you want to arrange**.

A good deliberate mistake is to move `display: flex` temporarily onto `.collection`. Let students diagnose why the cards themselves no longer form the expected row.

---

## Checkpoint 3 — Main axis and cross axis

Keep this conceptual section short but explicit. It prevents a common misunderstanding later.

Start from the default:

```css
.collections {
    display: flex;
    flex-direction: row;
}
```

Then change to:

```css
flex-direction: column;
```

Ask students to identify the main axis each time.

Core terminology:

- `flex-direction` determines the **main axis**;
- the **cross axis** is perpendicular to it;
- in `row`, the main axis is normally horizontal;
- in `column`, the main axis is normally vertical.

Strongly avoid teaching:

- `justify-content` = horizontal;
- `align-items` = vertical.

Instead teach:

> `justify-content` works along the main axis.  
> `align-items` works along the cross axis.

This distinction is worth repeating several times during the session.

---

## Checkpoint 4 — `justify-content`: distribute free space

Return to:

```css
flex-direction: row;
```

Give the cards modest widths if necessary so unused horizontal space is easy to see.

Then experiment live with:

```css
justify-content: flex-start;
justify-content: center;
justify-content: flex-end;
justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;
```

Do not merely cycle through values. Before each change, ask students to predict where the free space will go.

Core idea:

> `justify-content` does not resize the items. It distributes available free space along the main axis.

Useful debugging question:

- Why might `justify-content` appear to have little effect when the items already fill the container?

---

## Checkpoint 5 — `align-items`: cross-axis alignment

Give the container enough height to make cross-axis movement visible:

```css
.collections {
    display: flex;
    min-height: 250px;
    border: 2px dashed #888;
}
```

Then demonstrate:

```css
align-items: stretch;
align-items: flex-start;
align-items: center;
align-items: flex-end;
```

Now combine:

```css
.collections {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

Explain why this centers items on both axes.

Then briefly switch to `flex-direction: column` and ask:

- Which direction does `justify-content` control now?
- Which direction does `align-items` control now?

This is a useful test of whether students learned the axis model rather than memorizing horizontal/vertical rules.

---

## Checkpoint 6 — Spacing with `gap`

Add:

```css
.collections {
    display: flex;
    gap: 20px;
}
```

Connect explicitly to Week 5:

- margin belongs to an individual box;
- `gap` belongs to the layout container and describes space between layout items.

If the cards already have margins, remove them and compare.

Main takeaway:

> Prefer `gap` when the intention is simply “space between Flexbox items.”

This concept will transfer directly to Grid in Week 7.

---

## Checkpoint 7 — Create a failure: too many items for the row

Add several more cards or make the viewport narrower.

Do not add the solution immediately.

Ask students:

- What happens when there is not enough room?
- Should the cards become extremely narrow?
- Should the page overflow horizontally?
- What layout behavior do we actually want?

Then add:

```css
.collections {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
```

Core idea:

> Flexbox can adapt to available space before we write any media query.

This is the natural first responsive-design lesson.

---

## Checkpoint 8 — Flexible card sizing

Introduce a practical `flex` shorthand rather than teaching the full Flexbox sizing algorithm.

For example:

```css
.collection {
    flex: 1 1 220px;
}
```

Explain at a practical level:

```text
1     1     220px
|     |       |
grow  shrink  basis
```

Meaning:

- `flex-grow: 1` — the card may use available extra space;
- `flex-shrink: 1` — the card may shrink when space is constrained;
- `flex-basis: 220px` — approximately 220px is its starting main-axis size.

Then resize the browser slowly.

Questions:

- At what point do three cards fit?
- When do they wrap into two rows?
- When does one card occupy a complete row?

Do not spend time deriving the exact Flexbox free-space distribution algorithm. The learning objective is the behavior and mental model.

---

## Checkpoint 9 — One flex item can also be a flex container

Reuse one card and give it internal structure:

```html
<article class="collection">
    <h2>Manuscripts</h2>
    <p>Digitized handwritten documents.</p>
    <a href="#">Explore collection</a>
</article>
```

Then:

```css
.collection {
    display: flex;
    flex-direction: column;
}
```

Explain explicitly:

- `.collection` is a **flex item** in `.collections`;
- `.collection` is simultaneously a **flex container** for its own children.

This is worth demonstrating because students often incorrectly assume an element can have only one layout role.

If useful, use:

```css
.collection a {
    margin-top: auto;
}
```

as a compact demonstration that Flexbox can push the link toward the bottom of a taller card. Treat this as an optional practical trick, not a core property to memorize.

---

## Checkpoint 10 — Responsive design before media queries

Before introducing `@media`, pause and identify what is already responsive:

- the main content uses a constrained but flexible width;
- flex items grow and shrink;
- `flex-wrap` changes the number of items per row as space changes;
- text naturally reflows.

Ask:

> If Flexbox already adapts, when do we need a media query?

Answer:

> When we want the CSS rules themselves to change because the layout no longer works well at the available width.

This distinction is important. Media queries should not be presented as the definition of responsive design.

---

## Checkpoint 11 — First media query

Use a layout change that has an obvious reason. A small navigation component is clearer than changing colors merely to prove that the query works.

Start narrow:

```css
.site-nav {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
```

Then add:

```css
@media (min-width: 700px) {
    .site-nav {
        flex-direction: row;
    }
}
```

Resize the viewport across 700px.

Read the query aloud:

> When the viewport is at least 700 pixels wide, use these additional rules.

Core ideas:

- base rules describe the narrow layout;
- `min-width` adds the wider enhancement;
- this is a simple **mobile-first** approach;
- the breakpoint exists because the content/layout benefits from a change, not because “700px means tablet.”

Avoid giving students a canonical list of phone/tablet/desktop breakpoints.

---

## Checkpoint 12 — Use DevTools responsive mode

Show browser responsive/device mode explicitly.

Suggested workflow:

1. open DevTools;
2. enable responsive/device emulation;
3. drag the viewport width continuously;
4. watch cards wrap;
5. cross the media-query breakpoint;
6. inspect `.site-nav`;
7. identify which `flex-direction` declaration is currently active;
8. temporarily disable the media-query rule;
9. verify the visible change.

Important point:

> Responsive testing is not only choosing a few named phone presets. Drag through widths and observe where the content actually starts to fail.

---

## Checkpoint 13 — Deliberate Flexbox debugging

Introduce one or two common mistakes and diagnose them with students.

### Mistake A — Flexbox on the wrong element

```css
.collection {
    display: flex;
}
```

when the intention is to arrange several `.collection` cards.

Ask students to identify the common parent.

### Mistake B — Confusing axes

```css
.collections {
    flex-direction: column;
    justify-content: center;
}
```

Ask why the movement is now vertical rather than horizontal.

### Mistake C — No wrapping

Remove:

```css
flex-wrap: wrap;
```

and narrow the browser.

Ask what Flexbox is trying to preserve and why the cards become cramped.

### Mistake D — A media query appears not to work

Create competing declarations:

```css
.site-nav {
    flex-direction: column;
}

@media (min-width: 700px) {
    .site-nav {
        flex-direction: row;
    }
}
```

Then add a later rule that overrides it deliberately:

```css
.site-nav {
    flex-direction: column;
}
```

Use DevTools to diagnose the cascade rather than immediately editing values blindly.

This reconnects Week 6 to Week 4's cascade and specificity concepts.

---

## Small student variation during class

Give students a few minutes to modify the page they followed during live coding.

### Required

- add at least one additional collection card;
- use `display: flex` on the correct parent;
- use `gap`;
- enable wrapping;
- change `justify-content` and explain what it changes;
- use a practical flexible item size such as `flex: 1 1 220px`;
- resize the viewport and describe what happens.

### Optional challenge

Add a navigation section that:

- is a column by default;
- changes to a row at a content-appropriate breakpoint using `@media (min-width: ...)`.

Students should be able to explain every property they add.

---

## Material from the 2025 live coding worth retaining

The 2025 Week 6 example contained several useful practical ideas:

- a clearly bordered flex container;
- several small child boxes for fast visual experimentation;
- `display: flex`;
- `flex-wrap: wrap`;
- `justify-content` and `align-items`;
- making child boxes flex containers themselves in order to center their contents;
- experimenting with both `max-width` and `min-width` media-query approaches;
- settling on a `min-width` mobile-first progression.

These remain useful, especially as quick experiments after the collection-card example.

However, improve the explanation this year:

- use **main axis / cross axis** rather than “horizontal / vertical” as the primary model;
- use `gap` rather than margins as the first spacing technique between flex items;
- make the responsive demonstration change the **layout**, not merely background colors and font size;
- choose breakpoints from content behavior rather than from a table of standard device resolutions;
- emphasize that Flexbox wrapping itself is already responsive behavior.

---

## Topics to mention only briefly or leave to the reference page

If time is limited, do not sacrifice the core container/axis/wrapping/responsive sequence for these.

Brief recognition only:

- `align-self`;
- `order`;
- `row-reverse` / `column-reverse`;
- detailed `flex-grow`, `flex-shrink`, and `flex-basis` arithmetic;
- `align-content`;
- complex nested Flexbox layouts.

Important warning about `order` and reverse directions:

- visual order can differ from DOM/source order;
- do not use visual reordering casually when semantic, reading, and keyboard order matter.

Do **not** introduce:

- CSS Grid implementation details;
- container queries;
- complex media features;
- framework layout systems;
- Bootstrap/Tailwind utilities;
- JavaScript hamburger-navigation logic.

---

## Suggested pacing for a two-hour session

Treat this as approximate; live coding should follow student understanding rather than a rigid clock.

- **10–15 min:** reconnect Week 5 boxes/normal flow; create the small HTML example.
- **15 min:** `display: flex`, container/items, main/cross axes.
- **20 min:** `flex-direction`, `justify-content`, `align-items` with prediction questions.
- **10 min:** `gap` and comparison with margins.
- **15 min:** deliberately create a width problem; add `flex-wrap`.
- **15 min:** practical `flex: 1 1 220px`; resize continuously.
- **10 min:** nested Flexbox / card internals.
- **15 min:** responsive-design concept and first mobile-first media query.
- **10 min:** DevTools responsive mode and debugging.
- **remaining time:** student variation, Flexbox Froggy, recap, or slower repetition depending on class pace.

If the class needs more time, omit nested Flexbox and individual-item properties before omitting wrapping, axes, or the first media query.

---

## Prediction questions to use throughout

Useful questions before changing the code:

- What will happen when I add `display: flex` to this parent?
- Which elements become flex items?
- If I change `flex-direction` to `column`, what becomes the main axis?
- Where will the unused space go with `space-between`?
- Why is `align-items` not visibly changing anything here?
- What will happen when the cards no longer fit on one line?
- Do we need a media query to make these cards wrap?
- What does `220px` mean in `flex: 1 1 220px`?
- At what width does this navigation actually need to change layout?
- Which CSS rule is active on this side of the breakpoint?

Prediction before execution is more valuable than simply copying property/value pairs.

---

## Suggested closing recap

Ask students to explain these distinctions in their own words:

- normal flow versus flex layout;
- flex container versus flex item;
- main axis versus cross axis;
- `justify-content` versus `align-items`;
- margin versus `gap`;
- one flex line versus wrapped flex lines;
- fixed sizing versus flexible sizing;
- responsive layout versus media query;
- narrow-base CSS versus wider-screen enhancement.

Final Week 6 mental model:

> HTML gives us meaningful elements. Each element still has a CSS box. A parent with `display: flex` gains a one-dimensional layout system for its direct children. Flexbox distributes and aligns those boxes according to a main and cross axis, and can wrap or resize them as space changes. Media queries are added only when the layout rules themselves need to change.

---

## Bridge to Week 7

End with a layout problem Flexbox does not express as naturally.

For example, sketch six cards and ask for:

- three explicit columns;
- aligned rows;
- deliberate control of both horizontal and vertical tracks.

Explain without implementing the solution:

> Flexbox is primarily one-dimensional. Next week we introduce **CSS Grid**, which lets us reason about rows and columns together.

If useful, briefly show the conceptual contrast:

```text
Week 5: individual boxes + normal flow
             ↓
Week 6: Flexbox — one-dimensional layout
             + basic responsive design
             ↓
Week 7: Grid — two-dimensional layout
             + further responsive practice
```

Do not implement the Grid solution during Week 6.
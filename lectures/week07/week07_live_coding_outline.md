# Week 7 Live Coding Outline — CSS Grid and Pseudo-classes

This is an **instructor-facing working lesson plan** for the Week 7 live-coding session. It supplements [the student reference page](css_grid.html); it is not a script to read aloud or a duplicate of that page. Create a small page incrementally, inspect the browser after every meaningful change, and leave room for questions and student experiments.

## Session goal

Move from **Week 6's mainly one-dimensional Flexbox layout** to **two-dimensional CSS Grid**, then finish with a short introduction to **CSS pseudo-classes**.

By the end, students should have **seen, predicted, modified, and debugged**:

- a grid container and its direct-child grid items;
- rows, columns, tracks, lines, and `gap`;
- `grid-template-columns`, `fr`, and `repeat()`;
- automatic placement of items into rows;
- one item spanning multiple columns with `grid-column`;
- responsive tracks using `minmax()` with `auto-fit`;
- an example of named grid areas, time permitting;
- the browser's Grid inspector/overlay and responsive viewport tools;
- `:hover`, `:focus-visible`, and recognition of structural pseudo-classes such as `:nth-child()`.

**Deliberate boundary:** this is not an exhaustive tour of Grid or CSS selectors. `subgrid`, sophisticated alignment, dense packing, implicit-track sizing controls, and the full pseudo-class taxonomy belong in the reference page or later independent study.

## Core message for students

> **Grid is a layout system applied to a parent that arranges its direct children in rows and columns. We describe the tracks and placement; the browser calculates the layout.**

Keep returning to these distinctions:

- HTML supplies meaningful document structure; CSS controls its presentation.
- Week 5: box model and normal flow. Week 6: Flexbox and one-dimensional relationships. Week 7: Grid and two-dimensional relationships.
- **The container defines the grid**; items are placed into it.
- `fr` divides available track space; `gap` creates space **between** tracks.
- Grid and Flexbox complement each other; neither replaces normal flow.
- A responsive layout responds to available space and content requirements, not simply to device labels.
- Pseudo-classes select elements by a **state or structural condition**; they are not additional HTML classes.

Success criterion: a student can start with six ordinary `<article>` elements, turn their parent into a responsive card grid, explain the changes, and use DevTools to diagnose an incorrect result.

## Prior knowledge and teaching setup

Assume the students know semantic HTML and basic CSS from Weeks 2–5, and have seen Flexbox, `gap`, and simple responsive design in Week 6.

- Keep [Week 7 student materials](css_grid.html) open as the conceptual/reference page, not as the file to edit.
- Create a **separate minimal `grid_live.html` and optional stylesheet live in class**. These are suggestions for an in-class artifact, *not* pre-existing repository files.
- Use VS Code, browser preview, DevTools **Elements/Inspector**, **Styles/Computed**, Grid overlay, and responsive viewport mode.
- Begin with six archive collection cards, not a full site. Preserve the same markup while changing the layout.
- Keep the browser narrow enough that resizing reveals a difference; reset experimental CSS between checkpoints when necessary.

### Must cover

1. `display: grid` on the parent; direct children become grid items.
2. Three columns with `1fr` and `repeat(3, 1fr)`; `gap`.
3. Automatic second row for six items, plus one `grid-column: span 2` experiment.
4. At least one responsive Grid strategy, preferably `repeat(auto-fit, minmax(220px, 1fr))`, **observed by resizing**.
5. Browser Grid overlay and at least one deliberate mistake diagnosed in DevTools.
6. A short pseudo-class segment: `:hover`, `:focus-visible`, and `:nth-child(odd)` as a recognition example.

### Cover if the essentials are secure

- Fixed widths versus `fr` proportions (`1fr 2fr 1fr`, `220px 1fr`).
- One simple two-region layout using `grid-template-areas`.
- One-column mobile-first layout with `@media`, compared with automatic responsive tracks.
- Grid outside / Flexbox inside an individual card.

**Do not sacrifice** parent/item understanding, responsive resizing, DevTools, or the brief pseudo-class demonstration to cover `subgrid` or every possible placement property.

---

## Suggested live-coding page

Use a small Digital Humanities example that carries forward the same collection-card metaphor from Week 6. Start with valid HTML; initially **do not include layout CSS**.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Collections — CSS Grid</title>
    <style>
        /* Add our CSS incrementally during class. */
    </style>
</head>
<body>
    <main>
        <h1>Digital Collections</h1>

        <section class="collections" aria-label="Browse collections">
            <article class="collection">
                <h2>Manuscripts</h2>
                <p>Digitized handwritten sources.</p>
                <a href="#manuscripts">Explore manuscripts</a>
            </article>
            <article class="collection">
                <h2>Newspapers</h2>
                <p>Historical newspapers and periodicals.</p>
                <a href="#newspapers">Explore newspapers</a>
            </article>
            <article class="collection">
                <h2>Photographs</h2>
                <p>Images of people and places.</p>
                <a href="#photographs">Explore photographs</a>
            </article>
            <article class="collection">
                <h2>Maps</h2>
                <p>Cartographic collections.</p>
                <a href="#maps">Explore maps</a>
            </article>
            <article class="collection">
                <h2>Letters</h2>
                <p>Personal correspondence.</p>
                <a href="#letters">Explore letters</a>
            </article>
            <article class="collection">
                <h2>Books</h2>
                <p>Digitized literary works.</p>
                <a href="#books">Explore books</a>
            </article>
        </section>
    </main>
</body>
</html>
```

The placeholder links are sufficient for demonstrating hover/focus; they are **not functional collection destinations**. Alternatively, point them to real pages if desired.

Minimal Week 5-style styling, *before* Grid:

```css
* {
    box-sizing: border-box;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.5;
}

main {
    max-width: 1100px;
    margin: 0 auto;
    padding: 1rem;
}

.collection {
    padding: 1rem;
    border: 1px solid #999;
    background: #f4f7fa;
}
```

Avoid giving students all the final rules upfront. The important changes should be typed live and tested one at a time.

---

## Checkpoint 1 — Reconnect Week 6 and observe normal flow

1. Open the HTML with the baseline styles only.
2. Point out the `<section>` parent and its six sibling `<article>` elements.
3. Predict where the articles appear without a layout rule.
4. Optionally reintroduce `display: flex` briefly, then remove it; ask what Flexbox expresses especially well.
5. Sketch the desired **three-column, two-row** arrangement.

Opening question: *What if the design specifies both rows and columns, with aligned tracks?*

Main concept: Grid is a different **layout method for the same semantic HTML**, not a different kind of HTML.

## Checkpoint 2 — Make the smallest useful Grid

Add only:

```css
.collections {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
}
```

Stop and inspect.

- Which element is the grid container?
- Which elements are grid items?
- What happened to the six cards? Why are there two rows?
- Did the HTML source order change?
- Does `display: grid` affect every descendant or the direct children of this container?

**DevTools:** select `.collections` and enable the Grid overlay. Name the visible columns, rows, tracks, lines, and gaps. Clarify that the browser generates a second row via automatic placement; we did not write `grid-template-rows`.

**Deliberate mistake:** move `display: grid` onto `.collection` instead. Ask students to identify the wrong parent and repair it.

## Checkpoint 3 — Track sizes, `fr`, and `repeat()`

Experiment sequentially; do not leave competing declarations in the final CSS:

```css
grid-template-columns: 200px 200px 200px;
grid-template-columns: 1fr 1fr 1fr;
grid-template-columns: 1fr 2fr 1fr;
grid-template-columns: repeat(3, 1fr);
```

Questions:

- Which declaration makes rigid columns that can overflow?
- How does `1fr 2fr 1fr` divide the **space available to the tracks**?
- What changed when three explicit values became `repeat(3, 1fr)`?
- How is `gap` different from adding margins to every card?

**Technical precision:** `fr` is a fraction of available grid space, not simply a percentage of the whole container. Gaps and intrinsic minimum sizing matter. Do not promise that `1fr` always prevents overflow with long unbreakable content.

Prediction challenge: replace `repeat(3, 1fr)` with `repeat(2, 1fr)`. How many rows will six cards require?

## Checkpoint 4 — Automatic placement and explicit spanning

Mark one record as featured:

```html
<article class="collection featured">
```

Then:

```css
.featured {
    grid-column: span 2;
}
```

- Ask students which item changes size and what happens to the other cards.
- Enable Grid line numbers in DevTools; compare `span 2` with `grid-column: 1 / 3`.
- Briefly distinguish the **explicit column tracks** from **implicitly created rows**.
- Note that Grid automatic placement decides where subsequent items go; source order remains unchanged.

Undo the featured rule before introducing a one-column responsive layout, or apply it only at a wider breakpoint. Otherwise an item spanning two tracks may create unwanted implicit columns when only one column was intended.

## Checkpoint 5 — Responsive Grid, strategy A: media query

Reuse Week 6's mobile-first logic. Temporarily replace the three-column rule:

```css
.collections {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

@media (min-width: 700px) {
    .collections {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

Resize the viewport slowly on both sides of 700px.

- Which rule is active at 699px? At 700px?
- Is 700px a magic device width or a **layout decision**?
- Does a grid require a media query to exist? (No.)

Use DevTools to identify the applied declaration and the overridden declaration. Explain that a media query changes the **layout rules** when its condition matches.

## Checkpoint 6 — Responsive Grid, strategy B: content-driven tracks

Now **replace**, rather than stack on top of, the media-query example:

```css
.collections {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
}
```

Break the expression into understandable pieces:

- `minmax(220px, 1fr)`: preferred minimum track size and a flexible maximum;
- `auto-fit`: create as many such tracks as fit and allow remaining tracks to expand;
- `repeat(...)`: express the repeating track pattern.

Resize in responsive mode and **observe when a column disappears**. Emphasize that the available width includes the parent container, not necessarily the entire viewport.

Contrast with the previous checkpoint: **explicit breakpoint** versus **automatic reflow based on track requirements**. Neither is universally superior.

**Edge-case note for the instructor:** an inflexible 220px minimum can overflow an unusually narrow container. Keep this as a debugging observation; if relevant, show a more defensive minimum `minmax(min(100%, 220px), 1fr)` as an optional extension, not as an introductory requirement.

## Checkpoint 7 — Named areas for a page layout (if time)

Shift from *cards in a collection* to *major page regions*. Add this structure **outside** the card grid:

```html
<div class="archive-page">
    <aside class="filters">
        <h2>Filters</h2>
        <p>Period · Language · Material type</p>
    </aside>
    <section class="results" aria-label="Collection results">
        <h2>Results</h2>
        <!-- Move the existing .collections section here. -->
    </section>
</div>
```

Use a two-area template:

```css
.archive-page {
    display: grid;
    grid-template-areas:
        "filters"
        "results";
    gap: 1rem;
}

.filters {
    grid-area: filters;
}

.results {
    grid-area: results;
}

@media (min-width: 800px) {
    .archive-page {
        grid-template-areas: "filters results";
        grid-template-columns: 220px minmax(0, 1fr);
    }
}
```

Explain why the strings resemble a diagram and why the `grid-area` names must match. Keep the `.collections` card grid nested inside the results section: **one grid for page structure, another for cards**.

**Accessibility point:** HTML source/reading order should remain meaningful even if CSS changes visual placement. CSS placement does not redefine keyboard focus order.

If this section threatens the time allocated for pseudo-classes and debugging, explain named areas from the student reference page instead of implementing them fully.

## Checkpoint 8 — Grid debugging pass (required)

Make one intentional error at a time. Have students diagnose it before the fix.

| Symptom | Plausible cause | Inspection and repair |
| --- | --- | --- |
| Cards remain stacked | `display: grid` on the wrong element, or not applied | Inspect the **parent** and the computed `display` |
| Rigid columns overflow | Fixed widths or unsuitable minimums | Use responsive viewport mode; inspect column tracks |
| Featured item produces an extra narrow-screen column | `span 2` still applies to a one-column design | Inspect grid lines; remove/reset the span at narrow widths |
| Named-area rule seems ignored | Misspelled `grid-area` name or invalid template | Compare identifiers and check DevTools Styles |
| A changed `grid-template-columns` value has no effect | Another rule overrides it | Inspect cascade and applied media-query rules |

The method is more important than the particular error: **select container → inspect computed display and rules → enable Grid overlay → identify tracks/lines → check viewport and competing declarations**.

## Checkpoint 9 — Brief pseudo-class extension (approximately 10 minutes)

Transition: layout determines **where the cards are**; selectors can style them according to **interaction state or structural position**.

First demonstrate an interaction state:

```css
.collection:hover {
    background: #e5f1fc;
}

.collection a:focus-visible {
    outline: 3px solid #005ea8;
    outline-offset: 3px;
}
```

- Hover a card with the mouse.
- Use **Tab** to move keyboard focus to a link; look for the focus indicator.
- Explain why hover must not be the sole carrier of important information.
- Explain that `:focus-visible` is about **visible keyboard/appropriate focus indication**, not the same thing as hover.
- A pseudo-class starts with **one colon**; unlike `.featured`, no `class="hover"` attribute is needed.

If time remains, add one structural example:

```css
.collection:nth-child(odd) {
    border-left: 4px solid steelblue;
}
```

Ask which cards are affected (first, third, fifth **child**, in the current HTML). Briefly mention `:first-child` and `:last-child`. Structural pseudo-classes work from DOM position/relationships, **not** the visually displayed column position after Grid reflow.

Avoid a long survey of selectors or confusing pseudo-classes (`:hover`) with pseudo-elements (`::before`).

## Checkpoint 10 — Student variation / short exercise

**Required (individual or pairs, approximately 8–12 minutes):**

1. Start with the six collection cards and a working grid.
2. Change three fixed columns to `repeat(3, 1fr)`.
3. Change the layout to `repeat(auto-fit, minmax(220px, 1fr))`.
4. Resize the viewport and describe when the number of columns changes.
5. Add a `:hover` background and a visible keyboard focus rule for card links.
6. In DevTools, point to the grid container, one grid item, and the tracks.

**Optional challenges:**

- Make one featured card span two columns **without breaking the one-column narrow layout**.
- Add a filter/sidebar region using named areas.
- Use `:nth-child(odd)` for a subtle alternating accent and explain why the pattern follows source order.

Ask learners to explain their code rather than simply reproduce it.

---

## Suggested pacing for approximately 120 minutes

This is a flexible guide, not a clock-driven script:

| Time | Focus |
| --- | --- |
| 0–10 min | Week 6 recap; semantic HTML; normal flow versus the target grid |
| 10–25 min | `display: grid`, parent/items, Grid overlay |
| 25–40 min | Tracks, `fr`, `repeat()`, `gap` |
| 40–50 min | Automatic placement and one spanning item |
| 50–70 min | Responsive Grid: media query, then `auto-fit` + `minmax()` |
| 70–85 min | Named areas / nested layout **if ready**; otherwise extra responsive practice |
| 85–95 min | Deliberate bugs and DevTools diagnosis |
| 95–105 min | Pseudo-classes: hover, keyboard focus, brief `nth-child` |
| 105–115 min | Student variation |
| 115–120 min | Exit questions and recap |

If the session runs short, **compress named areas and optional spanning variants first**. Preserve the core Grid mental model, practical responsive behavior, a debugging pass, and pseudo-classes.

## Prediction questions to use throughout

- Which element must receive `display: grid` for the six `<article>` cards to be arranged?
- Why do six cards create two rows with three defined columns?
- What changes when `1fr 1fr 1fr` becomes `1fr 2fr 1fr`?
- Is `gap` part of the card's own box model?
- What will `grid-column: span 2` do to the first card?
- What happens to a spanning item when the layout has just one explicit column?
- What happens when the available container width can no longer fit three 220px tracks plus gaps?
- How is `auto-fit` different in purpose from a 700px media query?
- Does Grid rearrangement change the DOM or keyboard focus order?
- How will a keyboard user detect the currently focused link?
- Does `:nth-child(odd)` refer to odd **DOM children** or odd **visual Grid columns**?

Always ask for a prediction **before** the change, then check against actual browser behavior.

## End-of-session check

Without looking up syntax, students should be able to:

1. Explain **container versus item** and **columns versus rows**.
2. Write a minimal grid with three flexible columns and gaps.
3. Explain why `repeat(auto-fit, minmax(...))` makes a useful responsive card layout.
4. Inspect Grid lines and diagnose a wrong-parent or overflow issue in DevTools.
5. Distinguish Flexbox from Grid by the layout relationship being expressed.
6. Recognize `:hover`, `:focus-visible`, and `:nth-child()` as pseudo-classes.

Suggested closing statement:

> **Choose layout based on the relationship you need: normal flow for ordinary document content, Flexbox for one-dimensional arrangement, and Grid for rows-and-columns structure. Test the result by resizing and inspecting the browser—not by guessing at CSS values.**

## Bridge to Week 8

Week 7 completes the main progression from normal flow (Week 5) through Flexbox (Week 6) to Grid (Week 7). **Week 8 concludes CSS** with transitions, animations, broader styling techniques and a survey of modern CSS frameworks/utility approaches. The pseudo-class segment gives an immediate link to interaction states that can later be animated:

```css
.collection {
    transition: background-color 200ms ease;
}
```

**Do not teach transitions in depth during Week 7**; use that line only as a preview if useful.

## References for the instructor

- [Week 7 student reference page](css_grid.html) — covers the full progression, detailed snippets, optional `subgrid`, and practice.
- [Week 6 live coding outline](../week06/week06_live_coding_outline.md) — the preceding container/item, `gap`, and responsive-design concepts.
- [MDN: CSS grid layout](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Grids) — conceptual tutorial.
- [MDN: Basic concepts of Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout/Basic_concepts) — tracks, lines, placement.
- [MDN: Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes) — state and structural selectors.
- [CSS-Tricks: Complete Guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) — visual supplementary reference.
- [CSS Grid Garden](https://cssgridgarden.com/) — optional visual reinforcement rather than a replacement for live coding.

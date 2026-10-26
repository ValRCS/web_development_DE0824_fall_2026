# Week 8 Live Coding Outline — CSS Motion and Modern Styling

This is an **instructor-facing working lesson plan** for a **45–60-minute live-coding segment**. It supplements [the Week 8 student lecture](css_advanced.html), rather than duplicating all 18 sections. The Markdown is public, but it is written as an instructor's practical guide: adjust the pace to student comprehension and leave room for improvisation.

## Session goal and core message

**Week 8 concludes CSS; Week 9 begins JavaScript.**

Students have already seen selectors and the cascade (Week 4), boxes (Week 5), Flexbox/responsive design (Week 6), and Grid plus pseudo-classes (Week 7). This session builds **visual feedback and motion on top of an existing layout**, then briefly locates vanilla CSS within the wider styling ecosystem.

> **A state selects what changes; `transform` changes how an element is drawn; `transition` smooths a change between states; `@keyframes` defines an animation sequence. The browser does all of this without JavaScript.**

**Minimum successful outcome:** a student can explain and implement a hover/focus card effect, distinguish the change from its timing, build or recognize one short keyframe animation, disable nonessential motion when requested, and inspect a malfunctioning rule in DevTools.

### What is required versus optional?

**Prioritize:**

1. Immediate visual change using a pseudo-class and `transform`.
2. Gradual change using `transition`; demonstrate its reversal when hover ends.
3. A small `@keyframes` example with a different target from the hover card.
4. `:focus-visible` and `prefers-reduced-motion`.
5. At least one deliberate mistake diagnosed in browser DevTools.
6. A brief conceptual contrast: vanilla CSS / Bootstrap / Tailwind / AI-assisted CSS.

**Only if time remains:** alternative easing curves, additional keyframe stops, Animate.css, and brief mentions of CSS nesting, `:has()`, container queries, cascade layers, and view transitions. None of these is a new implementation objective in this 60-minute block.

---

## Suggested pacing

| Elapsed time | Checkpoint | Core activity |
| --- | --- | --- |
| 0–5 min | 0. Reconnect | Week 7 pseudo-classes and Grid; predict the new behavior |
| 5–10 min | 1. Start small | Create a minimal, already responsive archive-card page |
| 10–18 min | 2. Transform | Apply an immediate hover change; inspect layout |
| 18–30 min | 3. Transition and focus | Animate state changes; test keyboard focus and easing |
| 30–40 min | 4. Keyframes | Add a short entrance animation to a separate element |
| 40–45 min | 5. Reduced motion | Emulate the user preference; retain usable feedback |
| 45–50 min | 6. Ecosystem | Quick Bootstrap/Tailwind/AI comparison; do not install tooling |
| 50–57 min | 7. Student variation | Small change plus purposeful debugging |
| 57–60 min | 8. Exit questions | Summarize three distinct CSS ideas; bridge to JavaScript |

**45-minute version:** use the first 5 minutes to start from the existing Week 7 card markup instead of typing the full skeleton; limit transforms to `translateY()`; give keyframes 5 minutes, framework comparison 3 minutes, and student modification 5 minutes. Compress the demonstration, **not** keyboard focus, reduced motion, or one DevTools debugging pass. Skip Animate.css and all modern-CSS survey examples.

## Setup and instructor preparation

- Keep [`css_advanced.html`](css_advanced.html) open as the explanatory page and source of examples. **Do not edit the lecture reference page live.**
- Create a separate scratch file such as `week08_motion_live.html` in VS Code. This is a suggested in-class file, **not** an existing committed file.
- Use ordinary browser preview (no package manager, build step, or JavaScript).
- Keep DevTools **Elements**, **Styles/Computed**, and optionally **Animations** available.
- Test the file once using mouse, keyboard Tab navigation, and a narrow viewport.
- The lecture intentionally does **not** load Bootstrap/Tailwind globally: those styles would interfere with the lecture's own CSS. For framework demonstrations, use the student reference examples in a **separate** experimental page.

If students arrive with a working card grid from Week 7, reuse that HTML and skip most of the starter code. Otherwise, write the short independent example below.

---

## Checkpoint 0 — Reconnect Weeks 7 and 8 (about 5 minutes)

Show the existing Week 7 archive cards and ask:

- What does Grid control? (**The placement of cards.**)
- What does `:hover` select? (**An element in a hover state.**)
- If we change a background color in `:hover`, does that change happen gradually? (**No, not without an additional mechanism.**)
- Can CSS respond to keyboard focus without JavaScript? (**Yes.**)

State the objective: retain the *same layout and meaningful links*, but give users restrained feedback when interacting with them.

## Checkpoint 1 — Small starting page (about 5 minutes)

Type or paste **one** HTML document, with the CSS in `<style>` for now. The fragment links point to real sections lower on the page so they have meaningful destinations.

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Collections — Week 8</title>
    <style>
        /* Add our CSS here. */
    </style>
</head>
<body>
    <main>
        <h1>Digital Collections</h1>
        <p class="intro">Explore historical sources from our archive.</p>

        <nav class="collections" aria-label="Browse collections">
            <a class="collection-card" href="#manuscripts">
                <strong>Manuscripts</strong>
                <span>Handwritten documents</span>
            </a>
            <a class="collection-card" href="#maps">
                <strong>Maps</strong>
                <span>Historical cartography</span>
            </a>
        </nav>

        <section id="manuscripts">
            <h2>Manuscripts</h2>
            <p>Our manuscript collection.</p>
        </section>
        <section id="maps">
            <h2>Maps</h2>
            <p>Our historical map collection.</p>
        </section>
    </main>
</body>
</html>
~~~

Add just enough familiar CSS to expose card states clearly:

~~~css
* { box-sizing: border-box; }

body {
    font-family: system-ui, sans-serif;
    line-height: 1.5;
}

main {
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
}

.collections {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
}

.collection-card {
    display: block;
    padding: 1rem;
    border: 2px solid #8aacc6;
    border-radius: 0.5rem;
    background: #e9f3fb;
    color: #15324b;
    text-decoration: none;
}

.collection-card strong,
.collection-card span {
    display: block;
}
~~~

**Observe:** the cards already work as links, and Grid handles their arrangement. No new layout model has been introduced.

**Instructor shortcut:** for a shorter class, use a single card and keep the Grid rules from Week 7 rather than retyping them. Leave the document structure intact.

## Checkpoint 2 — `transform` creates immediate visual change (about 8 minutes)

Add only:

~~~css
.collection-card:hover {
    transform: translateY(-8px);
}
~~~

Before hovering, ask students to predict what moves, and whether the neighboring card follows. Then hover and inspect.

- `translateY(-8px)` changes **rendered position**, not normal-flow space allocation.
- A transform does not automatically have a duration.
- Try `rotate(4deg)` and `scale(1.05)` **one at a time**, replacing the value rather than stacking contradictory declarations.
- Larger transforms may overlap other content, a good reminder to keep effects restrained.

**Deliberate bug A:** write `transform: translateY(-8);`. Ask what the browser does with the invalid length (nonzero translations need units here). Inspect the rejected value in DevTools and restore `-8px`.

**Prediction:** if the card moves up by 8px, does the other card reflow to use the empty visual space? (No.)

## Checkpoint 3 — `transition` makes the change smooth; keyboard focus matters (about 12 minutes)

First extend the immediate state change:

~~~css
.collection-card:hover {
    background: #cfe8fb;
    transform: translateY(-8px);
    box-shadow: 0 8px 18px rgb(0 0 0 / 0.18);
}
~~~

Observe the *instantaneous* result, and **then** add transition declarations to the **base** `.collection-card` rule:

~~~css
.collection-card {
    /* Keep the earlier base declarations. */
    transition:
        background-color 250ms ease,
        transform 250ms ease,
        box-shadow 250ms ease;
}
~~~

Explain that the actual transition goes in the existing base rule alongside `padding`, `background`, etc.; the comment above is **not a replacement** for those declarations.

Ask students to move the mouse in and out slowly:

- `:hover` selects the state; `transform` and `background` describe the changed values.
- `transition` describes how supported properties interpolate *as they change*.
- Keeping it in the base rule lets the change animate on entry **and on exit**.
- `250ms` is 0.25 seconds; `ease` controls the progression, not the destination.

Now ensure keyboard interaction is equivalent:

~~~css
.collection-card:hover,
.collection-card:focus-visible {
    background: #cfe8fb;
    transform: translateY(-8px);
    box-shadow: 0 8px 18px rgb(0 0 0 / 0.18);
}

.collection-card:focus-visible {
    outline: 3px solid #a15b00;
    outline-offset: 3px;
}
~~~

Use **Tab**, not only the mouse, to navigate links. Explain that a visible focus indication must not depend on subtle animation. Note that `:focus-visible` uses browser heuristics for when a focus indicator is appropriate; testing keyboard navigation demonstrates its main purpose.

**Experiment:** change `250ms` to `1s`, then change `ease` to `linear` and back. Inspect computed styles.

**Deliberate bug B (cascade/debugging):** temporarily change the transition list to `transition: color 250ms ease;` while the hover rule changes `background` and `transform`. Hover still applies those styles but they jump immediately. Have students inspect **which CSS properties actually change**, then repair the transition property list. This is more instructive than guessing at timing values.

**Check for understanding:** What is the difference between *the property that changes* and *the rule that determines how quickly it changes*?

## Checkpoint 4 — `@keyframes`: an animation sequence (about 10 minutes)

Use the introductory paragraph `.intro` rather than the card itself, avoiding a conflict between an ongoing/fill-mode animation of `transform` and a hover transform of the same element.

~~~css
@keyframes arrive {
    from {
        opacity: 0;
        transform: translateY(16px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.intro {
    animation: arrive 700ms ease-out both;
}
~~~

Refresh the page to replay.

Questions:

- What happens **without any hover**? The animation starts when the element receives the animation style.
- Are `from` and `to` the only possible stops? No; percentages such as `50%` are available.
- What does `700ms` control? The duration.
- Does `both` mean the animation repeats twice? No; it is a fill-mode value. Repetition is controlled separately by `animation-iteration-count`.
- How would an endlessly repeated animation differ? Explain `infinite`, but avoid using it for an ordinary content card.

**Contrast:** a transition interpolates a property change between states; keyframes define a named sequence, which can run without a pointer or keyboard state change.

**Debugging variation (if time):** deliberately misspell the animation name in `animation: arrive...`. Check DevTools; fix the mismatch with `@keyframes arrive`.

## Checkpoint 5 — Accessibility: reduced motion (about 5 minutes)

Add the media query **after** the normal motion rules:

~~~css
@media (prefers-reduced-motion: reduce) {
    .collection-card {
        transition: none;
    }

    .collection-card:hover,
    .collection-card:focus-visible {
        transform: none;
    }

    .intro {
        animation: none;
    }
}
~~~

Keep the **background/outline feedback**; only nonessential motion is suppressed. Demonstrate browser DevTools emulation of reduced motion if available (location of the setting varies by browser/version), and refresh.

The lesson connects to Week 6: `@media` can query user preferences as well as viewport dimensions. Accessibility is part of the original design, not an optional patch after animation has been added.

## Checkpoint 6 — Libraries, utility CSS, and AI-assisted styling (about 5 minutes)

This is a **discussion and code-reading demonstration**, not a framework installation exercise. Point to [Week 8 lecture sections 8–14](css_advanced.html#frameworks).

Write or project a conceptual comparison:

~~~html
<!-- Vanilla CSS: our own class with our own stylesheet -->
<a class="collection-card" href="#manuscripts">Manuscripts</a>

<!-- Bootstrap: framework-defined component classes -->
<button class="btn btn-primary">Explore</button>

<!-- Tailwind: composed utility classes -->
<button class="bg-blue-600 text-white px-4 py-2 rounded">Explore</button>
~~~

**Emphasize:** the Bootstrap/Tailwind snippets depend on the **appropriate external CSS/tool setup** and will not become styled just by copying the HTML into the existing vanilla-CSS demonstration. Bootstrap's compiled CSS may be included by a stylesheet link; Tailwind 4's Play CDN is **development-only** and not a production setup. Show current installation examples from the Week 8 student page if needed; do not paste legacy Bootstrap 4/Tailwind 2 CDN links.

Questions:

- Which variant gives you ready-made **component** styles?
- Which composes small **utility** classes?
- Are their results ultimately rendered through CSS by the browser? (Yes.)
- If an AI assistant generates twenty declarations but only six are necessary, how will we find the six? (Inspect, toggle rules, resize, test keyboard focus, simplify.)

**One-sentence 2026 context:** native CSS now includes nesting, `:has()`, container queries, and cascade layers; frameworks and AI assistants are additional workflows, not substitutes for understanding what the browser does.

Keep this short: **the course teaches the Web platform, not framework setup or prompt engineering.**

## Checkpoint 7 — Student variation and deliberate debugging (about 7 minutes)

Give students a small change to **the same file**, not a new project.

**Required:**

1. Change the card movement from `-8px` to `-4px` and shorten the duration to `150ms`.
2. Confirm hover and keyboard focus still communicate interactivity.
3. Choose either the `background-color` or `box-shadow` transition to remove, then describe the visible difference.
4. Explain in DevTools which rule sets the *target value* and which rule sets the *timing*.
5. Confirm reduced-motion handling still removes movement.

**Optional:**

- Add one intermediate `50%` keyframe to `arrive`; predict and observe the path.
- Ask an AI tool to propose a simpler equivalent for your current card CSS, and reject any unnecessary dependencies or rules you cannot explain.

As a quick diagnostic, intentionally change `.collection-card:hover` to `.collection:hover`. Ask students to find why the hover styles disappear (the selector no longer matches), using Elements and Styles rather than editing blindly.

## Checkpoint 8 — Closing explanation and Week 9 bridge (about 3 minutes)

Ask for short oral answers:

1. What is a transform? **A visual transformation of the rendered element.**
2. What does a transition do? **It gradually interpolates property-value changes when they occur.**
3. What does a keyframe animation do? **It specifies a named visual sequence with timing controls.**
4. How does keyboard focus activate styling? **Through selectors such as `:focus-visible`.**
5. How can the page honor a preference for less motion? **Using `@media (prefers-reduced-motion: reduce)`.**
6. What does a CSS framework change? **The authoring/reuse workflow; the browser still renders CSS.**

Closing bridge:

> CSS can respond declaratively to states such as hover and focus. Next week we introduce **JavaScript**: values, variables, expressions, and code execution. Later we will use JavaScript and the DOM to process collection records, respond to events, and update page content according to program logic.

Do **not** introduce `addEventListener()` or DOM manipulation as live coding here; the Week 9 start should remain conceptually clear.

---

## Instructor debugging and pedagogy notes

| Observed problem | Likely reason | Show students how to diagnose |
| --- | --- | --- |
| Card no longer moves | Invalid transform or selector mismatch | Inspect matched selectors and whether `transform` is crossed out/rejected |
| Hover changes but doesn't animate | No matching property in `transition` | Compare changed properties with the declared transition list |
| Motion appears to run only in one direction | `transition` declared only under `:hover` | Move transition to the base rule |
| Keyboard Tab gives no clear state | No visible `:focus-visible` treatment or an overridden outline | Inspect focus state; preserve an explicit outline |
| Entrance animation doesn't run | Mismatched keyframe name or overridden `animation` | Compare `@keyframes` name and computed `animation-name` |
| Effects unexpectedly disappear | Reduced-motion emulation active | Check media conditions and computed rules |
| Framework classes have no visual effect | External framework stylesheet/tool not loaded | Inspect Network and computed styles; framework class names are not native styling |
| Two animations seem to fight | `animation` and hover both try to control `transform` on the same element | Animate `.intro` separately from interactive cards |

### Pedagogical guardrails

- Use **predict → edit → observe → inspect → explain** at every meaningful step.
- Reuse Week 7 pseudo-classes and Grid instead of building a new layout or a visual design system.
- Keep changes reversible and make the browser result visible after each small addition.
- Avoid presenting motion as decoration; ask what feedback it communicates.
- Keep the full framework and AI survey on the lecture page. No Node tooling, CSS build pipeline, or JavaScript frameworks are needed.
- For students moving slowly, the priority is the **transform/transition distinction**, keyboard focus, and diagnosing the cascade. Keyframe syntax can be demonstrated rather than reproduced by every student.
- Do not silently hide errors by pasting a complete solution; locate the first rule that fails and explain why.

## Session readiness checklist

- [ ] [Week 8 student lecture](css_advanced.html) is accessible.
- [ ] VS Code and a browser preview are ready; working scratch HTML file is separate from lecture HTML.
- [ ] DevTools Elements and Styles panels are available.
- [ ] Live example starts with no transform, transition, or animation.
- [ ] Keyboard focus and reduced-motion emulation have been tested.
- [ ] The timed fallback for a 45-minute segment is known.
- [ ] The final student exercise fits into the remaining minutes.

## Selected references

- [Week 8 lecture: CSS motion, libraries, modern styling](css_advanced.html) — full student explanations and examples.
- [Week 7 instructor notes](../week07/week07_live_coding_outline.md) — Grid and pseudo-classes progression.
- [MDN: Using CSS transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Transforms/Using).
- [MDN: Using CSS transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Transitions/Using).
- [MDN: Using CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Animations/Using).
- [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion).
- [Bootstrap 5.3 documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/).
- [Tailwind CSS 4 Play CDN documentation](https://tailwindcss.com/docs/installation/play-cdn) — development-only demonstration.

**Take-home instructor message:** Week 8 should complete CSS with a *small, understandable interactive visual experience*. Students should leave recognizing that CSS alone can react to browser states and perform motion, while JavaScript will provide programmable behavior beginning in Week 9.

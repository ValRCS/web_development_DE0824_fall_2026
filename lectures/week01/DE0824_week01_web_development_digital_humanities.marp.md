---
marp: true
theme: default
size: 16:9
paginate: true
title: 'DE0824 Week 1 — Web Development for Digital Humanities in the AI Era'
description: 'Web foundations, Digital Humanities applications, and responsible AI-assisted development.'
author: 'Valdis Saulespurens'
lang: en
backgroundImage: url('./DE0824_week1_slide_background.jpg')
backgroundSize: cover
style: |
  section {
    justify-content: flex-start;
    padding: 65px 255px 145px 100px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 27px;
    line-height: 1.3;
    color: #173d46;
  }
  h1 { font-size: 47px; line-height: 1.12; color: #005463; margin: 0 0 28px; }
  h2 { font-size: 33px; color: #005463; }
  p, ul, ol, table, pre { margin-top: 0; margin-bottom: 20px; }
  li { margin-bottom: 12px; }
  strong { color: #005463; }
  a { color: #006c80; text-decoration: underline; }
  code { color: #173d46; background: #eef5f6; }
  pre { font-size: 24px; line-height: 1.25; background: #f3f7f8; border: 1px solid #bfd4d8; }
  table { font-size: 25px; width: 100%; }
  th, td { padding: 10px 14px; border-color: #bfd4d8; }
  th { background: #e8f2f4; }
  tr:nth-child(2n) { background: #f5f9fa; }
  section::after { font-size: 18px; color: #173d46; right: 300px; bottom: 126px; }
  section.title { padding: 0; }
  section.compact { font-size: 25px; }
  section.compact li { margin-bottom: 9px; }
---

<!-- _class: title -->
<!-- _paginate: false -->
<!-- _backgroundImage: url('./DE0824_week1_title.jpg') -->

<!--
INSTRUCTOR NOTES — 1. Course direction
Introduce DE0824 and the theme: Web Development for Digital Humanities in the AI Era. The supplied title artwork is the entire first slide; avoid duplicating its title, logos, or contact details. Frame the goal as becoming a researcher who can understand, modify, debug, and publish web materials. Ask who has edited a web page, worked with a digital collection, or used an AI coding assistant. No prior programming fluency is assumed.

AUTHORING AND EXPORT
This deck has 24 slides. Instructor notes are ordinary Marp HTML comments and are not visible on projected slides. The content background applies to slides 2–24 through front matter; the underscore-prefixed override affects only slide 1. The two JPGs must remain beside this file. These are local asset paths, not GitHub blob-page URLs.

From the repository root, with Node.js and Chrome, Edge, or Firefox available, run:
npx @marp-team/marp-cli@4.5.1 lectures/week01/DE0824_week01_web_development_digital_humanities.marp.md --pdf --allow-local-files -o lectures/week01/DE0824_week01_web_development_digital_humanities.pdf
npx @marp-team/marp-cli@4.5.1 lectures/week01/DE0824_week01_web_development_digital_humanities.marp.md --pptx --allow-local-files -o lectures/week01/DE0824_week01_web_development_digital_humanities.pptx

The pinned version makes repeat conversion more predictable. The local-file flag allows the converter to load the adjacent JPGs. Standard PPTX export preserves appearance as slide images and includes speaker notes; it is not a deck of independently editable text boxes. Keep this Markdown as the editable source. PDF normally contains the audience slides, not these instructor notes. Review notes before sharing an exported PPTX with students.

CONTENT PROVENANCE
Adapted from the supplied synopsis of Web_Course_RTU_2020.pdf and the agreed 2026 outline. The construction metaphor, internet/Web history, standards, core technologies, DOM, execution, skills, tools, and references are retained. The two construction-warning slides are combined; the former closing and course-direction objectives are integrated into this 24-slide sequence. Historical roadmap/building images are not embedded because their original assets are not supplied in this repository; their teaching points are preserved in text and discussion.

[Sources]
- Title artwork: https://github.com/ValRCS/web_development_DE0824_fall_2026/blob/main/lectures/week01/DE0824_week1_title.jpg
- Background on slides 2–24: https://github.com/ValRCS/web_development_DE0824_fall_2026/blob/main/lectures/week01/DE0824_week1_slide_background.jpg
- Marp conversion and notes: https://github.com/marp-team/marp-cli
- Marp directives: https://marpit.marp.app/directives
[/Sources]
-->

---

# Why the Web matters for DH

**Digital Humanities connects cultural questions with digital methods.**

- Publish editions, exhibitions, and research findings.
- Explore collections through search, maps, and timelines.
- Connect source images, transcriptions, and metadata.
- Make research usable beyond a specialist audience.

<!--
INSTRUCTOR NOTES — 2. Why web development matters
Start with a question students already understand: how could someone discover and interpret material in an archive? A web interface determines what a visitor can find, compare, and cite. Knowing HTML, CSS, and JavaScript helps researchers evaluate interfaces and communicate with developers even when they do not build an entire system themselves. Define metadata as information describing an item, such as its title, date, creator, and identifier. Ask for one collection or research topic from the group.

[Sources]
- TEI and the representation of texts: https://tei-c.org/
- IIIF and access to digital objects: https://iiif.io/get-started/
- Content-slide artwork (applies throughout): https://github.com/ValRCS/web_development_DE0824_fall_2026/blob/main/lectures/week01/DE0824_week1_slide_background.jpg
[/Sources]
-->

---

# One collection, several layers

**Example: a small collection of historical postcards**

| Layer | What the visitor encounters |
| --- | --- |
| Source | A scan, transcription, and attribution |
| Description | Place, date, creator, and identifier |
| Interface | Browse items or filter by place |
| Publication | A stable page with a link to the source |

<!--
INSTRUCTOR NOTES — 3. A DH project example
This is a proposed teaching example, not a claim about an existing collection. Begin with one item and one static HTML page. Later add CSS and a small JavaScript filter. Maps, timelines, and external APIs are possible extensions, not prerequisites. Define an API as a specified way for software to request data or operations from another component or service. Distinguish the historical object, its digital representation, its description, and the interface. A polished page cannot repair an unsupported date or incorrect attribution.
Prediction question: if the date is unknown, should we leave it unknown or generate a plausible one? Preserve uncertainty explicitly.
-->

---

# Build in small checkpoints

1. Make the smallest working page.
2. Add one meaningful change.
3. Predict and inspect the browser result.
4. Diagnose a mistake and fix its cause.
5. Save a checkpoint; try a small variation.

**Structure first, then presentation and behaviour.**

<!--
INSTRUCTOR NOTES — 4. How we will work
Retain the 2020 house-frame metaphor: a sound structure makes later additions easier. Explain the live-coding rhythm: introduce a small concept, demonstrate it, let students reproduce the result, then ask for a variation. Give students time to inspect rather than judge success by typing speed. Show the difference between saving a file and refreshing the browser. A checkpoint can become a Git commit once that workflow has been introduced. Invite students to say where their result first diverged from the expected result.
-->

---

# Fix the cause, not the symptom

- Random edits make the result harder to explain.
- Copying a large solution can hide a small mistake.
- A page can look correct while links or controls fail.

**Reproduce → inspect → change one thing → test again.**

Ask: *What evidence shows that this change fixed it?*

<!--
INSTRUCTOR NOTES — 5. Construction warnings combined
This combines the old roof-repair and crooked-building messages. Preserve the idea of fragile foundations without requiring those unavailable images. Use a concrete example: a missing image caused by a wrong filename will not be repaired by changing CSS. Later demonstrate a misspelled JavaScript selector; inspect the Console and compare the selector with the HTML. Distinguish reproducing an error from guessing its cause. Do not present mistakes as personal failure: controlled mistakes are part of the practical method.
-->

---

# How a page reaches a browser

1. A **URL** identifies the requested resource.
2. **DNS** resolves its host name to an address.
3. The browser sends an **HTTP request** to a server.
4. The server returns a response, such as HTML.
5. The browser loads resources and displays the page.

**The Internet connects networks; the Web uses them.**

<!--
INSTRUCTOR NOTES — 6. How the internet and Web work
Define browser as client software, server as software responding to requests, and hosting as making site resources available on a server. DNS lookups and resources may already be cached. HTTPS protects HTTP communication using TLS; it does not establish that the page's claims are true. This is a simplified first-visit model, not a protocol trace. Open the Network panel on a small page and identify the document plus an image or stylesheet. A local file opened with file:// can render without making an HTTP request; publication adds the server context.

[Sources]
- https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works
[/Sources]
-->

---

# A short history of the Web

- **Before the Web:** packet networks and the Internet.
- **1989:** Tim Berners-Lee proposes the Web at CERN.
- **1990:** the first web browser and server.
- **1993:** CERN releases Web software into the public domain.
- **Later:** search, social platforms, mobile, and web apps.

**The Web began as a way to share linked information.**

<!--
INSTRUCTOR NOTES — 7. Historical continuity
Preserve the historical arc from the 2020 deck without making students memorize a catalogue of product launches. ARPANET preceded the Web; the Internet is not an invention of 1989. CERN's account documents the 1989 proposal, the first browser/server by the end of 1990, and the 1993 public-domain release. Explain why links and open implementation matter for scholarship: other people can connect to and build on published resources. AI-assisted authoring changes how sites are made, while URLs, documents, and links continue to matter.

[Sources]
- https://home.cern/science/computing/the-birth-of-the-web/short-history-web/
- https://home.cern/science/computing/the-birth-of-the-web/
[/Sources]
-->

---

# Standards make the Web shared

| Technology | Shared agreement |
| --- | --- |
| HTML | Document elements and their meaning |
| CSS | Presentation and layout rules |
| JavaScript | Programming language behaviour |
| DOM | Interfaces for inspecting and changing documents |
| HTTP | Requests and responses between systems |

<!--
INSTRUCTOR NOTES — 8. Standards and implementations
Distinguish a standard, a browser implementation, and a tutorial. WHATWG maintains HTML and DOM living standards; CSS specifications are developed through the W3C CSS Working Group; Ecma TC39 develops ECMAScript, the standardized basis of JavaScript; IETF publishes HTTP specifications. MDN is practical documentation, not the standard itself. Standards do not guarantee identical support in every browser, so compatibility still matters. HTML5 and CSS3 are useful historical labels but not frozen final releases of today's platform. Explain that accessibility also depends on how we use the available elements.

[Sources]
- https://html.spec.whatwg.org/multipage/
- https://dom.spec.whatwg.org/
- https://www.w3.org/Style/CSS/
- https://tc39.es/ecma262/
- https://httpwg.org/specs/rfc9110.html
[/Sources]
-->

---

# Three technologies, three roles

| Technology | Role | Postcard example |
| --- | --- | --- |
| **HTML** | Structure and meaning | Heading, image, caption |
| **CSS** | Presentation and layout | Spacing and readable text |
| **JavaScript** | Programmed behaviour | Filter items by place |

**Begin with useful content and meaningful HTML.**

<!--
INSTRUCTOR NOTES — 9. The durable core
This preserves the original reassurance after the overwhelming skill maps. Make the distinction concrete: changing a heading's wording changes content; changing its color changes presentation; filtering records requires behaviour. The division is a teaching model rather than an absolute boundary: native HTML elements already have behaviours, and CSS can animate presentation. Disable a stylesheet briefly to show that the content still exists. HTML should express meaning, not just produce a particular visual size.

[Sources]
- https://developer.mozilla.org/en-US/docs/Learn_web_development
[/Sources]
-->

---

# The browser builds a DOM tree

```html
<main>
  <h1>Postcards of Riga</h1>
  <p id="description">A small teaching collection.</p>
</main>
```

`main` is the parent of the `h1` and `p` elements.

**JavaScript can select an element and change its text.**

<!--
INSTRUCTOR NOTES — 10. DOM bridge
DOM means Document Object Model. The code is a body fragment, not a complete HTML document. Open Elements/Inspector, expand main, and point out its child elements and their text nodes. This gives a live tree view rather than an extra static diagram. Select the paragraph and edit its text in DevTools; refresh to show that the file was not changed. Distinguish source HTML from the current DOM, which may have been changed by scripts. Preview the later sequence: HTML document, DOM, JavaScript selection, event, change, visible result. Detailed DOM programming returns after JavaScript foundations.

[Sources]
- https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
[/Sources]
-->

---

# What executes our code?

- The browser parses **HTML** into a document structure.
- It applies **CSS**, calculates layout, and paints pixels.
- Its **JavaScript engine** executes JavaScript instructions.
- Browser APIs let scripts work with the page and events.

**HTML and CSS are not compiled like a C++ program.**

<!--
INSTRUCTOR NOTES — 11. Human-readable code and execution
Retain the old human-code/machine-code distinction, but avoid describing all web technologies as one compilation pipeline. Modern JavaScript engines commonly combine interpretation and compilation, including just-in-time compilation. The processor ultimately executes machine instructions, but HTML is markup and CSS is a style language. The DOM is a browser API, not a feature defined by the core ECMAScript language. Keep engine internals brief. Ask which component responds when we change a CSS color and which executes a function after a click.

[Sources]
- https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/How_browsers_work
- https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
[/Sources]
-->

---

# What changed since 2020?

- **Browser capabilities:** more layout work in native CSS.
- **Development environments:** local and cloud options.
- **AI assistance:** completions, explanations, and code drafts.
- **Coding agents:** tools that can act on a repository.

**The tools expanded. HTML, CSS, and JavaScript remain.**

<!--
INSTRUCTOR NOTES — 12. The six-year update
Use examples, not adoption statistics. CSS container queries and native nesting illustrate platform development since 2020; neither is needed for today's first page. Codespaces illustrates a cloud development environment, not a mandatory course dependency. Distinguish a tool becoming more capable from every student needing it. AI can accelerate drafting, but the final result still needs browser inspection and explanation. Avoid claiming that GitHub or browser DevTools were invented after 2020. Product features change, so demonstrate the actual interface available at teaching time.

[Sources]
- https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries
- https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Nesting
- https://docs.github.com/en/codespaces/overview
- https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent
[/Sources]
-->

---

# A roadmap is not a checklist

Professional roadmaps mix many different jobs:

- Interface development and visual design.
- Servers, databases, deployment, and operations.
- Frameworks, testing systems, and specialist tools.

**Our starting point: one page we can explain and debug.**

<!--
INSTRUCTOR NOTES — 13. The roadmap problem
Recall the 2014, 2015, and 2018 expanding skill maps from the previous presentation. Their teaching purpose is reassurance, not a list of required technologies. The original roadmap images are not available among the current repository assets, so this slide preserves the argument without embedding unverified screenshots. A contemporary roadmap can be explored as an optional reference; do not walk through every box in class. Distinguish front end, which runs in the browser, from back end, which serves requests and data. Frameworks can be useful later, after students understand what they abstract.

[Sources]
- Optional roadmap: https://roadmap.sh/frontend
- Course scope: https://github.com/ValRCS/web_development_DE0824_fall_2026/blob/main/README.md
[/Sources]
-->

---

# The first skills that matter

- Read elements, attributes, and file paths in HTML.
- Inspect which CSS rule controls an appearance.
- Read a Console error and locate the relevant code.
- Search documentation using the exact term or error.
- Explain a small change and verify its result.

**Careful observation matters more than typing speed.**

<!--
INSTRUCTOR NOTES — 14. Supporting skills
Update the 2020 list of English, touch typing, and independent searching. Reading technical English remains useful because much documentation and many errors use it. Typing fluency helps, but must not become a gatekeeping criterion. Demonstrate copying a short error message into a search and checking the source and date of the result. Introduce Elements/Inspector, Styles/Computed, Console, and Network by the question each answers. Students do not need to master all panels now. Ask students to describe the expected and actual result before proposing a fix.

[Sources]
- https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools
[/Sources]
-->

---

# LLM assistance needs checking

An **LLM** is a large language model that generates text,
including code, from the context it receives.

- Useful: explain an error or suggest a small example.
- Risk: plausible code can call a nonexistent API.
- Risk: a working answer can hide a gap in understanding.

**Treat generated code as a draft to inspect and test.**

<!--
INSTRUCTOR NOTES — 15. Assistance without mystification
Explain that an LLM response is not evidence that the code was executed. Some tools can run code; others return text only. Ask for one small change, a plain-language explanation, and documentation for unfamiliar methods. A useful prompt is: Explain this error using my existing HTML. Suggest the smallest correction and describe how I can verify it in the browser. Ask students to identify which parts of a response they can independently check. Avoid relying on confident tone or a second model's agreement as validation.

[Sources]
- https://docs.github.com/en/copilot/responsible-use/inline-suggestions
[/Sources]
-->

---

# An agent can act on files

With suitable tools and permissions, a coding agent can:

1. Inspect a repository and plan a change.
2. Edit files and run commands or tests.
3. Inspect results and revise its attempt.
4. Propose changes for human review.

**We still define the task and judge the result.**

<!--
INSTRUCTOR NOTES — 16. Agentic coding
Distinguish chat advice from a tool-using loop that observes results and takes further actions. Capabilities depend on the product, environment, and permissions; not every agent can deploy or open pull requests. Explain repository as a project's files plus version history, and a pull request as a proposed change for review. An instructor demonstration could ask an agent to fix a broken relative link in a small page, then inspect its diff and click the repaired link. Passing automated checks is evidence about those checks, not proof that the whole research interface is correct.

[Sources]
- https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent
[/Sources]
-->

---

# Our AI-assisted workflow

**Ask → inspect → run → debug → simplify → explain**

- State the goal and use the course's existing technologies.
- Inspect every change; check unfamiliar APIs in MDN.
- Try normal use and a deliberate failure case.
- Remove complexity that the task does not require.

**Be able to explain every submitted line of code.**

<!--
INSTRUCTOR NOTES — 17. Course practice
This is the course's working principle, not a new grading rubric. Suggested prompt: Use only vanilla HTML, CSS, and JavaScript. Change only the caption text when the button is clicked. Explain the changed lines and give two browser checks. Students should first predict the result, then execute it. For a filter, check a matching value and a value with no matches. If the answer introduces an unnecessary framework or build step, ask for a smaller browser-native solution. Credit and disclosure requirements should follow the actual assignment instructions; do not invent an institutional rule here.
-->

---

# Research quality still matters

- Keep source metadata separate from generated suggestions.
- Verify names, dates, quotations, and references.
- Preserve uncertain readings and competing interpretations.
- Check image rights, attribution, and access restrictions.
- Test keyboard access, labels, and readable contrast.

**A convincing interface is not evidence of accuracy.**

<!--
INSTRUCTOR NOTES — 18. DH-specific risks
Use an invented example clearly labelled as such: a model expands an uncertain postcard date into a precise year without evidence. Discuss how that error could distort a timeline. Generated descriptions may reproduce bias, erase uncertainty, or imply authority the source does not support. An attractive interface can also exclude users if controls cannot be operated by keyboard. Rights and access conditions must be checked against the actual source; this slide supplies research practice, not a general legal conclusion. Do not upload restricted research data simply because an assistant requests more context.

[Sources]
- Accessibility principles and user needs: https://www.w3.org/WAI/fundamentals/accessibility-intro/
- Limits of generated suggestions: https://docs.github.com/en/copilot/responsible-use/inline-suggestions
[/Sources]
-->

---

# Small projects can be useful

| Research need | Manageable web starting point |
| --- | --- |
| Explain an object | A page with image, caption, and source |
| Compare passages | An edition with linked sections |
| Browse a collection | A list with a small filter |
| Explore a dataset | A labelled table or simple visualisation |

**Start with one question and a small, verified dataset.**

<!--
INSTRUCTOR NOTES — 19. DH opportunities
Connect each idea to the postcard example or a student topic. TEI provides guidelines for representing texts; it is not a web design framework, and a browser does not automatically turn arbitrary TEI XML into a useful edition. IIIF supports interoperable delivery and presentation of digital objects; it is a potential integration context, not a week-one requirement. Later work can connect a simple page to JSON or an API once students understand arrays, objects, and asynchronous requests. A useful first result can be entirely static.

[Sources]
- https://tei-c.org/
- https://iiif.io/get-started/
[/Sources]
-->

---

# Tools for practical work

- **Chrome or Firefox:** display pages and inspect problems.
- **VS Code:** edit plain HTML, CSS, and JavaScript files.
- **Git:** record changes in the project.
- **GitHub:** host the repository and share work.
- **Optional AI assistant:** explain and draft small changes.

[Course repository](https://github.com/ValRCS/web_development_DE0824_fall_2026)

<!--
INSTRUCTOR NOTES — 20. Environment and practical vocabulary
Check access to a browser, editor, and GitHub account. Keep account troubleshooting separate from the conceptual explanation. Introduce repository, clone, status, add, commit, pull, and push through a small demonstration when needed. A commit records a local snapshot; push sends commits to a remote repository. Git and GitHub are different things. Do not make advanced branch workflows or an AI subscription a prerequisite. Codespaces is an optional environment if practical conditions support it. Plain files are sufficient for the initial page; Python, Node frameworks, bundlers, and package managers are not required for the student example.

[Sources]
- https://git-scm.com/docs/gittutorial
- https://docs.github.com/en/get-started/start-your-journey/about-github-and-git
- https://code.visualstudio.com/docs/languages/html
[/Sources]
-->

---

# Find explanations you can trust

- [MDN Learn](https://developer.mozilla.org/en-US/docs/Learn_web_development): guided explanations and examples.
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web): syntax, APIs, and browser compatibility.
- [WHATWG HTML](https://html.spec.whatwg.org/multipage/) and [W3C WAI](https://www.w3.org/WAI/tutorials/): standards and accessibility.
- [freeCodeCamp](https://www.freecodecamp.org/learn/): additional guided practice.
- [Course resource list](../../LEARNING_RESOURCES.md): a focused starting point.

**Check the documentation when advice is uncertain.**

<!--
INSTRUCTOR NOTES — 21. Learning resources
Demonstrate opening one MDN element page and finding its attributes and examples. Beginners should usually start with MDN Learn rather than reading a specification cover to cover. Stack Overflow can help with a specific debugging question, but inspect the date and surrounding code before copying an answer. W3Schools can be a secondary tutorial; it is independent of W3C. freeCodeCamp is supplementary practice, not a requirement to complete its full professional curriculum. The repository resource list offers more options without crowding this slide.

[Sources]
- https://developer.mozilla.org/en-US/docs/Learn_web_development
- https://developer.mozilla.org/en-US/docs/Web
- https://html.spec.whatwg.org/multipage/
- https://www.w3.org/WAI/tutorials/
- https://www.freecodecamp.org/learn/
- https://github.com/ValRCS/web_development_DE0824_fall_2026/blob/main/LEARNING_RESOURCES.md
[/Sources]
-->

---

# First page: predict, then change

1. Create `index.html` with a heading and paragraph.
2. Add a source link and an image with useful alt text.
3. Add one CSS rule; predict its effect.
4. Watch one button change the paragraph text.
5. Change a selector, inspect the error, and repair it.

**Save → refresh → inspect the visible result.**

<!--
INSTRUCTOR NOTES — 22. Live-coding checkpoint
Required student checkpoint: a complete HTML document with a heading, paragraph, descriptive link, and image with alt text. Add CSS only after everyone can open the page. The button and JavaScript are an instructor-led preview, not a requirement to understand functions and events before their later lessons. If time is short, stop after the CSS rule. Use an image the instructor is authorized to share, saved locally as postcard.jpg; students must adapt the alt text to that actual image. The generic text below is only a scaffold for the demonstration.

Begin with this small complete document and add the other parts incrementally:

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Postcards of Riga</title>
</head>
<body>
  <main>
    <h1>Postcards of Riga</h1>
    <p id="description">A small teaching collection.</p>
    <p><a href="https://www.lnb.lv/">National Library of Latvia</a></p>
    <img src="postcard.jpg" alt="Historic postcard showing a street in Riga" width="480">
  </main>
</body>
</html>

Add a style element inside head:

<style>
  h1 { color: teal; }
</style>

Add a button inside main, below the paragraph:

<button id="details-button" type="button">Show collection details</button>

Add a script just before the closing body tag so the elements already exist:

<script>
  const detailsButton = document.querySelector("#details-button");
  const description = document.querySelector("#description");

  function showDetails() {
    description.textContent = "This page is a classroom example, not a catalogue record.";
  }

  detailsButton.addEventListener("click", showDetails);
</script>

Explain the selection/event/change sequence in ordinary language. Predict what happens before clicking. Deliberately change #details-button to #detail-button, refresh, inspect the Console, and compare the selector with the HTML id. Restore the selector. Have students change the heading or paragraph as a small variation. Check the button with Tab and Enter. The general library homepage link is an external-link exercise; it does not establish provenance for the selected postcard. For an actual research item, add its specific source-record link and attribution.

[Sources]
- https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
- https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
- https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
- https://www.w3.org/WAI/tutorials/images/
[/Sources]
-->

---

# The course builds progressively

| Approximate weeks | Main focus |
| --- | --- |
| 1–3 | Web foundations, HTML, semantics, and forms |
| 4–8 | CSS, layout, responsive design, and animation |
| 9–11 | JavaScript values, decisions, and loops |
| 12–14 | Functions, DOM, events, arrays, objects, and JSON |

**Git, debugging, and small exercises run throughout.**

<!--
INSTRUCTOR NOTES — 23. Course roadmap
This grouping follows the current Fall 2026 README's approximate 14-week syllabus, inspected on 7 September 2026. Pace can change according to student progress. Week 1 introduces Git/GitHub alongside the environment and first page. The later emphasis is on understanding and modifying browser-native code. Fetch/API access, publishing, and small DH integrations are possible applications as foundations permit; do not present them as fixed extra weeks or promise an assessment format absent from the syllabus. Point students to the current repository and Moodle for actual assignments and deadlines.

[Sources]
- https://github.com/ValRCS/web_development_DE0824_fall_2026/blob/main/README.md
[/Sources]
-->

---

# What success looks like

You can take a small web page and:

- **Understand** its structure and behaviour.
- **Modify** it for a clear purpose.
- **Debug** it using browser evidence.
- **Publish** it with usable links and attribution.
- **Evaluate** its data and any AI-generated code.

<!--
INSTRUCTOR NOTES — 24. Closing and transition to practice
Return to the opening idea: a researcher who understands the Web can make more informed decisions about digital publication and interfaces. Ask students to name one change they could now make and how they would check it. Use a brief exit question: which technology gives a heading meaning, which controls its color, and which can change its text after a click? Expected answers: HTML, CSS, and JavaScript using the DOM. Then move to the first practical checkpoint or the current Moodle task. End with an achievable action rather than a professional-tool checklist.
-->

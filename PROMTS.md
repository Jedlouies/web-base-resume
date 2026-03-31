AI Use Declaration & Prompt Log
Appendix A: AI Use Declaration
AI Tool(s) Used: Gemini 3 Flash
Purpose of AI Use (check all that apply): * [ ] brainstorming

[x] layout/UI ideas

[x] debugging

[x] code generation

[ ] refactoring

[x] styling suggestions

[ ] other: ____________

Where AI was used (short description):
Applied to the Raven Resume project to implement CSS overlays for background images and to create a fixed parallax scrolling effect for the education section.

I confirm that I reviewed, tested, and understood the final code I submitted.

Appendix B: AI Prompt Log
Entry #1
Tool Used: Gemini 3 Flash
Prompt (copy-paste exactly): ```html

<div class="background-image">
<img src="assets/background.jpg" alt="background">
<div class="overlay">

            </div>
        </div>
How to overlay this

**AI Output (summary):** Provided the CSS positioning logic required to layer a `div` on top of an image. It explained the use of `position: relative` on the parent and `position: absolute` on the child overlay, along with `rgba` for transparency.

**How I used/modified it in my project:** I integrated the absolute positioning and flexbox centering into my `styles.css` to ensure the overlay covered the full width of the background and centered future content.

---

### Entry #2
**Tool Used:** Gemini 3 Flash
**Prompt (copy-paste exactly):**
```text
I want the img to stay where it is while scrolling do not add comments
AI Output (summary): Advised moving the background image from an HTML tag to a CSS background-image property to utilize background-attachment: fixed.

How I used/modified it in my project: I refactored the .education-container to use a CSS-based background. This achieved a professional parallax effect where the image remains stationary as the user scrolls through the resume details.

Entry #3
Tool Used: Gemini 3 Flash
Prompt (copy-paste exactly):

Plaintext
how about if I want to put content?
AI Output (summary): Demonstrated how to nest HTML elements within the overlay div and provided flexbox rules to align that content (headings and paragraphs) perfectly in the center of the background section.

How I used/modified it in my project: I added my university details (USTP) and degree information inside the overlay structure to make the Education section informative yet visually striking.
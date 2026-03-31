# Appendix A: AI Use Declaration

**AI Tool(s) Used:** Gemini
**Purpose of AI Use (check all that apply):** [ ] brainstorming 
[x] layout/UI ideas 
[x] debugging 
[x] code generation 
[ ] refactoring 
[x] styling suggestions 
[ ] other: ____________

**Where AI was used (short description):**
I used AI to help figure out the CSS positioning for a dark overlay on a background image and to implement a fixed parallax scrolling effect for the education section of my resume website.

I confirm that I reviewed, tested, and understood the final code I submitted.

---

# Appendix B: AI Prompt Log

## Entry #1
**Tool Used:** Gemini
**Prompt (copy-paste exactly):** ```html
<div class="background-image">
    <img src="assets/background.jpg" alt="background">
    <div class="overlay">
        
    </div>
</div>

How to overlay this

AI Output (summary or screenshot reference): The AI explained how to use CSS positioning. It suggested setting the parent container to position: relative and the overlay to position: absolute with top: 0 and left: 0, using an rgba background color for transparency.

How I used/modified it in my project: I applied the absolute positioning rules to my .overlay class in styles.css to create a dark, transparent layer over my background image.
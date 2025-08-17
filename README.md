## Etch-a-Sketch

# The goal of the project, as part of the Odin Project Curriculum, was to recreate web version of the classic Etch-A-Sketch game where users choose grid size and adjust it, draw cells in two modes: classic mode and rainbow mode, use eraser to clear cells, clear the entire grid with a shake animation, etc.

# Skills Demonstrated

- using HTML/CSS Layout & Styling
- customizable grid using dynamically sized cells
- custom-styled <input type="range"> slider
- modal popup styling and interaction
- css animation (shake effect)
- JavaScript DOM Manipulation
- creating and updating grid cells dynamically
- manipulating multiple drawing modes (eraser, rainbow, classic)
- event listeners for mouseover, click, and change
- using audio playback in response to user interaction
- updating UI elements (grid size display, slider fill).

State Management

Mode toggling logic to prevent conflicting behaviors.

Example: ensuring only one of erase, rainbow, or classic mode is active at a time.

# Reflection

Building this project was VERY CHALLENGING! I could not figure out my path for two days. However,Etch-A-Sketch experience was very useful. Along the way I got a lot of practice with DOM manipulation and handling user interactions. I had to solve many issues such as how to dynamically create grid cells, manage different drawing modes without them clashing and even style the range slider so it felt more polished.

One of the trickiest parts was managing the eraser mode — it taught me how important it is to keep track of state properly when you have multiple modes interacting at once. Adding little touches like the shake animation and knob sound effects made the project feel much more alive, and gave me a chance to experiment with CSS animations and audio in JavaScript. Eraser mode still needs polishing. I will get back to it soon. I need to move on. 

If I were to keep improving it, I’d like to make it mobile-friendly, maybe change the input checkboxes to radio inputs, maybe even let users save their sketches.

# Attribution

Popup border style from https://codepen.io/tmrDevelops/pen/VeRvKX
Button click sound from (royalty free) https://pixabay.com/sound-effects/search/button-click/
Sticky notes and Github logo from https://www.flaticon.com/search?word=github

const gridContainer = document.getElementById('grid-container');
const etchASketch = document.querySelector('.etch-a-sketch');
const clearBtn = document.getElementById('clear');
const gridSizeControl = document.getElementById('grid-size-control')
const knobLeft = document.querySelector('.left');
const knobRight = document.querySelector('.right');
const modeSelector = document.querySelector('.modeselector');
const sizeDisplay = document.querySelector('.display');
const rainbowMode = document.getElementById('rainbowmodecheckbox');
const classicMode = document.getElementById('classicmodecheckbox');

let rainbowColors = ['#FF0000', '#FFA500', ' #FFFF00', '#008000', '#0000FF', '#4B0082', '#EE82EE'];

const containerSize = parseInt(getComputedStyle(gridContainer).width);

function createGrid(size) {
    gridContainer.innerHTML = "";

    const totalNum = size * size;
    const cellSize = containerSize / size;

    for (let i = 0; i < totalNum; i++) {
        const cell = document.createElement('div');
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        cell.style.border = '0.6px dotted green';

        // this is for hover & erase. i decided to combine everything. Not sure if it was a correct decision

        cell.addEventListener('mouseover', () => {
            if (!eraseMode && !rainbowModeOn && !classicModeOn) return;

            if (eraseMode) {
                cell.style.backgroundColor = 'white';
            } else if (rainbowModeOn) {
                const randomColor = rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
                cell.style.backgroundColor = randomColor;
            } else if (classicModeOn) {
                cell.style.backgroundColor = 'black';
            }
        });

        gridContainer.appendChild(cell);

    }

}


// erase mode assigned to the left knob

let eraseMode = false;

knobLeft.addEventListener('click', () => {
    eraseMode = !eraseMode;
});

// rainbow/classic modes checking

let rainbowModeOn = false;
let classicModeOn = false;

rainbowMode.addEventListener('change', () => {
    rainbowModeOn = rainbowMode.checked;
});

classicMode.addEventListener('change', () => {
    classicModeOn = classicMode.checked;
});

// function to rotate the right knob

createGrid(parseInt(gridSizeControl.value));
sizeDisplay.textContent = `${gridSizeControl.value} x ${gridSizeControl.value}`;


gridSizeControl.addEventListener('input', () => {
    const newSize = parseInt(gridSizeControl.value);
    const maxVal = parseInt(gridSizeControl.max);

    // Update display
    sizeDisplay.textContent = `${newSize} x ${newSize}`;

    // Rotate knob (map range to 0–270°)
    const rotation = (newSize / maxVal) * 270;
    knobRight.style.transform = `rotate(${rotation}deg)`;

    // Redraw grid
    createGrid(newSize);
});


// some itty-bitty animation

clearBtn.addEventListener('click', () => {
    etchASketch.classList.add('shake');

    const cells = gridContainer.querySelectorAll('div');
    cells.forEach(cell => cell.style.background = 'white');
    etchASketch.addEventListener('animationend', () => {
        etchASketch.classList.remove('shake');
    });
});


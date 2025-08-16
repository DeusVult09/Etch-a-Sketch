
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

        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
        });

        gridContainer.appendChild(cell);
    }
}

// function to 
createGrid(parseInt(gridSizeControl.value));


clearBtn.addEventListener('click', () => {
    etchASketch.classList.add('shake');

    const cells = gridContainer.querySelectorAll('div');
    cells.forEach(cell => cell.style.background = 'white');
    etchASketch.addEventListener('animationend', () => {
        etchASketch.classList.remove('shake');
    });
});

// function to erase 

knobLeft.addEventListener('click', () => {
     cell.addEventListener('click', () => {
            cell.style.backgroundColor = 'white';
        });
})


const gridContainer = document.getElementById('grid-container');
const containerSize = parseInt(getComputedStyle(gridContainer).width);
const gridSize = 16;
const cellSize = containerSize / gridSize;

for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement('div');
    Object.assign(cell.style, {
        width: `${cellSize}px`,
        height: `${cellSize}px`,
        border: 'black dashed 1px'
        boxSizing: 'border-box'
    });
    
    gridContainer.appendChild(cell);

}
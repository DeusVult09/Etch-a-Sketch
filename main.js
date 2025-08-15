const gridContainer = document.getElementById('grid-container');
const etchASketch = document.querySelector('.etch-a-sketch');
const clearBtn = document.getElementById('clear');


const containerSize = parseInt(getComputedStyle(gridContainer).width);
const gridSize = 12;
const cellSize = containerSize / gridSize;

for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement('div');
    
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
    cell.style.border = '0.3px solid green';
   
    gridContainer.appendChild(cell);
}
// shake animation
clearBtn.addEventListener('click', () => {
  
  etchASketch.classList.add('shake');
  
  // Clear grid (set all cells back to white)
  const cells = gridContainer.querySelectorAll('div');
  cells.forEach(cell => cell.style.background = 'white');

  // Remove animation class after it finishes
  etchASketch.addEventListener('animationend', () => {
    etchASketch.classList.remove('shake');
  }, { once: true });
});


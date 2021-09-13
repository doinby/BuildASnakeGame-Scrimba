const $grid = document.querySelector('.grid');
const $startButton = document.querySelector('#start');
const $score = document.querySelector('#score');

let squares = [];

function createGrid() {
    for(let i = 0; i < 100; i++) {
        const $square = `<div class="square"></div>`;
        squares = [...squares, $square];
    }
    $grid.innerHTML = squares.join('');    
}

createGrid();
const $grid = document.querySelector('.grid');
const $startButton = document.querySelector('#start');
const $score = document.querySelector('#score');

let squares = [];
let currentSnake = [2, 1, 0];
let direction = 1;

function createGrid() {
    for(let i = 0; i < 100; i++) {
        const $square = `<div class="square"></div>`;
        squares = [...squares, $square];
    }
    $grid.innerHTML = squares.join('');    
}

createGrid();

// Draw snake at the top left
const $squares = document.querySelectorAll('.grid .square');
currentSnake.forEach(index => {
    $squares[index].classList.add('snake');
})

function move() {
    // Remove tail
    const tail = currentSnake[currentSnake.length - 1];
    $squares[tail].classList.remove('snake');

    // Draw new head
    currentSnake = currentSnake.map((snakeElement) => snakeElement + direction);
    const head = currentSnake[0];
    $squares[head].classList.add("snake");
}

move();
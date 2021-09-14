const $grid = document.querySelector('.grid');
const $startButton = document.querySelector('#start');
const $score = document.querySelector('#score');

let squares = [];
let currentSnake = [2, 1, 0];
let direction = 1;
let width = 10;

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
    //remove last element from our currentSnake array
    const tail = currentSnake.pop();
    //remove styling from last element
    $squares[tail].classList.remove("snake");
    //add square in direction we are heading
    currentSnake.unshift(currentSnake[0] + direction);
    //add styling so we can see it
    $squares[currentSnake[0]].classList.add("snake");
}

let timeId = setInterval(move, 1000);

document.addEventListener('keydown', event => {
    switch (event.code) {
        case "ArrowDown":
        direction = width;
        break;
        case "ArrowUp":
        direction = -width;
        break;
        case "ArrowLeft": 
        direction = -1;
        break;
        case "ArrowRight": 
        direction = 1;
        break;
        default:
        return;
    }
    move();
})
const $grid = document.querySelector('.grid');
const $startButton = document.querySelector('#start');
const $score = document.querySelector('#score');

const width = 10;
let squares = [];
let currentSnake = [2, 1, 0];
let direction = 1;
let appleIndex = 0;

function createGrid() {
    for(let i = 0; i < width*width; i++) {
        const $square = `<div class="square"><span>${i}</span></div>`;
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
    if ((currentSnake[0] + width >= width * width && direction === width) || // if snake has hit bottom
    (currentSnake[0] % width === width - 1 && direction === 1) || // if snake has hit right wall
    (currentSnake[0] % width === 0 && direction === -1) || // if snake has hit left wall
    (currentSnake[0] - width < 0 && direction === -width) || // if snake has hit top
    $squares[currentSnake[0] + direction].classList.contains('snake')) // hits itself
    return clearInterval(timerId);
    
    // remove last element from our currentSnake array
    const tail = currentSnake.pop();
    // remove styling from last element
    $squares[tail].classList.remove("snake");
    // add square in direction we are heading
    currentSnake.unshift(currentSnake[0] + direction);
    // add styling so we can see it
    $squares[currentSnake[0]].classList.add("snake");

    $squares.forEach(square => {
        if(square.classList.contains('apple snake')) {
            square.classList.remove('apple');
            console.log('eaten');
        }
    })
}

move();
let timeId = setInterval(move, 1000);


function generateApples() {
    do {
        appleIndex = Math.floor(Math.random() * $squares.length);
    } while($squares[appleIndex].classList.contains('snake')) // while square is snake, find another square
    // When square is not snake, draw an apple
    $squares[appleIndex].classList.add('apple');
}
generateApples();

// Snake control
document.addEventListener('keyup', event => {
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
})

let canvasWidth = 500;
let canvasHeight = 400;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

function draw() {
    background(backgroundImage);
    drawPlayer();
    drawCars();
    movePlayer();
    moveCars();
    resetCars();
}


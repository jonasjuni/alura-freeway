
let canvasWidth = 500;
let canvasHeight = 400;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    trilhaSound.loop();
}

function draw() {
    background(backgroundImage);
    drawPlayer();
    drawCars();
    movePlayer();
    moveCars();
    resetCars();
    checkCollision();
    drawScore();
    increaseScore();
}


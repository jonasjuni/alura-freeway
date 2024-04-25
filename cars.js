//cars

let xCars = [600, 600, 600, 600, 600, 600];
let yCars = [40, 98, 150, 210, 270, 318];
let vCars = [2, 2.5, 3.2, 5, 3.3, 2.3];

let carWidth = 50;
let carHeight = 40;

function drawCars() {
    for (let i = 0; i < carsSprites.length; i++) {
        image(carsSprites[i], xCars[i], yCars[i], carWidth, carHeight);
    }
}

function moveCars() {
    for (let i = 0; i < carsSprites.length; i++) {
        xCars[i] -= vCars[i];
    }
}

function resetCars() {
    for(let i = 0; i < carsSprites.length; i++) {
        if (checkEndPositon(xCars[i])) {
            xCars[i] = 600;
        }   
    }
}
function checkEndPositon(position) {
    return position < -50;
}
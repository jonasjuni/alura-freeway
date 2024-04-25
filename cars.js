//cars

let xCars = [600, 600, 600];
let yCars = [40, 98, 150];
let vCars = [2, 2.5, 3.2];


function drawCars() {
    for (let i = 0; i < carsSprites.length; i++) {
        image(carsSprites[i], xCars[i], yCars[i], 50, 40);
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
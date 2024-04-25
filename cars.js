//cars
let xCar1 = 600;
let yCar1 = 40;
let vCar1 = 2;

let xCar2 = 600;
let yCar2 = 98;
let vCar2 = 2.5;

let xCar3 = 600;
let yCar3 = 150;
let vCar3 = 3.2;

function drawCars() {
    image(car1Sprite, xCar1, yCar1, 50, 40);
    image(car2Sprite, xCar2, yCar2, 50, 40);
    image(car3Sprite, xCar3, yCar3, 50, 40);
}

function moveCars() {
    xCar1 -= vCar1;
    xCar2 -= vCar2;
    xCar3 -= vCar3;
}

function resetCars() {
    if (xCar1 < -50) {
        xCar1 = 600;
    }
    if (xCar2 < -50) {
        xCar2 = 600;
    }
    if (xCar3 < -50) {
        xCar3 = 600;
    }
}
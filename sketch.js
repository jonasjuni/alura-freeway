
let canvasWidth = 500;
let canvasHeight = 400;

let backgroundImage;



let playerSprite;
let xPlayer = 100;
let yPlayer = 370;

//cars
let car1Sprite;
let xCar1 = 400;
let car2Sprite;
let xCar2 = 400;
let car3Sprite;
let xCar3 = 400;

function preload(){
    backgroundImage = loadImage('assets/images/estrada.png');
    playerSprite = loadImage('assets/images/ator-1.png'); 
    car1Sprite = loadImage('assets/images/carro-1.png');
    car2Sprite = loadImage('assets/images/carro-2.png');
    car3Sprite = loadImage('assets/images/carro-3.png');

}
function setup(){
    createCanvas(canvasWidth, canvasHeight);
}

function draw() {
    background(backgroundImage);
    image(playerSprite, xPlayer, yPlayer, 30, 30);
    image(car1Sprite, xCar1, 40, 50, 40);
    image(car2Sprite, xCar2, 98, 50, 40);
    image(car3Sprite, xCar3, 150, 50, 40);
}


let backgroundImage;
let playerSprite;

let car0Sprite;
let car1Sprite;
let car2Sprite;
let carsSprites;

function preload() {
    backgroundImage = loadImage('assets/images/estrada.png');
    playerSprite = loadImage('assets/images/ator-1.png');
    car0Sprite = loadImage('assets/images/carro-1.png');
    car1Sprite = loadImage('assets/images/carro-2.png');
    car2Sprite = loadImage('assets/images/carro-3.png');

    carsSprites = [car0Sprite, car1Sprite, car2Sprite, car0Sprite, car1Sprite, car2Sprite]
}
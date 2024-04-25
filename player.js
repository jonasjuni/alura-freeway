let xPlayer = 90;
let yPlayer = 370;
let score = 0;

function drawPlayer() {
    image(playerSprite, xPlayer, yPlayer, 30, 30);
}

let movementSpeed = 3;
function movePlayer() {
    if (keyIsDown(UP_ARROW)) {
        yPlayer -= movementSpeed;
    }
    if (keyIsDown(DOWN_ARROW) && yPlayer < 370) {
        yPlayer += movementSpeed;
    }
}

function checkCollision() {
    for(let i = 0; i < carsSprites.length; i++) {
         if(collideRectCircle(xCars[i], yCars[i], carWidth, carHeight, xPlayer, yPlayer, 15)){
            collisionSound.play();
            resetPlayer();
            if (score > 0) {
                score -= 1;
            }
         }
    } 
}

function resetPlayer() {
    yPlayer = 370;
}

function drawScore() {
    textSize(25);
    textAlign(CENTER);
    fill(255, 240, 60);
    text(score, width / 5, 27);
}

function increaseScore() {
    if(yPlayer < 15) {
        scoreSound.play();
        score += 1;
        resetPlayer();
    }
}
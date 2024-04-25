
let xPlayer = 100;
let yPlayer = 370;

function drawPlayer() {
    image(playerSprite, xPlayer, yPlayer, 30, 30);
}

let movementSpeed = 3;
function movePlayer() {
    if (keyIsDown(UP_ARROW)) {
        yPlayer -= movementSpeed;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yPlayer += movementSpeed;
    }
}
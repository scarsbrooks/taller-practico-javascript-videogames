/** @type {HTMLCanvasElement} */
const canvas = document.querySelector("#game");
const game = canvas.getContext('2d');
const btnUp = document.querySelector('#up');
const btnDown = document.querySelector('#down');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const spanLives = document.querySelector("#lives");
const spanTime = document.querySelector("#time");
const spanRecord = document.querySelector("#record");
const pResult = document.querySelector("#result");

let canvasSize;
let elemetsSize;
let level = 0;
let lives = 3;

let timeStart;
let timePlayer;
let timeInterval;



const playerPosition = {
    x: undefined,
    y: undefined
}

const giftPosition = {
    x: undefined,
    y: undefined
}

let enemyPositions = [];
// const start = {
//     x: undefined,
//     y: undefined
// }

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize() {
    if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.7;
    } else {
        canvasSize = window.innerHeight * 0.7;
    }
    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    elemetsSize = (canvasSize / 10) - 1;
    startGame();
}

function startGame() {

    // console.log({
    //     canvasSize,
    //     elemetsSize
    // });

    game.font = elemetsSize + 'px Verdana';
    game.textAlign = '';

    const map = maps[level];
    if (!map) {
        gameWin();
        return;
    }
    if (!timeStart) {
        timeStart = Date.now();
        timeInterval = setInterval(showTime, 100);
        showRecord();
    }

    const mapRow = map.trim().split('\n');
    const mapRowCols = mapRow.map((row) => row.trim().split(''))

    // for (let i = 1; i <= 10; i++) {
    //     for (let j = 0; j < 10; j++) {
    //         game.fillText(emojis[mapRowCols[i - 1][j]], elemetsSize * j, elemetsSize * i);

    //     }

    // }
    showLives();
    enemyPositions = []
    game.clearRect(0, 0, canvasSize, canvasSize);
    //forma de resolverlo con forEach
    mapRowCols.forEach((row, rowI) => {
        row.forEach((col, colI) => {
            const emoji = emojis[col];
            const posX = elemetsSize * colI;
            const posY = elemetsSize * (rowI + 1);


            if (col == 'O') {
                if (!playerPosition.x && !playerPosition.y) {
                    playerPosition.x = posX;
                    playerPosition.y = posY;
                    console.log({ playerPosition })
                }
                // start.x = posX;
                // start.y = posY;
                // console.log({ playerPosition });
            } else if (col == 'I') {
                giftPosition.x = posX;
                giftPosition.y = posY;

            } else if (col == 'X') {
                enemyPositions.push({
                    x: posX,
                    y: posY
                })
            }

            game.fillText(emoji, posX, posY);
        });
    });

    movePlayer();

    // game.fillRect(0, 0, 100, 100);
    // game.clearRect(, 50, 50, 50);
    // game.font = '25px Verdana';
    // game.fillStyle = 'purple';
    // game.textAlign = 'right';
    // game.fillText('Platzi', 25, 25)
}

function movePlayer() {
    const giftCollisionY = playerPosition.y.toFixed(2) == giftPosition.y.toFixed(2);
    const giftCollisionX = Math.abs(playerPosition.x.toFixed(2)) == giftPosition.x.toFixed(2);
    const giftCollision = giftCollisionY && giftCollisionX;


    if (giftCollision) {
        levelWin();
        return;
    }

    const enemyCollision = enemyPositions.find(enemy => {
        const enemyCollitionX = enemy.x.toFixed(2) == parseFloat(playerPosition.x).toFixed(2);
        const enemyCollitionY = enemy.y.toFixed(2) == parseFloat(playerPosition.y).toFixed(2);
        return enemyCollitionX && enemyCollitionY;
    });

    if (enemyCollision) {
        levelFail();

    }

    // game.fillText(emojis['-'], playerPosition.x, playerPosition.y)
    game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y);
    // if (playerPosition.x != start.x || playerPosition.y != start.y) {
    //     game.fillText(emojis['O'], start.x, start.y);
    // }
}
function levelWin() {
    level++;
    console.log({ timeInterval })
    startGame();
}
function gameWin() {
    console.log({ timeInterval })
    clearInterval(timeInterval);
    console.log({ timeInterval })
    console.log("sUPERASTE TODOS LOS NIVELES!!");
    const recordTime = localStorage.getItem('record_time');

    // const playerTime = Date.now() - timeStart;
    const playerTime = Number(spanTime.innerHTML);
    if (recordTime) {
        if (recordTime >= playerTime) {
            localStorage.setItem("record_time", playerTime);
            pResult.innerHTML = 'Superaste el Record';
        } else {
            pResult.innerHTML = 'No superaste el Record';
        }
    } else {
        localStorage.setItem('record_time', playerTime)
    }
}

function showLives() {
    const heartsArray = Array(lives).fill(emojis['HEART']);
    // console.log(heartsArray);
    spanLives.innerHTML = emojis['HEART'].repeat(lives);
    // spanLives.innerHTML = ''
    // heartsArray.forEach(heart => {
    //     spanLives.append(heart)
    // });
}

function showRecord() {
    spanRecord.innerHTML = localStorage.getItem("record_time")
}

function showTime() {
    spanTime.innerHTML = Date.now() - timeStart;
}

function levelFail() {
    lives--;

    // console.log(lives);
    if (lives <= 0) {
        level = 0;
        lives = 3;
        timeStart = undefined;
    }
    playerPosition.x = undefined;
    playerPosition.y = undefined;
    startGame();
}

window.addEventListener('keydown', moveByKeys)
btnUp.addEventListener('click', moveUp);
btnRight.addEventListener('click', moveRight);
btnLeft.addEventListener('click', moveLeft);
btnDown.addEventListener('click', moveDown);

function moveByKeys(event) {
    // console.log(event);
    if (event.key == "ArrowUp") {
        moveUp();
    } else if (event.key == "ArrowLeft") {
        moveLeft();
    } else if (event.key == "ArrowRight") {
        moveRight();
    } else if (event.key == "ArrowDown") {
        moveDown();
    }

}

function moveUp() {

    if (Math.floor(playerPosition.y) > elemetsSize) {
        playerPosition.y -= elemetsSize;
        startGame();
    }
}

function moveLeft() {

    if (Math.floor(playerPosition.x) > 0) {
        playerPosition.x -= elemetsSize;
        startGame();
    }
}

function moveRight() {

    if ((playerPosition.x + elemetsSize) < (canvasSize - elemetsSize)) {
        playerPosition.x += elemetsSize;
        startGame();
    }
}

function moveDown() {
    if (playerPosition.y + elemetsSize < canvasSize) {
        playerPosition.y += elemetsSize;
        startGame();
    }
}


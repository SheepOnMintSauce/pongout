window.onload = init;
const canvas = document.createElement("canvas");
const gamearea = canvas.getContext('2d');
var paddles = [];
var levels = [];
var currLevel = 0;
var blip1;
var blip2;
var bricksplode;
var soundOn = true;
var t1,t2 = 0;
var pongBrick = new Image(16,32);
var redBrick = new Image(16,32);
var greenBrick = new Image(16,32);
var blueBrick = new Image(16,32);
var yellowBrick = new Image(16,32);
var purpleBrick = new Image(16,32);
var lBlueBrick = new Image(16,32);
//global stuff

function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.border = "0";
    blip1 = document.getElementById("blip");
    blip2 = document.getElementById("blip2");
    bricksplode = document.getElementById("brick");
    pongBrick.src="pongBrick.png";
    redBrick.src="redBrick.png";
    greenBrick.src="greenBrick.png";
    blueBrick.src="blueBrick.png";
    yellowBrick.src="yellowBrick.png";
    purpleBrick.src="purpleBrick.png";
    lBlueBrick.src="lBlueBrick.png";
    document.body.appendChild(canvas);
    gamearea.fillStyle = 'black';
    gamearea.fillRect(0,0,canvas.width,canvas.height);
    canvas.addEventListener("mouseenter", (e) => {canvas.style.cursor = "none"});
    canvas.addEventListener("mouseleave", (e) => {canvas.style.cursor = "default"});
    window.addEventListener("keyup", (e) => {if (e.code==='KeyS') {soundOn = !soundOn}});
    paddles.push(new Paddle(canvas.width/16,canvas.height/2,"Player"));
    paddles.push(new Paddle(canvas.width-canvas.width/16,canvas.height/2,"Reflect"));
    
    ball = new Ball();
    
    for (paddle of paddles) {
        canvas.addEventListener('mousemove', paddle.setupPaddle.bind(paddle));
        paddle.drawPaddle();
    }
    for (let l=0;l<=19;l++) {
        levels.push(new Screen(l));
    }
    window.requestAnimationFrame(gameLoop); //seems to be smoother :)
}

function giveRand(max) {
    var randy = Math.floor(Math.random()*Math.floor(max));
    return randy;
}

function gameLoop() { //this will need to encompass the current code in a level, with a menu
    t1 = performance.now();
    gamearea.fillStyle = 'black';
    gamearea.fillRect(0,0,canvas.width,canvas.height);
    for (paddle of paddles) {
        paddle.updatePaddle();
        paddle.drawPaddle();
    }
    if (!levels[currLevel].getNumBricks()) {
        currLevel++;
    }
    levels[currLevel].drawLevel();
    ball.updateBall();
    ball.drawBall();
    t2 = performance.now();
    console.log(t2-t1);
    window.requestAnimationFrame(gameLoop);
}
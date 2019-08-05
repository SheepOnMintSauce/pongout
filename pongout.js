window.onload = init;
const canvas = document.createElement("canvas");
const gamearea = canvas.getContext('2d');
var paddles = [];
var levels = [];
var currLevel = 0;
//global stuff

function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.border = "0";

    document.body.appendChild(canvas);
    gamearea.fillStyle = 'black';
    gamearea.fillRect(0,0,canvas.width,canvas.height);
    canvas.addEventListener("mouseenter", (e) => {canvas.style.cursor = "none"});
    canvas.addEventListener("mouseleave", (e) => {canvas.style.cursor = "default"});
    paddles.push(new Paddle(canvas.width/16,canvas.height/2,"Player"));
    paddles.push(new Paddle(canvas.width-canvas.width/16,canvas.height/2,"Reflect"));
    ball = new Ball();
    
    for (paddle of paddles) {
        paddle.drawPaddle();
    }
    for (let l=0;l<=19;l++) {
        levels.push(new Screen(l));
    }
    window.setInterval(gameLoop,1000/30);
}

function giveRand(max) {
    var randy = Math.floor(Math.random()*Math.floor(max));
    return randy;
}

function gameLoop() { //this will need to encompass the current code in a level, with a menu
    gamearea.fillStyle = 'black';
    gamearea.fillRect(0,0,canvas.width,canvas.height);
    for (paddle of paddles) {
        paddle.updatePaddle();
        paddle.drawPaddle();
    }
    ball.updateBall();
    ball.drawBall();
    if (levels[currLevel].getNumBricks() == 0) {
        currLevel++;
    }
    levels[currLevel].drawLevel();
    
}

class Paddle {
    constructor(x,y,type) {
        this.x = x;
        this.y = y;
        this.width = 8;
        this.height = 80;
        this.type = type;
        this.score = 0;
    }

    updatePaddle() {
        if (this.type == "Player") {
            document.addEventListener('mousemove', (e) => { this.y = e.clientY; });
        }
        if (this.type == "Reflect") {
            document.addEventListener('mousemove', (e) => { this.y = canvas.height-e.clientY; });
        }
        if (this.y < this.height/2) { this.y = this.height/2;}
        if (this.y > canvas.height-this.height/2) { this.y = canvas.height-this.height/2} 
    }

    drawPaddle() {
        gamearea.fillStyle = 'white';
        gamearea.fillRect(this.x-this.width/2,this.y-this.height/2,this.width,this.height);
    }

}
class Paddle {
    constructor(x,y,type) {
        this.x = x;
        this.y = y;
        this.width = 8;
        this.height = 80;
        this.type = type;
        this.score = 0;
        this.firstRun = true;
    }
    setupPaddle(e) {
        if (this.type == "Player") {
            this.y = e.clientY;
        }
        if (this.type == "Reflect") {
            this.y = canvas.height-e.clientY;
        }
    }

    updatePaddle() {
        if (this.y < this.height/2) { this.y = this.height/2;}
        if (this.y > canvas.height-this.height/2) { this.y = canvas.height-this.height/2} 
    }

    drawPaddle() {
        gamearea.fillStyle = 'white';
        gamearea.fillRect(this.x-this.width/2,this.y-this.height/2,this.width,this.height);
    }
}


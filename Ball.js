class Ball {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.radius = 8;
        this.xVel = 0;
        this.yVel = 0;
        this.lastHitBy; //needs to be paddle objects "players"
        this.launched = false;
        this.maxSpeed = 25;
        this.pOffset = 0;
        if (this.lastHitBy == null) {
            var pick = new Date().getTime()%2;
            this.lastHitBy = paddles[pick];
        }
    }

    updateBall() {
        if (this.launched) {

            for (paddle of paddles) {
                if (this.collidesWith(paddle)) {
                    this.lastHitBy = paddle; // references the paddle that collided with ball
                    if (Math.abs(this.lastHitBy.y-this.y) > this.lastHitBy.height/4) {
                        this.xVel = -this.xVel;
                        this.yVel = -this.yVel*2; //end parts of the paddle hit
                    } else {
                        this.xVel = -this.xVel*2;
                        this.yVel = this.yVel; //default reflection
                    }
                }
            }

            /* for (i=bricks.length;i<=0;i--) {
                if (this.collidesWith(brick)) {
                    this.xVel = -this.xVel;
                    this.yVel = -this.yVel;
                    if (brick.strength == 0) {
                        bricks.splice(index,1); 
                        this.lastHitBy.score = this.lastHitBy.score + brick.points;
                    } else {
                        brick.strength = brick.strength - 1;
                    }
                }
            } */

            Math.abs(this.xVel) >= this.maxSpeed ? this.xVel = this.xVel*0.5 : this.xVel = this.xVel;
            Math.abs(this.yVel) >= this.maxSpeed ? this.yVel = this.yVel*0.5 : this.yVel = this.yVel;
            this.x = this.x+this.xVel;
            this.y = this.y+this.yVel;
            this.edges();

        } else {
            if (this.lastHitBy == paddles[0]) {
                this.x = this.lastHitBy.x+this.lastHitBy.width/2+this.radius;
            } else if (this.lastHitBy == paddles[1]) {
                this.x = this.lastHitBy.x-this.lastHitBy.width/2-this.radius;
            }
            this.y = this.lastHitBy.y;
            canvas.addEventListener('mousedown',this.launchBall);
        }
    }

    drawBall() {
        gamearea.fillStyle = 'white';
        gamearea.beginPath();
        gamearea.ellipse(this.x,this.y,this.radius,this.radius,0,0,2*Math.PI);
        gamearea.fill();
    }

    collidesWith(obj) {
        if ((Math.abs(obj.x-this.x) <= obj.width/2+this.radius) && (Math.abs(obj.y-this.y) <= obj.height/2+this.radius)){ 
            return true;
        } else {
            return false;
        }
    }
    
    edges() {
        if (this.x-this.radius <= 0 || this.x+this.radius >= canvas.width) {
            this.lastHitBy.score++;
            this.launched = false;
        }
        if (this.y-this.radius <= 0 || this.y+this.radius >= canvas.height) {
            this.yVel = -this.yVel;
        }
    }

    launchBall(e) {
        if (e.buttons == 1) {
            if (ball.lastHitBy == paddles[0]) {
                ball.x = ball.x + 1;
                ball.xVel = Math.max(5,giveRand(15));
                ball.yVel = Math.max(5,giveRand(8));
            } else {
                ball.x = ball.x - 1; //stops initial collision
                ball.xVel = -Math.max(5,giveRand(15));
                ball.yVel = -Math.max(5,giveRand(8));
            }
            ball.launched = true;
            canvas.removeEventListener('mousedown', ball.launchBall);
        }        
    }
}


class Ball {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.radius = 8;
        this.xVel = 0;
        this.yVel = 0;
        this.lastHitBy; //needs to be paddle objects "players"
        this.launched = false;
        this.maxSpeed = 3;
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
                    this.xVel = -this.xVel;
                    this.yVel = -this.yVel;
                }
            }

            /* for (i=bricks.length;i<=0;i--) {
                if (this.collidesWith(brick)) {
                    this.xv = -this.xv;
                    this.yv = -this.yv;
                    if (brick.strength == 0) {
                        bricks.splice(index,1); 
                        this.lastHitBy.score = this.lastHitBy.score + brick.points;
                    } else {
                        brick.strength = brick.strength - 1;
                    }
                }
            } */

            //this.xVel >= this.maxSpeed ? this.xVel = this.maxSpeed : this.xVel = this.xVel;
            //this.yVel >= this.maxSpeed ? this.yVel = this.maxSpeed : this.yVel = this.yVel;
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
        if (Math.sqrt(Math.pow(this.x-obj.x,2)+Math.pow(this.y-obj.y,2)) <= 20){ 
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
            ball.launched = true;
            
            if (ball.lastHitBy == paddles[0]) {
                ball.xVel = 5;
                ball.yVel = 5;
            } else {
                ball.xVel = -5;
                ball.yVel = -5;
            }
            canvas.removeEventListener('mousedown', ball.launchBall);
        }        
    }
}


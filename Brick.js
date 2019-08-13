class Brick {
    constructor(x,y,color,strength,points) {
        this.x = x;
        this.y = y;
        this.width = 16; //white brick 8;
        this.height = 32; //white brick 16;
        this.color = color; //must be string 'rgba(r,g,b)' or the world may implode
        this.strength = strength;
        this.points = points;
        this.bType = 0;
    }

    setX(newX) {
        this.x = newX;
    }

    setY(newY) {
        this.y = newY;
    }

    drawBrick() {
        switch(this.color) {
            case 'pongBrick': {
                gamearea.drawImage(pongBrick,this.x-this.width/2,this.y-this.height/2);
                break;
            }
            case 'redBrick': {
                gamearea.drawImage(redBrick,this.x-this.width/2,this.y-this.height/2);
                if (this.strength < 1) {
                    //drawCracks
                }
                break;
            }
            case 'greenBrick': {
                gamearea.drawImage(greenBrick,this.x-this.width/2,this.y-this.height/2);
                if (this.strength < 1) {
                    //drawCracks
                }
                break;
            }
            case 'blueBrick': {
                gamearea.drawImage(blueBrick,this.x-this.width/2,this.y-this.height/2);
                if (this.strength < 1) {
                    //drawCracks
                }
                break;
            }
            case 'yellowBrick': {
                gamearea.drawImage(yellowBrick,this.x-this.width/2,this.y-this.height/2);
                if (this.strength < 1) {
                    //drawCracks
                }
                break;
            }
            case 'purpleBrick': {
                gamearea.drawImage(purpleBrick,this.x-this.width/2,this.y-this.height/2);
                if (this.strength < 1) {
                    //drawCracks
                }
                break;
            }
            case 'lBlueBrick': {
                gamearea.drawImage(lBlueBrick,this.x-this.width/2,this.y-this.height/2);
                if (this.strength < 1) {
                    //drawCracks
                }
                break;
            }
            

        }
        
    }
}


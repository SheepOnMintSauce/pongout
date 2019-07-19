class Brick {
    constructor(x,y,color,strength,points,bType,bonus) {
        this.x = x;
        this.y = y;
        this.width = 8;
        this.height = 16;
        this.color = color; //must be string 'rgb(x,y,z)' or the world may implode
        this.strength = strength;
        this.points = points;
        this.bType = bType;
    }

    drawBrick() {
        // I LOVE MY BBBBRICK!
        gamearea.fillStyle = this.color;
        gamearea.fillRect(this.x-this.width/2,this.y-this.width/2,this.width,this.height);
    }
}


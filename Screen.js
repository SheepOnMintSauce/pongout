class Screen {
    constructor(id) {
        this.id = id;
        this.sBricks = [];
        this.numBricks = 0; //needs to be setup after the level is created.
        this.setUp();
    }

    setUp() {
        /*bricks[0]= new Brick("rgb(255,255,255)",1,1);
        bricks[1]= new Brick("rgb(255,0,0)",2,10);
        bricks[2]= new Brick("rgb(0,255,0)",3,20);
        bricks[3]= new Brick("rgb(0,0,255)",4,40);
        bricks[4]= new Brick("rgb(0,255,255)",5,50);
        bricks[5]= new Brick("rgb(255,255,0)",6,60);
        bricks[6]= new Brick("rgb(255,0,255)",7,70);
        bricks[7]= new Brick("rgb(128,255,255)",8,80);
        bricks[8]= new Brick("rgb(255,128,255)",9,90);
        bricks[9]= new Brick("rgb(255,255,128)",10,100); */

        if (this.id==0) {
            for(let b=1; b<=28; b++) {
                this.numBricks = this.sBricks.push(new Brick(canvas.width/2,b*32,'white',1,1));
            }
        }
    }

    getNumBricks() {
        return this.numBricks;
    }

    drawLevel() {
        if (this.id == 0) {
            for (let b of this.sBricks) {
                b.drawBrick();
            }
        }
    }

}
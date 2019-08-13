class Screen {
    constructor(id) {
        this.id = id;
        this.sBricks = [];
        this.numBricks = 0; //needs to be setup after the level is created.
        this.setUp();
    }

    setUp() {
        if (this.id==0) {
            for(let b=1; b<=19; b++) {
                this.numBricks = this.sBricks.push(new Brick(canvas.width/2,b*48,'pongBrick',1,1));
            }
        }
        if (this.id==1) {

        }

    }

    getNumBricks() {
        return this.numBricks;
    }

    drawLevel() {
        //if (this.id == 0) {
            for (let b of this.sBricks) {
                b.drawBrick();
            }
        //}
    }

}
var glux = require('./classes.js');
module.exports =class Xotaker  extends Glux{
    constructor(x, y, index,ser) {
        super(x,y,index,ser);
        this.multiply = Math.round(Math.random() * 8);
        this.speed = 8;
    }
    
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

  



    sharjvel() {
        if(or==0){
        var vandakik = this.yntrelVandak(0);
        var vand = vandakik[Math.floor(Math.random() * vandakik.length)];
        if (vand && this.multiply >= this.speed / 4) {
            this.energy--;
            matrix[this.y][this.x] = 0;
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = 2;
            this.multiply = 0;
        }
    }
    }

    utel() {
        this.energy--;

        if(weather == "garun")
            this.energy++;

        this.multiply++;
        var vandakik = this.yntrelVandak(1);
        var vand = vandakik[Math.floor(Math.random() * vandakik.length)];
        if (vand && this.multiply >= this.speed / 8) {
            this.energy += this.speed;
            matrix[this.y][this.x] = 0;
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = 2;
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1);
                    chaps_3--;
                }
            }
        }
        else this.sharjvel();

    }

    bazmanal() {
        if(or==0){
        var vandakik = this.yntrelVandak(0);
        var vand = vandakik[Math.floor(Math.random() * vandakik.length)];
        if (vand && this.energy >= this.speed) {
            this.energy = 1;
            var newxotaker = new Xotaker(vand[0], vand[1], 2);
            xotakerArr.push(newxotaker);
            chaps_4++;
        }
    }
}

    mahanal() {
        if(weather == "dzmer")
            this.energy--;

        

        if (this.energy <= -(this.speed / 2)) {
            matrix[this.y][this.x] = 0;
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                   chaps_4--;
                    xotakerArr.splice(i, 1);
                }
            }
        }
    }
}

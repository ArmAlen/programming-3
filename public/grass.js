
var glux = require('./classes.js');
module.exports = class Grass extends Glux {
    constructor(x, y, index) {
        super(x,y,index);
        this.multiply = Math.round(Math.random() * 8);
        this.speed = 8;

    }

yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }


   

    mul() {
        this.multiply+=100000;
        var vandakik = this.yntrelVandak(0);
        this.direction = vandakik[Math.floor(Math.random() * vandakik.length)];
        if (this.multiply >= this.speed && this.direction) {
            var newGrass = new Grass(this.direction[0], this.direction[1], this.index);
            newGrass.parentX = this.x;
            newGrass.parentY = this.y;
            grassArr.push(newGrass);
            matrix[this.direction[1]][this.direction[0]] = this.index;
            this.multiply = 0;
            chaps_3++;
        }
    }
}

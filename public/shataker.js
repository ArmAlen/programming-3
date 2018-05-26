var glux = require('./classes.js');
module.exports =class Shataker extends Glux {
    
    

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
        if (vand && this.multiply >= this.speed / 2) {
            this.energy--;
            matrix[this.y][this.x] = 0;
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = 4;
        }
    }
}

    utel() {
        var  tiv = 3;
        if(weather=="dzmer"){
            this.energy-=2;
            tiv = 3;
        }

        if(weather=="garun"){
            this.energy++;
            tiv = 3;
        }

        if(weather=="amar" || weather=="ashun"){
            this.energy--;
            tiv = 2;
        }

        var vandakik = this.yntrelVandak(tiv);
        var vand = vandakik[Math.floor(Math.random() * vandakik.length)];
        if (vand && this.multiply >= this.speed / 2) {
            this.energy += this.speed/2;
            matrix[this.y][this.x] = 0;
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = 4;
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1);
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
            var newshataker = new Shataker(vand[0], vand[1], 4);
            shatakerArr.push(newshataker);
            chaps_2++;
        }
    }
}

    mahanal() {
        if(weather=="dzmer"){
            this.energy--;
        }

        if(weather=="garun"){
            this.energy++;
        }

        if (this.energy <= -(this.speed / 2)) {
            matrix[this.y][this.x] = 0;
            for (var i in shatakerArr) {
                if (shatakerArr[i].x == this.x && shatakerArr[i].y == this.y) {
                    chaps_2--;
                    shatakerArr.splice(i, 1);
                }
            }
        }
    }
}

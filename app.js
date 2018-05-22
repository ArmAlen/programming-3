var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var random = require("./rand.js");

global.Glux = require("./public/classes.js");
var gishatich = require("./public/gishatich.js");
var grass = require("./public/grass.js");
var shataker = require("./public/shataker.js");
var xotaker = require("./public/xotaker.js");
global.exanak = 1;
var or = 0;

var weather = "amar";

global.matrix = [];
global.w = 30;
global.h = 30;

global.grassArr = [];
global.xotakerArr = [];
global.gishatichArr = [];
global.shatakerArr = [];

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.redirect("public");
});

server.listen(3000, function () {
    console.log("Server@ sksec ashxatel");
});

function ora() {
    or++;
    if(or==2)
    or=0;
    io.sockets.emit("change or", or);
}

function exan() {
    exanak++;
    if (exanak == 1) {
        weather = "garun";
    }

    if (exanak == 2) {
        weather = "amar";
    }

    if (exanak == 3) {
        weather = "ashun";
    }

    if (exanak == 4) {
        weather = "dzmer";
    }
    if (exanak == 5) { exanak = 0; }
    io.sockets.emit("change weather", weather);
}



for (var y in matrix) {
    for (var x in matrix[y]) {
        if (matrix[y][x] == 1) {
            grassArr.push(new Grass(x * 1, y * 1, 1));
        }
        else if (matrix[y][x] == 2) {
            xotakerArr.push(new Xotaker(x * 1, y * 1, 2));
        }
        else if (matrix[y][x] == 3) {
            gishatichArr.push(new Gishatich(x * 1, y * 1, 3))
        }
        else if (matrix[y][x] == 4) {
            shatakerArr.push(new Shataker(x * 1, y * 1, 4))
        }
    }
}

function DrawServer() {
    matrix = genMatrix(w, h);
    function genMatrix(w, h) {
        for (var y = 0; y < h; y++) {
            matrix[y] = [];
            for (var x = 0; x < w; x++) {
                var r = random(110);
                if (r < 15) r = 0;
                else if (r < 80) r = 1;
                else if (r < 90) r = 2;
                else if (r < 100) r = 3;
                else if (r < 110) r = 4;
                matrix[y][x] = r;
            }
        }
        return matrix;
    }



    for (var i in grassArr) {
        grassArr[i].mul();
    }

    for (var i in xotakerArr) {
        xotakerArr[i].bazmanal();
        xotakerArr[i].utel();
        xotakerArr[i].mahanal();
    }

    for (var i in gishatichArr) {
        gishatichArr[i].bazmanal();
        gishatichArr[i].utel();
        gishatichArr[i].mahanal();
    }

    for (var i in shatakerArr) {
        shatakerArr[i].bazmanal();
        shatakerArr[i].utel();
        shatakerArr[i].mahanal();
    }
    io.sockets.emit('matrix', matrix);
}

setInterval(DrawServer, 300);
setInterval(exan, 8000);    
setInterval(ora, 4000);    

io.on('connection', function (socket) {


});


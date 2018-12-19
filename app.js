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
global.gishach = 0;
global.or = 0;
global.chaps_2=0;
global.chaps_3=0;
global.chaps_4=0;

global.weather = "amar";

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

server.listen(process.env.PORT || 3000, function () {
    console.log("Server@ sksec ashxatel");
});

function ora() {
    or++;
    if (or == 2)
        or = 0;
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

function genMatrix(w, h) {
    for (var y = 0; y < h; y++) {
        matrix[y] = [];
        for (var x = 0; x < w; x++) {
            var r = random(110);
            if (r < 35) r = 0;
            else if (r < 40) r = 1;
            else if (r < 60) r = 2+Math.round(Math.random())/2;
            else if (r < 90) r = 3+Math.round(Math.random())/2;
            else if (r < 100) r = 4+Math.round(Math.random())/2;
            matrix[y][x] = r;
        }
    }
    return matrix;
}
matrix = genMatrix(w, h);


for (var y in matrix) {
    for (var x in matrix[y]) {
        if (matrix[y][x] == 1) {

            grassArr.push(new grass(x * 1, y * 1, 1,"none"));
            chaps_4++;
        }
        else if (matrix[y][x] == 2 || matrix[y][x] == 2.5) {
            var ser = (matrix[y][x]==Math.round(matrix[y][x]))?"arakan":"igakan";
            xotakerArr.push(new xotaker(x * 1, y * 1, matrix[y][x], ser));
            chaps_3++;
            
        }
        else if (matrix[y][x] == 3 || matrix[y][x] == 3.5) {
            var ser = (matrix[y][x]==Math.round(matrix[y][x]))?"arakan":"igakan";
            gishatichArr.push(new gishatich(x * 1, y * 1,matrix[y][x],ser));
            gishach++;
        }
        else if (matrix[y][x] == 4 || matrix[y][x] == 4.5) {
            var ser = (matrix[y][x]==Math.round(matrix[y][x]))?"arakan":"igakan";
            shatakerArr.push(new shataker(x * 1, y * 1,matrix[y][x], ser));
            chaps_2++;
            
        }
    }
}

function DrawServer() {
    
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



function statistik(){
    
    if(gishach < 1)
    gishach=1;

    io.sockets.emit("chaps_1", gishach);
 
    if(chaps_2 < 1)
    chaps_2=1;

    io.sockets.emit("chaps_2", chaps_2);

    if(chaps_3 < 1)
    chaps_3=1;

    io.sockets.emit("chaps_3", chaps_3);

    if(chaps_4 < 1)
    chaps_4=1;

    io.sockets.emit("chaps_4", chaps_4);
}



setInterval(DrawServer, 500);
setInterval(exan, 6000);
setInterval(ora, 3000);
setInterval(statistik, 200);


io.on('connection', function (socket) {


});


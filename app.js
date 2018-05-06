var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var gishatich = require("./classes/gishatic");
var grass = require("./classes/grass");
var grass = require("./classes/shataker");
var grass = require("./classes/xotaker");

var matrix = [];
var w = 30;
var h = 30;
var side = 24;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var shatakerArr = [];

app.use(express.static("public"));

app.get("/", function(req, res){
   res.redirect("public");
});

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});


DrawServer (){

  background("#acacac");
for(var y in matrix) {
    for(var x in matrix[y]) {
        if(matrix[y][x] == 0) {
            fill("#acacac");
        }
        else if(matrix[y][x] == 1) {
            fill("#229954  ");
        }
        else if(matrix[y][x] == 2) {
            fill("#F1C40F");
        }
        else if(matrix[y][x] == 3) {
            fill("#CB4335");
        }
        else if(matrix[y][x] == 4) {
            fill("#9B59B6");
        }
        rect(x * side, y * side, side, side);
  
      }
    }
  }


  
io.on('connection', function(socket){
  sockets.emit('Draw',matrix);
  setInterval(DrawServer, 500);
}
);

// Define the port to run on
/*
app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});*/
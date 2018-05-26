var socket = io.connect("http://localhost:3000/");
var side = 40;
var weather = "Amar";
var img;
var or;

function preload() {
    img_wolf = loadImage('images/wolf.png');
    img_grass = loadImage('images/grass.png');
    img_bear = loadImage('images/bear.jpg');
    img_napo = loadImage('images/napo.jpg');
    img_snow = loadImage('images/snow.jpg');
    img_ashun = loadImage('images/ashun.png');
}

function setup() {
   socket.on('matrix', draw);
    createCanvas(520, 520);
    background("#acacac");
    frameRate(5);
    noStroke();
}

function draw(matrix) {

    
    for(var y in matrix) {
        for(var x in matrix[y]) {
            rect(x * side, y * side, side, side);
            if(matrix[y][x] == 0) {
                fill("#d1cbcb");
            }
            else if(matrix[y][x] == 1) {
                if(weather=="garun")
                image(img_grass, x * side, y * side);

                if(weather=="amar")
                image(img_grass, x * side, y * side);

                if(weather=="ashun")
                image(img_ashun, x * side, y * side);

                if(weather=="dzmer")
                image(img_snow, x * side, y * side);
            }
            else if(matrix[y][x] == 2) {
                image(img_napo, x * side, y * side);
            }
            else if(matrix[y][x] == 3) {
                image(img_wolf, x * side, y * side);
            }
            else if(matrix[y][x] == 4) {
                image(img_bear, x * side, y * side);
            }
            
      
          }


}

    
}
    function ort(){
        if(or==1)
        {
            document.getElementById("ord").style.backgroundColor = "#00000094";
            document.getElementById("ory").innerHTML = "Night";
        }
        if(or==0)
        {
            document.getElementById("ord").style.backgroundColor = "#00000000";
            document.getElementById("ory").innerHTML = "Day";
        }
    }


    
 setInterval(ort, 3000); 
var chap_1=10;
var chap_2=10;
var chap_3=10;
var chap_4=10;
 function sts(){
    document.getElementById("syun2").style.width = chap_1+"px";
    document.getElementById("syun1").style.width = chap_2+"px";
    document.getElementById("syun4").style.width = chap_3+"px";
    document.getElementById("syun3").style.width = chap_4+"px";
 }

setInterval(sts, 200);

 socket.on("change weather", function(data) {
    weather = data; });

 socket.on("change or", function(data) {
    or = data; });

 socket.on("chaps_1", function(data) {
    chap_1 = data;    });

socket.on("chaps_2", function(data) {
        chap_2 = data; });

socket.on("chaps_3", function(data) {
    chap_3 = data; });

socket.on("chaps_4", function(data) {
     chap_4 = data; });
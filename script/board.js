var myCanvas = document.getElementById("canvas");
ctx = myCanvas.getContext("2d");

//TILE INFO
var wh = myCanvas.width/5; // devide by five to get 5x5 board
var xPos = 0;       // LEFT/RIGHT
var yPos = 0;       // UP/DOWN
var left = true;    // LEFT / RIGHT ON BOARD
var mapX = [];      // PLAYER POSITIONS X
var mapY = [];      // PLAYER POSITIONS Y
var mapTraps = [];

var startPos = 1;   //START POS
var endPos = 30;    //END POS

// DRAW BOARD
var board = [
    // 0 = tile
    // x = trap
    [0, 0, 0, 0, "x",// 1-5
    0, "x", 0, 0, 0,// 10-6
    "x", 0, 0, 0, 0,// 11-15
    0, 0, 0, "x", 0,// 16-20
    0, 0, 0, "x", 0,// 25-21
    0, 0, 0, "x", 0] // 26-30
];



function drawBoard(){
        for(var x = 0; x < board[0].length; x++){
            getTraps(x);
            if(left === true){
                drawTile(xPos, yPos); // Draw tile
                mapX.push(xPos); // GET TILE COORDINATES
                mapY.push(yPos);    // GET TILE COORDINATES
                xPos += wh; // Position Next Tile
                if(xPos === myCanvas.width){ // NEXT LINE OF TILES
                    left = false;
                    yPos +=wh;
                }// END IF
            } // END IF
            else if(left === false){
                mapX.push(xPos-100);
                mapY.push(yPos);
                xPos -= wh;
                drawTile(xPos, yPos);
                if(xPos === 0){
                    left = true;
                    yPos +=wh;
                }//END IF
            }// END ELSIF
        }// END FOR LOOP
       
}

function drawTile(x, y){

    if(board[0][x] === "x"){
        ctx.fillStyle = "red";
    }
    // CHECKERBOARD FILL STYLE
    ctx.fillRect(xPos, yPos, wh, wh);
    if(startPos%2){
        ctx.fillStyle = "black";
    }
    else{
        ctx.fillStyle = "black";
    }
    // FILL NUMBER OF TILE
    ctx.fillText("X"+x +"Y" +y + " => " + startPos, xPos, yPos+(wh/2), wh);
    startPos++;

    
}

function getTraps(x){
    if(board[0][x] === "x"){
        mapTraps.push(x);
    }
}

drawBoard();

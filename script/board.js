var myCanvas = document.getElementById("canvas");
ctx = myCanvas.getContext("2d");
//TILE INFO
// devide by five to get 5x5 board

var wh = myCanvas.width/5; 
var xPos = 0;       // LEFT/RIGHT
var yPos = 0;       // UP/DOWN
var direction = 0; 
var left = true;

var startPos = 1;   //START POS
var endPos = 30;    //END POS

// DRAW BOARD

var board = [
    // s = start
    // e = end
    // 0 = tile
    // x = trap
    [0, "x", 0, 0, 0,// 1-5
    0, "x", 0, 0, 0,// 10-6
    "x", 0, 0, 0, 0,// 11-15
    0, 0, 0, "x", 0,// 16-20
    0, 0, 0, "x", 0,// 25-21
    0, 0, 0, 0, 0] // 26-30
   

];
function leftRight(x){
    if(x === true){
        direction += wh;
    }
    else if(x === false){
        direction -= wh;
    }
    console.log(direction);
}

function drawBoard(){
        for(var x = 0; x < board[0].length; x++){
            if(left === true){
                drawTile(x);
                xPos += wh;
                if(xPos === myCanvas.width){
                    left = false;
                    yPos +=wh;
                }// END IF
            } // END IF
            else if(left === false){
                xPos -= wh;
                drawTile(x);
                if(xPos === 0){
                    left = true;
                    yPos +=wh;
                }//END IF
            }// END ELSIF
        }// END FOR LOOP
}

function drawTile(x){
    if(startPos%2){
        ctx.fillStyle = "gray";
    }
    else{
        ctx.fillStyle = "white";
    }
    if(board[0][x] === "x"){
        ctx.fillStyle = "red";
    }
    ctx.fillRect(xPos, yPos, wh, wh);
    if(startPos%2){
        ctx.fillStyle = "white";
    }
    
    else{
        ctx.fillStyle = "black";
    }
    ctx.fillText(x + " => " + startPos, xPos+50, yPos+50, wh);
    startPos++;
    
}

drawBoard();
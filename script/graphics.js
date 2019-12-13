var graphics = document.getElementById("graphics");
tile = graphics.getContext("2d");
//tile.fillRect(0, 0, graphics.width, graphics.height);
// Images to be plased on boardTile
var tileImg = [ 
    "tileBg1.png",//1
    "tileBg2.png",//2
    "tileBg3.png",//3
    "tileBg4.png",//4
    "tileBg5.png",//5
    "tileBg6.png",//6
    "tileBg7.png",//7
    "tileBg8.png",//8
    "tileBg9.png",//9
    "tileBg10.png",//10
    "tileBg11.png",//11
    "tileBg12.png",//12
    "tileBg13.png",//13
    "tileBg14.png",//14
    "tileBg15.png",//15
    "tileBg16.png",//16
    "tileBg17.png",//17
    "tileBg18.png",//18
    "tileBg19.png",//19
    "tileBg20.png",//20
    "tileBg21.png",//21
    "tileBg22.png",//22
    "tileBg23.png",//23
    "tileBg24.png",//24
    "tileBg25.png",//25
    "tileBg26.png",//26
    "tileBg27.png",//27
    "tileBg28.png",//28
    "tileBg29.png",//29
    "tileBg30.png" //30
];
// TEST
function loadImages(path, sources){
    var images = {};
    var loadedImages = 0;
    var numImages = 0;
    var x = mapX;
    var y = mapY;
    
    for(var src in sources){// get file path
        numImages++;
        images[src] = new Image();
        images[src].onload = function(){
            for(var i = 0; i < x.length; i++){
                tile.drawImage(images[i], x[i], y[i]);
                if(board[0][i] === "x"){
                    tile.fillStyle = "rgba(150, 4, 4, 0.5)";
                    tile.fillRect(x[i], y[i], 100, 100);
                }
                tile.fillStyle = "#fff";
                if(i === 0){
                    tile.font = "20px Arial";
                    tile.fillText("Start", x[i]+(wh/2.5), y[i]+(wh/1.6), wh);
                }
                else if(i === 29){
                    tile.font = "20px Arial";
                    tile.fillText("Finish", x[i]+(wh/2.5), y[i]+(wh/1.6), wh);
                }
                else{
                    tile.font = "30px Arial";
                    tile.fillText(i, x[i]+(wh/2.5), y[i]+(wh/1.6), wh);
                }
            }
            for(var i = 0; i < x.length; i++){
                
            }
               
        }; 
        images[src].src = path+sources[src];
    }
}

loadImages("../img/background/tiles/", tileImg);


var names = document.querySelectorAll(".players");
names[0].textContent = playerOne.char;
if(!localStorage.getItem("playerTwoChar")){
    names[1].textContent = "Night King";
}
else{
    names[1].textContent = playerTwo.char;
}


// TRAP MODAL
var trapAlert = document.getElementById("onTrap");
var trapBtn = document.getElementById("closeTrap");
trapBtn.addEventListener("click", function(){
    trapAlert.style.display = "none";
    changePlayerPos();  
})

// PLAYER POSITION DETAILS
function playerDetails(x){
    if(player === 0){
        playerCharOne.textContent = "Moved to tile: "+ x
        if(x === 29){
            playerCharOne.textContent = "WINNER!";
        }
    }
    else if(player === 1){
        playerCharTwo.textContent = "Moved to tile: "+ x
          if(x === 29){
            playerCharTwo.textContent = "WINNER!";
        }
    }
}


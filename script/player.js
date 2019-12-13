
if(mapX){
// PLAYER
var playerOne = 
    {
        "hasWon": localStorage.getItem("playerOneHasWon"),
        "token": localStorage.getItem("playerOneToken"),
        "char": localStorage.getItem("playerOneChar"),
        "img": localStorage.getItem("playerOneImg"),
        "posX": mapX[0],
        "posY": mapY[0],
        "hp": 30,
        "atc": 5,
        "luc": 3
    }


var playerTwo = 
    {
        "hasWon": localStorage.getItem("playerTwoHasWon"),
        "token": localStorage.getItem("playerTwoToken"),
        "char": localStorage.getItem("playerTwoChar"),
        "img": localStorage.getItem("playerTwoImg"),
        "posX": mapX[0],
        "posY": mapY[0],
        "hp": 30,
        "atc": 5,
        "luc": 3
    }

}
// VICTORY PAGE

else if(!mapX){
    var mapX = [];
    var mapY = [];
    var playerOne = 
    {
        "hasWon": localStorage.getItem("playerOneHasWon"),
        "token": localStorage.getItem("playerOneToken"),
        "char": localStorage.getItem("playerOneChar"),
        "img": localStorage.getItem("playerOneImg"),
        "posX": 0,
        "posY": 0,
        "hp": 30,
        "atc": 5,
        "luc": 3
    }


var playerTwo = 
    {
        "hasWon": localStorage.getItem("playerTwoHasWon"),
        "token": localStorage.getItem("playerTwoToken"),
        "char": localStorage.getItem("playerTwoChar"),
        "img": localStorage.getItem("playerTwoImg"),
        "posX": 0,
        "posY": 0,
        "hp": 30,
        "atc": 5,
        "luc": 3
    }

}
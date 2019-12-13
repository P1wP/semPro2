var tokens = document.getElementById("token");
move = tokens.getContext("2d");

// NEW IMAGE
var images;

// MOVE PLAYER1 ON BOARD
function drawPlayerOne(x, y){
    images = new Image();
    
    images.onload = function(){
        move.drawImage(images, x, y);
    };
 
    images.src = playerOne.token;
}

// MOVE PLAYER2 ON BOARD
function drawPlayerTwo(x, y){
    var images = new Image();
    images.onload = function(){
        move.drawImage(images, x+40, y);
    }; 
    
    // CHANGE TOKEN OF PLAYER 2 IF SAME AS PLAYER 1
    if(playerOne.token.includes("wolf.png") && playerTwo.token.includes("wolf.png")){
        console.log("wolf");
        var wolf = "wolf.png"
        images.src = playerTwo.token.slice(0, -wolf.length) + "lion.png";
    }
    else if(playerOne.token.includes("dragon.png") && playerTwo.token.includes("dragon.png")){
        console.log("dragon");
        var dragon = "dragon.png"
        images.src = playerTwo.token.slice(0, -dragon.length) + "wolf.png";
    } 
    else if(playerOne.token.includes("lion.png") && playerTwo.token.includes("lion.png")){
        console.log("lion");
        var lion = "lion.png"
        images.src = playerTwo.token.slice(0, -lion.length) + "wolf.png";
    }
    else{
        images.src = playerTwo.token;
    }
}

// DRAW TOKENS ON LOAD;
drawPlayerOne(playerOne.posX, playerOne.posY);
drawPlayerTwo(playerTwo.posX, playerTwo.posY);

//DRAW TOKENS ON DICE ROLL
var player = 0;
var newPosOne = 0;
var oldPosOne = 0;
var newPosTwo = 0;
var oldPosTwo = 0;

// MOVE PLAYER TOKEN ON DICE ROLL
function playersOnRoll(x){
    move.clearRect(0,0, tokens.width, tokens.height);
    
    //PLAYER 1
    if(player === 0 && playerTwo.hasWon != true){
        newPosOne += x;
        if(newPosOne >= 29){
            newPosOne = 29;
        }
        oldPosTwo = newPosOne - x;
        playerDetails(newPosOne);
        for(var i = 0; i< mapTraps.length; i++){
            if(newPosOne === mapTraps[i]){
                console.log("PLAYER ONE ON A TRAP!");
                onTrap = true;
                // OPEN TRAP MODAL
                trapAlert.style.display = "block";
            }
        };
        
        playerOne.posX = mapX[newPosOne];
        playerOne.posY = mapY[newPosOne];
        player++;
    }
    
    //PLAYER 2
    else if(player === 1 && playerOne.hasWon != true){
        newPosTwo += x;
        if(newPosTwo >= 29){
            newPosTwo = 29;
        }
        oldPosTwo = newPosTwo - x;
        playerDetails(newPosTwo);
        for(var i = 0; i< mapTraps.length; i++){
            if(newPosTwo === mapTraps[i]){
                console.log("PLAYER TWO ON A TRAP!");
                onTrap = true;
                // OPEN TRAP MODAL
                trapAlert.style.display = "block";
            }
        }
        
        playerTwo.posX = mapX[newPosTwo];
        playerTwo.posY = mapY[newPosTwo];
        player = 0;
    }
    else{
        alert("player has won");
        changePath(victory);
    }
    drawPlayerOne(playerOne.posX, playerOne.posY);
    drawPlayerTwo(playerTwo.posX, playerTwo.posY);
    
    hasWon();
}


//TRAP
function changePlayerPos(){
    var trapSteps = -3; // STEPS BACK
    /* MAKE STEPS BACK RANDOM NUMBER; DICE ROLLED OR SKILLBASED MINI GAME TO DETERMIN OUTCOME OF TRAP. */
    //Player 1
    if(player === 0){
        player = 1; // CHANGE POS OF PLAYER ON TRAP
        playersOnRoll(trapSteps)
    }
    //Player 2
    else if( player === 1){
        player = 0; // CHANGE POS OF PLAYER ON TRAP
        playersOnRoll(trapSteps);
    }
}



// CHECK IF PLAYER HAS WON
function hasWon(){
    if(newPosOne >= 29 && newPosTwo < 29){
        playerOne.hasWon = true;
        localStorage.setItem("playerOneHasWon", "true");
        drawPlayerOne(playerOne.posX, playerOne.posY);
        // GO TO FINAL VICTORY PAGE
        console.log("player one has won");
    }
    if(newPosTwo >= 29 && newPosOne < 29){
        playerTwo.hasWon = true;
        localStorage.setItem("playerTwoHasWon", "true");
        drawPlayerTwo(playerTwo.posX, playerTwo.posY);
        // GO TO FINAL VICTORY PAGE
        console.log("player Two has won");
    }
};



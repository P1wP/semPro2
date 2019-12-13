/*
var firework = document.getElementById("fireWorks");
firework.width = window.innerWidth; // SET CANVAS WIDTH OF BROWSER.
*/





// GET TEXT FIELDS
var winLose = document.querySelectorAll(".winLose")
var playerChar = document.querySelectorAll(".players");

var winnerLgName = document.querySelector(".result__winner--charName");
var winnerLgImg = document.querySelector(".result__winner--charImg");



function winner(hasWon){
    if(hasWon === true){
        winnerLgImg.firstElementChild.setAttribute("src", playerOne.img);
        winnerLgName.firstElementChild.textContent = playerOne.char;
    }
    else{
        winnerLgImg.firstElementChild.setAttribute("src", playerTwo.img);
        winnerLgName.firstElementChild.textContent = playerTwo.char;
    }
}


function setNames(hasWon){
    // DISPLAY NAME
    playerChar[0].textContent = playerOne.char;
    playerChar[1].textContent = playerTwo.char;
    // DISPLAY VICTOR
    if(hasWon === true){
        winLose[0].textContent = "You are the WINNER!";
        winLose[1].textContent = "LOSER!";
    }
    else{
        winLose[1].textContent = "You are the WINNER!";
        winLose[0].textContent = "LOSER!";
    }
    
    winner(playerOne.hasWon);
}




setNames(playerOne.hasWon);
//PLAY AGAIN
var newGame = document.getElementById("newGame").addEventListener("click", function(){
    changePath(home);
});
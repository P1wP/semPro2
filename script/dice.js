// ROLL DICE
var roll = document.getElementById("rollDice");
var dice = document.getElementById("dice");
var diceRolled;

var diceImg = [
    {
        src:"../img/dice/diceOne.svg",
        alt:"Dice Rolled One"
    },
       {
        src:"../img/dice/diceTwo.svg",
        alt:"Dice Rolled Two"
    },
       {
        src:"../img/dice/diceThree.svg",
        alt:"Dice Rolled Three"
    },
       {
        src:"../img/dice/diceFour.svg",
        alt:"Dice Rolled Four"
    },
       {
        src:"../img/dice/diceFive.svg",
        alt:"Dice Rolled Five"
    },
       {
        src:"../img/dice/diceSix.svg",
        alt:"Dice Rolled Six"
    },
 
]


roll.addEventListener("click", function(){
    var rnd = Math.floor(Math.random() * 6)+1; // random INT 1-6
    console.log(rnd);
    switch(rnd){
            case 1:
                diceRolled = diceImg[0];
                break;
            case 2:
                diceRolled = diceImg[1];
                break;
            case 3:
                diceRolled = diceImg[2];
                break;
            case 4:
                diceRolled = diceImg[3];
                break;
            case 5:
                diceRolled = diceImg[4];
                break;
            case 6:
                diceRolled = diceImg[5];
                break;
    }
    // DISPLAY DICE ROLLED
    dice.setAttribute("src", diceRolled.src);
    dice.setAttribute("alt", diceRolled.alt);
    playersOnRoll(rnd);
    
    // TO DO: ANIMATE DICE
});

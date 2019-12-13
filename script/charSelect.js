var houses = document.querySelectorAll(".banner__house");

var clicked = [];   // CLICKED BANNER
localStorage.setItem("playerOneHasWon", "false");
localStorage.setItem("playerTwoHasWon", "false");

// TOOGLE COLOR OF BANNERS
for(var i = 0; i < houses.length; i++){
    // CLICK BANNER
    houses[i].addEventListener("click", function(){
        // CHECK IF NO FILTER
        if(houses[0].style.filter === "none" || houses[1].style.filter === "none" || houses[2].style.filter === "none"){
            
            // ADD FILTER
            for(var i = 0; i < houses.length; i++){
                houses[i].style.filter = "grayscale(100%)"; // SET FILTER
                
            }//END FOR
            
        }//END IF
        
        // REMOVE FILTER ON CLICKED
        this.style.filter = "none"; // REMOVE FILTER ON CLICKED NODE
        
        // GET INDEX OF CLICKED BANNER
        for(var i = 0; i < houses.length; i++){
            if(houses[i].style.filter === "none")
               clicked = i;
                
        }//END FOR  
        // SET CONTENT CHAR AND HOUSES
        if(this === houses[0]){
            stark();
            house("stark");
        }
        else if(this === houses[1]){
            tygerian();
            house("tygerian");
        }
        else if(this === houses[2]){
            lannister();
            house("lannister");
        }
        
    })//END CLICK
    
}//END FOR


// DISPLAY CHAR FROM BANNER CLICK
var front = document.querySelectorAll(".placeholder");
var back = document.querySelectorAll(".placeholderBack");// NAME
var card = document.querySelectorAll(".card-block");



//STARK.
var starkImg = [
    "img/Faces/Arya.png",
    "img/Faces/Hound.png",
    "img/Faces/Sansa.png",
    "img/Faces/placeholder.png"
]

function stark(){
    starkMembers = JSON.parse(localStorage.getItem("stark")); // RETREVE FROM STORAGE
   for(var i = 0; i < starkImg.length; i++){
       front[i].setAttribute("src", starkImg[i]);
       back[i].innerHTML = starkMembers[i].name;
   }
}

//TYGERIAN
var tygerianImg = [
    "img/Faces/Queen.png",
    "img/Faces/Drogo.png",
    "img/Faces/Soldier.png",
    "img/Faces/placeholder.png"
]

function tygerian(){
    tygMembers = JSON.parse(localStorage.getItem("tygerian")); // RETREVE FROM STORAGE
   for(var i = 0; i < tygerianImg.length; i++){
       front[i].setAttribute("src", tygerianImg[i]);
       back[i].innerHTML = tygMembers[i].name;    
   }
}

//LANNISTER

var lanniserImg = [
    "img/Faces/Tyrion.png",
    "img/Faces/placeholder.png",
    "img/Faces/placeholder.png",
    "img/Faces/placeholder.png"
]

function lannister(){
    lanMembers = JSON.parse(localStorage.getItem("lannister")); // RETREVE FROM STORAGE
   for(var i = 0; i < lanniserImg.length; i++){
       front[i].setAttribute("src", lanniserImg[i]);
       back[i].innerHTML = lanMembers[i].name;
   }
}

//Select House
var starkHouse = false;
var tygerianHouse = false;
var lannisterHouse = false;

function house(clicked){
    switch(clicked){
        case "stark":
            starkHouse = true;
            tygerianHouse = false;
            lannisterHouse = false;
            stark();
            break;
        case "tygerian":
            starkHouse = false;
            tygerianHouse = true;
            lannisterHouse = false;
            tygerian();
            break;
        case "lannister":
            starkHouse = false;
            tygerianHouse = false;
            lannisterHouse = true;
            lannister();
            break;
    }
}


// SELECT CHARACTER
var characters = document.querySelectorAll(".cardContainer__turn--back");
var player = 0;
var selectChr = document.getElementById("player");
var playerCharOne = document.getElementById("playerCharOne");
var playerCharTwo = document.getElementById("playerCharTwo");

for(var cards = 0; cards < characters.length; cards++){
    // CLICK
    characters[cards].addEventListener("click", function(){
        //STARK
        if(starkHouse === true){
            // select char
            var selected = this.childNodes[1].innerText;// CHAR NAME
            // GET SRC OF IMAGE
            // THIS IS OVER COMPLICATED, MAKE IT EASIER!!
            var img = this.parentNode.childNodes[3].childNodes[1].childNodes[1].getAttribute("src");
            
            // SHOW SELECTED PLAYERS
            showSelected(selected, img);   
        }
        
        //TYGERIAN
        else if(tygerianHouse === true){
             // select char
            var selected = this.childNodes[1].innerText;// CHAR NAME
            // GET SRC OF IMAGE
            // THIS IS OVER COMPLICATED, MAKE IT EASIER!!
            var img = this.parentNode.childNodes[3].childNodes[1].childNodes[1].getAttribute("src");
            
            // SHOW SELECTED PLAYERS
            showSelected(selected, img);  
        }
        
        //LANNISTER
        else if( lannisterHouse === true){
             // select char
            var selected = this.childNodes[1].innerText;// CHAR NAME
            // GET SRC OF IMAGE
            // THIS IS OVER COMPLICATED, MAKE IT EASIER!!
            var img = this.parentNode.childNodes[3].childNodes[1].childNodes[1].getAttribute("src");
            
            // SHOW SELECTED PLAYERS
            showSelected(selected, img);  
        }
        else{
            alert("Click on a house banner!");// JUST IN CASE ERROR LOADING PAGE
        }
        gameReady();// CHECK IS CHAR IS SELECTED
        
        
        
    })
    
};

var token; 
function gameToken(player){
    if(starkHouse === true){
        //Set Player token Wolf
        token = "../img/tokens/wolf.png";
        localStorage.setItem(player, token);
    }
    else if(tygerianHouse === true){
        //Set Player token Dragon
        token = "../img/tokens/dragon.png";
        localStorage.setItem(player, token);
    }
    else if(lannisterHouse === true){
        //Set Player token Lion
        token = "../img/tokens/lion.png";
        localStorage.setItem(player, token);
    }
}


function showSelected(selected, img){
    if(player === 0){   // PLAYER ONE
        localStorage.setItem("playerOneChar", selected);
        localStorage.setItem("playerOneImg", "../"+img);
        gameToken("playerOneToken");
        
        playerCharOne.textContent = selected;
        selectChr.textContent = "Player Two";
        player++;
    }
    else if(player === 1){  // PLAYER TWO
        localStorage.setItem("playerTwoChar", selected);
        localStorage.setItem("playerTwoImg", "../"+img);
        gameToken("playerTwoToken");
        playerCharTwo.textContent = selected;
        selectChr.textContent = "Player One";
        player = 0;
    }
};

var changeChar = document.getElementById("change");
var changeBtn = document.getElementById("startGame");
var gameType = document.getElementById("gameType");
// CHECK IF CHAR IS SELECTED
function gameReady(){
    var gameMode;
    // 1 SELECTED PLAY "AI"
    if(localStorage.getItem("playerOneChar") && !localStorage.getItem("playerTwoChar")){
        localStorage.setItem("gameMode", "single");
        gameMode = 0;
        startGame(gameMode);
    }
    // 2 SELECTED PLAY HUMAN
    if(localStorage.getItem("playerOneChar") && localStorage.getItem("playerTwoChar")){
        localStorage.setItem("gameMode", "multi");
        changeChar.textContent = "Change your Character?";
        gameMode = 1;
        startGame(gameMode);
    }
}

//Start Game btn
function startGame(x){
    changeBtn.style.transform = "scale(1.5)";
    changeBtn.style.transition = "ease 1s";
    changeBtn.style.textDecoration = "none";
    // IF singel
    if(x === 0){
        gameType.textContent = "Single Player";    
    }
    // IF multi
    else if(x === 1){
        gameType.textContent = "Multi Player";
    }
    changeBtn.disabled = false;
    
}

// RESET CAHR SELECTION / GAMEMODE
function reset(){
    localStorage.removeItem("playerOneChar");
    localStorage.removeItem("playerTwoChar");
    localStorage.removeItem("gameMode");
}

//LOAD STARK WITH PAGE

window.addEventListener("load", function(){
    changeBtn.disabled = true;
    reset();
    
})

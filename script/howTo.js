var howTo = document.getElementById("howTo");
var howToBtn = document.getElementById("howToBtn");
var rules = document.getElementById("rules");

howToBtn.addEventListener("click", function(){
    howTo.style.display = "none";
})

rules.addEventListener("click", function(){
    howTo.style.display = "block";
})

if(window.location.origin + "/pages/game.html"){
    howTo.style.display = "none";
}
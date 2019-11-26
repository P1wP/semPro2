// CHECK IF OBJECT IS EMPTY
// IF EMPTY GET INFO FROM API
// STORE IN LOCAL STORAGE
// SAVES TIME NEXT TIME PAGE RELOADS. 


var urlHouse = "https://www.anapioficeandfire.com/api/houses/";
var houses = ["362", "378", "229"]; // STARK, TYGERIAN, LANNISTER
var myObject = [];

// GET HOUSES
if(localStorage.getItem("houses") === null){ // CHECK IF HOUSES IN STORAGE
    console.log("Getting houses");
    for(var i = 0; i < houses.length; i++){
        fetch(urlHouse + houses[i]).then(function (result) {
            return result.json();
        }).then(function (json) {
            myObject.push(json); 
            localStorage.setItem("houses", JSON.stringify(myObject)); // SAVE TO STORAGE
        });
    }
}
else{
    console.log("Fetch houses complete");
    myObject = JSON.parse(localStorage.getItem("houses")); // RETREVE FROM STORAGE
}


//FIND MEMBERS
/* 
GET CHAR ID FROM HERE
https://github.com/joakimskoog/AnApiOfIceAndFire/blob/master/data/characters.json
*/
var urlChar = "https://anapioficeandfire.com/api/characters/";

var starkChar = ["957", "583", "148", "956" ]; // SANSA, JON, ARYA, HOUND
var tygChar=["1445", "1560", "1303", "1346"]; // UNSULLIED, BG, DINERIES, DROGO
var lannChar= ["565", "529","238", "1052"];   // JOFFERY, JAMIE, SERCY, DWARF

//STARK.
//TYGERIAN
//LANNISTER


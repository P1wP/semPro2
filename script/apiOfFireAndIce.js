// CHECK IF OBJECT IS EMPTY
// IF EMPTY GET INFO FROM API
// STORE IN LOCAL STORAGE
// SAVES TIME NEXT TIME PAGE RELOADS. 


var urlHouse = "https://www.anapioficeandfire.com/api/houses/";
var houses = ["362", "378", "229"]; // STARK, TYGERIAN, LANNISTER
var myHouses = [];

// GET HOUSES
if(localStorage.getItem("houses") === null){ // CHECK IF HOUSES IN STORAGE
    console.log("Getting houses");
    for(var i = 0; i < houses.length; i++){
        fetch(urlHouse + houses[i]).then(function (result) {
            return result.json();
        }).then(function (json) {
            myHouses.push(json); 
            localStorage.setItem("houses", JSON.stringify(myHouses)); // SAVE TO STORAGE
        });
    }
}
else{
    console.log("Fetch houses complete");
    myHouses = JSON.parse(localStorage.getItem("houses")); // RETREVE FROM STORAGE
}

//FIND MEMBERS
/* 
GET CHAR ID FROM HERE
https://github.com/joakimskoog/AnApiOfIceAndFire/blob/master/data/characters.json
*/
var urlChar = "https://anapioficeandfire.com/api/characters/";

var starkChar = ["148", "956", "957", "583" ]; // ARYA, HOUND, SANSA, JON, 
var tygChar=["1303", "1346", "1445", "1560"]; // DINERIES, DROGO, UNSULLIED, BG
var lannChar= ["1052", "529", "565", "238"];   // DWARF, JOFFERY, JAMIE, SERCY




function getMemeber(myLS, array, newArray, name){ // LockalStorage, array of numbers, empty array
    if(localStorage.getItem(myLS) === null){
        console.log("Getting names for " + name);
        
        for(var i = 0; i < array.length; i++){
            fetch(urlChar + array[i]).then(function (result) {
                return result.json();
            }).then(function (json) {
                newArray.push(json); 
                localStorage.setItem(name, JSON.stringify(newArray)); // SAVE TO STORAGE
            });
            }   
    }
    else{
    console.log("Fetch names for " + name + " is complete");
    }
    
}

var tyg = "tygerian";
var str = "stark";
var lan = "lannister";

//CHARACTERS
var starkMembers = [];
var tygMembers = [];
var lanMembers = [];

// FETCH AND SAVE MEMBERS TO LOCAL STORAGE
getMemeber(str, starkChar, starkMembers, str);
getMemeber(tyg, tygChar, tygMembers, tyg);
getMemeber(lan, lannChar, lanMembers, lan);


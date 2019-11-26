var houses = document.querySelectorAll(".banner__house");

var clicked = [];   // CLICKED BANNER

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
            alert("stark");
        }
        else if(this === houses[1]){
            alert("Tygerian");
        }
        else if(this === houses[2]){
            alert("Lannister");
        }
        
    })//END CLICK
    
}//END FOR




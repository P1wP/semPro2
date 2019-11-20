

$.ajax({
    url: "https://anapioficeandfire.com/api/all",
    //type: "GET",
    success: function(result) {
        console.log(result)
    },
    error: function(xhr){
        alert("An error occured")
        console.log(xhr);
    }
});
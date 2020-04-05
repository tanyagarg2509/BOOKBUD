    var explore=document.getElementsByClassName("explore");
    var buy=document.getElementsByClassName("buy");


    for(var i=0; i<explore.length; i++){
        explore[i].addEventListener('click', function(){
            alert("You clicked Explore");
        })
    }

    for(var i=0; i<explore.length; i++){
        buy[i].addEventListener('click', function(){
            alert("You clicked Buy");
        })
    }
    
    


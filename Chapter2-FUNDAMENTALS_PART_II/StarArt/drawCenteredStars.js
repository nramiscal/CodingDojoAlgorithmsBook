function drawCenteredStars(num){
    var stars = "";
    
    for (var i = 1; i <= Math.ceil(75/2-num/2); i++){
        stars += " ";
    }
    for (var i = 1; i <= num; i++){
        stars += "*";
    }
    for (var i = 1; i <= Math.floor(75/2-num/2); i++){
        stars += " ";
    }
    console.log(stars);

}

drawCenteredStars(21)

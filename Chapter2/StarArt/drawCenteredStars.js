function drawCenteredStars(num){
    var stars = "";
    // var countleft = 0;
    // var countright = 0;
    // var countstars = 0;
    // var sum = 0;
    for (var i = 1; i <= Math.ceil(75/2-num/2); i++){
        stars += " ";
        // countleft++;
    }
    for (var i = 1; i <= num; i++){
        stars += "*";
        // countstars++;
    }
    for (var i = 1; i <= Math.floor(75/2-num/2); i++){
        stars += " ";
        // countright++;
    }
    // sum = countleft+countstars+countright;
    console.log(stars);
    // console.log("Countleft is " + countleft);
    // console.log("Countstars is " + countstars);
    // console.log("Countright is " + countright);
    // console.log("Sum is " + sum);
}

drawCenteredStars(21)

function drawRightStars(num){
    var stars = "";
    // var count = 0;
    for (var i = 1; i <= 75-num; i++){
        stars += ' ';
        // count++;
    }
    for (var i = 1; i <= num; i++){
        stars += '*';
        // count++;
    }
    // console.log("Count is " + count); // checking to make sure count = 75
    console.log(stars);
}

drawRightStars(20)

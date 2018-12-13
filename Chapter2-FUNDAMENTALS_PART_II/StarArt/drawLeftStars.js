function drawLeftStars(num){
    var stars = "";
    for (var i = 1; i <= num; i++){
        stars += '*'; // replace with "stars += i;" to test
    }
    console.log(stars);
}

drawLeftStars(10)

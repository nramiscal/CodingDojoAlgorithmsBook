function rollOne(){
    return Math.floor(Math.random()*6+1);
}

function playStats(){
    var max;
    var min;
    for (var i = 1; i <= 8; i++){
        result = rollOne();
        if (!max){
            max = result;
        }
        if (!min){
            min = result;
        }
        if (result > max){
            max = result;
        }
        if (result < min){
            min = result;
        }
    }
    console.log("Max is " + max);
    console.log("Min is " + min);
}

playStats()

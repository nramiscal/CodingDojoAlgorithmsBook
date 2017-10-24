function rollOne(){
    return Math.floor(Math.random()*6+1);
}

function playStats3(numTimes){

    var max;
    var min;
    var sum = 0;
    for (var i = 1; i <= numTimes; i++){
        result = rollOne();
        console.log(result);
        sum += result;
        if (result > max){
            max = result;
        }
        if (result < min){
            min = result;
        }
    }
    console.log("Max is " + max);
    console.log("Min is " + min);
    console.log("Sum is " + sum);
}

playStats3(20)

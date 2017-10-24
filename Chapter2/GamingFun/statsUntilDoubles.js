function rollOneTo20(){
    return Math.floor(Math.random()*20+1);
    // returns a random number between 1 and 20 inclusive
}

function statsUntilDoubles(){
    var min;
    var max;
    var sum = 0;
    var flag = true;
    var val;
    var prev;
    var count = 0;

    while (flag) {
        val = rollOneTo20();
        count++;
        console.log("Val is: " + val);
        if (!max){
            max = val;
        }
        if (!min){
            min = val;
        }

        if (val > max){
            max = val;
        }
        if (val < min){
            min = val;
        }
        sum += val;
        if (prev == val){
            console.log("You rolled two " + val + "s in a row!");
            flag = false;
        }
        else {
            prev = val;
            flag = true;
        }
    }
    console.log("Max is: " + max);
    console.log("Min is: " + min);
    console.log("Average is: " + sum/count);
    console.log("Number of rolls: " + count);
}

statsUntilDoubles()

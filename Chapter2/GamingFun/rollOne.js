function rollOne(){
    return Math.floor(Math.random()*6+1);
    // returns a random number between 1 and 6 inclusive
}



function testRollOne(numTimes){
    var dict = {
        "1":0,
        "2":0,
        "3":0,
        "4":0,
        "5":0,
        "6":0,
    }

    for (var i = 1; i <=numTimes; i++){
        result = rollOne();
        dict[result]++;
    }

    for (key in dict){
        dict[key] = dict[key]/numTimes;
    }

    return dict;
}


testRollOne(10000000)

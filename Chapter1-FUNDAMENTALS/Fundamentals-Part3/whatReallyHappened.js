function whatReallyHappened(){
    var arr = [];
    var prob = {
        "volcano": 0.10,
        "tsunami": 0.15,
        "earthquake": 0.20,
        "blizzard": 0.25,
        "meteor": 0.30,
    }

    for (key in prob){
        var rand = Math.random();
        if (rand < prob[key]){
            arr.push(key);
        }
    }
    
    return arr;
}

whatReallyHappened()

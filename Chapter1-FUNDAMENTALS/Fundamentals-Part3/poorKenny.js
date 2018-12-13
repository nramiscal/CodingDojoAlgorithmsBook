function whatHappensToday(){
    // var prob = {
    //     "volcano": 0.10,
    //     "tsunami": 0.15,
    //     "earthquake": 0.20,
    //     "blizzard": 0.25,
    //     "meteor": 0.30,
    // }
    //
    // 0-0.10 = volcano
    // 0.10-0.25 = tsunami
    // 0.25-0.45 = earthquake
    // 0.45-.70 = blizzard
    // 0.70-1.0 = meteor

    var rand = Math.random();

    if (rand < 0.1){
        // console.log("volcano");
        return "volcano";
    }
    else if (rand < 0.25){
        // console.log("tsunami");
        return "tsunami";
    }
    else if (rand < 0.45){
        // console.log("earthquake");
        return "earthquake";
    }
    else if (rand < 0.70){
        // console.log("blizzard");
        return "blizzard";
    }
    else {
        // console.log("meteor");
        return "meteor";
    }


}

// whatHappensToday()

function testWhatHappensToday(num){
    var volcano = 0;
    var tsunami = 0;
    var earthquake = 0;
    var blizzard = 0;
    var meteor = 0;
    var start = num;

    while (num > 0){
        result = whatHappensToday();
        if (result == "volcano"){
            volcano++;
        }
        else if (result == "tsunami"){
            tsunami++;
        }
        else if (result == "earthquake"){
            earthquake++;
        }
        else if (result == "blizzard"){
            blizzard++;
        }
        else if (result == "meteor"){
            meteor++;
        }
        num--;
    }

    console.log("volcano: " + volcano/start);
    console.log("tsunami: " + tsunami/start);
    console.log("earthquake: " + earthquake/start);
    console.log("blizzard: " + blizzard/start);
    console.log("meteor: " + meteor/start);
}

testWhatHappensToday(100000000)

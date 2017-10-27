function clockHandAngles(seconds){

    var times = [
    //  [timeUnit, # of secs in timeUnit, # of timeUnits per clockHand rotation]
        ["week", 604800, 1],
        ["day", 86400, 0.5],
        ["half day", 43200, 1],
        ["hour", 3600, 12],
        ["minute", 60, 60],
        ["second", 1, 60]
    ]

    var angles = {}

    for (var i = 0; i < times.length; i++){
        angles[times[i][0]] = 360 * (seconds/times[i][1])/times[i][2];
        seconds = seconds % times[i][1];
    }

    for (key in angles){
        if (key != "day" && key != "half day"){
            console.log(key + " hand: " + Math.floor(angles[key]) + " degrees");
        }
    }

}

clockHandAngles(119730.675)
